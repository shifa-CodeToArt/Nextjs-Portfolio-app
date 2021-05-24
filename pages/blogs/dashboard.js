import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import withAuth from "@/hoc/withAuth";

const Dashboard = ({user,loading}) => {

  return (
    <div>
      <BaseLayout user={user} loading={false}>
        <BasePage header="Dashboard">
         i'm Dashboard page
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default withAuth(Dashboard)('admin');
