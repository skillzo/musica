import React from "react";
import Image from "next/image";
import SongImage from "../../assets/images/songimage.png";
import { BsHeart } from "react-icons/bs";

export default function AlbumCard() {
  return (
    <div className=" bg-[#242829] opacity-90 p-[1em] rounded-lg  relative w-[350px] md:w-[300px]">
      <div className="absolute border border-[#ffffff41] p-2 rounded-full top-2 right-2">
        <BsHeart color="#FACD66" />
      </div>
      <div className="space-y-[1em]">
        <Image
          className=" rounded-2xl  object-cover h-[150px] md:h-[130px] w-[50%]"
          src={SongImage}
          alt="songImage"
        />
        {/* song details */}
        <div className="">
          <div className="w-[70%] font-semibold text-xl truncate">
            Golden age of 80s
          </div>
          <p>Sean Swadder</p>
        </div>
        <div className="font-medium">2:34:45</div>
      </div>
    </div>
  );
}
