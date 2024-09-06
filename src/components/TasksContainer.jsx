const TasksContainer = ({ cols = 4, classname = "", children }) => {
  return (
    <div
      className={`sm:columns-1 md:columns-2 row-auto xl:columns-3 bg-red-500 mx-auto ${classname}`}
    >
      {children}
    </div>
  );
};

export default TasksContainer;
