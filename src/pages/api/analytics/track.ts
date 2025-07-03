import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Analytics from "@/models/Analytics";

const TEST_COUNTRIES = [
  "US", "IN", "GB", "AU", "BR", "JP", "NG", "DE", "FR", "CA", "NL", "MX", "ZA", "SG", "AR", "CH"
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    let ip = req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim()
      || req.socket.remoteAddress
      || "unknown";
    let country = req.headers["x-vercel-ip-country"] as string || "Unknown";

    if (process.env.NODE_ENV !== "production") {
      country = TEST_COUNTRIES[Math.floor(Math.random() * TEST_COUNTRIES.length)];
    }

    let analytics = await Analytics.findOne();
    if (!analytics) {
      analytics = new Analytics();
    }

    analytics.totalViews += 1;

    if (!analytics.uniqueIPs.includes(ip)) {
      analytics.uniqueIPs.push(ip);
    }
    if (!(analytics.geoStats instanceof Map)) {
      analytics.geoStats = new Map(Object.entries(analytics.geoStats));
    }
    const currentCount = analytics.geoStats.get(country) || 0;
    analytics.geoStats.set(country, currentCount + 1);

    await analytics.save();
    res.status(200).json({
      success: true,
      totalViews: analytics.totalViews,
      uniqueVisitors: analytics.uniqueIPs.length,
      geoStats: Object.fromEntries(analytics.geoStats),
      ipUsed: ip,
      country,
      testMode: process.env.NODE_ENV !== "production"
    });

  } catch (error) {
    console.error("Analytics tracking error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: process.env.NODE_ENV !== "production" ? error : undefined
    });
  }
}
