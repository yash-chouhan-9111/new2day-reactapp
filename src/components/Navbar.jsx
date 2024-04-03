import React, { useEffect } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { useAppContext } from '../context/AppContext';
import axios from 'axios';

const Navbar = () => {
  const {showSidebar, setShowSidebar, newsData, setNewsData } = useAppContext()

  useEffect(()=>{
    const handleApiCall = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=25ff3fc65c0a409f9dbc66336fe592bf`);
        setNewsData(response.data.articles);
        console.log(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    handleApiCall();
  }, [])

  return (
    <nav  className="flex items-center justify-between fixed right-0 top-0 z-30  pl-16 lg:pl-16 md:pl-2 sm:pl-2 w-full py-2 bg-white  border-b-1 shadow">
      <div className=' px-4 flex items-center justify-between'> 
        <h4 className={`md:hidden capitalize tracking-tighter lg:block ${screen.width > 650 ? 'hidden' : 'block'} `}>news2Day</h4>
        <button className={`rounded-full p-0 text-sky-600 hover:text-sky-400 focus:text-sky-500   active:bg-slate-300/25 2xl:hidden xl:hidden lg:hidden`}onClick={()=>setShowSidebar(!showSidebar)}>
          <HiMenuAlt3 size={25}/>
        </button>
      </div>
      <ul className='flex flex-wrap items-center justify-end gap-2 text-base px-4 font-medium leading-5'>
        <li><p className='text-gray-700  '>welcome , Guest</p></li>
        <li>
          <div className='w-8 h-fit rounded-full relative'>
            <img src="https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" className='rounded-full object-cover object-center w-full h-full'/>
            <span className='w-3 h-3 border border-white rounded-full absolute bg-green-600 top-0 right-0'></span>
          </div>
        </li>
        <li className='pl-2'>
          <button type="button" className="bg-white rounded-md inline-flex focus:outline-none focus:ring-2">menu</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
