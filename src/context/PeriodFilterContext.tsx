import { createContext, useContext, useState, type ReactNode } from "react";
import type { Period } from "../types/analytics";

type PeriodFilterContextType = {
  period: Period;
  setPeriod: (period: Period) => void;
};

const PeriodFilterContext = createContext<PeriodFilterContextType | undefined>(
  undefined,
);

export const PeriodFilterProvider = ({ children }: { children: ReactNode }) => {
  const [period, setPeriod] = useState<Period>(90);

  return (
    <PeriodFilterContext.Provider value={{ period, setPeriod }}>
      {children}
    </PeriodFilterContext.Provider>
  );
};

export const usePeriodFilter = () => {
  const context = useContext(PeriodFilterContext);
  if (context === undefined) {
    throw new Error("usePeriodFilter must be used within a FilterProvider");
  }
  return context;
};
