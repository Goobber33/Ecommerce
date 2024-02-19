import Heading from "@/components/admin/Heading";
import LargeCards from "@/components/admin/LargeCards";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <Heading title={"Dashboard Overview"} />
      <LargeCards />
    </div>
  );
}