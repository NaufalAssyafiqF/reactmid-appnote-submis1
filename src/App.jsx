import React from "react";
import ActiveNote from "./pages/ActiveNote";
import { Link, Route, Routes } from "react-router-dom";
import AddNote from "./pages/AddNote";
import ViewNote from "./pages/ViewNote";
import ArchiveNote from "./pages/ArchiveNote";
import BtnNavigation from "./components/BtnNavigation";
import LineBar from "./components/LineBar";

function App() {
  return (
    <>
      <header className="w-full">
        <div className="flex flex-col items-center justify-center text-center">
          <img src="/images/note-image.webp" alt="" className="w-[232px]" />
          <h1 className="font-comfortaa text-5xl text-[#6f6f6f] mb-4">
            My Noteapp
          </h1>
          <h2 className="font-comfortaa text-5xl text-black">
            Smart Notes, <br />
            High Productivity.
          </h2>
          <div className="flex gap-x-10 mt-8 font-ibmPlexMono">
            <BtnNavigation path="/" text="Active Note" />
            <BtnNavigation path="/archive" text="Archive Note" />
          </div>
        </div>

        <LineBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ActiveNote />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/view/:id" element={<ViewNote />} />
          <Route path="/archive" element={<ArchiveNote />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

{
  /* <button class="px-6 py-2 bg-[#FAAE2B] text-black font-mono font-bold rounded-sm border-2 border-black hover:bg-[#fadb2b] hover:text-gray-900 transition duration-300 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
        Retro Cassette
      </button> */
}
