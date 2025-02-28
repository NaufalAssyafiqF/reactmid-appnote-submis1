import React from "react";
import { useLocation } from "react-router-dom";

const LineBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="mx-20 mt-20 mb-10">
      <p
        className={`max-w-[170px] py-3 text-center font-medium text-lg  text-black font-ibmPlexMono rounded-t-lg border-x-2 border-t-2 border-black  
          ${pathname === "/" && "bg-[#8BD3DD]"}
          ${pathname === "/add" && "bg-[#8BD3DD]"}
          ${pathname === "/archive" && "bg-[#FAAE2B]"}
          ${pathname.includes("/view") && "bg-[#FFBDC4]"}`}
      >
        {pathname === "/" && "Active Note"}
        {pathname === "/archive" && "Archive Note"}
        {pathname === "/add" && "Add Note"}
        {pathname.includes("/view") && "View Note"}
      </p>
      <hr className=" border-2 border-black rounded-full" />
    </div>
  );
};

export default LineBar;
