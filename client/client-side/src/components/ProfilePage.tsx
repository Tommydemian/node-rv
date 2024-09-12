import React from "react";
import { useTasks } from "../hooks/useTasks";

export const ProfilePage = () => {
  const { data } = useTasks();
  console.log(data);

  return <div>ProfilePage</div>;
};
