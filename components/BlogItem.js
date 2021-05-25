import React from 'react'
import Link from 'next/link';
import moment from "moment";

const BlogItem = ({blog}) => {
    return (
        <div>
        <div>
        <div className="post-preview clickable">
          <Link href="/blogs/[slug]" as={`/blogs/${blog._id}`}>
            <a>
              <h2 className="post-title">
                {blog.title}
              </h2>
              <h3 className="post-subtitle">
               {blog.subtitle}
              </h3>
            </a>
          </Link>
          <p className="post-meta">Posted by
            <a href="#"> Filip Jerga </a>
            {moment(blog.createdAt).format('LLLL')}
          </p>
        </div>
        <hr></hr>
      </div>
        </div>
    )
}

export default BlogItem
