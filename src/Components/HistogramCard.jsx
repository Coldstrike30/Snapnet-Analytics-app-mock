import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Calendar, Search, ChevronDown, EllipsisVertical } from "lucide-react";

const FilterButton = ({ label, onClick }) => (
  <button
    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
    onClick={onClick}
  >
    {label}
    <ChevronDown className="w-4 h-4 text-gray-500" />
  </button>
);

const DateRangeDropdown = () => (
  <div className="absolute top-full right-0 mt-2 p-4 bg-white shadow-lg rounded-md border border-gray-200 z-20 w-80">
    <div className="flex justify-between items-center mb-4">
      <span className="font-medium text-gray-800">Date Range</span>
    </div>
    <div className="flex gap-4 mb-4">
      <div className="flex flex-col flex-1">
        <label className="text-xs text-gray-500 mb-1">From</label>
        <div className="relative">
          <input
            type="text"
            placeholder="DD/MM/YY"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <label className="text-xs text-gray-500 mb-1">To</label>
        <div className="relative">
          <input
            type="text"
            placeholder="DD/MM/YY"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
    <div className="flex justify-end gap-2">
      <button className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">Cancel</button>
      <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600">Apply</button>
    </div>
  </div>
);

const SearchDropdown = ({ placeholder }) => (
  <div className="absolute top-full right-0 mt-2 p-2 bg-white shadow-lg rounded-md border border-gray-200 z-20 w-60">
    <div className="relative mb-2">
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
    <div className="text-sm">
      <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-sm">Dangote Cement</div>
      <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-sm">Dangote Cement</div>
      <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-sm">Dangote Cement</div>
    </div>
  </div>
);

const ThreeDotMenu = () => (
    <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-20">
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Details</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Export Data</a>
    </div>
);

export default function HistogramCard({ title, data, colors, dataKeys, filters = [] }) {
  const [openFilter, setOpenFilter] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleFilterClick = (filterName) => {
    setOpenFilter(prev => prev === filterName ? null : filterName);
    setOpenMenu(false);
  };

  const handleMenuClick = () => {
    setOpenMenu(prev => !prev);
    setOpenFilter(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 relative">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center gap-2">
          <div className="flex gap-2 relative">
            {filters.includes('dateRange') && (
              <div className="relative">
                <FilterButton label="Date Range" onClick={() => handleFilterClick('dateRange')} />
                {openFilter === 'dateRange' && <DateRangeDropdown />}
              </div>
            )}
            {filters.includes('country') && (
              <div className="relative">
                <FilterButton label="Country" onClick={() => handleFilterClick('country')} />
                {openFilter === 'country' && <SearchDropdown placeholder="Search Country" />}
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={handleMenuClick} className="p-1 rounded-full hover:bg-gray-100">
              <EllipsisVertical className="w-5 h-5 text-gray-500" />
            </button>
            {openMenu && <ThreeDotMenu />}
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend />
            {dataKeys.map((key, index) => (
              <Bar key={key} dataKey={key} fill={colors[index % colors.length]} barSize={20} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}