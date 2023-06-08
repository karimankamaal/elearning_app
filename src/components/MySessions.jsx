import React from 'react';
import style from "../style";
import { Navbar } from "../components";

const MySessions = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar activeTitle="My Sessions"/>
        </div>
      </div>
      <p className="font-bold text-myblack ml-16 mt-10 text-4xl">My Sessions</p>

      <div className="flex justify-between items-center ml-20 mt-10 p-4 bg-[#E5FAE8] rounded-3xl"
       style={{ width: '1258px', height: '100px' }}>
       
          <p className="text-myblack text-lg font-semibold ml-3">Title</p>
          <p className="text-myblack text-lg">Name</p>
          <p className="text-myblack text-lg">Date</p>
       
        <button className="bg-mygreen text-white rounded-lg px-4 h-10">
          Start session
        </button>
      </div>
      <div className="flex justify-between items-center ml-20 mt-10 p-4 bg-[#FDF5E9] rounded-3xl"
       style={{ width: '1258px', height: '100px' }}>
       
          <p className="text-myblack text-lg font-semibold ml-3">Title</p>
          <p className="text-myblack text-lg">Name</p>
          <p className="text-myblack text-lg">Date</p>
       
        <button className="bg-[#808080] text-white rounded-lg px-4 h-10">
          Start session
        </button>
      </div>
    </div>
  );
}

export default MySessions;
