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
      console.log(title, id);
      const { data, error } = await supabase
        .from("tasks")
        .insert([{ user_id: id, title: title }]);
      if (error) throw error;
      this.tasks.push({ user_id: id, title: title });
    },
    async updateTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: title })
        .eq("user_id", id);
      if (error) throw error;
      if (data) this.tasks = data;
    },
    async deleteTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", "title");
      if (error) throw error;
      if (data) this.tasks = data;
    },
  },
});
