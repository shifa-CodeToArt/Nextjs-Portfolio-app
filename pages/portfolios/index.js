
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";
import PortfolioCard from "@/components/PortfolioCard";
import { Row, Col } from "reactstrap";
import { useRouter } from 'next/router'

const Portfolios = ({ portfolios }) => {
  const router = useRouter()
  // call with alias
  const { data: dataUser, loading: loadingUser } = useGetUser();
  return (
    <>
      <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage
      header="Portfolios"
      className="portfolio-page">
          <Row>
            {portfolios.map((portfolio) => (
              <Col 
              key={portfolio._id}
              onClick={()=>{
                router.push('/portfolios/[id]',`/portfolios/${portfolio._id}`)
              }}
              md="4">
                <PortfolioCard portfolio={portfolio} />
              </Col>
            ))}
          </Row>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return {
    props: { portfolios },
  };
}

export default Portfolios;
