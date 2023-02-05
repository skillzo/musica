import Navber from "@/components/naviagtions/Navber";

interface wrapper {
  children: React.ReactNode;
}
export default function HomeLayout({ children }: wrapper) {
  return (
    <>
      <Navber />
      <div className="wrapper">{children}</div>
    </>
  );
}
