import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/shared/BasePage";
import {useGetUser} from "@/actions/user";
import Masthead from "components/shared/Masthead";
import BlogApi from "lib/api/blogs";
import { Row, Col } from 'reactstrap';
import Link from 'next/link';
import BlogItem from "components/BlogItem";
const blogs = ({blogs}) => {
  
  const {data,loading} = useGetUser();
  return (
     
    <BaseLayout
    navClass="transparent" className="blog-listing-page"
    user={data} loading={loading}>
    <Masthead imagePath="/images/home-bg.jpg">
      <h1>Fresh Blogs</h1>
      <span className="subheading">Programming, travelling...</span>
    </Masthead>
    <BasePage
      className="blog-body">
      <Row>
       
      {
          blogs.map(blog=>{
              return(
                <Col md="10"  key ={blog._id} lg="8" className="mx-auto">
               <BlogItem blog={blog}/>
              </Col>
              )
          })
      }
        
      </Row>
    </BasePage>
  </BaseLayout>
  );
};


export async function getStaticProps() {
    const json = await new BlogApi().getAll();
    return {
      props: {blogs: json.data},
      revalidate: 60
    }
  }
  
export default blogs;
