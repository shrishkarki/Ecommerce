import React, { useState } from 'react'

const MyImages = ({imgs=[{url:""}]}) => {
    const [mainImage,setMainImage]=useState(imgs[0])
  return (
    <>
    <div className='grid grid-rows-2  lg:grid-cols-3 items-center sm:gap-5 justify-items-center'>
        <div className='flex lg:flex-col'>
        {
        imgs && imgs.map((currEle,index)=>{
            return <figure className='mx-1 sm:mx-2 lg:mx-0'>
            <img src={currEle.url} alt={currEle.filename} key={index} className='w-full h-16 sm:h-32 md:h-40  lg:h-auto sm:my-2' onClick={()=>setMainImage(currEle)}/>
            </figure>
        })
    }
        </div>

        {/* 2nd col */}
        <div className="main-screen  lg:col-span-2 h-36 w-64 sm:h-40 sm:w-72 md:h-48 md:w-80  lg:h-44 lg:w-64 xl:h-60  xl:w-80 ">
        <img src={mainImage.url} alt={mainImage.filename}  className='h-full w-full'/>
      </div>

        <div>

        </div>
    
    </div>
   
    </>
  )
}

export default MyImages