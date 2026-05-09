import React, { useState } from 'react';
import { Search, Calendar, User } from 'lucide-react';

const Header: React.FC<{ onSearch: (data: { location: string; checkIn: string; checkOut: string; guests: number }) => void }> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    onSearch({ location, checkIn, checkOut, guests });
  };

  return (
    <header className="w-full">
      <div className="bg-teal-600 text-white py-2 px-4 flex justify-center items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm p-2">Overseas trip? Get the latest information on travel guides</span>
          <button className="bg-black text-white  rounded-full text-md px-4 py-2">More Info</button>
        </div>
      </div>

      <div className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-black">alx</h1>

        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 space-x-4 max-w-lg">
          <div className="flex flex-col">
            <label className="text-xs font-semibold">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search for destination"
              className="text-sm placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="h-8 border-l border-gray-300"></div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold">Check in</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="text-sm placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="h-8 border-l border-gray-300"></div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold">Check out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="text-sm placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="h-8 border-l border-gray-300"></div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold">People</label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              min="1"
              className="text-sm placeholder-gray-400 focus:outline-none w-16"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-orange-500 text-white rounded-full p-2"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        <div className="flex space-x-4">
          <button className="bg-teal-600 text-white px-4 py-2 rounded-full  cursor-pointer">Sign in</button>
          <button className="bg-white border border-gray-300 text-black px-4 py-2 rounded-full cursor-pointer">Sign up</button>
        </div>
      </div>

      <nav className="bg-white px-6 py-4 overflow-x-auto whitespace-nowrap border-t border-gray-200">
        <div className="flex space-x-8">
          {[
            { icon: <Search className="h-6 w-6" />, label: 'Rooms' },
            { icon: <Calendar className="h-6 w-6" />, label: 'Mansion' },
            { icon: <User className="h-6 w-6" />, label: 'Countryside' },
            { icon: <Search className="h-6 w-6" />, label: 'Villa' },
            { icon: <Calendar className="h-6 w-6" />, label: 'Tropical' },
            { icon: <User className="h-6 w-6" />, label: 'New' },
            { icon: <Search className="h-6 w-6" />, label: 'Amazing pool' },
            { icon: <Calendar className="h-6 w-6" />, label: 'Beach house' },
            { icon: <User className="h-6 w-6" />, label: 'Island' },
            { icon: <Search className="h-6 w-6" />, label: 'Camping' },
            { icon: <Calendar className="h-6 w-6" />, label: 'Apartment' },
            { icon: <User className="h-6 w-6" />, label: 'House' },
            { icon: <Search className="h-6 w-6" />, label: 'Lakefront' },
            { icon: <Calendar className="h-6 w-6" />, label: 'Farm house' },
            { icon: <User className="h-6 w-6" />, label: 'Treehouse' },
            { icon: <Search className="h-6 w-6" />, label: 'Cabins' },
            { icon: <Calendar className="h-6 w-6" />, label: 'Castles' },
            { icon: <User className="h-6 w-6" />, label: 'Lakeside' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-gray-600 cursor-pointer">
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </nav> cursor-pointer
    </header>
  );
};

export default Header;
