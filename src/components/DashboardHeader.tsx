import { RotateCw } from 'lucide-react';

const DashboardHeader = () => {
  const handleRefreshAll = () => {}

  return (
    <div className="flex justify-between items-center ">
      <p className="font-medium text-2xl">Analytics</p>
      <button onClick={handleRefreshAll} className="h-9 flex items-center justify-center border border-dark-gray rounded-sm py-2 px-3 bg-white hover:bg-gray">
        <RotateCw size={20} />
        <p className="text-sm px-1">Refresh Dashboard</p>
      </button>
    </div>
  );
};

export default DashboardHeader;
