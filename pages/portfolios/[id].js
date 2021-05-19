import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/shared/BasePage';
import { useGetPostsById } from '@/actions';
import { useRouter } from 'next/router';
import {useGetUser} from "@/actions/user";
const Portfolio = () => {
  const router = useRouter();
  const {data: portfolio, error, loading} =
  useGetPostsById(router.query.id);
  
  // call with alias
  const {data :dataUser ,loading :loadingUser} = useGetUser();
  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage>
      { error && <div className="alert alert-danger">{error.message}</div>}
      {loading && <p>Loading....</p>}
      { portfolio &&
        <>
          <h1>I am Portfolio page</h1>
          <h1>{portfolio.title}</h1>
          <p>BODY: {portfolio.body}</p>
          <p>ID: {portfolio.id}</p>
        </>
      }

      </BasePage>
    </BaseLayout>
  )
}

export default Portfolio;