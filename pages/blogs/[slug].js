import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import {useGetUser} from "@/actions/user";
import BlogApi from "lib/api/blogs";

import { Row, Col } from 'reactstrap';

import { SlateView } from 'slate-simple-editor';

const BlogDetail = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage className="slate-container">
        <Row>
         Blog Detail Page
        </Row>
      </BasePage>
    </BaseLayout>
  )
}



export default BlogDetail;