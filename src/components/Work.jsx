import React from 'react'
import Container from './Container'
import bgimg from "../assets/Works.png"
import slick from "../assets/Content.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowRight,MdKeyboardArrowLeft  } from "react-icons/md";

import Slider from 'react-slick';

const Work = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div  className='absolute top-[50%] translate-y-[-50%] text-[#fff] lg:right-[300px] right-[50px] text-[30px] cursor-pointer h-[50px] w-[50px] bg-[#292F36] flex justify-center items-center rounded-full' onClick={onClick}> <MdOutlineKeyboardArrowRight /> </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className='absolute top-[50%] translate-y-[-50%] text-[#fff] lg:left-[300px] left-[50px] z-10 text-[30px] cursor-pointer h-[50px] w-[50px] bg-[#292F36] flex justify-center items-center rounded-full' onClick={onClick}> <MdKeyboardArrowLeft /> </div>
    );
  }

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div style={{ backgroundImage: `url(${bgimg})` }} className=" bg-cover bg-no-repeat bg-center lg:py-[128px] py-[50px] ">

      <Container>
        <div className="">
          <h2 className='lg:text-[64px] text-[40px] text-[#12F7D6] font-Ubuntu font-normal border-b-4 lg:w-[185px] w-[115px] mx-auto border-[#12F7D6] '>Works</h2>
          <p className='lg:pt-0 pt-[10px] text-[16px] text-[#fff] font-ibm font-normal text-center lg:leading-[40px] leading-[25px]'>I had the pleasure of working with these awesome projects</p>
        </div>

        <div className="pt-[50px]">
          <Slider {...settings}>

            <div className="w-[30%]    ">
              <a href="https://ecommerce-project-psi-two.vercel.app/" target='blank'>
                <img src={slick} className='w-[50%] transition duration-300 ease-in-out hover:scale-90 mx-auto' alt="" />
              </a>
            </div>
            <div className="w-[30%]    ">
              <a href="" target='blank'>
                <img src={slick} className='w-[50%] transition duration-300 ease-in-out hover:scale-90 mx-auto' alt="" />
              </a>
            </div>

          </Slider>
        </div>
      </Container>
    </div>
  )
}

export default Work