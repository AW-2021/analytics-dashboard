import RefreshButton from "./RefreshButton";
import VerticalBar from "./VerticalBar";
import { useAnalyticsOverview } from "../hooks/useAnalyticsData";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";

const UserOverviewCard = () => {
  const {
    data: userOverview,
    isFetching,
    error,
    refetch,
  } = useAnalyticsOverview();

  return (
    <div className="analytics-grid-quarter-span-item flex flex-col">
      {error ? (
        <ErrorMessage error={error.message} />
      ) : isFetching ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex justify-between items-center p-3">
            <p className="font-medium text-lg">Users</p>
            <button onClick={() => refetch()}>
              <RefreshButton size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-4 px-3">
            <div className="flex py-2 gap-4">
              <VerticalBar barStyle="min-h-10 bg-blue" />
              <div className="flex flex-col gap-1">
                <p>Total Users</p>
                <p className="font-medium text-[32px]">
                  {userOverview?.totalUsers}
                </p>
              </div>
            </div>

            <div className="flex py-2 gap-4">
              <VerticalBar barStyle="min-h-10 bg-green-t20" />
              <div className="flex flex-col gap-1">
                <p>Active</p>
                <p className="font-medium text-[32px]">
                  {userOverview?.activeUsers}
                </p>
              </div>
            </div>

            <div className="flex py-2 gap-4">
              <VerticalBar barStyle="min-h-10 bg-gray-s80" />
              <div className="flex flex-col gap-1">
                <p>Inactive</p>
                <p className="font-medium text-[32px]">
                  {userOverview?.inactiveUsers}
                </p>
              </div>
            </div>
          </div>

          <div className="p-3"></div>
        </>
      )}
    </div>
  );
};

export default UserOverviewCard;
