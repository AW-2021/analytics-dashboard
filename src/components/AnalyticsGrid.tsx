import QueriesBySourceCard from "./QueriesBySourceCard"
import QueriesExecutedCard from "./QueriesExecutedCard"
import UniqueLoginsCard from "./UniqueLoginsCard"
import UserOverviewCard from "./UserOverviewCard"

const AnalyticsGrid = () => {
  return (
    <div className="analytics-grid-container">
      <UserOverviewCard />
      <UniqueLoginsCard />
      <QueriesExecutedCard />
      <QueriesBySourceCard />
      <div className="analytics-grid-full-span-item"></div>
      <div className="analytics-grid-item"></div>
      <div className="analytics-grid-item"></div>
    </div>
  )
}

export default AnalyticsGrid