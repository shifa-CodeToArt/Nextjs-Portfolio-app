import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import {useGetUser} from "@/actions/user";
const cv = () => {

  const {data,loading} = useGetUser();
 
  return (
    <div>
      <BaseLayout  user={data} loading={loading} >
        <BasePage>im CV page</BasePage>
      </BaseLayout>
    </div>
  );
};

export default cv;
