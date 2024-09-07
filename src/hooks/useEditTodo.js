import { supabase } from "../config/supabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateTodo = async ({ id, newDescription }) => {
  const { error } = await supabase
    .from("todos")
    .update({ description: newDescription })
    .eq("id", id);

  if (error) throw new Error(error.message);

  return data;
};

const useEditTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};

export default useEditTodo;
