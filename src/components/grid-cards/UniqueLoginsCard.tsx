import {
  useAnalyticsOverview,
  useUniqueLogins,
} from "../../hooks/useAnalyticsData";
import ErrorMessage from "../ErrorMessage";
import LoadingSpinner from "../LoadingSpinner";
import CardHeader from "../CardHeader";
import UniqueLoginsChart from "../charts/UniqueLoginsChart";
import { usePeriodFilter } from "../../context/PeriodFilterContext";

const UniqueLoginsCard = () => {
  const { period } = usePeriodFilter();

  const {
    data: uniqueLogins,
    isFetching,
    isError,
    error,
    refetch,
  } = useUniqueLogins(period);
  const { data: overViewData } = useAnalyticsOverview();

  return (
    <div className="analytics-grid-three-quarter-span-item">
      {isFetching ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorMessage error={error.message} />
      ) : (
        <>
          <CardHeader
            title="Number of Unique Logins"
            data={`${overViewData?.uniqueLogins}`}
            barColor="bg-blue"
            onRefetch={refetch}
          />
          <div className="pt-4 px-3 pb-6">
            <UniqueLoginsChart data={uniqueLogins ?? []} />
          </div>
        </>
      )}
    </div>
  );
};

export default UniqueLoginsCard;
