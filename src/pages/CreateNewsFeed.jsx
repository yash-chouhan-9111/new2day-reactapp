import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { IoIosAdd } from "react-icons/io";
import InputNewNews from "../components/InputNewNews";
import { useNavigate } from "react-router-dom";

const CreateNewsFeed = () => {
  const {newsData } =useAppContext()
  const [showInputForm, setShowInputForm] = useState(false)
  const navigate = useNavigate();
  // navigate to the page of detail view of article
  const handleListClick = (event) => {
    const listItemId = event;
    // console.log(listItemId);
    navigate(`/detailfeed/${listItemId}`);
  };


  return (
    <section className={`create-newsfeed pt-16  px-3 lg:pl-16 md:px-3 sm:px-3 bg-gray-200 ${newsData===0? 'h-screen': ''}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl px-3 pb-2 lg:text-4xl font-semibold capitalize">create news feed</h1>
        <div>
          <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-3 text-center inline-flex items-center me-2 mb-2" onClick={()=>setShowInputForm(true)} >
          <IoIosAdd size={25}/>
            Add New Article
          </button>
        </div>
      </div>
      <div className="flex flex-wrap flex-col lg:pl-4 pr-2 md:pl-2 sm:pl-2 pl-2 pb-3 gap-4 space-y-2">
        <ul>
          {
            newsData.length===0 ? (
            <div className="flex justify-center items-center h-screen">
              <div className="rounded-full h-20 w-20 pb-10 bg-violet-800 animate-ping"></div>
            </div>
          ):
            newsData.map((news, index)=>(
              <li key={index} className="pb-2">
                <div className="md:max-w lg:w-full  p-6 bg-white border border-gray-200 rounded-lg  shadow ">
                  <div className="flex items-left lg:flex-row flex-col-reverse md:flex-col gap-2">
                    <div className="text-left">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 d">
                          {/* {truncateText(news.title, 8)}*/}
                          {news.title}
                        </h5>
                      </a>

                      <p className="text-sm py-1 text-gray-600">{news.publishedAT}</p>

                      <p className="mb-3 font-normal text-gray-700">
                        {/* {truncateText(news.description, 15)} */}
                        {news.description}
                      </p>
                      
                      <button
                        onClick={()=>handleListClick(newsData.indexOf(news))}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                    </div>

                    <div >
                      <img src={news.urlToImage} alt="news_image" className="rounded-md" />
                    </div>

                  </div>
                  
                </div>
              </li>
            ))
          } 

        </ul>
      </div>

      {
        showInputForm && <InputNewNews close={setShowInputForm} />
      }
    </section>
  );
};

export default CreateNewsFeed;
