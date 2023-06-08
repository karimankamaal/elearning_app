import React from 'react';
import { FaUser, FaStar } from 'react-icons/fa';
import { instructors } from '../constants';

const Instructors = () => {
  return (
    <>
      <h2 className="text-myorange text-center text-lg mb-4">INSTRUCTORS</h2>
      <div className="flex overflow-x-auto overflow-y-hidden justify-center items-center">
        <div className="flex space-x-4">
          {instructors.map((instructor, index) => (
            <div key={index} className="flex-none w-305 h-418 bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300">
              <img src={instructor.img} alt="Instructor" className="w-306 h-326 object-cover rounded-t-lg" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{instructor.name}</h3>
                  <button className="bg-mygreen text-white px-4 py-2 rounded-md translate-y-[29%]">
                    Join now
                  </button>
                </div>
                <p className="text-gray-500 translate-y-[-29%]">{instructor.course}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <FaUser className="text-mygreen mr-1" />
                    <span>{instructor.students}</span>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="text-myorange mr-1" />
                    <span>{instructor.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Instructors;
