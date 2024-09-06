const TasksContainer = ({ children }) => {
  return (
    <div className="grid xl:grid-cols-4  md:grid-cols-2  lg:grid-cols-3  gap-6  auto-rows-min  lg:max-w-[1080px] mx-auto  mb-20 ">
      {children}
    </div>
  );
};

export default TasksContainer;
