import { type UseQueryResult } from "@tanstack/react-query";

export type AnalyticsOverview = {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  uniqueLogins: number;
  queriesExecuted: number;
  avgResponseTimeWorkflow: number;
  firewallApiCalls: number;
  avgResponseTimeFirewall: number;
};

export type TimeSeriesData = {
  id: number;
  timestamp: number;
  date: string;
  value: number;
};

export type SourceData = {
  id: number;
  source: string;
  queries: number;
  color: string;
  icon: string;
};

export type DateRange = {
  startTimestamp: number;
  endTimestamp: number;
  startDate: string;
  endDate: string;
};

export type Period = 90 | 30 | 7;

export interface AnalyticsCardProps {
  title: string;
  overviewKey: keyof AnalyticsOverview;
  overviewSuffix?: string;
  barColor: string;
  gridClass: string;
  chartWrapperClass?: string;
  useDataHook: (period: Period) => UseQueryResult<TimeSeriesData[]>;
  ChartComponent: React.ComponentType<{ data: TimeSeriesData[] }>;
}