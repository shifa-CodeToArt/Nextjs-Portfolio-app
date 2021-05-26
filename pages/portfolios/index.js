import { useState } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";
import PortfolioCard from "@/components/PortfolioCard";
import { Row, Col, Button } from "reactstrap";
import { useRouter } from "next/router";
import { isAuthorized } from "@/utils/auth0";
import { useDeletePortfolio } from "@/actions/portfolios";

const Portfolios = ({ portfolios: initailPortfolios }) => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState(initailPortfolios);
  const [deletePortfolio, { data, error }] = useDeletePortfolio();
  const { data: dataUser, loading: loadingUser } = useGetUser();

  const _deletePortfolio = async (e, id) => {
    e.stopPropagation();
    const isConfirm = confirm('Are you sure you want to delete this portfolio?');
    if (isConfirm) {
      await deletePortfolio(id);
      setPortfolios(portfolios.filter(p => p._id !== id));
    }
  }
  return (
    <>
      <BaseLayout title="Portfolio Page-ShifaShaikh" 
      metaDescription="A portfolio is a collection of financial investments like stocks, bonds, commodities, cash, and cash equivalents, including closed-end funds and exchange traded funds (ETFs)"
      user={dataUser} loading={loadingUser}>
        <BasePage header="Portfolios" className="portfolio-page">
          <Row>
            {portfolios.map((portfolio) => (
              <Col
                key={portfolio._id}
                onClick={() => {
                  router.push(
                    "/portfolios/[id]",
                    `/portfolios/${portfolio._id}`
                  );
                }}
                md="4"
              >
                <PortfolioCard portfolio={portfolio}>
                  {dataUser && isAuthorized(dataUser, "admin") && (
                    <>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(
                            "/portfolios/[id]/edit",
                            `/portfolios/${portfolio._id}/edit`
                          );
                        }}
                        className="mr-2"
                        color="warning"
                      >
                        Edit
                      </Button>

                      <Button
                        onClick={(e) => _deletePortfolio(e, portfolio._id)}
                        color="danger"
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </PortfolioCard>
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
    revalidate: 60
  };
}

export default Portfolios;
