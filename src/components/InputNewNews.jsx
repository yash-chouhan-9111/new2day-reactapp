import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useAppContext } from "../context/AppContext";

const InputNewNews = ({ close }) => {
  const { newsData, setNewsData } = useAppContext();

  const addNews = (news) => {
    // Add the new news item to the beginning of the newsData array
    setNewsData([news,...newsData]);
  };

  const handleAddNewsSubmit = (event) => {
    event.preventDefault();
    // Create a new FormData object from the form element
    const formData = new FormData(event.target);
    const news = {
      id: new Date().getTime().toString(),
      title: formData.get("title"),
      publishedAt: new Date().getTime().toString(),
      content: formData.get("content"),
      description: formData.get('description'),
      category: formData.get("category"),
      status: formData.get("status"),
      urlToImage: formData.get('file-dropbox')
    };
    // Create a new newsData object containing the data from the form
    addNews(news);
    event.target.reset();
    close(false)
  };

  return (
    <div className="fixed top-0 left-0 z-50 py-10 w-screen flex justify-center items-center h-screen backdrop-blur-sm bg-gray-50/80 overflow-y-scroll">
      <div className="bg-white border-4 rounded-lg shadow relative m-10 max-w-3xl md:mt-5">
        <div className="flex items-start justify-between px-5 pt-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Add Article</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
            onClick={() => close(false)}
          >
            <IoCloseOutline size={25} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handleAddNewsSubmit} >
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="News title”"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="description"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="News Description"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                >
                  <option value="--">-Select Category-</option>
                  <option value="Politics">Politics</option>
                  <option value="Sports">Sports</option>
                  <option value="Culture">Culture</option>
                  <option value="Business">Business</option>
                  <option value="Science">Science</option>
                  <option value="General">General</option>
                  <option value="Business">Technology</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Status
                </label>
                <select
                  name="status"
                  id="status"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                >
                  <option value="--">- Status -</option>
                  <option value="Published">Published</option>
                  <option value="Drafts">Drafts</option>
                </select>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="content"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  rows="6"
                  name='content'
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="News content......."
                ></textarea>
              </div>
              <div className="w-96">
                <label
                  className="flex cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                  tabIndex="0"
                >
                  <span htmlFor="file-dropbox" className="flex items-center space-x-2">
                    <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                      <path
                        d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      ></path>
                      <path
                        d="M80,128a80,80,0,1,1,144,48"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      ></path>
                      <polyline
                        points="118.1 161.9 152 128 185.9 161.9"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      ></polyline>
                      <line
                        x1="152"
                        y1="208"
                        x2="152"
                        y2="128"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      ></line>
                    </svg>
                    <span className="text-xs font-medium text-gray-600">
                      Drop files to Attach, or
                      <span className="text-blue-600 underline">browse</span>
                    </span>
                  </span>
                  <input id="dropbox" name="file-dropbox" type="file" accept="image/*,video/*" className="sr-only" />
                </label>
              </div>
            </div>

              <div className="px-6 pt-6 pb-1 border-t border-gray-200 rounded-b">
                <button
                  className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Save all
                </button>
              </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default InputNewNews;
