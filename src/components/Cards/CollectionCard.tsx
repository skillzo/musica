import React from "react";
import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";

interface CollectionCard {
  bgimage: HTMLImageElement | string;
  playlistName: string;
  artistName: string;
  likes: string;
}

export default function CollectionCard({
  bgimage,
  playlistName,
  artistName,
  likes,
}: CollectionCard) {
  return (
    <div className="relative rounded-2xl h-[25vh] lg:h-[20vh] bg-m-black w-full md:w-[30%] lg:w-[15%] md:m-2">
      <Image
        src={bgimage}
        alt="songimage"
        className="w-full h-[25vh] lg:h-[20vh]  absolute top-0 left-0 -z-0 opacity-30 object-cover rounded-2xl"
      />

      <div className="absolute w-full  p-4 space-y-2 bottom-0 ">
        <div>
          <p className="text-2xl font-medium ">{playlistName}</p>
          <p className="font-light text-sm">{artistName}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="font-semibold">
            <span>{likes}</span> likes
          </div>
          <div className="p-2 bg-m-yellow w-max rounded-full">
            <BsPlayFill />
          </div>
        </div>
      </div>
    </div>
  );
}
