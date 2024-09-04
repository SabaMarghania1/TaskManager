import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../config/supabaseClient";

const insertTodo = async (newTodo) => {
  const { data, error } = await supabase
    .from("todos")
    .insert([newTodo])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useInsertTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: insertTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error) => {
      console.error("Error inserting todo:", error.message);
    },
  });
};
