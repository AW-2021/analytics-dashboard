import {
  useAnalyticsOverview,
  useAvgResponseTimeWorkflow,
} from "../../hooks/useAnalyticsData";
import ErrorMessage from "../ErrorMessage";
import LoadingSpinner from "../LoadingSpinner";
import CardHeader from "../CardHeader";
import AvgResponseTimeWorkflowChart from "../charts/AvgResponseTimeWorkflowChart";
import { usePeriodFilter } from "../../context/PeriodFilterContext";

const AvgResponseTimeWorkflowCard = () => {
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
          <div className="pt-4 px-3 pb-3">
            <AvgResponseTimeWorkflowChart data={avgResponseTimes ?? []} />
          </div>
        </>
      )}
    </div>
  );
};

export default AvgResponseTimeWorkflowCard;
