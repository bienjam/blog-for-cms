import { useEffect, useState } from "react";

const cmsURL = process.env.CMS_BASE_URL

export default function Test() { 

    const [blogs, setBlogs] = useState([]);
      useEffect(() => {
      (async () => {
        try {
          const valuesRaw = await fetch(`${cmsURL}/api/bien-blog-cms`, {
            method: 'GET',
          }) 
          const values = await valuesRaw.json();
          setBlogs(values.data);
        } catch (ex) {
          console.error(ex.stack);
        } 
      })();
    }, []);
  
    return (
      <>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <h1 className="text-lg">
              {blog.maintext}
              </h1>
              
            </div>
          ))}
      </>
    );
  }