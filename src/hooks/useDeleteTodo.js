import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../config/supabaseClient";

const deleteTodo = async (id) => {
  const { data, error } = await supabase.from("todos").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
};
