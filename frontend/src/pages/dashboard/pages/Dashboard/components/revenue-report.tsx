//import graphs from "../../../../../assets/dashboard/graphs.svg";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useQuery } from "react-query";
import { showStatics } from "../api-dashboard";

export default function RevenueReports() {
  const { data } = useQuery(["showStatics"], showStatics);
  ChartJS.register(ArcElement, Tooltip, Legend);
  const info = {
    labels: ["Paid Invoices", "Unpaid Invocies"],
    datasets: [
      {
        label: `${data?.numberOfInvoices} of Votes`,
        data: [data?.numberOfPaidInvoices, data?.numberOfUnpaidInvoices],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const options: any = {
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
        <Pie data={info} options={options} />
      </div>
    </section>
  );
}
