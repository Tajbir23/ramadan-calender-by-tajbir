/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Sections from "@/components/Sections";
import Navber from "@/components/Navber";
import Catagory from "@/components/Catagory";
import Footer from "@/components/Footer";
import Table from "@/components/Tabble";
import { useEffect, useState } from "react";
import RamadanDataContext from "../components/RamadanDataContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState();
  const [searchDistrict, setSearchDistrict] = useState("dhaka");
  const [currentPosition, setCurrentPosition] = useState(true);

  // console.log(searchDistrict)

  useEffect(() => {
    
    if (navigator.geolocation.watchPosition) {
      // console.log(navigator.geolocation)
      navigator.geolocation.watchPosition(showPosition, error);
    }
    function showPosition(position) {
      // setCurrentPosition(true);

      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      fetch(
        `https://ramadan-calender-by-tajbir.onrender.com/locations?lat=${lat}&long=${long}`
      )
        .then((res) => res.json())
        .then((datas) => setData(datas))
        .catch((err) => console.log(err));
    }

    function error(error) {
      if (error) {
        setCurrentPosition(false);
        const district = searchDistrict;

        fetch(
          `https://ramadan-calender-by-tajbir.onrender.com/district?district=${district}`
        )
          .then((res) => res.json())
          .then((datas) => setData(datas))
          .catch((err) => console.log(err));
      }
    }
  }, [searchDistrict]);

  useEffect(() => {
    // setCurrentPosition(false)
    if (currentPosition === false) {
      const district = searchDistrict;
      console.log(district);
      fetch(
        `https://ramadan-calender-by-tajbir.onrender.com/district?district=${district}`
      )
        .then((res) => res.json())
        .then((datas) => setData(datas))
        .catch((err) => console.log(err));
    }
  }, [currentPosition, searchDistrict]);
  return (
    <>
      <Head>
        <title>Ramadan calender bangladesh time</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ramadan calender bangladesh time" />
        <meta
          name="keywords"
          content={`romjan, ramadan, bangladesh, time table, timetable, ${searchDistrict}, ${data?.data?.data?.date?.gregorian?.date}, ${data?.data?.data?.date?.gregorian?.weekday?.en}, romadan api, api, bangladesh api, ramadan data bangladesh api, romjan bangladesh api, ramadan bangladesh api`}
        />
        <meta author="Tajbir islam" />
      </Head>
      <div>
        <RamadanDataContext.Provider
          value={{
            data,
            setData,
            setSearchDistrict,
            searchDistrict,
            currentPosition,
            setCurrentPosition,
          }}
        >
          <Navber />
          <Header />
          {/* <Slider/> */}
          <Sections />
          <div className="py-4 bg-white">
            <Catagory />
          </div>
          <Table />
          <Footer />
        </RamadanDataContext.Provider>
      </div>
    </>
  );
}
