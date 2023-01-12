import React from 'react'
import { useEffect, useState } from "react";
import Link from 'next/link';

const cmsURL = process.env.CMS_BASE_URL

const BlogContent = () => {

    const [blogContent, setBlogContent] = useState([]);
        
        useEffect(() => {
            (async () => {
                try {
                    const valuesRaw = await fetch (`${cmsURL}/api/bien-blog-cms`, {
                        method: 'GET',
                    })
                    const values =await valuesRaw.json();
                    setBlogContent(values.data);
                } catch (ex) {
                    console.error(ex.stack);
                }
            })();
        }, [])

  return (
    <div>
        <div className='content-box'>
            {blogContent.map((blog) => (
                <div className='list-box p-20' key={blog.id}>
                    <div className='flex-col'>
                            <h1 className='text-2xl mt-6 font-semibold'>
                                {blog.maintext}
                            </h1>
                            <div className='mt-6'>
                            </div>
                    </div>
                    <p>
                        {blog.description}
                    </p>
                    <div className='flex justify-end'>
                        <button className='blog-btn'>
                                <Link href={'/'}>
                                Go Back...
                                </Link>     
                        </button> 
                    </div>
                    
                </div>
            ))}
            
        </div>
        
    </div>
  )
}

export default BlogContent