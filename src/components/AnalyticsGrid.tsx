import AvgResponseTimeCard from "./grid-cards/AvgResponseTimeCard";
import QueriesBySourceCard from "./grid-cards/QueriesBySourceCard";
import QueriesExecutedCard from "./grid-cards/QueriesExecutedCard";
import UniqueLoginsCard from "./grid-cards/UniqueLoginsCard";
import UserOverviewCard from "./grid-cards/UserOverviewCard";

const AnalyticsGrid = () => {
  return (
    <div className="analytics-grid-container">
      <UserOverviewCard />
      <UniqueLoginsCard />
      <QueriesExecutedCard />
      <QueriesBySourceCard />
      <AvgResponseTimeCard />
      <div className="analytics-grid-item"></div>
      <div className="analytics-grid-item"></div>
    </div>
  );
};

export default AnalyticsGrid;
