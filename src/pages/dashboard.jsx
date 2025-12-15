import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Card from "../components/Elements/Card";


function Dashboard() {
  return (
    <MainLayout>
      <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6">
        {/* ROW 1 */}
        <div className="sm:col-span-4">
          <Card
            title="Total Balance"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>

        <div className="sm:col-span-4">
          <Card
            title="Goals"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>

        <div className="sm:col-span-4">
          <Card
            title="Upcoming Bill"
            link="/bill"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>

        {/* ROW 2 & 3 */}
        <div className="sm:col-span-4 sm:row-span-2">
          <Card
            title="Recent Transactions"
            link="/transactions"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>

        <div className="sm:col-span-8">
          <Card
            title="Statistics"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>

        <div className="sm:col-span-8">
          <Card
            title="Expenses Breakdown"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
