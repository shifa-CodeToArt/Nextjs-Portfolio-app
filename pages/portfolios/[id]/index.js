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
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage header="Detail Page">
        <h1>{portfolio._id}</h1>
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
