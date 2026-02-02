import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { PeriodFilterProvider } from "./context/PeriodFilterContext";

function App() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <PeriodFilterProvider>
        <div className={`layout ${isExpanded && "expanded"}`}>
          <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          <Dashboard />
        </div>
      </PeriodFilterProvider>
    </QueryClientProvider>
  );
}

export default App;
