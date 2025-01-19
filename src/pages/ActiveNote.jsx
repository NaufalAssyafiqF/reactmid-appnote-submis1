import React from "react";
import SearchBar from "../components/SearchBar";
import CardNote from "../components/CardNote";
import AddButton from "../components/AddButton";

const ActiveNote = () => {
  return (
    <div className="mx-20 mb-20">
      <SearchBar />
      <div className="flex flex-wrap gap-x-5 gap-y-5">
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
      </div>
      <AddButton />
    </div>
  );
};

export default ActiveNote;
