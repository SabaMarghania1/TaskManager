import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { useTranslation } from "react-i18next";

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ chartData, isPending }) => {
  const { t } = useTranslation();

  const options = {
    plugins: {
      datalabels: {
        color: "#000",
        display: true,
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(0);
          return `${percentage}%`;
        },
        font: {
          weight: "bold",
        },
        align: "center",
        anchor: "center",
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const total = tooltipItem.dataset.data.reduce(
              (acc, val) => acc + val,
              0
            );
            const currentValue = tooltipItem.raw;
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${currentValue} (${percentage}%)`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  if (isPending) {
    return <p>Loading chart...</p>;
  }

  return (
    <div className="w-full bg-[#FFF] border border-[#E7E8EA] rounded-[8px]">
      <div className="w-full p-[1rem] border-b border-b:#D7D9DD flex ">
        <span className="text-[20px] text-start">{t("taskByStatus")}</span>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 p-4">
        <div className="w-[220px] h-[220px] lg:w-[330px] lg:h-[330px]">
          <Pie data={chartData} options={options} />
        </div>

        <div
          className={`flex flex-col items-start justify-start lg:ml-4 gap-4`}
        >
          {chartData.labels.map((label, index) => (
            <div key={label} className="flex items-center">
              <span
                className="w-3 h-3 mr-2 rounded-full"
                style={{
                  backgroundColor: chartData.datasets[0].backgroundColor[index],
                }}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
