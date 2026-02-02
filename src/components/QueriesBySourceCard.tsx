import { useQueriesBySource } from "../hooks/useAnalyticsData";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
import RefreshButton from "./RefreshButton";
import QueriesBySourceChart from "./charts/QueriesBySourceChart";

const QueriesBySourceCard = () => {
  const { data, isFetching, isError, error, refetch } = useQueriesBySource();

  return (
    <div className="analytics-grid-item flex flex-col">
      {isFetching ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorMessage error={error.message} />
      ) : (
        <>
          <div className="flex justify-between items-center p-3">
            <p className="font-medium text-lg">Queries By Source</p>
            <button onClick={() => refetch()}>
              <RefreshButton size={16} />
            </button>
          </div>
          <div className="flex justify-between py-2 px-3 text-dark-black-s70 text-sm border-b border-gray">
            <p>Source</p>
            <p>Queries</p>
          </div>
          <div className="px-3">
            <QueriesBySourceChart data={data ?? []} />
          </div>
        </>
      )}
    </div>
  );
};

export default QueriesBySourceCard;
