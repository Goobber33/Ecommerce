import CustomDataTable from "@/components/admin/CustomDataTable";
import DashboardCharts from "@/components/admin/DashboardCharts";
import Heading from "@/components/admin/Heading";
import LargeCards from "@/components/admin/LargeCards";
import SmallCards from "@/components/admin/SmallCards";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <Heading title={"Dashboard Overview"} />
      <LargeCards />
      <SmallCards />
      <DashboardCharts />
      <CustomDataTable />
    </div>
  );
}
