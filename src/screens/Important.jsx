import { useUser } from "@clerk/clerk-react";
import { supabase } from "../config/supabaseClient";
const Important = () => {
  const { user } = useUser();
  const fetchAllTodos = async () => {
    const { data, error } = await supabase
      .from("todos")
      .select("user_id", user.id);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  const handleTodos = async () => {
    const todos = await fetchAllTodos();
    console.log(todos);
  };
  handleTodos();
  return <div className="px-4 lg:px-8 md:col-start-2 row-start-2"></div>;
};

export default Important;
