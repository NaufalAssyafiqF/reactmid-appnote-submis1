import React from "react";
import ActiveNote from "./pages/ActiveNote";
import { Link, Route, Routes } from "react-router-dom";
import AddNote from "./pages/AddNote";
import ViewNote from "./pages/ViewNote";
import ArchiveNote from "./pages/ArchiveNote";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<ActiveNote />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/view/:id" element={<ViewNote />} />
          <Route path="/archive" element={<ArchiveNote />} />
          <Route path="*" element={<NotFound />} />
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
