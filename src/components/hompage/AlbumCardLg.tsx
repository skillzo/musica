import React from "react";
import Image from "next/image";
import SongImage from "../../assets/images/songimage.png";
import { BsHeart } from "react-icons/bs";

export default function AlbumCardLg() {
  return (
    <div className="p-[1em] flex justify-between items-center">
      <div className="flex items-center w-[70%] space-x-4">
        <Image
          className=" rounded-2xl object-cover h-[70px] w-[70px] "
          src={SongImage}
          alt="songImage"
        />
        <div className="text-sm">
          <div className="font-semibold truncate">Golden age of 80s</div>
          <p>Sean Swadder</p>
          <div className="font-medium">2:34:45</div>
        </div>
      </div>
      <div className="border border-[#ffffff41] p-2 rounded-full">
        <BsHeart color="#FACD66" />
      </div>
    </div>
  );
}
