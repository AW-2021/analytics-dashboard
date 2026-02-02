import { Highcharts } from "@highcharts/react";
import HighchartsReact from "highcharts-react-official";
import type { TimeSeriesData } from "../../types/analytics";

interface ChartProps {
  data: TimeSeriesData[];
}

const QueriesExecutedChart = ({ data }: ChartProps) => {
  if (!data || data.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-400">
        No data available
      </div>
    );
  }

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      height: 300,
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
          return this.value >= "1000"
            ? `${Number(this.value) / 1000}k`
            : `${this.value}`;
        },
      },
      gridLineColor: "#f0f0f0",
      min: 0,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        groupPadding: 0.05,
        color: "#84BD60",
      },
    },
    series: [
      {
        type: "column",
        name: "Queries Executed",
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

export default QueriesExecutedChart;
