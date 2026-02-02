import AnalyticsGrid from "./AnalyticsGrid";
import FilterRow from "./FilterRow";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  return (
    <main className="grid grid-rows-[36px_1fr] p-6 gap-4">
      <DashboardHeader />

      <div className="grid grid-rows-[36px_1fr] gap-4">
        <FilterRow />
        <AnalyticsGrid />
      </div>
    </main>
  );
};

export default Dashboard;
