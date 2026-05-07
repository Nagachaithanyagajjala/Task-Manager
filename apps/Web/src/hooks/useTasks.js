import { useEffect, useState } from "react";

import API from "@/services/api";

export const useTasks = () => {
  const [tasks, setTasks] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  // FETCH TASKS
  const fetchTasks = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await API.get(
        "/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(res.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // CREATE TASK
  const createTask = async (
    taskData
  ) => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await API.post(
        "/tasks",
        taskData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      await fetchTasks();

      return res.data;
    } catch (error) {
      console.log(error);

      throw error;
    }
  };

  return {
    tasks,
    loading,
    createTask,
    refetch: fetchTasks,
  };
};
