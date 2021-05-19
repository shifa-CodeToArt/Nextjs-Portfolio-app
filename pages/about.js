import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import {useGetUser} from "@/actions/user";
const About = () => {
  const {data,loading} = useGetUser();
  return (
    <div>
      <BaseLayout user={data} loading={loading}>
        <BasePage>
         i'm about page
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default About;
