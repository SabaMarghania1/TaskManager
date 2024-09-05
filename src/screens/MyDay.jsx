import { useAuth, useUser } from "@clerk/clerk-react";
import TaskInput from "../components/TaskInput";
import Task from "../components/Task";
import TasksContainer from "../components/TasksContainer";
import { useFetchTodos } from "../hooks/useFetchTodos";
import Loader from "../components/Loader";

const MyDay = () => {
  const { user, isLoaded } = useUser();

  console.log(user.id);
  const { data: todos, isPending, error } = useFetchTodos(user.id, isLoaded);

  if (isPending) return <Loader />;
  if (error) return <p>Error fetching todos: {error.message}</p>;
  console.log(todos);

  return (
    <div className="flex flex-col gap-14 px-4 lg:px-8 col-start-1 md:col-start-2 row-start-2 mt-8 w-full ">
      <TaskInput />
      <TasksContainer>
        {todos.map((todo) => (
          <Task key={todo.id} task={todo} />
        ))}
      </TasksContainer>
    </div>
  );
};

export default MyDay;
