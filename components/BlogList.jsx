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
    <div>
        <div className='blog-box'>
            {bloglist.map((blog) => (
                <div className='flex justify-start list-box px-10'
                key={blog.id}
                >
                    <div className='flex-col'>
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
                                <Link href={'/BlogContent'}>
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