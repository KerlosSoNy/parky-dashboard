import React from 'react';
import { Search } from 'lucide-react'; // Icon library (or use any icon you prefer)

const SearchBar: React.FC = () => {
    return (
        <div className="flex items-center border border-gray-300 rounded-[10px] p-2 w-80 h-[52px]">
            <Search className="text-gray-400 w-5 h-5 mr-2" />
            <input
                type="text"
                placeholder="Search"
                className="outline-none text-gray-500 placeholder-gray-400 w-full bg-transparent"
            />
        </div>
    );
};

export default SearchBar;
