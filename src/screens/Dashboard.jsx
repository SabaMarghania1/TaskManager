import { useFetchTodos } from "../hooks/useFetchTodos";
import PieChart from "../components/PieChart";
import Loader from "../components/Loader";

const Dashboard = () => {
  const { data: todos, isPending, isError } = useFetchTodos();

  const chartData = todos
    ? {
        labels: [
          "Your Activities",
          "Important Tasks",
          "Done Tasks",
          "Left Todos",
        ],
        datasets: [
          {
            label: "# of Tasks",
            data: [
              todos.length,
              todos.filter((task) => task.important).length,
              todos.filter((task) => task.complate).length,
              todos.length - todos.filter((task) => task.complate).length,
            ],
            backgroundColor: ["#00A9D7", "#FFA400", "#80BC00", "#6E7C7C"],
          },
        ],
      }
    : null;

  if (isError) return <p>Error loading data...</p>;

  return (
    <div className="flex flex-col gap-14 px-4 lg:px-8 col-start-1 md:col-start-2 row-start-2 mt-8">
      <h1>Task Dashboard</h1>
      {isPending ? (
        <Loader />
      ) : (
        <PieChart chartData={chartData} isPending={isPending} />
      )}
    </div>
  );
};

export default Dashboard;
