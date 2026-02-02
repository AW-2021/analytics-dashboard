import { RotateCw } from "lucide-react";

interface RefreshButtonProps {
  size?: number;
}

const RefreshButton = ({ size = 24 }: RefreshButtonProps) => {
  return (
    <button type="button" aria-label="Refresh data">
      <RotateCw size={size} />
    </button>
  );
};

export default RefreshButton;
