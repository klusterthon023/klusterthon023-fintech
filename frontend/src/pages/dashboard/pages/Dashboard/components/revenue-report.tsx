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
import { useQuery } from "react-query";
import { showStatics } from "../api-dashboard";
import dayjs from "dayjs";

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
    dayjs().month(i).format("MMM")
  );

  // const info = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: `${data?.numberOfInvoices} of Votes`,
  //       data: [data?.numberOfPaidInvoices, data?.numberOfUnpaidInvoices],
  //       backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
  //       borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
  //       borderWidth: 2,
  //     },
  //   ],
  // };

  function generateRandomData(length: any) {
    return Array.from({ length }, () => Math.random() * 100);
  }

  const info = {
    labels: labels,
    datasets: [
      {
        label: "Business",
        data: generateRandomData(12),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        pointRadius: 8,
        pointHoverRadius: 10,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Individual",
        data: generateRandomData(12),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        pointRadius: 8,
        pointHoverRadius: 10,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "start",
      },
    },
  };
  return (
    <section className="bg-white w-full max-sm:w-[300px] max-[400px]:w-[250px] p-4 border border-gray-200 border-opacity-20 rounded-lg">
      <div className="flex justify-center mx-auto">
        <Line data={info} options={options} />
      </div>
    </section>
  );
}
