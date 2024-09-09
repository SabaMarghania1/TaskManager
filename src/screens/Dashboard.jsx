import PieChart from "../components/PieChart";
import Loader from "../components/Loader";
import { useOutletContext } from "react-router-dom";
import DashboardItems from "../components/DashboardItems";
import DashboardItem from "../components/DashboardItem";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { todos, isPending, isError } = useOutletContext();
  const { t } = useTranslation();

  const todosData = todos
    ? [
        {
          name: t("allTodos"),
          value: todos.length,
        },
        {
          name: t("importantTasks"),
          value: todos.filter((task) => task.important).length,
        },
        {
          name: t("finishedTasks"),
          value: todos.filter((task) => task.complate).length,
        },
        {
          name: t("remainingTasks"),
          value: todos.length - todos.filter((task) => task.complate).length,
        },
      ]
    : [];

  const chartData = todos
    ? {
        labels: [t("importantTasks"), t("finishedTasks"), t("remainingTasks")],
        datasets: [
          {
            data: [
              todos.filter((task) => task.important).length,
              todos.filter((task) => task.complate).length,
              todos.length - todos.filter((task) => task.complate).length,
            ],
            backgroundColor: ["#3A8DDE", "#80BC00", "#FFA400"],
          },
        ],
      }
    : null;

  if (isError) return <p>{t("errorLoadingData")}</p>;

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
                  key={item.name}
                  text={item.name}
                  quantity={item.value}
                />
              );
            })}
          </DashboardItems>

          {todos.length === 0 ? (
            <h1>{t("addTodosToSeeChart")}</h1>
          ) : (
            <PieChart chartData={chartData} isPending={isPending} />
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
