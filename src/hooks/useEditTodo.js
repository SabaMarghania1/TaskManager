import { supabase } from "../config/supabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateTodo = async ({ id, newDescription }) => {
  const { error } = supabase
    .from("todos")
    .update({ description: newDescription })
    .eq("id", id);

  if (error) throw new Error(error.message);
};

const useEditTodo = () => {
  const QueryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      QueryClient.invalidateQueries("todos");
    },
  });
};

export default useEditTodo;
