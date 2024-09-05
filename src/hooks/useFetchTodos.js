import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabaseClient";
import { useAuth } from "@clerk/clerk-react";

const fetchTodos = async (userId) => {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useFetchTodos = () => {
  const { userId, getToken } = useAuth();

  return useQuery({
    queryKey: ["todos", userId],
    queryFn: () => fetchTodos(userId),
    enabled: !!userId,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
