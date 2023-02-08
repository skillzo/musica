import Image from "next/image";
import React from "react";
import AlbumCard from "./AlbumCard";
import AlbumCardLg from "./AlbumCardLg";

export default function TopCharts() {
  return (
    <>
      <div className="lg:hidden overflow-x-scroll">
        <div className="w-max space-x-4 flex items=center ">
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </div>
      </div>

      <div className="hidden lg:block space-y-4 w-[80%]">
        <AlbumCardLg />
        <AlbumCardLg />
        <AlbumCardLg />
      </div>
    </>
  );
}
