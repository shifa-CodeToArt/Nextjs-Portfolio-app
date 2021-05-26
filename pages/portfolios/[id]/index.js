import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import { useRouter } from "next/router";
import { useGetUser } from "@/actions/user";

import PortfolioApi from "@/lib/api/portfolios";

const Portfolio = ({ portfolio }) => {
  const router = useRouter();

  // call with alias
  const { data: dataUser, loading: loadingUser } = useGetUser();
  return (
    <BaseLayout metaDescription={`${portfolio.description}`} title={`${portfolio.title} portfolio-ShifaShaikh`}user={dataUser} loading={loadingUser}>
    <BasePage
    header="Portfolio Detail">
    <div className="portfolio-detail">
  <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
  <main role="main" class="inner page-cover">
    <h1 class="cover-heading">{portfolio.title}</h1>
    <p class="lead dates">{portfolio.createdAt}</p>
    <p class="lead info mb-0">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location}</p>
    <p class="lead">{portfolio.description}</p>
    <p class="lead">
      <a href="#" class="btn btn-lg btn-secondary">Visit Company</a>
    </p>
  </main>
  </div>
</div>
  </BasePage>
    </BaseLayout>
  );
};

export async function getServerSideProps({ query }) {
  const json = await new PortfolioApi().getById(query.id);
  const portfolio = json.data;
  return {
    props: { portfolio },
  };
}

export default Portfolio;
