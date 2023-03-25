import { useTheme } from "@nextui-org/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const BarChart = () => {
  const { theme } = useTheme();
  return (
    <div className="relative ">
      <Bar
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              data: [
                200, 500, 600, 9000, 1200, 1500, 3390, 9945, 7567, 3450, 5432,
                1800,
              ],
              backgroundColor: theme.colors.primaryLight.value,
              hoverBackgroundColor: theme.colors.primary.value,
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
