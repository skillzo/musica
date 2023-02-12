import { RiHome2Fill } from "react-icons/ri";
import {TbPlaylist} from 'react-icons/tb'
import { IoMdRadio } from "react-icons/io";
import { FaFilm } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="hidden lg:flex w-[5%] flex-col items-center space-y-8 mt-[1em]">
      <div className="bg-ash-black rounded-full px-5 py-10 space-y-12 ">
        <RiHome2Fill size={25} />
        <TbPlaylist size={25} />
        <IoMdRadio size={25} />
        <FaFilm size={25} />
      </div>

      <div className="bg-ash-black rounded-full px-5 py-10 space-y-12 ">
        <BsFillPersonFill size={25} />

        <HiOutlineLogout size={25} />
      </div>
    </div>
  );
}
