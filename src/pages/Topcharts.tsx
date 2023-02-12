import Image from "next/image";
import songImage from "@/assets/images/songimage2.png";
import { FcLike } from "react-icons/fc";
import { BsPlayFill } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import { MdPlaylistAdd } from "react-icons/md";
import Ripples from "react-ripples";
import { IconButton } from "@mui/material";

export default function Topcharts() {
  return (
    <div className="space-y-[3em] relative">
      {/* header */}
      <div className=" space-y-[2em] h-[55vh] lg:h-[40vh] md:flex items-center md:space-x-6 ">
        <Image
          src={songImage}
          alt="header-image"
          className="w-full h-[289px] rounded-xl md:w-[40%] lg:w-[20%]"
        />
        <div className="space-y-[1em] md:space-y-[1.5em] md:w-[50%] ">
          <h1 className="text-3xl text-[#A4C7C6] font-bold">
            Tomorrow’s tunes
          </h1>
          <div className="space-y-[0.5em]">
            <p className="text-ash-l-text lg:w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
            <div className="text-ash-l-text">64 songs ~ 16 hrs+</div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-between md:w-[85%] lg:w-[45%] ">
            <div className="bg-ash-black w-max flex items-center justify-center space-x-[1em] rounded-full px-4 py-2">
              <div className="p-1 bg-m-yellow rounded-full ">
                <BsPlayFill color="black" />
              </div>
              <p className="text-xs">Play all</p>
            </div>
            <div className="bg-ash-black w-max flex items-center justify-center space-x-[1em] rounded-full px-4 py-2">
              <div className="p-1 bg-m-yellow rounded-full ">
                <MdPlaylistAdd color="black" />
              </div>
              <p className="text-xs">Add to collections</p>
            </div>
            <div className="bg-ash-black w-max flex items-center justify-center space-x-[1em] rounded-full px-4 py-2">
              <FcLike size="20px" />
              <p className="text-xs">Like</p>
            </div>
          </div>
        </div>
      </div>

      {/* Songlist */}

      <div className="space-y-4 ">
        {/* songcard */}
        <div className="md:hidden px-4 py-2 bg-ash-black active:bg-m-black  flex justify-between items-center rounded-lg text-sm opacity-80">
          <div className="flex justify-between items-center space-x-4">
            <Image
              src={songImage}
              alt="songimage"
              className="w-[60px] h-[60px] rounded-lg object-cover"
            />
            <div className="space-y-2">
              <p>Let me love you ~ Krisx</p>
              <p>Single</p>
            </div>
          </div>

          <div className="space-y-2 flex flex-col items-end">
            <Ripples>
              <FiMoreVertical size="18px" color="#FACD66" />
            </Ripples>
            <div>4:17</div>
          </div>
        </div>

        {/* song card in md  */}
        <div className="hidden md:flex justify-between items-center lg:w-[95%] p-4 lg:py-3 bg-ash-black active:bg-m-black  rounded-lg text-sm opacity-80">
          <div className="flex justify-between items-center space-x-4">
            <Image
              src={songImage}
              alt="songimage"
              className="w-[60px] h-[50px] lg:w-[80px] lg:h-[60px] rounded-lg object-cover "
            />
            <FcLike size="25px" />
          </div>

          <div className=" w-[30%] lg:w-[20%] text-left truncate ">
            Let me love you ~ Krisx
          </div>

          <div className="w-[15%]   text-center truncate">african giant</div>

          <div className="w-max text-center">4:17</div>

          <div className="space-y-2 flex flex-col items-end">
            <IconButton>
              <FiMoreVertical size="18px" color="#FACD66" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
