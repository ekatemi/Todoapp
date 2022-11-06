import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks(id) {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", id)
        .order("id", { ascending: true });

      if (error) throw error;
      if (data) this.tasks = data;
    },
    async createTask(id, title) {
      const { data, error } = await supabase
        .from("tasks")
        .insert([{ user_id: id, title: title }]);
      if (error) throw error;
      this.tasks.push({ user_id: id, title: title });
    },
    async toggleCompleted(id, isCompleted) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_complete: isCompleted })
        .eq("id", id)
        .select();
      if (error) throw error;
    },
    async editTitle(id, title) {
      const { error } = await supabase
        .from("tasks")
        .update({ title: title })
        .eq("id", id)
        .select();
      if (error) throw error;
    },
    async deleteTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", id);
      if (error) throw error;
    },
    async deleteCompleted(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ is_complete: true });
      if (error) throw error;
    },
  },
});
