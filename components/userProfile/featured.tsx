import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/navigation";

import { Autoplay, Navigation} from "swiper";
import Image from 'next/image'
import {AiFillHeart} from 'react-icons/ai'
import { useRouter } from "next/router";



type Props = {
  queryPosts : any
}

const Featured = ({queryPosts}: Props) => {
    const router = useRouter()
    const postHandler = (id : string) => {
        router.push(`/#${id}`)
    }
      
       
  return (
    <div  className="bg-white shadow border border-gray-300 rounded-lg py-2 flex flex-col space-y-3 relative">
        <h1 className="text-xl px-5">Featured</h1>
    <Swiper
      
      
      spaceBetween={10}
      grabCursor={false}
      // centeredSlides={true}

      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      
      
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
     
      modules={[Autoplay, Navigation]}
      className="w-full h-full mx-auto featuredSlider"
     
    >
      {queryPosts.map((post : any, index : number) => (
           <SwiperSlide key={post.id} onClick={() => postHandler(post.id)} className="border rounded p-1 overflow-hidden flex flex-col cursor-pointer space-y-1 justify-start items-start text-start shadow
           ">
             <p className="text-sm text-gray-400 text-start">Post- {index + 1}</p>
             <p className="text-sm line-clamp-2 text-start">{post.data().content}</p>
             {post.data().media ? <Image src={post.data().media} alt="p" width={300} height={300} className="w-full h-32 object-fill" /> : <div className="w-full h-32"></div>}
             <div className="text-xs flex items-center space-x-1">
                 <p className="text-sm flex items-center space-x-0"> <AiFillHeart className="text-sm text-red-600" /> <span className="text-xs">19</span></p><span>.</span><p>14 comments</p>
             </div>
           </SwiperSlide>
      ))}
     

      


     

     


      
      
      
    </Swiper>
  </div>
  )
}

export default Featured