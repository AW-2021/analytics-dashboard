import AvgResponseTimeFirewallCard from "./grid-cards/AvgResponseTimeFirewallCard";
import AvgResponseTimeWorkflowCard from "./grid-cards/AvgResponseTimeWorkflowCard";
import FirewallApiCallsCard from "./grid-cards/FirewallApiCallsCard";
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
      <AvgResponseTimeWorkflowCard />
      <FirewallApiCallsCard />
      <AvgResponseTimeFirewallCard />
    </div>
  );
};

export default AnalyticsGrid;
