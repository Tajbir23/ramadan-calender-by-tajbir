// components/Table.js

import React from 'react';

const data = [
  { date: '2024-03-01', day: 'Monday', sehar: '5:00 AM', dhuhr: '1:00 PM', asr: '4:30 PM', iftar: '6:45 PM', isha: '8:30 PM' },
  // Add more date rows as needed
];

const Table = () => {
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
          {data.map(row => (
            <tr key={row.date}>
              <td className="py-3 px-4 border">{row.date}</td>
              <td className="py-3 px-4 border">{row.day}</td>
              <td className="py-3 px-4 border">{row.sehar}</td>
              <td className="py-3 px-4 border">{row.dhuhr}</td>
              <td className="py-3 px-4 border">{row.asr}</td>
              <td className="py-3 px-4 border">{row.iftar}</td>
              <td className="py-3 px-4 border">{row.isha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
