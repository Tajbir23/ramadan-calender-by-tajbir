/* eslint-disable react/react-in-jsx-scope */
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
import { useEffect, useState } from "react";
import RamadanDataContext from "../components/RamadanDataContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState();
  const [searchDistrict, setSearchDistrict] = useState("dhaka");
  const [currentPosition, setCurrentPosition] = useState(true);

  console.log(currentPosition)

  useEffect(() => {
    if (navigator.geolocation && currentPosition) {
      navigator.geolocation.watchPosition(showPosition, error);
    }else{
      setCurrentPosition(false)
      
      const district = searchDistrict;
        
        fetch(
          `https://ramadan-server-by-tajbir.vercel.app/district?district=${district}`
        )
          .then((res) => res.json())
          .then((datas) => setData(datas))
          .catch((err) => console.log(err));
    }
    function showPosition(position) {
      // setCurrentPosition(true);

      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      fetch(
        `https://ramadan-server-by-tajbir.vercel.app/locations?lat=${lat}&long=${long}`
      )
        .then((res) => res.json())
        .then((datas) => setData(datas))
        .catch((err) => console.log(err));
    }

    function error(error) {
      if (error) {
        setCurrentPosition(false)
        const district = searchDistrict;
        
        fetch(
          `https://ramadan-server-by-tajbir.vercel.app/district?district=${district}`
        )
          .then((res) => res.json())
          .then((datas) => setData(datas))
          .catch((err) => console.log(err));
      }
    }
  },[currentPosition]);

  // console.log(data);
  return (
    <div>
      <RamadanDataContext.Provider
        value={{
          data,
          setData,
          setSearchDistrict,
          searchDistrict,
          currentPosition,
          setCurrentPosition
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
  );
}
