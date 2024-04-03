import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";

const DetailFeed = () => {
  const {newsData} = useAppContext()
  const {id} = useParams();
  const news = newsData.find((news) => newsData.indexOf(news) === parseInt(id));
  return (
    <div className='pt-16  px-3 lg:pl-20 pl-16 md:px-3 sm:px-3 bg-gray-200 pb-4'>
        <div className='flex justify-between items-center w-full'>
            <div className='bg-slate-50 p-6 '> 
              <div className='w-full h-full '>
                <img src={news.urlToImage} alt="article_image" className='w-full h-96 object-cover object-center rounded' />
              </div>
              <div>
                <h1 className='text-5xl py-3'>{news.title}</h1>
              </div>
              <div className='flex justify-between gap-2 border-b-2 pb-2'>
                <p>{news.publishedAt}</p>
                <p>{news.category === null ? 'General' : news.category}</p>
                <p>
                  - Author:{news.author !==null? ` ${news.author}`:'Not Available'}
                </p>
              </div>
              <div className='text-lg text-gray-600 font-medium py-4'>
                <p> "{news.description}"</p>
              </div>
              <div className='text-md border-b-2 pb-4 mb-2'>
                <p>{news.content}</p>
              </div>

              <div className='flex items-center justify-left gap-4 px-2 pt-2'>
                <button><BsHandThumbsUp size={25}/></button>
                <button><BsHandThumbsDown size={25}/></button>

              </div>

            </div>
        </div>
    </div>
  )
}

export default DetailFeed
