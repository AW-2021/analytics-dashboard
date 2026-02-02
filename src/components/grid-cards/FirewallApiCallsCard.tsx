import {
  useAnalyticsOverview,
  useFirewallApiCalls,
} from "../../hooks/useAnalyticsData";
import ErrorMessage from "../ErrorMessage";
import LoadingSpinner from "../LoadingSpinner";
import CardHeader from "../CardHeader";
import FirewallApiCallsChart from "../charts/FirewallApiCallsChart";
import { usePeriodFilter } from "../../context/PeriodFilterContext";

const FirewallApiCallsCard = () => {
  const { period } = usePeriodFilter();

  const {
    data: firewallApiCalls,
    isFetching,
    isError,
    error,
    refetch,
  } = useFirewallApiCalls(period);
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
            title="Firewall API Calls"
            data={`${overViewData?.firewallApiCalls}`}
            barColor="bg-blue-s50"
            onRefetch={refetch}
          />
          <div className="pt-4 px-3 pb-6">
            <FirewallApiCallsChart data={firewallApiCalls ?? []} />
          </div>
        </>
      )}
    </div>
  );
};

export default FirewallApiCallsCard;
