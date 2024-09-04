import { useUser } from "@clerk/clerk-react";

const Important = () => {
  const { user } = useUser();
  return <div className="px-4 lg:px-8 md:col-start-2 row-start-2"></div>;
};

export default Important;
