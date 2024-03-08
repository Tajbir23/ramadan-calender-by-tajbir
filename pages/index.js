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
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  
  return (
   <div>
   <Navber/>
    <Header/>
    {/* <Slider/> */}
    <Sections/>
    <Catagory/>
    <Table/>
    <Footer/>
   </div>
  );
}
