import { supabase } from "../config/supabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const toggleImportant = async ({ id, important }) => {
  const { data, error } = await supabase
    .from("todos")
    .update({ important: !important })
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const useToggleImportant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleImportant,
    mutationKey: ["toggle-important"],
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};

export default useToggleImportant;
