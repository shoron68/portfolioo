import React from 'react'
import Container from './Container'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub,FaFacebook  } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-[#292F36] py-[30px]">


    <Container>
        <div className="lg:flex justify-between lg:text-start text-center items-center">
            <div className="">
                <p className='text-[16px] text-[#fff] leading-[18px] font-Ubuntu '>© 2023 Musfiqur Rahman. All rights reserved.</p>
            </div>
            <div className="">
                <div className="flex justify-center lg:justify-start lg:pt-0 pt-[10px]">
                    <a  target='blank' href="https://www.linkedin.com/in/musfiqur-rahman02/"><FaLinkedin className='text-[30px] text-[#12F7D6]'/></a>
                    <a  target='blank' href="https://github.com/shoron68"><FaGithub className='mx-[20px] text-[30px] text-[#12F7D6]'/></a>
                    <a target='blank' href="https://www.facebook.com/musfiqurrahman.shoron.507">
                    
                    <FaFacebook  className='text-[30px] text-[#12F7D6]'/>
                    </a>
                </div>
            </div>
        </div>
    </Container>
    </div>
  )
}

export default Footer