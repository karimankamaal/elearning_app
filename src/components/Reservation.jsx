import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components';
import style from '../style';
import { reservations } from '../constants';
import { FaArrowCircleLeft, FaArrowCircleRight, FaTimes } from 'react-icons/fa';

const Reservation = () => {
  const { CourseTitle } = useParams();
  const {price} = useParams();
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const [showPopup, setShowPopup] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const openPopup = (time) => {
    setSelectedTime(time);
    setShowPopup(true);
  };

  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
          <h2 className="text-2xl text-myblack font-bold mt-4">{CourseTitle}</h2>
          <p className="mt-2 text-myblack">Which time works best?</p>

          {/* Day columns */}
          <div className="flex items-center">
            <FaArrowCircleLeft
              onClick={slideLeft}
              className="mt-20 cursor-pointer opacity-50 hover:opacity-100"
              size={24}
            />
            <div
              id="slider"
              className="flex mt-24 ml-24 mr-24 w-260 overflow-x-scroll scroll scroll-smooth scrollbar-hide"
            >
              {/* Generate day columns dynamically */}
              <div className="flex">
                {reservations.map((dayObj, index) => (
                  <div
                    key={dayObj.day}
                    className={`flex flex-col items-center ${
                      index > 0 ? 'border-l-2 pl-5 pr-5' : 'pr-5'
                    }`}
                  >
                    <p className={` mt-1 text-lg ${index==0 ? 'text-red-600':'text-gray-500'}`}>{daysOfWeek[index]}</p>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-2xl mb-5 ${
                        index === 0 ? 'bg-blue-500 text-white' : ''
                      }`}
                    >
                      <p className="font-bold">{dayObj.day}</p>
                    </div>
             {/* Generate buttons for all times (available and unavailable) */}
                    {dayObj.availableTimes
                      .concat(dayObj.unavailableTimes)
                      .sort((a, b) => {
                        // Custom sort function based on the first number
                        const aHour = parseInt(a.split(':')[0]);
                        const bHour = parseInt(b.split(':')[0]);
                        return aHour - bHour;
                      })
                      .map((time, timeIndex) => (
                        <button
                          key={time}
                          className={`rounded-full w-36 py-2 mt-2 ${
                            dayObj.availableTimes.includes(time)
                              ? 'bg-mygreen text-white'
                              : 'bg-gray-400 text-white'
                          }`}
                          onClick={() => openPopup(time)}
                        >
                          {time}
                        </button>
                      ))}
                  </div>
                ))}
              </div>
            </div>
            <FaArrowCircleRight
              onClick={slideRight}
              className="mt-20 cursor-pointer opacity-50 hover:opacity-100"
              size={24}
            />
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg text-left" style={{ width: '400px' }}>
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setShowPopup(false)}
              >
                <FaTimes />
              </button>
            </div>
            <h3 className="text-xl font-bold text-myblack mb-4">Session Details</h3>
            <p className="text-myblack text-lg">
              <span className="font-bold text-lg">Course:</span> {CourseTitle}
            </p>
            <p className="text-myblack text-lg">
              <span className="font-bold text-lg">Price:</span> {price}
            </p>
            <p className="text-myblack text-lg">
              <span className="font-bold text-lg">Time:</span> {selectedTime}
            </p>
            <button className="rounded-full py-2 px-4 mt-4 bg-mygreen text-white">Book</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
