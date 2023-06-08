import React from 'react';
import style from '../style';
import {welcome1, welcome2,vid,star } from '../assets2';

const Welcome = () => {
  return (
    <section className={`flex md:flex-row flex-col ${style.paddingY}`}>
      <div className="flex-1">
        <div className="relative">
        <video src={vid} alt="video" className="z-[100] absolute w-full h-full object-cover w-[90%] h-[30%]" autoPlay loop muted />
          <img src={welcome1} alt="background image 1" className="z-[99] bottom-90 left-0 w-[50%] h-[50%] translate-x-[-13%] translate-y-[115%] " />
          <img src={welcome2} alt="background image 2" className="z-[98] top-20 right-0 w-[30%] h-[30%] translate-x-[250%] translate-y-[-140%]" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center translate-x-[20%] translate-y-[-10%]">
  <h2 className="text-myorange text-lg">ABOUT US</h2>
  <h1 className="text-myblack text-3xl mt-5 mb-5 w-3/4 font-bold">Welcome to Online Class with Dr. Ahmed Mohommed</h1>
  <p className="text-myblack mt-4 mb-5 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt ante vel nisl semper fringilla. Proin in lectus ut nunc ultrices sollicitudin eget nec mi. Phasellus et magna orci. Mauris id sem sit amet enim vulputate fringilla. Curabitur ultrices nunc vel turpis tincidunt semper.</p>
  <div className="flex items-center  mt-4">
      <img src={star} alt="Star" className="w-4 h-4" />
      <p className="text-myblack ml-2">em ipsum dolor sit amet, consectetur adip </p>
    </div>
    <div className="flex items-center  mt-2">
      <img src={star} alt="Star" className="w-4 h-4" />
      <p className="text-myblack ml-2">Proin in lectus ut nunc ultrices sollicitudin eget nec miamet.</p>
    </div>
    <div className="flex items-center  mt-4">
    <button className="bg-myorange text-white rounded-lg px-4 py-2 mt-4">
      Learn more...
    </button>
    </div>

</div>

    </section>
  );
};

export default Welcome;

