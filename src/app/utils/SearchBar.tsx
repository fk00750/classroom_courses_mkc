import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            console.log(query);
          }}
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <FaSearch className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
