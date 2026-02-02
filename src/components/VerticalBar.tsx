interface VerticalBarProps {
  barStyle: string;
}

const VerticalBar = ({ barStyle }: VerticalBarProps) => {
  return <div className={`h-full w-0.5 ${barStyle} min-h-9.5`}></div>;
};

export default VerticalBar;
