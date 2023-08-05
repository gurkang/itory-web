import React from "react";
import Layout from "../components/Layout";

type DashboardProps = {
  name?: string;
  age?: number;
};

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Layout>
      <div>Dashboard</div>
    </Layout>
  );
};
export default Dashboard;
