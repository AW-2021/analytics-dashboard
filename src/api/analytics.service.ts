import { API_BASE } from "../constants/api";
import type {
  AnalyticsOverview,
  TimeSeriesData,
  Period,
  SourceData,
} from "../types/analytics";
import { getDateRange } from "../utils/dateHelpers";

export const analyticsApi = {
  getOverView: async (): Promise<AnalyticsOverview> => {
    const response = await fetch(`${API_BASE}/overview`);

    if (!response.ok) throw new Error("Failed to fetch overview.");
    return response.json();
  },

  getUniqueLogins: async (period: Period): Promise<TimeSeriesData[]> => {
    const { startTimestamp, endTimestamp } = getDateRange(period);

    const response = await fetch(
      `${API_BASE}/uniqueLogins?timestamp_gte=${startTimestamp}&timestamp_lte=${endTimestamp}&_sort=timestamp`,
    );

    if (!response.ok) throw new Error("Failed to fetch unique logins.");
    return response.json();
  },

  getQueriesExecuted: async (period: Period): Promise<TimeSeriesData[]> => {
    const { startTimestamp, endTimestamp } = getDateRange(period);

    const response = await fetch(
      `${API_BASE}/queriesExecuted?timestamp_gte=${startTimestamp}&timestamp_lte=${endTimestamp}&_sort=timestamp`,
    );

    if (!response.ok) throw new Error("Failed to fetch queries executed.");
    return response.json();
  },

  getQueriesBySource: async (): Promise<SourceData[]> => {
    const response = await fetch(`${API_BASE}/queriesBySource`);

    if (!response.ok) throw new Error("Failed to fetch queries by source.");
    return response.json();
  },
};
