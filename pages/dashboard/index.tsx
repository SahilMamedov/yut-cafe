import React from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/hooks";

const Dashboard = () => {
  const { token } = useAppSelector((state) => state.token);
  const route = useRouter();

  // if (!token) {
  //   route.push("/login");
  //   console.log("login");
  //   return null;
  // }

  route.push("/dashboard/products");

  return <div></div>;
};

export default Dashboard;
