import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import withAuth from "@/hoc/withAuth";
import PortfolioForm from "@/components/PortfolioForm";
import { Row, Col } from "reactstrap";
import { createPortfolio } from "@/actions/portfolios";


const NewPortfolio = ({ data, loading: UserLoading }) => {
  const _createPortfolio = (data) => {
    alert(JSON.stringify(data));
    createPortfolio(data);
  };

  
  return (
    <div>
      <BaseLayout user={data} loading={UserLoading}>
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
