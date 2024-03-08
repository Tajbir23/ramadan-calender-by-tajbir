import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Sections from "@/components/Sections";
import Navber from "@/components/Navber";
import Catagory from "@/components/Catagory";
import PrayerTimeTable from "@/components/RamadanSchedule";
import Footer from "@/components/Footer";
import Table from "@/components/Tabble";
import { createContext, useEffect, useState } from "react";
import RamadanDataContext from "./RamadanDataContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState();
  const [searchDistrict, setSearchDistrict] = useState("dhaka");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition, error);
    }
    function showPosition(position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      fetch(`https://ramadan-server-by-tajbir.vercel.app/locations?lat=${lat}&long=${long}`)
        .then((res) => res.json())
        .then((datas) => setData(datas))
        .catch((err) => console.log(err));
    }

    function error(error) {
      if (error) {
        const district = searchDistrict;
        fetch(`https://ramadan-server-by-tajbir.vercel.app/district?district=${district}`)
          .then((res) => res.json())
          .then((datas) => setData(datas))
          .catch((err) => console.log(err));
      }
    }
  },[]);

  console.log(data);
  return (
    <div>
      <RamadanDataContext.Provider value={{ data, setData, setSearchDistrict, searchDistrict }}>
        <Navber />
        <Header />
        {/* <Slider/> */}
        <Sections />
        <Catagory />
        <Table />
        <Footer />
      </RamadanDataContext.Provider>
    </div>
  );
}
