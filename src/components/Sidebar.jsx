import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { IoNewspaper, IoNewspaperOutline, IoSettings } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { RiFileEditLine, RiFileEditFill } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import { useAppContext } from "../context/AppContext";

const Sidebar = () => {
  const {showSidebar , setShowSidebar} = useAppContext()
  const location = useLocation();

  return (
    <div className="print:hidden">
      {/* ----- main sidebar ------ */}
      <div className={`main-sidebar fixed top-0 left-0 h-screen w-16 z-50 transition-transform duration-300 ease-linear lg:translate-x-0 ${
          showSidebar ? "-translate-x-full " : "translate-x-0"
        } `}>
        <div className="flex h-full w-full flex-col items-center border-r border-slate-150 shadow bg-white justify-between px-2">
          {/* ------- Appliction Logo ------- */}
          <div>
            <div className="flex pt-4">
              <Link to="#">
                <img
                  className="size-11"
                  src="images/app-logo.svg"
                  alt="logo"
                />
              </Link>
            </div>
            {/* ------------- quick links ------------- */}
            <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-8">
              {/* -- Dashobards -- */}

              <Link
                to="/"
                className={`flex size-11 items-center justify-center rounded-lg text-primary outline-none ${
                  location.pathname === "/" && "bg-sky-600/10"
                }  transition-colors duration-200 hover:bg-sky-600/20 focus:bg-sky-600/20 active:bg-sky-600/25`}
                id="dashboard-tooltip"
              >
                <Tooltip
                  anchorSelect="#dashboard-tooltip"
                  place="right"
                  style={{
                    backgroundColor: "#E2E8F0",
                    color: "#323840",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Dashobards
                </Tooltip>
                {location.pathname === "/" ? (
                  <MdSpaceDashboard size={25} color="#0B87FF" />
                ) : (
                  <MdOutlineSpaceDashboard size={25} color="#7D7D7D" />
                )}
                {/* < /> */}
              </Link>

              {/* -- Create News Feed -- */}
              <Link
                to="/createnewsfeed"
                className={` ${
                  location.pathname === "/createnewsfeed" && "bg-sky-600/10"
                } flex size-11 items-center justify-center rounded-lg outline-none transition-colors  duration-200 hover:bg-sky-600/20 focus:bg-sky-600/10 active:bg-sky-600/25`}
                id="createNewsFeed"
              >
                <Tooltip
                  anchorSelect="#createNewsFeed"
                  place="right"
                  style={{
                    backgroundColor: "#E2E8F0",
                    color: "#323840",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Create News Feed
                </Tooltip>
                {location.pathname === "/createnewsfeed" ? (
                  <RiFileEditFill size={25} color="#0B87FF" />
                ) : (
                  <RiFileEditLine size={25} color="#7D7D7D" />
                )}
              </Link>

              {/* ------ Manage News feed ------ */}
              <Link
                to="managenewsfeed"
                className={` ${
                  location.pathname === "/managenewsfeed" && "bg-sky-600/10"
                } flex size-11 items-center justify-center rounded-lg outline-none transition-colors  duration-200 hover:bg-sky-600/20 focus:bg-sky-600/10 active:bg-sky-600/25`}
                id="manageNewsFeed"
              >
                <Tooltip
                  anchorSelect="#manageNewsFeed"
                  place="right"
                  style={{
                    backgroundColor: "#E2E8F0",
                    color: "#323840",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Manage News Feed
                </Tooltip>
                {location.pathname === "/managenewsfeed" ? (
                  <IoNewspaper size={25} color="#0B87FF" />
                ) : (
                  <IoNewspaperOutline size={25} color="#7D7D7D" />
                )}
              </Link>

              {/* ----- Performance Reports Page -----  */}
              <Link
                to="/performancereport"
                className={` ${
                  location.pathname === "/performancereport" && "bg-sky-600/10"
                } flex size-11 items-center justify-center rounded-lg outline-none transition-colors  duration-200 hover:bg-sky-600/20 focus:bg-sky-600/10 active:bg-sky-600/25`}
                id="performanceReportPage"
              >
                <Tooltip
                  anchorSelect="#performanceReportPage"
                  place="right"
                  style={{
                    backgroundColor: "#E2E8F0",
                    color: "#323840",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Performance Report
                </Tooltip>

                <GrDocumentPerformance
                  size={25}
                  color={
                    location.pathname === "/performancereport"
                      ? "#0B87FF"
                      : "#7D7D7D"
                  }
                />
              </Link>
            </div>
          </div>
          {/* ------------ Bottom Links ---------- */}
          <div className="flex flex-col items-center space-y-3 py-3 ">
            <Link
              to="#"
              className="flex size-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <IoSettings size={25} color="#7D7D7D" />
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- Sidebar Panel --> */}
      <div
        className={`sidebar-panel bg-white transition-transform duration-500 ease-linear fixed left-0 top-0 z-40  ${
          showSidebar ? "-translate-x-full " : "translate-x-0"
        } `}
      >
        <div className="flex h-screen grow flex-col bg-white pl-[5rem] border-r shadow">
          <div className="flex h-18 w-full items-center justify-between pl-4 pr-1">
            <div>
              <p className="text-lg font-bold text-slate-800 pt-5 tracking-tighter ">
                News2Day
              </p>
              <p className="text-xs capitalize italic">Local news & buzz</p>
            </div>
            <button
              className="size-7 rounded-full p-0 text-sky-600 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 xl:"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <IoIosArrowBack size={25} />
            </button>
          </div>
          {/* ----------- quick link names ---------- */}
          <div className="pt-7 px-4 flex grow flex-col space-y-5  overflow-y-auto">
            <Link
              to=""
              className={`flex items-center justify-center rounded-md p-2 text-base outline-none ${
                location.pathname === "/" && "bg-sky-600/10 text-[#0B87FF]"
              } transition-colors duration-200 hover:bg-sky-600/20 focus:bg-sky-600/20 active:bg-sky-600/25`}
            >
              Dashboards
            </Link>
            <Link
              to="/createnewsfeed"
              className={`flex items-center justify-center rounded-lg p-2 text-base outline-none ${ location.pathname === "/createnewsfeed" && "bg-sky-600/10 text-[#0B87FF]"} capitalize transition-colors duration-200 hover:bg-sky-600/20 focus:bg-sky-600/20 active:bg-sky-600/25`}
            >
              create news feed
            </Link>
            <Link
              to="managenewsfeed"
              className={`flex items-center justify-center rounded-lg p-2 text-base outline-none ${ location.pathname === "/managenewsfeed" && "bg-sky-600/10 text-[#0B87FF]"} capitalize transition-colors duration-200 hover:bg-sky-600/20 focus:bg-sky-600/20 active:bg-sky-600/25`}
            >
              Manage news feed
            </Link>
            <Link
              to="/performancereport"
              className={`flex items-center justify-center rounded-lg p-2 text-base outline-none ${ location.pathname === "/performancereport" && "bg-sky-600/10 text-[#0B87FF]"} capitalize transition-colors duration-200 hover:bg-sky-600/20 focus:bg-sky-600/20 active:bg-sky-600/25`}
            >
              performance report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
