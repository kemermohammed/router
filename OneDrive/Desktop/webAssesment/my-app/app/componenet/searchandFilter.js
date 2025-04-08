// app/component/SearchAndFilter.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJokes } from '../redux/slice/joke';

const SearchAndFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchJokes(searchTerm));
  };

  const handleFilter = (category) => {
    dispatch(fetchJokes(category));
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search jokes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-600 text-white p-2 rounded">
        Search
      </button>
      <div className="flex gap-2 mt-2">
        <button onClick={() => handleFilter('Programming')} className="bg-gray-600 text-white p-2 rounded">Programming</button>
        <button onClick={() => handleFilter('Miscellaneous')} className="bg-gray-600 text-white p-2 rounded">Miscellaneous</button>
        <button onClick={() => handleFilter('Dark')} className="bg-gray-600 text-white p-2 rounded">Dark</button>
        <button onClick={() => handleFilter('Spooky')} className="bg-gray-600 text-white p-2 rounded">Spooky</button>
        <button onClick={() => handleFilter('Christmas')} className="bg-gray-600 text-white p-2 rounded">Christmas</button>
      </div>
    </div>
  );
};

export default SearchAndFilter;
