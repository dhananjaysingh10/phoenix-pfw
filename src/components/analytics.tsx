'use client'

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {  useMotionValue, useSpring } from "framer-motion";
// import Tippy from '@tippyjs/react'; // <-- Tippy.js import
import { useInView } from "@/hooks/useInView";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type GeoStats = { country: string; count: number };

function AnimatedNumber({ value }: { value: number }) {
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 100,
        damping: 30,
        duration: 1.5
    });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        motionValue.set(value);
    }, [value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
        return () => unsubscribe();
    }, [springValue]);

    return <>{displayValue}</>;
}

export default function Analytics() {
    const [totalViews, setTotalViews] = useState(0);
    const [uniqueVisitors, setUniqueVisitors] = useState(0);
    const [geoStats, setGeoStats] = useState<GeoStats[]>([]);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [ref, inView] = useInView({ threshold: 0.1 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (inView && !hasAnimated) {
            fetchAnalytics();
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    async function fetchAnalytics() {
        try {
            setLoading(true);
            const res = await fetch("/api/analytics/track");
            const data = await res.json();
            if (data.success) {
                setTotalViews(data.totalViews);
                setUniqueVisitors(data.uniqueVisitors);
                const geoArray = Object.entries(data.geoStats).map(([country, count]) => ({
                    country,
                    count: count as number,
                }));
                setGeoStats(geoArray);
            }
        } catch (error) {
            console.error("Failed to fetch analytics", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card ref={ref} className="max-w-4xl mx-auto my-2 ">
            <CardHeader className="text-center">
                <CardTitle>Website Analytics</CardTitle>
            </CardHeader>
            <CardContent className="">
                <div className="flex justify-around mb-6 text-sm font-light text-muted-foreground ">
                    <div className="text-center">
                        <div className="text-lg font-medium">
                            {loading ? <Skeleton className="h-6 w-16" /> : <AnimatedNumber value={totalViews} />}
                        </div>
                        <CardDescription>Total Views</CardDescription>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-medium">
                            {loading ? <Skeleton className="h-6 w-16" /> : <AnimatedNumber value={uniqueVisitors} />}
                        </div>
                        <CardDescription>Unique Visitors</CardDescription>
                    </div>
                </div>
                <CardTitle className="mb-4 text-center">Visitors by Country</CardTitle>
                {loading ? (
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-[200px] w-full" />
                        <div className="flex justify-between">
                            <Skeleton className="h-4 w-16" />
                            <Skeleton className="h-4 w-16" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                    </div>
                ) : (
                    // Make chart horizontally scrollable on small screens
                    <div className="w-full overflow-x-auto">
                        <div style={{ minWidth: 400, maxWidth: 700, margin: "0 auto" }}>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart
                                    data={geoStats}
                                    margin={{ top: 5, right: 4, bottom: 20, left: 4 }}
                                    barCategoryGap="1%" // Controls gap between bars
                                >
                                    <XAxis dataKey="country" />
                                    <YAxis allowDecimals={false} />
                                    <Bar
                                        dataKey="count"
                                        fill="#2563eb"
                                        barSize={32} // Fixed bar width
                                        // shape={(props: any) => (
                                        //     <Tippy content={`${props.payload.country}: ${props.payload.count} visitors`}>
                                        //         <rect {...props} style={{ cursor: "pointer" }} />
                                        //     </Tippy>
                                        // )}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                )}
            </CardContent>
        </Card>
    );
}
