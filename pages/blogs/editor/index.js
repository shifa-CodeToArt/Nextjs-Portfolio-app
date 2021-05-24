import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import withAuth from "@/hoc/withAuth";

const Editor = ({user,loading}) => {
  return (
    <div>
      <BaseLayout user={user} loading={false}>
        <BasePage header="Blog Editor">
         i'm Editor page
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default withAuth(Editor)('admin');
