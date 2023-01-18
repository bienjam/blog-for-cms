import React from 'react'

const cmsURL = process.env.CMS_BASE_URL

export const getStaticProps = async () => {

  const res = await fetch(`${cmsURL}/api/bien-blog-cms`);
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