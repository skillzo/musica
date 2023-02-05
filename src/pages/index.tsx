import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import { Fragment } from "react";
import Navbar from "../components/naviagtions/Navber";
import HomeLayout from "@/layout/HomeLayout";
import Header from "@/components/Header";



export default function Home() {
  return (
    <>
      <Head>
        <title>Musica</title>
        <meta name="description" content="Muscia-Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <main>
          <Header />

          {/* Top Charts */}
          <div>
            <h3>Top Charts</h3>
            <div>
              <div>
                <div>
                  <div>Image</div>
                  <div>
                    <div>Golden age of 80s</div>
                    <p>Sean Swadder</p>
                  </div>
                  <div>2:34:45</div>
                </div>
                <div>Like Button</div>
              </div>
            </div>
          </div>

          {/* New releses */}
          <div>
            <h3>New releases</h3>
            <div className="">
              <div>
                <div>Image</div>
                <div>
                  <div>Everything black</div>
                  <p>T pain</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div>
            <div>Image</div>
            <div>
              <div>Season in</div>
              <div>James</div>
            </div>
          </div>

          <div>
            <div>play icon</div>
            <div>next icon</div>
          </div>
        </footer>
      </HomeLayout>
    </>
  );
}
