import type { Period } from "../types/analytics";
import { usePeriodFilter } from "../context/PeriodFilterContext";

const FilterRow = () => {
  const { period, setPeriod } = usePeriodFilter();

  return (
    <div className="flex items-center">
      <div className="py-1 px-3 border border-dark-gray rounded-sm bg-white">
        <label htmlFor="time-period" className="px-1">
          Time Range
        </label>
        <select
          name="time-period"
          id="time-period"
          value={period}
          onChange={(e) => setPeriod(parseInt(e.target.value) as Period)}
          className="p-1 rounded-xs font-medium bg-soft-green-t180 text-green-s40"
        >
          <option value={90}>Last 90 days</option>
          <option value={30}>Last 30 days</option>
          <option value={7}>Last 7 days</option>
        </select>
      </div>
    </div>
  );
};

export default FilterRow;
