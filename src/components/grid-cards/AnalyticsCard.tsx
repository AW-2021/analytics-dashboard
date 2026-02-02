import { useAnalyticsOverview } from "../../hooks/useAnalyticsData";
import { usePeriodFilter } from "../../context/PeriodFilterContext";
import ErrorMessage from "../ErrorMessage";
import LoadingSpinner from "../LoadingSpinner";
import CardHeader from "../CardHeader";
import type { AnalyticsCardProps } from "../../types/analytics";

const AnalyticsCard = ({
  title,
  overviewKey,
  overviewSuffix = "",
  barColor,
  gridClass,
  chartWrapperClass = "pt-4 px-3 pb-6",
  useDataHook,
  ChartComponent,
}: AnalyticsCardProps) => {
  const { period } = usePeriodFilter();
  const { data, isFetching, isError, error, refetch } = useDataHook(period);
  const { data: overviewData } = useAnalyticsOverview();

  return (
    <div className={gridClass}>
      {isFetching ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorMessage error={error.message} />
      ) : (
        <>
          <CardHeader
            title={title}
            data={`${overviewData?.[overviewKey]}${overviewSuffix}`}
            barColor={barColor}
            onRefetch={refetch}
          />
          <div className={chartWrapperClass}>
            <ChartComponent data={data ?? []} />
          </div>
        </>
      )}
    </div>
  );
};

export default AnalyticsCard;
