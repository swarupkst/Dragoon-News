import React from 'react'
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Introduction to JavaScript"
  },
  {
    _id: "2",
    title: "Learning React Basics"
  },
  {
    _id: "3",
    title: "Understanding APIs"
  }
];

const BreakingNews = () => {
  return (
    <div className='flex justify-between gap-4 items-center bg-gray-200 py-2 container mx-auto px-2'>
        <button className='btn bg-pink-800 text-white'>Breaking News</button>
        <Marquee pauseOnHover= {true} speed={100}>
            {news.map(n=> {
              return  <span>{n.title}</span>
            })}
        </Marquee>
    </div>
  )
}

export default BreakingNews
