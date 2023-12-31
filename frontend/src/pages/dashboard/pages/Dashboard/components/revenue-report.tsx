//import graphs from "../../../../../assets/dashboard/graphs.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import { useQuery } from "react-query";
// import { showStatics } from "../api-dashboard";
import dayjs from "dayjs";
import { Typography } from "../../../../../design-system";
import { useQuery } from "react-query";
import { showStatics } from "../api-dashboard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function RevenueReports() {
  const { data } = useQuery(["showStatics"], showStatics);

  const labels = Array.from({ length: 12 }, (_, i) =>
    dayjs().month(i).format("MMMM")
  );

  const datasets = [
    {
      label: "Business",
      data: labels.map(
        (month) =>
          (data as any)?.groupedByMonthForBusiness[`${month} 2023`]?.revenue
      ),
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
      pointRadius: 8,
      pointHoverRadius: 10,
      pointBackgroundColor: "rgba(255, 99, 132, 1)",
    },
    {
      label: "Individual",
      data: labels.map(
        (month) =>
          (data as any)?.groupedByMonthForIndividual[`${month} 2023`]?.revenue
      ),
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 2,
      pointRadius: 8,
      pointHoverRadius: 10,
      pointBackgroundColor: "rgba(54, 162, 235, 1)",
    },
  ];

  const info = {
    labels: labels,
    datasets: datasets,
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "start",
      },
    },
    aspectRatio: window.innerWidth > 400 ? undefined : 1,
    maintainAspectRatio: true,
  };
  return (
    <section className="bg-white w-full max-sm:w-[300px] p-4 border border-gray-200 border-opacity-20 rounded-lg">
      <Typography color="gray.400" fontWeight={600} variant="body3">
        Revenue Reports
      </Typography>
      <div className="flex justify-center mx-auto mt-4">
        <Line data={info} options={options} />
      </div>
    </section>
  );
}
