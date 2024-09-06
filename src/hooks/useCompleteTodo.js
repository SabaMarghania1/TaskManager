import { supabase } from "../config/supabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const completeTodo = async ({ id, userId }) => {
  const { data, error } = await supabase
    .from("todos")
    .update({ complate: true })
    .eq("id", id)
    .eq("user_id", userId)
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
