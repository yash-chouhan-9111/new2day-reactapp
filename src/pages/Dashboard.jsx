import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { FaUsers } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const Dashboard = () => {


  const chartData = {
          
    series: [{
        name: "News",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Content Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },
  
  
  };

  const userActivities = [
    {
        user_id: 1,
        username: "john_doe",
        activity: "visited homepage",
        timestamp: "2024-04-02T10:15:00Z",
        article_id: 12333
    },
    {
        user_id: 2,
        username: "jane_smith",
        activity: "read article",
        article_id: 12345,
        timestamp: "2024-04-01T14:30:00Z"
    },
    {
        user_id: 3,
        username: "alex_jones",
        activity: "commented on article",
        article_id: 12346,
        timestamp: "2024-03-31T08:45:00Z"
    },
    {
        user_id: 4,
        username: "emily_wang",
        activity: "shared article",
        article_id: 12347,
        timestamp: "2024-03-30T18:20:00Z"
    },
    {
        user_id: 5,
        username: "mike_smith",
        activity: "visited homepage",
        timestamp: "2024-03-29T12:05:00Z"
    },
    {
        user_id: 6,
        username: "sarah_jackson",
        activity: "read article",
        article_id: 12348,
        timestamp: "2024-03-28T17:55:00Z"
    },
    {
        user_id: 7,
        username: "david_brown",
        activity: "visited homepage",
        timestamp: "2024-03-27T09:10:00Z"
    },
    {
        user_id: 8,
        username: "olivia_garcia",
        activity: "read article",
        article_id: 12349,
        timestamp: "2024-03-26T22:45:00Z"
    }
];

const topNewsData = [
  { id: 1, title: 'Breaking News', author: 'John Doe', views: 1000 },
  { id: 2, title: 'Exclusive Interview', author: 'Jane Smith', views: 900 },
  { id: 3, title: 'New Discoveries', author: 'Alex Johnson', views: 850 },
  { id: 4, title: 'Tech Updates', author: 'Emily Wang', views: 800 },
  { id: 5, title: 'Market Insights', author: 'Mike Smith', views: 750 },
  { id: 6, title: 'Health Tips', author: 'Sarah Brown', views: 700 },
  { id: 7, title: 'Travel Guide', author: 'David Jones', views: 650 },
  { id: 8, title: 'Cooking Recipes', author: 'Olivia Garcia', views: 600 },
];

const topCommentedNews = [
  { id: 1, title: 'Breaking News: COVID-19 Vaccine Approval', author: 'John Doe', comments: 20 },
  { id: 2, title: 'Exclusive Interview: Elon Musk on Future of Space Exploration', author: 'Jane Smith', comments: 15 },
  { id: 3, title: 'New Discoveries: Archaeological Site Unearthed in Egypt', author: 'Alex Johnson', comments: 30 },
  { id: 4, title: 'Tech Updates: Latest Developments in Artificial Intelligence', author: 'Emily Wang', comments: 25 },
  { id: 5, title: 'Market Insights: Trends in Sustainable Investing', author: 'Mike Smith', comments: 10 },
  { id: 6, title: 'Health Tips: 10 Habits for a Healthy Lifestyle', author: 'Sarah Brown', comments: 35 },
  { id: 7, title: 'Travel Guide: Hidden Gems to Explore in Europe', author: 'David Jones', comments: 18 },
  { id: 8, title: 'Cooking Recipes: Delicious Vegan Recipes for Every Occasion', author: 'Olivia Garcia', comments: 22 },
];

const topSharedNews = [
  { id: 1, title: 'COVID-19 Vaccine Breakthrough', author: 'John Doe', shares: 500 },
  { id: 2, title: "Elon Musk's Exclusive Interview on SpaceX", author: 'Jane Smith', shares: 450 },
  { id: 3, title: 'Archaeological Discoveries in Egypt', author: 'Alex Johnson', shares: 400 },
  { id: 4, title: 'Latest Advances in Artificial Intelligence', author: 'Emily Wang', shares: 350 },
  { id: 5, title: 'Trends in Sustainable Investing', author: 'Mike Smith', shares: 300 },
  { id: 6, title: '10 Habits for a Healthy Lifestyle', author: 'Sarah Brown', shares: 250 },
  { id: 7, title: 'Hidden Gems to Explore in Europe', author: 'David Jones', shares: 200 },
  { id: 8, title: 'Delicious Vegan Recipes for Every Occasion', author: 'Olivia Garcia', shares: 150 },
];


function sortViewListDescending(newsArray) {
  return newsArray.slice().sort((a, b) => b.views - a.views);
}
function sortSharesListDescending(newsArray) {
  return newsArray.slice().sort((a, b) => b.shares - a.shares);
}

function sortCommentListDescending(newsArray) {
  return newsArray.slice().sort((a, b) => b.comments - a.comments);
}

const sortedtopnews  = sortViewListDescending(topNewsData);
 
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
  



  return (
    <div className='pt-16 bg-gray-100 px-5 w-full pb-10'>
      {/* ---------- statistics ------------ */}
      <div className='flex lg:flex-row-reverse justify-between md:flex-col flex-col lg:items-center columns-3 sm:flex-col'> 
        <div className='flex items-center justify-around flex-wrap gap-4'>
          <div className='max-w-64 border rounded-md p-3 bg-slate-200 gap-20 flex flex-row items-center  justify-between shadow'>
            <div>
              <p className='text-4xl font-semibold '>25</p>
              <p className='text-lg lg:text-lg md:text-sm  capitalize pt-2'>total users</p>
            </div>
            <div className='text-green-600 '>
              <FaUsers size={30}/>
            </div>
          </div>

          <div className='max-w-96 border rounded-md p-3 bg-slate-200 items-center gap-20 flex flex-row justify-between shadow'>
            <div>
              <p className='text-4xl font-semibold '>25</p>
              <p className='lg:text-lg md:text-sm capitalize pt-2'>total news</p>
            </div>
            <div className='text-indigo-600 '>
              <FaRegNewspaper size={30}/>
            </div>
          </div>
          <div className='max-w-72   border rounded-md p-3 bg-slate-200 items-center gap-20 flex flex-row justify-between shadow'>
            <div>
              <p className='text-4xl font-semibold '>45%</p>
              <p className='lg:text-lg md:text-sm capitalize pt-2'>performance</p>
            </div>
            <div className='text-red-600 '>
              <FaArrowTrendUp size={30}/>
            </div>
          </div>
        </div>

        {/* -------- content statistics ----------- */}
        <div className='lg:w-full mt-8 ml-2 lg:ml-16 md:mx-2 sm:mx-2 p-4 bg-white rounded-md shadow overflow-hidden' >
          <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
        </div>

      </div>

      <div className='flex items-center justify-between flex-col lg:flex-row sm:flex-col md:flex-col lg:ml-14'>
          {/* -------- user activity --------- */}
      <div className='bg-white w-full mt-4 rounded-lg text-[#64748b] flex flex-col mx-2 min-w-1 break-words relative pb-4 col-span-12 sm:col-span-6 shadow mb-4 ' >
        <div className='my-3 flex items-center justify-between px-4 sm:px-5'>
          <h2 className='font-medium tracking-wide text-slate-700 capitalize'>user activity</h2>
          <button className='hover:text-sky-600 font-semibold text-sky-800 hover:underline'>view all</button>
        </div>

        {/* ------------- list of user activity ---------- */}
        <ul className='sm:px-5 px-4 py-2'>
          {
            userActivities.map((action, index)=>(
            <li key={index}>
              <div className='flex items-start justify-between py-2 gap-1 border-b'>
                <div className='flex items-center space-x-5'>
                  <div className='w-10 h-10'>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className='w-full h-full  object-cover rounded-full object-center ' />
                  </div>
                  <div>
                    <p className='capitalize text-base font-semibold '>{action.username} </p>
                    <p className='normal-case'>{action.activity}</p>
                  </div>

                </div>

                <div>
                  <p className='text-base font-base'>{formatDate(action.timestamp)}</p>
                  <p className='text-right'>Article id : {action.article_id}</p>
                </div>
              </div>
            </li>

            ))
          }
        </ul>

      </div>

      {/* ----------- top performed news -------- */}

      <div className='bg-white w-full mt-4 rounded-lg text-[#64748b] flex flex-col mx-2 min-w-1 break-words relative pb-4 col-span-12 sm:col-span-6 shadow mb-4' >
        <div className='my-3 flex items-center justify-between px-4 sm:px-5'>
          <h2 className='font-medium tracking-wide text-slate-700 capitalize'>top performed news</h2>
          <button className='hover:text-sky-600 font-semibold text-sky-800 hover:underline'>view all</button>
        </div>
        {/* ------------- list of top performed news ---------- */}
        <ul className='sm:px-5 px-4 py-2'>
          {
            sortedtopnews.map((action, index)=>(
            <li key={index}>
              <div className='flex items-start justify-between py-1 gap-1 border-b'>
                <div className='flex items-center space-x-5'>
                  <div>
                    <p className='capitalize text-lg font-semibold '>{action.title} </p>
                    <p className='normal-case italic'>{action.author}</p>
                  </div>

                </div>

                <div>
                  <p className='text-lg font-base font-semibold'>{action.views}</p>
                  <p className='text-right'>Views</p>
                </div>
              </div>
            </li>

            ))
          }
        </ul>

      </div>
      </div>

      
      <div className='flex items-center justify-between flex-col lg:flex-row sm:flex-col md:flex-col lg:ml-14'>
          {/* ---------- top commented news -------- */}
      
      <div className='bg-white w-full mt-4 rounded-lg text-[#64748b] flex flex-col mx-2 min-w-1 break-words relative pb-4 col-span-12 sm:col-span-6 shadow mb-4' >
        <div className='my-3 flex items-center justify-between px-4 sm:px-5'>
          <h2 className='font-medium tracking-wide text-slate-700 capitalize'>top commented news</h2>
          <button className='hover:text-sky-600 font-semibold text-sky-800 hover:underline'>view all</button>
        </div>
        {/* ------------- list of top commented news ---------- */}
        <ul className='sm:px-5 px-4 py-2'>
          {
            sortCommentListDescending(topCommentedNews).map((action, index)=>(
            <li key={index}>
              <div className='flex items-start justify-between py-1 gap-1 border-b'>
                <div className='flex items-center space-x-5'>
                  <div>
                    <p className='capitalize text-lg font-semibold break-words'>{action.title} </p>
                    <p className='normal-case italic'>{action.author}</p>
                  </div>

                </div>

                <div>
                  <p className='text-lg font-base font-semibold'>{action.comments}</p>
                  <p className='text-right'>Comments</p>
                </div>
              </div>
            </li>

            ))
          }
        </ul>

      </div>

      {/* ------------ top shared news --------- */}
      
      <div className='bg-white w-full mt-4 rounded-lg text-[#64748b] flex flex-col mx-2 min-w-1 break-words relative pb-4 col-span-12 sm:col-span-6 shadow mb-4' >
        <div className='my-3 flex items-center justify-between px-4 sm:px-5'>
          <h2 className='font-medium tracking-wide text-slate-700 capitalize'>top shared news</h2>
          <button className='hover:text-sky-600 font-semibold text-sky-800 hover:underline'>view all</button>
        </div>
        {/* ------------- list of top shared news ---------- */}
        <ul className='sm:px-5 px-4 py-2'>
          {
            sortSharesListDescending(topSharedNews).map((action)=>(
            <li key={action.id}>
              <div className='flex items-start justify-between py-1 gap-1 border-b'>
                <div className='flex items-center space-x-5'>
                  <div>
                    <p className='capitalize text-lg font-semibold break-words'>{action.title} </p>
                    <p className='normal-case italic'>{action.author}</p>
                  </div>

                </div>

                <div>
                  <p className='text-lg font-base font-semibold'>{action.shares}</p>
                  <p className='text-right'>Shared</p>
                </div>
              </div>
            </li>

            ))
          }
        </ul>

      </div>
      </div>
      


    </div>
  )
}

export default Dashboard;
