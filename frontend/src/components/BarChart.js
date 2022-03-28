import React from "react";
import { Chart } from "primereact/chart";

const BarChart = ({ label, labels, data }) => {
  const chartConfig = {
    labels: labels,
    datasets: [
      {
        label: label,
        backgroundColor: "#6366F1",
        data: data,
      },
    ],
  };

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    return {
      basicOptions,
    };
  };

  const { basicOptions } = getLightTheme();

  return (
    <div className="card surface-0">
      <Chart type="bar" data={chartConfig} options={basicOptions} />
    </div>
  );
};

export default BarChart;
