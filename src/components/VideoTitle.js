import React from 'react'
import VideoBackground from './VideoBackground'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='font-bold text-3xl'>{title}</h1>
      <p className='w-1/4 text-xs my-3'>{overview}</p>
      <div className=''>
        <button className='bg-white  text-black py-2 px-6 my-4 rounded-lg hover:bg-opacity-80'>
       Play Now
        </button>
        <button className='bg-gray-500  text-white py-2 px-6 m-4 bg-opacity-50 rounded-lg'>
         More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle