import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <ClipLoader
        loading={true}
        color={"#1CA8DD"}
        size={60}
        speedMultiplier={0.7}
      />
    </div>
  );
};

export default LoadingSpinner;
