const TasksContainer = ({ children }) => {
  return (
    <div className="relative md:columns-2 xl:columns-3 columns-auto gap-6  mx-auto ">
      {children}
    </div>
  );
};

export default TasksContainer;
