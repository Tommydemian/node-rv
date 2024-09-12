import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTasks = async () => {
  const { data } = await axios.get("http://localhost:5500/tasks");
  return data.tasks;
};

export const useTasks = () => {
  return useQuery({ queryFn: fetchTasks, queryKey: ["tasks"] });
};
