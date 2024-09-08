import { useAuth, useUser } from "@clerk/clerk-react";
import TaskInput from "../components/TaskInput";
import Task from "../components/Task";
import TasksContainer from "../components/TasksContainer";
import { useFetchTodos } from "../hooks/useFetchTodos";
import Loader from "../components/Loader";
import { useOutletContext } from "react-router-dom";

const MyDay = () => {
  const { openTaskId, toggleOpen, searchTerm } = useOutletContext();
  const { user, isLoaded } = useUser();

  const { data: todos, isPending, error } = useFetchTodos(user.id, isLoaded);

  if (isPending) return <Loader />;
  if (error) return <p>Error fetching todos: {error.message}</p>;

  const formattedTodos = searchTerm
    ? todos
        .filter((item) => !item.important)
        .filter((item) =>
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : todos.filter((item) => !item.important);

  return (
    <div className="flex flex-col gap-14 px-4 lg:px-8 col-start-1 md:col-start-2 row-start-2 mt-8">
      <TaskInput />

      <TasksContainer>
        {formattedTodos.length > 0
          ? formattedTodos.map((todo) => (
              <Task
                key={todo.id}
                task={todo}
                isOpen={openTaskId === todo.id}
                toggleOpen={() => toggleOpen(todo.id)}
                randomBg={true}
              />
            ))
          : searchTerm && <p>No tasks found matching "{searchTerm}".</p>}
      </TasksContainer>
    </div>
  );
};

export default MyDay;
