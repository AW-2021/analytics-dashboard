import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className={`layout ${isExpanded && 'expanded'}`}>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <Dashboard />
    </div>
  )
}

export default App;