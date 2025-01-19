import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CardNote from "../components/CardNote";
import AddButton from "../components/AddButton";
import { getArchivedNotes } from "../utils/local-data";

const ArchiveNote = () => {
  const [activeNotes, setActiveNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  console.log(keyword);

  useEffect(() => {
    if (!keyword) {
      setActiveNotes(getArchivedNotes());
    }

    const searchNote = getArchivedNotes().filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    setActiveNotes(searchNote);
  }, [keyword]);

  return (
    <div className="mx-20 mb-20">
      <SearchBar setKeyword={setKeyword} />
      <div className="flex flex-wrap gap-x-8 gap-y-8">
        {activeNotes.map((note) => (
          <CardNote key={note.id} note={note} />
        ))}
        {activeNotes.length == 0 && <p className="text-center w-full font-ibmPlexMono font-medium">No Note Found</p>}
      </div>
      <AddButton />
    </div>
  );
};

export default ArchiveNote;
