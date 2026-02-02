import { Highcharts } from "@highcharts/react";
import HighchartsReact from "highcharts-react-official";
import type { TimeSeriesData } from "../../types/analytics";

interface ChartProps {
  data: TimeSeriesData[];
}

const AvgResponseTimeWorkflowChart = ({ data }: ChartProps) => {
  if (!data || data.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        No data available
      </div>
    );
  }

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "area",
      backgroundColor: "transparent",
      height: 222,
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: data.map((d) => {
        const date = new Date(d.date);
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
      }),
      labels: {
        style: {
          fontSize: "11px",
          color: "#666",
        },
        step: Math.ceil(data.length / 6),
      },
      lineColor: "#e0e0e0",
      tickColor: "#e0e0e0",
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        style: {
          fontSize: "11px",
          color: "#666",
        },
        formatter: function () {
          return `${this.value}s`;
        },
      },
      gridLineColor: "#f0f0f0",
      min: 0,
    },
    plotOptions: {
      area: {
        fillColor: "rgba(181, 215, 160, 0.2)",
        lineColor: "#84BD60",
        lineWidth: 2,
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: true,
              radius: 4,
            },
          },
        },
        states: {
          hover: {
            lineWidth: 2,
          },
        },
      },
    },
    series: [
      {
        type: "area",
        name: "Response Time",
        data: data.map((d) => d.value),
        showInLegend: false,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default AvgResponseTimeWorkflowChart;
