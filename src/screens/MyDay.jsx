import { useAuth } from "@clerk/clerk-react";
import TaskInput from "../components/TaskInput";
import Task from "../components/Task";
import TasksContainer from "../components/TasksContainer";

const MyDay = () => {
  const { userId } = useAuth();
  return (
    <div className="flex flex-col gap-14 px-4 lg:px-8 col-start-1 lg:col-start-2 row-start-2 mt-8 w-full">
      <TaskInput />
      <TasksContainer>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </TasksContainer>
    </div>
  );
};

export default MyDay;
