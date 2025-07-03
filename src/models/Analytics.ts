import mongoose, { Document, Schema } from "mongoose";

interface IAnalytics extends Document {
  totalViews: number;
  uniqueIPs: string[]; 
  geoStats: Map<string, number>;
}

const AnalyticsSchema = new Schema<IAnalytics>({
  totalViews: { type: Number, default: 0 },
  uniqueIPs: { type: [String], default: [] },
  geoStats: { type: Map, of: Number, default: {} },
});

const Analytics = mongoose.models.Analytics || mongoose.model<IAnalytics>("Analytics", AnalyticsSchema);

export default Analytics;
