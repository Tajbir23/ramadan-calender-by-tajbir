// components/Table.js

import RamadanDataContext from "@/components/RamadanDataContext";
import React, { useContext } from "react";

const Table = () => {
  const { data } = useContext(RamadanDataContext);
  // console.log(data?.data);
  // console.log(data?.data?.date?.gregorian?.weekday?.en)
  // console.log(data?.data?.timings)
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse shadow-lg rounded-lg">
        <thead className="text-white bg-green-700">
          <tr>
            <th className="py-3 px-4 uppercase font-semibold text-sm">Date</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">Day</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">Sehar</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">Dhuhr</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">Asr</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">Iftar</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">Isha</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="py-3 px-4 border">
              {data?.data?.data?.date?.gregorian?.date}
            </td>
            <td className="py-3 px-4 border">
              {data?.data?.data?.date?.gregorian?.weekday?.en}
            </td>
            <td className="py-3 px-4 border">
              {data?.data?.data?.timings?.Imsak}
            </td>
            <td className="py-3 px-4 border">
              {data?.data?.data?.timings?.Dhuhr}
            </td>
            <td className="py-3 px-4 border">
              {data?.data?.data?.timings?.Asr}
            </td>
            <td className="py-3 px-4 border">
              {data?.data?.data?.timings?.Maghrib}
            </td>
            <td className="py-3 px-4 border">
              {data?.data?.data?.timings?.Isha}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
