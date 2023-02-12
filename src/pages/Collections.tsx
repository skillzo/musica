import Image from "next/image";
import React from "react";
import { BsPlayFill } from "react-icons/bs";
import songImage from "@/assets/images/songimage2.png";
import CollectionCard from "@/components/Cards/CollectionCard";
export default function Collections() {
  const playlist = [
    {
      key: 1,
      bgimage: songImage,
      playlistName: "Limits",
      artistName: "John Watts",
      likes: "2.4m",
    },
    {
      key: 2,
      bgimage: songImage,
      playlistName: "Limits",
      artistName: "John Watts",
      likes: "2.4m",
    },
    {
      key: 3,
      bgimage: songImage,
      playlistName: "Limits",
      artistName: "John Watts",
      likes: "2.4m",
    },
  ];

  return (
    <div className="space-y-[3em] ">
      <div className="flex items-center justify-between md:w-[40%] lg:w-[20%] ">
        <div className="bg-m-yellow text-slate-700 p-2 rounded-full text-center w-[49%]">
          My Collection
        </div>
        <div className="border border-[#646463] text-[#646463] p-2 rounded-full text-center w-[49%]">
          Likes
        </div>
      </div>

      {/* collections */}
      <div className="space-y-8 md:flex flex-wrap  md:space-y-0  ">
        {playlist.map((item) => {
          return (
            <CollectionCard
              key={item.key}
              bgimage={item.bgimage}
              playlistName={item.playlistName}
              artistName={item.artistName}
              likes={item.likes}
            />
          );
        })}
      </div>
    </div>
  );
}
