import React from 'react'



export const getStaticProps = async () => {

  const res = await fetch ('http://localhost:3001/api/bien-blog-cms');
  const data = await res.json();

  return {
    props: { blogs: data }
  }
}

const BlogContents = ({ blogs }) => {
  console.log(blogs)
  return (
    <div>
     <div>Blogs</div>
      <div>
        {/* {blogs.map((blog) => (
          <div key={id}>{blog.maintext}</div>
        ))} */}


        {blogs.data.map(blog => (
          <div key={blog.id}>
            {blog.description}
          </div>
        ))}
      </div>
    
    </div>
  )
}

export default BlogContents