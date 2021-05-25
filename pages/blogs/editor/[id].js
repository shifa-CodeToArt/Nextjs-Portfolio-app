import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import withAuth from "@/hoc/withAuth";
import { Editor } from "slate-simple-editor";
import { useRouter } from "next/router";
import { useGetBlog, useUpdateBlog } from "actions/blogs";
import {toast} from 'react-toastify';

const BlogUpdateEditor = ({ user, loading }) => {
  const router = useRouter();
  const { data } = useGetBlog(router.query.id);
  const [updateBlog, {loading: updatedLoading, error }] =
    useUpdateBlog();

  const _updateBlog = async (data) => {
    await updateBlog(router.query.id, data);
    toast.success("Blog has Updated Successfully",{autoClose:2000});
  };


  if(error){
    toast.error("Comething went wrong..!!!",{autoClose:2000});
  }
  return (
    <div>
      <BaseLayout user={user} loading={false}>
        <BasePage>
          {data && (
            <Editor
              header="Update Your Blog..."
              initialContent={data.content}
              onSave={_updateBlog}
              onSave={_updateBlog}
               loading={updatedLoading}
            />
          )}
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default withAuth(BlogUpdateEditor)("admin");
