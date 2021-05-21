import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import withAuth from "@/hoc/withAuth";
import useSWR from "swr";

const OnlyAdmin = ({user,loading}) => {
    
  return (
    <div>
      <BaseLayout user={user} loading={loading}>
        <BasePage>Welcome to  Secret page - Hello {user.name}</BasePage>
      </BaseLayout>
    </div>
  );
};

export default withAuth(OnlyAdmin)('admin');
