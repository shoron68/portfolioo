import React from 'react'
import bgimg from "../assets/skillbg.png"
import Container from './Container'
import { CgScreen } from "react-icons/cg";
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3Alt,FaNodeJs,FaReact  } from "react-icons/fa";





const Skills = () => {
    return (
        <div style={{ backgroundImage: `url(${bgimg})` }} className=" bg-cover bg-no-repeat bg-center ">
            <Container>
                <div id='skills' className="lg:py-[128px] py-[50px]">
                    <div className="">
                        <h2 className='lg:text-[64px] text-[40px] text-[#12F7D6] font-Ubuntu font-normal border-b-2 lg:w-[145px] w-[90px] mx-auto border-[#12F7D6] '>Skills</h2>
                        <p className='text-[16px] text-[#fff] font-ibm font-normal text-center leading-[40px]'>I am striving to never stop learning and improving</p>
                    </div>
                    <div className=" pt-[50px]">
                        <div className="h-[140px] w-[300px] bg-[#98FAEC]  rounded-[5px] mx-auto">
                            <div className="flex justify-center pt-[20px]">
                                <CgScreen className='text-[30px] ' />
                            </div>
                            <div className="">
                                <h3 className='text-[24px] text-[#292F36] font-ibm font-normal text-center'>Web Developement</h3>
                                <h5 className='text-[16px] text-[#43454D] font-ibm font-normal text-center'>HTML·CSS·JS·REACT</h5>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-between flex-wrap mx-auto pt-[50px]  w-[50%]">
                        <div className="">
                        <div className="flex justify-center items-center h-[100px] w-[100px] bg-[#E54F26] rounded-full hover:shadow-[0_3px_10px_rgb(229,79,38)] duration-300 ">
                            <RiHtml5Line className="text-[35px] text-[#fff]" />
                        </div >
                        <p className="text-[20px] text-center text-[rgb(229,79,38)] pt-[5px] font-ibm font-medium">HTML</p>
                        </div>
                        <div className="">
                        <div className="flex justify-center items-center h-[100px] w-[100px] bg-[rgb(12,115,184)] rounded-full hover:shadow-[0_3px_10px_rgb(12,115,184)] duration-300">
                            <FaCss3Alt className="text-[35px] text-[#fff]" />
                        </div>
                        <p className="text-[20px] text-center text-[#0C73B8] pt-[5px] font-ibm font-medium">CSS</p>
                        </div>
                        <div className="">
                        <div className="flex justify-center items-center h-[100px] w-[100px] bg-[rgb(231,160,32)] rounded-full hover:shadow-[0_3px_10px_rgb(231,160,32)] duration-300">
                            <FaNodeJs className="text-[35px] text-[#fff]" />
                        </div>
                        <p className="text-[20px] text-center text-[#E7A020] pt-[5px] font-ibm font-medium">JS</p>
                        </div>
                        <div className="">
                        <div className="flex justify-center items-center h-[100px] w-[100px] bg-[rgb(40,169,224)] rounded-full hover:shadow-[0_3px_10px_rgb(40,169,224)] duration-300">
                            <FaReact  className="text-[35px] text-[#fff]" />
                        </div>
                        <p className="text-[20px] text-center text-[#28A9E0] pt-[5px] font-ibm font-medium">REACT</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Skills