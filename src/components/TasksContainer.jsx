const TasksContainer = ({ children }) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4  mx-auto">
      {children}
    </div>
  );
};

export default TasksContainer;
