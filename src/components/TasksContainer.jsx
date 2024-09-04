const TasksContainer = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-4  md:grid-cols-2 gap-6 grid-rows-auto lg:max-w-[1080px] mx-auto mb-20 ">
      {children}
    </div>
  );
};

export default TasksContainer;
