import { Highcharts } from "@highcharts/react";
import HighchartsReact from "highcharts-react-official";
import type { SourceData } from "../../types/analytics";

interface ChartProps {
  data: SourceData[];
}

const QueriesBySourceChart = ({ data }: ChartProps) => {
  if (!data || data.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        No data available
      </div>
    );
  }

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "bar",
      backgroundColor: "transparent",
      height: 300,
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: data.map((s) => s.source),
      labels: {
        style: {
          fontSize: "16px",
          color: "#1F2229",
        },
      },
      lineColor: "transparent",
      tickLength: 0,
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        enabled: false,
      },
      gridLineColor: "transparent",
      min: 0,
    },
    plotOptions: {
      bar: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          align: "right",
          inside: false,
          crop: false,
          x: 500,
          style: {
            fontSize: "16px",
            fontWeight: "400",
            color: "#1F2229",
            textOutline: "none",
          },
          formatter: function () {
            const value = this.y || 0;
            return value >= 1000 ? `${(value / 1000).toFixed(0)}k` : `${value}`;
          },
        },
        pointWidth: 4,
        colorByPoint: true,
      },
    },
    colors: data.map((s) => s.color),
    series: [
      {
        type: "bar",
        name: "Queries",
        data: data.map((s) => s.queries),
        showInLegend: false,
      },
    ],
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default QueriesBySourceChart;
