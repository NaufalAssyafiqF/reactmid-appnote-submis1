import React from "react";
import { BiSolidArchiveIn, BiSolidArchiveOut } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const ViewNote = () => {
  return (
    <div className="mx-20 mb-20">
      <div className="max-w-[90%] mx-auto h-fit flex flex-col items-start  rounded-lg">
        <div
          className={`flex items-center rounded-t-lg border-x-2 border-t-2 border-black  w-fit p-1 bg-[#8BD3DD] `}
        >
          <p className="text-black font-comfortaa font-medium text-lg px-2 py-3">
            Active Note
          </p>
        </div>
        <div
          className="w-full h-full bg-[#D9D9D9] rounded-lg border-2 border-black px-5 pt-4 pb-12 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)]"
          style={{ borderRadius: "0px 5px 5px 5px" }}
        >
          <h1 className="text-black font-ibmPlexMono font-medium text-4xl mb-2">
            Modularization
          </h1>
          <p className="text-black font-comfortaa font-medium text-lg mb-6">
            Senin, 12 Agustus 2025
          </p>
          <p className="w-full h-full text-black text-2xl font-comfortaa font-medium ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus optio aperiam quia laborum laudantium numquam.
            Veritatis, assumenda magni, officiis labore voluptatem earum cum
            amet quasi voluptates est quae corporis commodi nam ut. Quam
            architecto harum voluptatem dolorum omnis beatae modi laborum id
            voluptatibus! Iure deleniti architecto, ipsum reiciendis blanditiis
            maxime facere modi magnam, pariatur repudiandae dolores praesentium
            assumenda et quas aut molestias quo doloribus quae sed nihil omnis
            impedit at! Recusandae veniam dolorum, debitis porro ratione eaque
            sapiente eligendi sed libero rem sequi velit labore et iure deserunt
            quis. Quasi voluptatum saepe perferendis ratione expedita ex nostrum
            vitae officia! Nisi?
          </p>
          <div className="flex justify-end gap-x-10 mt-8 me-4">
            <div className="flex items-center justify-end bg-[#FAAE2B] rounded lg p-2 border-2 border-black shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition duration-300 cursor-pointer hover:bg-[#fadb2b]">
              <BiSolidArchiveIn className="text-4xl text-black" />
            </div>
            <div className="flex items-center justify-end bg-[#FFBDC4] rounded lg p-2 border-2 border-black shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition duration-300 cursor-pointer hover:bg-[#ff8389]">
              <MdDeleteForever className="text-4xl text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
