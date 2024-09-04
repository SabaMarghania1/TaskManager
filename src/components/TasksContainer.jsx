const TasksContainer = ({ children }) => {
  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-6 grid-rows-auto lg:max-w-[1080px] mx-auto  ">
      {children}
    </div>
  );
};

export default TasksContainer;
