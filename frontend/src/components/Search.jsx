import React from 'react';

const Search = ({ value, onChange, placeholder = 'Search...' }) => (
  <input
    type="search"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className="flex-1 px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
  />
);

export default Search;
