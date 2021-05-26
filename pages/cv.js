import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import {useGetUser} from "@/actions/user";
import { Row, Col } from 'reactstrap';

const cv = () => {

  const {data,loading} = useGetUser();
 
  return (
    <div>
      <BaseLayout title="My CV -ShifaShaikh"  user={data} loading={loading} >
        <BasePage>
        <h1>I am Cv Page</h1>
        <Row>
          <Col md={{size: 8, offset: 2}}>
            <iframe style={{width: '100%', height: '800px'}} src="/jerga_cv.pdf"/>
          </Col>
        </Row>
        
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default cv;
