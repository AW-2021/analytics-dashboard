import QueriesBySourceCard from "./grid-cards/QueriesBySourceCard";
import UserOverviewCard from "./grid-cards/UserOverviewCard";
import AnalyticsCard from "./grid-cards/AnalyticsCard";
import UniqueLoginsChart from "./charts/UniqueLoginsChart";
import QueriesExecutedChart from "./charts/QueriesExecutedChart";
import AvgResponseTimeWorkflowChart from "./charts/AvgResponseTimeWorkflowChart";
import FirewallApiCallsChart from "./charts/FirewallApiCallsChart";
import AvgResponseTimeFirewallChart from "./charts/AvgResponseTimeFirewallChart";
import {
  useUniqueLogins,
  useQueriesExecuted,
  useAvgResponseTimeWorkflow,
  useFirewallApiCalls,
  useAvgResponseTimeFirewall,
} from "../hooks/useAnalyticsData";

const AnalyticsGrid = () => {
  return (
    <div className="analytics-grid-container">
      <UserOverviewCard />

      <AnalyticsCard
        title="Number of Unique Logins"
        overviewKey="uniqueLogins"
        barColor="bg-blue"
        gridClass="analytics-grid-three-quarter-span-item"
        useDataHook={useUniqueLogins}
        ChartComponent={UniqueLoginsChart}
      />

      <AnalyticsCard
        title="Queries Executed in the Workflow"
        overviewKey="queriesExecuted"
        barColor="bg-green-t20"
        gridClass="analytics-grid-item"
        useDataHook={useQueriesExecuted}
        ChartComponent={QueriesExecutedChart}
      />

      <QueriesBySourceCard />

      <AnalyticsCard
        title="Avg. Response Time – Workflow"
        overviewKey="avgResponseTimeWorkflow"
        overviewSuffix="s"
        barColor="bg-green-t20"
        gridClass="analytics-grid-full-span-item"
        chartWrapperClass="pt-4 px-3 pb-3"
        useDataHook={useAvgResponseTimeWorkflow}
        ChartComponent={AvgResponseTimeWorkflowChart}
      />

      <AnalyticsCard
        title="Firewall API Calls"
        overviewKey="firewallApiCalls"
        barColor="bg-blue-s50"
        gridClass="analytics-grid-item"
        useDataHook={useFirewallApiCalls}
        ChartComponent={FirewallApiCallsChart}
      />

      <AnalyticsCard
        title="Avg. Response Time – Firewall"
        overviewKey="avgResponseTimeFirewall"
        overviewSuffix="s"
        barColor="bg-blue-s50"
        gridClass="analytics-grid-item"
        useDataHook={useAvgResponseTimeFirewall}
        ChartComponent={AvgResponseTimeFirewallChart}
      />
    </div>
  );
};

export default AnalyticsGrid;
