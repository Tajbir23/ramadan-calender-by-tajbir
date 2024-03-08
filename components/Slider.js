import React, { useState } from 'react';

function Slider() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
  };

  return (
    <div>
      <div className='flex w-full h-80 bg-gray-200'>
        <div className='flex flex-col md:flex-row justify-between sm:items-start lg:items-center md:items-center container mx-auto max-w-6xl px-2'>
          {/* 1st */}
          <div>
            <h1 className=''>Search your Location </h1>
            <div className="flex">
              <input 
                type="text"
                placeholder='search your location'
                className='w-full p-2'
                value={searchQuery}
                onChange={handleSearchInputChange} />
              <button 
                className='p-2 ml-2 bg-green-700 text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50'
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <h1 className='text-3xl'>Shopping with us for <br/> better quality and the <br/> best price</h1>
          </div>
          {/* 2nd */}
          <div>
            <h1>fgd</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
