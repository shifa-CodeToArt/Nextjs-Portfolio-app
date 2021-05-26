import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import withAuth from "@/hoc/withAuth";
import PortfolioForm from "@/components/PortfolioForm";
import { Row, Col } from "reactstrap";
import { useCreatePortfolio } from '@/actions/portfolios';
import Redirect from "@/components/shared/Redirect";
import {toast} from 'react-toastify';

const NewPortfolio  = ({user, loading: userLoading}) => {
const [createPortfolio, {data, loading, error}] = useCreatePortfolio();

  const _createPortfolio = (data) => {
    createPortfolio(data)
    toast.success("Portfolio has Updated Successfully",{autoClose:2000}); 
  }

  if(data){
    return <Redirect to="/portfolios"/>
  }
  
  
  return (
    <div>
      <BaseLayout  title="Newest Portfolios -ShifaShaikh" user={user} loading={userLoading}>
        <BasePage header="Create New Portfolio">
          <Row>
            <Col md="8">
              <PortfolioForm onSubmit={_createPortfolio} />
              {error && <div className="alert alert-danger mt-2">{error}</div>}
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default withAuth(NewPortfolio)("admin");
