import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import InputNews from "../components/InputNews";

const ManageNewsFeed = () => {
  const {newsData, setNewsData, setToggleSubmit, editNews } = useAppContext()
  const navigate = useNavigate()
  
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    const truncatedText = words.slice(0, limit).join(" ");
    return truncatedText + (words.length > limit ? "..." : "");
  };

  const detailNewsView= (link)=>{
    navigate(`/detailfeed/${link}`)
  }

  const removeNews = (id) => {
    const updatedNews = [...newsData];
    updatedNews.splice(id, 1);
    setNewsData(updatedNews);
  };

  const formatDate = (timeStamp) => {
    const formattedDate = new Date(timeStamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC'
    });
    return formattedDate;
  };

  const editArticle =(e)=>{
    setToggleSubmit(true)
    editNews(e)    
  }

  return (
    <section className="manage-newsfeed pt-16 lg:pr-4 px-3 md:px-3 bg-gray-100 lg:pl-20">
      <h1 className=" pb-3 text-4xl font-semibold">Manage  News Feed</h1>
      <div className="relative overflow-x-auto border shadow mb-2 p-2 rounded-lg bg-slate-50">
        <table
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          aria-label="Table"
        >
          <thead className="text-xs text-gray-700 uppercase bg-slate-200 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                news title
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                creation date
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
          {
              newsData.length === 0 ? (
                <tr className="flex items-center justify-start py-1">
                  <th className="text-base text-slate-900 px-1">Loading...</th>
                </tr>) : newsData.map((news, index)=>(
                  <tr className="bg-white border-b text-slate-950" key={index}>
                    <th
                      scope="row"
                      onClick={()=>detailNewsView(newsData.indexOf(news))}
                      className="px-2 font-medium text-gray-900 break-words truncate hover:underline cursor-pointer "
                    >
                      {truncateText(news.title, 5)}
                      {/* {news.title} */}
                    </th>
                    <td className="px-6">{news.category ? (news.category): 'General'}</td>
                    <td className="px-6">
                      {/* {formatDate(news.publishedAt)} */}
                      {news.publishedAt}
                      </td>
                    <td className="px-6">{news.status ? (news.status): 'Published'}</td>
                    <td className="px-6 py-3 flex gap-2">
                      <button onClick={()=>editArticle(index)} className="text-blue-700 hover:text-blue-500 focus:text-blue-900">
                        <FiEdit size={22} />
                      </button>
                      <button className="text-red-600 hover:text-red-500 focus:text-red-700" onClick={()=>removeNews(index)}>
                        <MdDeleteForever size={26} />
                      </button>
                    </td>
                  </tr>
                ))
            }
            
          </tbody>
        </table>

        {/* <div>pagination component</div> */}
      </div>
      <InputNews/>
    </section>
  );
};

export default ManageNewsFeed;
