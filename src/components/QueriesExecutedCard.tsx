import {
  useAnalyticsOverview,
  useQueriesExecuted,
} from "../hooks/useAnalyticsData";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
import CardHeader from "./CardHeader";
import QueriesExecutedChart from "./charts/QueriesExecutedChart";
import { usePeriodFilter } from "../context/PeriodFilterContext";

const QueriesExecutedCard = () => {
  const { period } = usePeriodFilter();

  const {
    data: queriesExecuted,
    isFetching,
    isError,
    error,
    refetch,
  } = useQueriesExecuted(period);
  const { data: overViewData } = useAnalyticsOverview();

  return (
    <div className="analytics-grid-item">
      {isFetching ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorMessage error={error.message} />
      ) : (
        <>
          <CardHeader
            title="Queries Executed in the Workflow"
            data={overViewData?.queriesExecuted ?? 0}
            barColor="bg-green-t20"
            onRefetch={refetch}
          />
          <div className="pt-4 px-3 pb-6">
            <QueriesExecutedChart data={queriesExecuted ?? []} />
          </div>
        </>
      )}
    </div>
  );
};

export default QueriesExecutedCard;
