import {
  useAnalyticsOverview,
  useAvgResponseTimeFirewall,
} from "../../hooks/useAnalyticsData";
import ErrorMessage from "../ErrorMessage";
import LoadingSpinner from "../LoadingSpinner";
import CardHeader from "../CardHeader";
import AvgResponseTimeFirewallChart from "../charts/AvgResponseTimeFirewallChart";
import { usePeriodFilter } from "../../context/PeriodFilterContext";

const AvgResponseTimeFirewallCard = () => {
  const { period } = usePeriodFilter();

  const {
    data: avgResponseTimes,
    isFetching,
    isError,
    error,
    refetch,
  } = useAvgResponseTimeFirewall(period);

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
            title="Avg. Response Time –  Firewall"
            data={`${overViewData?.avgResponseTimeFirewall}s`}
            barColor="bg-blue-s50"
            onRefetch={refetch}
          />
          <div className="pt-4 px-3 pb-6">
            <AvgResponseTimeFirewallChart data={avgResponseTimes ?? []} />
          </div>
        </>
      )}
    </div>
  );
};

export default AvgResponseTimeFirewallCard;
