import {
  useAnalyticsOverview,
  useAvgResponseTimeWorkflow,
} from "../../hooks/useAnalyticsData";
import ErrorMessage from "../ErrorMessage";
import LoadingSpinner from "../LoadingSpinner";
import CardHeader from "../CardHeader";
import AvgResponseTimeChart from "../charts/AvgResponseTimeChart";
import { usePeriodFilter } from "../../context/PeriodFilterContext";

const AvgResponseTimeCard = () => {
  const { period } = usePeriodFilter();

  const {
    data: avgResponseTimes,
    isFetching,
    isError,
    error,
    refetch,
  } = useAvgResponseTimeWorkflow(period);

  const { data: overViewData } = useAnalyticsOverview();

  return (
    <div className="analytics-grid-full-span-item">
      {isFetching ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorMessage error={error.message} />
      ) : (
        <>
          <CardHeader
            title="Avg. Response Time –  Workflow"
            data={`${overViewData?.avgResponseTimeWorkflow}s`}
            barColor="bg-green-t20"
            onRefetch={refetch}
          />
          <div className="pt-4 px-3 pb-6">
            <AvgResponseTimeChart data={avgResponseTimes ?? []} />
          </div>
        </>
      )}
    </div>
  );
};

export default AvgResponseTimeCard;
