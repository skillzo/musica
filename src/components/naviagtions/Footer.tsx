import Image from "next/image";
import React from "react";
import songImage from "../../assets/images/songimage.png";
import { BsFillPlayFill, BsShuffle, BsFillSkipEndFill } from "react-icons/bs";
import { BiSkipNext } from "react-icons/bi";
import { RxTrackNext } from "react-icons/rx";
import { AiOutlineStepBackward } from "react-icons/ai";
import { RiRepeatOneFill } from "react-icons/ri";
import { TbRepeat } from "react-icons/tb";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Slider } from "@mui/material";
import VolumeSlider from "../TinyComp/Buttons/Slider";

function Footer() {
  return (
    <footer className="fixed border-t border-[#cccccc2c] bottom-0 w-full px-4 py-5 md:p-4 lg:px-6 lg:py-4 backdrop-blur-md  flex justify-between items-center">
      <div className="flex w-[40%] md:w-[20%] lg:w-[10%]  space-x-4  items-center">
        <Image
          src={songImage}
          alt="songimage"
          className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-xl object-contain"
        />
        <div>
          <div className="font-semibold">Season in</div>
          <div className="text-xs font-medium text-slate-400">James</div>
        </div>
      </div>

      {/* only on mobile */}
      <div className="md:hidden flex items-center space-x-4">
        <button className=" bg-[#FACD66] w-[40px] h-[40px] flex justify-center items-center rounded-full">
          <BsFillPlayFill />
        </button>
        <BiSkipNext size="40px" />
      </div>

      {/* only on tablets and laptops */}
      <div className="hidden md:block w-[50%] lg:w-[60%]   space-y-2">
        <div className="flex justify-center items-center space-x-4">
          <BsShuffle />
          <AiOutlineStepBackward />
          <BsFillPlayFill />
          <BsFillSkipEndFill />
          <RiRepeatOneFill />
        </div>
        <Slider />
      </div>
      <div className="hidden md:block md:w-[20%] lg:w-[10%]">
        <VolumeSlider />
      </div>
    </footer>
  );
}

export default Footer;
