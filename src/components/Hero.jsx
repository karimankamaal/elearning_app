import React from 'react';
import style from '../style';
import { heroimage, heroimage2,heroimage3 } from '../assets2';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${style.paddingY}`}>
      <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-myblack ss:leading-[100.8px] leading-[75px]">
            Learn on your <br className="sm:block hidden" />{' '}
            <span className="bg-gradient-to-r from-mygreen to-myorange inline-block text-transparent bg-clip-text">
              Schedule
            </span>{' '}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-myblack ss:leading-[100.8px] leading-[75px] w-full">
          from any device.
        </h1>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium sapien, ipsum eu et habitant arcu dignissim egestas ipsum. Sit nunc euismod dui, posuere mattis urna. Quis risus proin quam porttitor diam erat pellentesque. 
        </p>
      </div>
      <div className={`flex-1 flex ${style.flexCenter} md:my-0 my-10 relative`}>
  <div className="relative z-[5]">
    
    <img src={heroimage} alt="billing" className="w-[90%] h-[90%]  right-0 translate-x-[15%]" />
    <img src={heroimage3} alt="third image" className="absolute left-0 transform translate-x-[-20%] translate-y-[-170%]" />
    <img
      src={heroimage2}
      alt="exceed"
      className="absolute top-0 right-0 transform translate-x-[30%] translate-y-[110%]"
    />
  </div>
</div>



    </section>
  );
};

export default Hero;


