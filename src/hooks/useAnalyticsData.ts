import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { analyticsApi } from "../api/analytics.service";
import {
  type AnalyticsOverview,
  type Period,
  type SourceData,
  type TimeSeriesData,
} from "../types/analytics";

export const analyticsKeys = {
  all: ["analytics"] as const,
  overview: () => [...analyticsKeys.all, "overview"] as const,
  uniqueLogins: (period: number) =>
    [...analyticsKeys.all, "uniqueLogins", period] as const,
  queriesExecuted: (period: number) =>
    [...analyticsKeys.all, "queriesExecuted", period] as const,
  queriesBySource: () => [...analyticsKeys.all, "queriesBySource"] as const,
  avgResponseTimeWorkflow: (period: number) =>
    [...analyticsKeys.all, "avgResponseTimeWorkflow", period] as const,
  firewallApiCalls: (period: number) =>
    [...analyticsKeys.all, "firewallApiCalls", period] as const,
  avgResponseTimeFirewall: (period: number) =>
    [...analyticsKeys.all, "avgResponseTimeFirewall", period] as const,
};

export const useAnalyticsOverview = (): UseQueryResult<AnalyticsOverview> => {
  return useQuery({
    queryKey: analyticsKeys.overview(),
    queryFn: analyticsApi.getOverView,
    staleTime: 5 * 60 * 1000,
  });
};

export const useUniqueLogins = (
  period: Period,
): UseQueryResult<TimeSeriesData[]> => {
  return useQuery({
    queryKey: analyticsKeys.uniqueLogins(period),
    queryFn: () => analyticsApi.getUniqueLogins(period),
    staleTime: 5 * 60 * 1000,
  });
};

export const useQueriesExecuted = (
  period: Period,
): UseQueryResult<TimeSeriesData[]> => {
  return useQuery({
    queryKey: analyticsKeys.queriesExecuted(period),
    queryFn: () => analyticsApi.getQueriesExecuted(period),
    staleTime: 5 * 60 * 1000,
  });
};

export const useQueriesBySource = (): UseQueryResult<SourceData[]> => {
  return useQuery({
    queryKey: analyticsKeys.queriesBySource(),
    queryFn: analyticsApi.getQueriesBySource,
    staleTime: 5 * 60 * 1000,
  });
};

export const useAvgResponseTimeWorkflow = (
  period: Period,
): UseQueryResult<TimeSeriesData[]> => {
  return useQuery({
    queryKey: analyticsKeys.avgResponseTimeWorkflow(period),
    queryFn: () => analyticsApi.getAvgResponseTimeWorkflow(period),
    staleTime: 5 * 60 * 1000,
  });
};

export const useFirewallApiCalls = (
  period: Period,
): UseQueryResult<TimeSeriesData[]> => {
  return useQuery({
    queryKey: analyticsKeys.firewallApiCalls(period),
    queryFn: () => analyticsApi.getFirewallApiCalls(period),
    staleTime: 5 * 60 * 1000,
  });
};

export const useAvgResponseTimeFirewall = (
  period: Period,
): UseQueryResult<TimeSeriesData[]> => {
  return useQuery({
    queryKey: analyticsKeys.avgResponseTimeFirewall(period),
    queryFn: () => analyticsApi.getAvgResponseTimeFirewall(period),
    staleTime: 5 * 60 * 1000,
  });
};
