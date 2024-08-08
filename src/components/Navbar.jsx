// src/components/Navbar.js
import React from 'react';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h4 className="text-xl font-bold">To-Do Application</h4>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search todo list..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-700 text-white rounded border border-gray-600 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
