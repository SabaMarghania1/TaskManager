import { supabase } from "../config/supabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const completeTodo = async ({ id }) => {
  const { data, error } = await supabase
    .from("todos")
    .update({ complate: true })
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
};

const deleteTodo = async (id) => {
  const { data, error } = await supabase.from("todos").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return data;
};

const updateTodo = async ({ id, newDescription }) => {
  const { error } = await supabase
    .from("todos")
    .update({ description: newDescription })
    .eq("id", id);

  if (error) throw new Error(error.message);
  return data;
};

const insertTodo = async (newTodo) => {
  const { data, error } = await supabase
    .from("todos")
    .insert([newTodo])
    .select();
  if (error) throw new Error(error.message);
  return data;
};

const toggleImportant = async ({ id, important }) => {
  const { data, error } = await supabase
    .from("todos")
    .update({ important: !important })
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
};

export const useTodoMutations = () => {
  const queryClient = useQueryClient();

  const completeTodoMutation = useMutation({
    mutationFn: completeTodo,
    mutationKey: ["complete-todo"],
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const insertTodoMutation = useMutation({
    mutationFn: insertTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error) => {
      console.error("Error inserting todo:", error.message);
    },
  });

  const toggleImportantMutation = useMutation({
    mutationFn: toggleImportant,
    mutationKey: ["toggle-important"],
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return {
    completeTodoMutation,
    deleteTodoMutation,
    updateTodoMutation,
    insertTodoMutation,
    toggleImportantMutation,
  };
};
