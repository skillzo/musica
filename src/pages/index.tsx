import Head from "next/head";
import Header from "@/components/Header";
import TopCharts from "@/components/hompage/TopCharts";
import NewReleases from "@/components/hompage/NewReleases";

export default function Home() {
  return (
    <>
      <Head>
        <title>Musica</title>
        <meta name="description" content="Muscia-Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-[3em] lg:space-y-[5em] select-none">
        <div className="lg:flex justify-between items-start">
          <Header />
          <div className=" hidden lg:block lg:w-[38%] space-y-4  ">
            <h3 className="font-bold text-xl lg:text-2xl ">Top Charts</h3>
            <TopCharts />
          </div>
        </div>

        <div className="lg:hidden space-y-4 ">
          <h3 className="font-bold text-xl  lg:text-2xl  ">Top Charts</h3>
          <TopCharts />
        </div>
        <div className="space-y-4 ">
          <h3 className="font-bold text-xl  lg:text-2xl ">New releases</h3>
          <NewReleases />
        </div>
      </main>
    </>
  );
}
