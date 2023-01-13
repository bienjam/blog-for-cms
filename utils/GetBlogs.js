const GetBlogs = async () => {
    const cmsURL = process.env.CMS_BASE_URL;
    const res = await fetch(`${cmsURL}/api/bien-blog-cms`);
    const resFormatted = await res.json();
    const blogs = resFormatted.data;
  
    return blogs;
  };
  
  export default GetBlogs;
  