import React from "react";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "../context/AppContext";

const InputNews = () => {
  const { toggleSubmit, isEdit, newsData, setNewsData, setToggleSubmit } =
    useAppContext();

  const handleAddNewsFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (toggleSubmit) {
      setNewsData(
        newsData.map((news) => {
          if (newsData.indexOf(news) === isEdit) {
            const newNewsData = {
              id: new Date().getTime().toString(),
              title: formData.get("title"),
              publishedAt: new Date().toString(),
              content: formData.get("content"),
              category: formData.get("category"),
              status: formData.get("status"),
            };
            return { ...newNewsData, ...news };
          }
          setToggleSubmit(false);
          return news;
        })
      );
    }
    event.target.reset();
  };

  return (
    <div
      className={`input-news w-screen h-screen fixed top-0 left-0 flex items-center justify-center py-16 backdrop-blur-md bg-white/30 z-50 ${
        toggleSubmit ? "block" : "hidden"
      } `}
    >
      <form
        onSubmit={handleAddNewsFormSubmit}
        className="text-slate-900  bg-slate-200 px-3 py-4 shadow-lg rounded-lg w-2/5 flex flex-col flex-wrap lg:grow-0 md:grow shrink border"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold ">Add a news article</h2>
          <div onClick={() => setToggleSubmit(false)}>
            <IoClose size={25} />
          </div>
        </div>
        <div className="p-2 rounded-lg">
          <input
            className="outline-none focus:outline-none w-full p-2 rounded-md"
            id="title"
            name="title"
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="mt-2 p-2 rounded-md">
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            placeholder="Content"
            className="outline-none focus:outline-none w-full p-2 rounded-md"
          ></textarea>
        </div>
        <div className="mt-2 p-2 rounded-md">
          <select name="category" id="category" className="px-2 py-1 rounded">
            <option value="--">Choose category</option>
            <option value="Politics">Politics</option>
            <option value="Sports">Sports</option>
            <option value="Culture">Culture</option>
            <option value="Business">Business</option>
            <option value="Science">Science</option>
            <option value="General">General</option>
            <option value="Business">Technology</option>
          </select>
        </div>
        <div className="mt-2 px-2 rounded-md">
          <select name="status" id="status" className="px-2 py-1 rounded">
            <option value="0">Status</option>
            <option value="Published">Published</option>
            <option value="Drafts">Drafts</option>
          </select>
        </div>
        <div className="mt-2 rounded-md">
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*,video/*"
            className="px-2 py-1 rounded"
          />
        </div>
        <div className="px-2">
          <button
            className="w-full py-2 my-2 text-white text-center text-base bg-green-600 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputNews;
