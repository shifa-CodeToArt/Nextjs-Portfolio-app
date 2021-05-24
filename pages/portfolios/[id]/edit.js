import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import withAuth from "@/hoc/withAuth";
import { useRouter } from "next/router";
import { useGetPortfolio } from "@/actions/portfolios";
import PortfolioForm from "@/components/PortfolioForm";
import { Row, Col } from "reactstrap";
import { useUpdatePortfolio } from '@/actions/portfolios';
import {toast} from 'react-toastify';

const EditPortfolio = ({ user }) => {
  const router = useRouter();
  const { data: initialData } = useGetPortfolio(router.query.id);
  const [updatePortfolio, { error, data:UpdatedData, loading }] = useUpdatePortfolio();

  const _updatePortfolio =async (UpdatedData) => {
   try{
    await updatePortfolio(router.query.id, UpdatedData);
    toast.success("Portfolio has Updated Successfully",{autoClose:2000});
   }catch{
    toast.error("All Fields Are Required",{autoClose:2000});
   }
  };
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header="Edit Portfolio">
        <Row>
          <Col md="8">
            {initialData && (
              <PortfolioForm
                onSubmit={_updatePortfolio}
                initialData={initialData}
              />
            )}

            {error &&
            <div>{error}</div>
            }
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(EditPortfolio)("admin");
