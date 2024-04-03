import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 relative text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      
      {/* <!--Copyright section--> */}
      <div className="bg-black/5 p-6 text-center">
        <span>© 2023 Copyright:</span>
        <Link className="font-semibold" href="https://tw-elements.com/">
          News2Day
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
