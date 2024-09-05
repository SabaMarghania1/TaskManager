import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabaseClient";

const fetchTodos = async (userId) => {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
export const useFetchTodos = (userId) => {
  return useQuery({
    queryKey: ["todos", userId],
    queryFn: () => fetchTodos(userId),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
