import Image from "next/image";
import React from "react";
import songImage from "../../assets/images/songimage.png";

export default function SongCard() {
  return (
    <div className="w-[180px] lg:w-[220px] h-max space-y-4  rounded-lg active:text-slate-300 ">
      <Image
        src={songImage}
        alt="songimage "
        className=" object-cover h-[150px] lg:h-[180px] w-full rounded-xl  active:animate-ping"
      />
      <div className="text-slate-400 active:text-slate-300">
        <div className="w-[70%] font-medium truncate">Everything black</div>
        <p className="font-light w-[80%] truncate">T pain</p>
      </div>
    </div>
  );
}
