import React from 'react'
import { useEffect, useState } from "react";
import Link from 'next/link';

const cmsURL = process.env.CMS_BASE_URL

const BlogList = () => {

    const [bloglist, setBlogList] = useState([]);

        useEffect(() => {
            (async () => {
                try {
                    const valuesRaw = await fetch (`${cmsURL}/api/bien-blog-cms`, {
                        method: 'GET',
                    })
                    const values = await valuesRaw.json();
                    setBlogList(values.data);
                } catch (ex) {
                    console.error(ex.stack);
                }
            })();
        }, []);


  return (
    <div className=''>
        <div className='blog-box grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
            {bloglist.map((blog) => (
                <div className='list-box-1'
                key={blog.id}
                >
                    <div className=''>
                        <h1 className='text-2xl mt-6 font-semibold'>
                            {blog.maintext}
                        </h1>
                        <div className='mt-6'>
                            <p className='italic'>
                                {blog.subtext}
                            </p>
                        </div>
                        <div className=''>
                            <button className='blog-btn'>
                                <Link key={blog.id} href={'/blogcontents/' + blog.id}>
                                Click to Learn more...
                                </Link>     
                            </button>      
                        </div>
                               
                    </div>  
                </div>
            ))}
        </div>
    </div>
  )
}

export default BlogList