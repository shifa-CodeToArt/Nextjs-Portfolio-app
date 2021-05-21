import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import withAuth from "@/hoc/withAuth";
import PortfolioForm from "@/components/PortfolioForm";
import { Row, Col } from "reactstrap";
import { useCreatePortfolio } from '@/actions/portfolios';
const NewPortfolio  = ({user, loading: userLoading}) => {
  
  const [createPortfolio, {data, loading, error}] = useCreatePortfolio();
  

  const _createPortfolio = (data) => {
    console.log(data);
    createPortfolio(data)
    alert("data send")
  }
  
  return (
    <div>
      <BaseLayout user={user} loading={userLoading}>
        <BasePage header="Create New Portfolio">
          <Row>
            <Col md="8">
              <PortfolioForm onSubmit={_createPortfolio} />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default withAuth(NewPortfolio)("admin");
