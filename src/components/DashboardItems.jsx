const DashboardItems = ({ children }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-10 justify-items-center sm:grid-cols-2 sm:grid-rows-auto md:grid-cols-4 md:grid-rows-1 lg:grid-cols-4 lg:gap-6">
      {children}
    </div>
  );
};

export default DashboardItems;
