import GetBlogs from "../../utils/GetBlogs";
import Link from "next/link";

const cmsURL = process.env.CMS_BASE_URL


export const getStaticPaths = async () => {
    const res = await fetch(`${cmsURL}/api/bien-blog-cms`);
    const data = await res.json()

    const paths = data.data.map(content => {
        return {
            params: { id: content.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false,
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`${cmsURL}/api/bien-blog-cms/` + id)
    const data = await res.json();

    return {
        props: { blogs: data }
    }
}

const Description = ({blogs}) => {
    console.log(blogs)
  return (
    <div>
        <div className='content-box'>
                <div className='list-box p-20'>
                    <div className='flex-col'>
                            <h1 className='text-2xl mt-6 font-semibold'>
                                {blogs.data.maintext}
                            </h1>
                            <div className='mt-6'>
                            </div>
                    </div>
                    <p>
                        {blogs.data.description}
                    </p>
                    <div className='flex justify-end'>
                        <button className='blog-btn'>
                                <Link href={'/'}>
                                Go Back...
                                </Link>     
                        </button> 
                    </div>                 
                </div>    
        </div>
    </div>
  )
}

export default Description 









// export const getStaticPaths = async () => {
//     const blogs = await GetBlogs();
  
//     const id = blogs.map((blog) => blog.id);
//     const paths = id.map((id) => ({
//       params: { id: id.toString() },
//     }));
  
//     return {
//       paths,
//       fallback: false,
//     };
//   };

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
  
//     const blogs = await GetBlogs();
//     const blog = blogs.find((blog) => blog.id === id);
  
//     return {
//       props: {
//         blog,
//       },
//     };
//   };