import React from 'react'

const content = [
    { mainTitle: 'Blogs for Learning'},
    { subTitle: 'What is Serverless?'},
    { author: 'Unknown'},
    { description: 'Serverless is a way of building and running applications and services without having to worry about infrastructure. With a serverless model, you can build and deploy your applications without having to provision, scale, or maintain servers. Instead, you can focus on writing and deploying code, and the infrastructure required to run it is managed automatically.'}
]

const Content = () => {
  return (
    <>
        <div className='flex justify-center mt-5'>
            {content.map((content, i) => (
                <h1 key={i} className='text-3xl'>
                    {content.mainTitle}
                </h1>
            ))}
            
        </div>
        <div className='mt-10'>
            {content.map((content, i) => (
                <h2 key={i}className='flex justify-center text-xl font-bold'>
                    {content.subTitle}
                </h2>
            ))}
            
                <h6 className='flex justify-center text-xs mt-3'>Written by:</h6>
            {content.map((content, i) => (
                <h3 key={i} className='flex justify-center text-lg font-semibold'>
                     {content.author}
                </h3>
            ))}
            
        </div>
        <div>
            {content.map((content, i) => (
                <div key={i} className='flex justify-center indent-10 mx-auto mt-3 w-3/4 md:w-1/3'>
                <p>
                    {content.description}
                </p>
            </div>
            ))}
        </div>
        
        
    </>
  )
}

export default Content
