import { supabase } from "../config/supabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const completeTodo = async ({ id }) => {
  const { data, error } = await supabase
    .from("todos")
    .update({ complate: true })
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const useCompleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: completeTodo,
    mutationKey: ["complete-todo"],
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};

export default useCompleteTodo;
