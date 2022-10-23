import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      if (error) throw error;
      if (data) this.tasks = data;
    },
    async createTask(id, title) {
      const { data, error } = await supabase
        .from("tasks")
        .insert([{ user_id: id, title: title }]);
      if (error) throw error;
      console.log(data);
    },
  },
});
