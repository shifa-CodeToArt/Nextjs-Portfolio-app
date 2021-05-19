import Link from "next/link";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import { useGetPosts } from "@/actions/index";
import {useGetUser} from "@/actions/user";
const Portfolios = () => {
  // get posts from action indexjs
  const { data, error, loading } = useGetPosts();
  
  // call with alias
  const {data :dataUser ,loading :loadingUser} = useGetUser();
  return (
    <div>
      <BaseLayout user={dataUser} loading={loadingUser}>
        <BasePage>
          <h1>Posts</h1>
          {loading && <p>Loading.....</p>}
          {data &&
            data.map((post) => (
              <li key={post.id}>
                <Link href={`/portfolios/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}

          {error && <div className="alert alert-danger">{error.message}</div>}
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default Portfolios;
