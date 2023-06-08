import React from 'react';
import { FaUser, FaStar, FaClock, FaBook, FaChartBar } from 'react-icons/fa';
import { courses } from '../constants'; 
import {Link } from 'react-router-dom'
const PopularCourses = () => {
  return (
    <div className="py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-myorange text-center text-lg mb-4">Students' Favorites</h2>
        <h1 className="text-center text-4xl font-bold text-myblack mb-8">Popular Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
              <Link to={{ pathname: `/reservation/${course.title}/${course.price}` }}>
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <img src={course.img} alt="Course Image" className="w-278 h-199 mt-3" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>

              <div className="flex items-center justify-between text-gray-500 mb-4">
                <div className="flex items-center">
                  <FaUser className="text-myorange mr-1" />
                  <span className="text-sm">{course.students}+ students</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-myorange mr-1" />
                  <span className="text-sm">{course.rating} stars</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                <div className="flex items-center mr-4">
                  <FaClock className="mr-1" />
                  <span>{course.hours}</span>
                </div>
                <div className="flex items-center mr-4">
                  <FaBook className="mr-1" />
                  <span>{course.type}</span>
                </div>
                <div className="flex items-center">
                  <FaChartBar className="mr-1" />
                  <span>{course.difficulty}</span>
                </div>
              </div>

              <hr className="border-t-2 border-gray-200 my-4" />

              <div className="flex items-center justify-between">
                <img src={course.profImage} alt="Instructor Photo" className="w-10 h-10 rounded-full mr-4" />
               
                  <p className="text-gray-800 font-semibold">{course.prof}</p>
                  <p className="text-mygreen">{course.price}</p>
               
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
