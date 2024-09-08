import { useFetchTodos } from "../hooks/useFetchTodos";
import PieChart from "../components/PieChart";
import Loader from "../components/Loader";
import { useOutletContext } from "react-router-dom";
import DashboardItems from "../components/DashboardItems";
import DashboardItem from "../components/DashboardItem";

const Dashboard = () => {
  const { todos, isPending, isError } = useOutletContext();

  const todosData = todos
    ? [
        {
          name: "All Todos",
          value: todos.length,
        },
        {
          name: "Important Tasks",
          value: todos.filter((task) => task.important).length,
        },
        {
          name: "Completed Tasks",
          value: todos.filter((task) => task.complete).length,
        },
        {
          name: "Remaining Tasks",
          value: todos.length - todos.filter((task) => task.complete).length,
        },
      ]
    : [];

  const chartData = todos
    ? {
        labels: [
          "All Todos",
          "Important Tasks",
          "Done Tasks",
          "Remaining Tasks",
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
      {isPending ? (
        <Loader />
      ) : (
        <div className="flex flex-col">
          <DashboardItems>
            {todosData.map((item) => {
              return (
                <DashboardItem
                  key={item.text}
                  text={item.name}
                  quantity={item.value}
                />
              );
            })}
          </DashboardItems>

          <PieChart chartData={chartData} isPending={isPending} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
