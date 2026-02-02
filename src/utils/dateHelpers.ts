import type { Period, DateRange } from "../types/analytics";

export const getDateRange = (period: Period): DateRange => {
  const today = new Date();
  const endDate = today.toISOString().split("T")[0];

  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - period);

  return {
    startTimestamp: startDate.getTime(),
    endTimestamp: today.getTime(),
    startDate: startDate.toISOString().split("T")[0],
    endDate,
  };
};
