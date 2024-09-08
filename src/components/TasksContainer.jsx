const TasksContainer = ({ cols = 3, children }) => {
  return (
    <div
      className={`relative md:columns-2 ${
        cols === 4 ? "xl:columns-4" : "xl:columns-3"
      } columns-auto gap-4 mx-auto`}
    >
      {children}
    </div>
  );
};

export default TasksContainer;
