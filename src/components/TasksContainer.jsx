const TasksContainer = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-4  gap-6 grid-rows-auto lg:max-w-[1080px] mx-auto  ">
      {children}
    </div>
  );
};

export default TasksContainer;
