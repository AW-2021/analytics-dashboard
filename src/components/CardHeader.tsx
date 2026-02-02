import RefreshButton from "./RefreshButton";
import VerticalBar from "./VerticalBar";

interface CardHeaderProps {
  title: string;
  data: string;
  barColor: string;
  onRefetch?: () => void;
}

const CardHeader = ({ title, data, barColor, onRefetch }: CardHeaderProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center p-3">
        <p className="font-medium text-lg">{title}</p>
        <button onClick={onRefetch}>
          <RefreshButton size={16} />
        </button>
      </div>
      <div className="flex gap-2 pl-3 items-center">
        <VerticalBar barStyle={barColor} />
        <p className="font-medium text-[32px]">{data}</p>
      </div>
    </div>
  );
};

export default CardHeader;
