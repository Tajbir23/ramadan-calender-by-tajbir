import RamadanDataContext from "@/components/RamadanDataContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

function Header() {
  const { currentPosition, searchDistrict, data } =
    useContext(RamadanDataContext);
  // console.log(currentPosition, searchDistrict, data?.district);
  const [district, setDistrict] = useState("");

  useEffect(() => {
    if (data?.district) {
      setDistrict(data.district);
    } else {
      setDistrict(searchDistrict);
    }
  }, [data ? data : searchDistrict]);

  console.log(district);
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center py-4 overflow-hidden ">
          <div className="flex space-x-4">
            <a
              href="/"
              className="font-semibold text-gray-800 hover:text-gray-900"
            >
              Home
            </a>
            
            <Link href={`/ramadan/${district}`}> Ramadan </Link>
            <a
              href="#"
              className="font-semibold text-gray-800 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="/api-docs"
              className="font-semibold text-gray-800 hover:text-gray-900"
            >
              Api Docs
            </a>
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <span className="hidden md:inline-block font-semibold text-gray-800">
              Now Time
            </span>
            <span className="hidden md:inline-block font-semibold text-red-500">
              {currentPosition ? "Current Location" : searchDistrict}
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
