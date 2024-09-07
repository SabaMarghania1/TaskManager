import { useOutletContext } from "react-router-dom";
import Loader from "../components/Loader";
import Task from "../components/Task";
import TasksContainer from "../components/TasksContainer";
import { useFetchTodos } from "../hooks/useFetchTodos";

const Important = () => {
  const { data: todos, isPending, error } = useFetchTodos();

  const { openTaskId, toggleOpen } = useOutletContext();

  if (isPending) return <Loader />;
  if (error) return <p>Error fetching todos: {error.message}</p>;
  const importantTodos = todos.filter((items) => items.important);

  return (
    <div className="px-4 lg:px-8 md:col-start-2 row-start-2">
      <TasksContainer classname="mt-20">
        {importantTodos.map((todo) => (
          <Task
            key={todo.id}
            task={todo}
            isOpen={openTaskId === todo.id}
            toggleOpen={() => toggleOpen(todo.id)}
          />
        ))}
      </TasksContainer>
    </div>
  );
};

export default Important;
