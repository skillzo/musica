import React from "react";
import SongCard from "./SongCard";

function NewReleases() {
  return (
    <div className=" overflow-x-auto">
      <div className="w-max space-x-8 lg:space-x-12 flex items-center ">
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </div>
    </div>
  );
}

export default NewReleases;
