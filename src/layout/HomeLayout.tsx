import Footer from "@/components/naviagtions/Footer";
import Navber from "@/components/naviagtions/Navber";
import Sidebar from "@/components/naviagtions/SideBar";
import SearchBar from "@/components/TinyComp/Searchbar/SearchBar";
import Wrapper from "@/components/TinyComp/Wrapper/Wrapper";
import Logo from "../assets/brand/logo.svg";

interface wrapper {
  children: React.ReactNode;
}
export default function HomeLayout({ children }: wrapper) {
  return (
    <>
      <Navber />
      <div className="hidden lg:flex items-center py-6  px-8 space-x-12">
        <Logo />
        <div className="w-[20%]">
          <SearchBar type="search" placeholder="Search artists" />
        </div>
      </div>
      <div className="lg:flex items-start">
        <Sidebar />
        <Wrapper>{children}</Wrapper>
      </div>
      <Footer />
    </>
  );
}
