import React, { useState } from 'react'
import Container from "../components/Container"
import { FaLinkedinIn,FaGithub  } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";




const Menu = () => {
    let [show,setShow]= useState(false)
  return (
    <>
    <div className="bg-[#292F36] py-[30px] border-b-2 border-[#ffffff63]">
    <Container>
        <div className="flex justify-between lg:mx-0 mx-[15px]  ">
            <div className="lg:w-[79%] w-[70%]">
            <div className="flex items-center">
                <div className="">
                    <h4 className='text-[20px] text-[#12F7D6] font-ibm font-medium'><span> &lt;C/&gt;</span></h4>
                </div>
                <div className="">
                    <h2 className='text-[20px] text-[#FFFFFF] font-ibm font-medium'>MusfiqurRahman</h2>
                </div>
            </div>
            </div>


            <div className="lg:w-[50%] w-[20%]">
                        <div className="">
                            <ul className={`lg:flex items-center  lg:static absolute transition-all ${show ? 'top-0 right-0 bg-[#292F36] z-50 w-[250px] rounded-tl-[10px]  h-full pl-[30px] pt-[50px] duration-500' : 'duration-500 top-0 right-[-250px] w-[250px] h-full bg-none lg:pl-0 pl-[30px] lg:pt-0 pt-[50px] absolute hidden'}`}>
                                <li className='text-[16px] text-[#fff] font-ibm font-normal hover:text-[#12F7D6] duration-300 cursor-pointer scroll-smooth ' > <a href="#home">Home</a></li>
                                <li className='lg:mx-[20px] lg:py-0 py-[10px] text-[16px] text-[#fff] font-ibm font-normal hover:text-[#12F7D6] duration-300 scroll-smooth'><a href="#aboutme">About</a></li>
                                <li className=' text-[16px] text-[#fff] font-ibm font-normal hover:text-[#12F7D6] duration-300 scroll-smooth'><a href="#skills">Skills</a></li>
                                <li className='lg:mx-[20px] lg:py-0 py-[10px] text-[16px] text-[#fff] font-ibm font-normal hover:text-[#12F7D6] duration-300 scroll-smooth'><a href="#contact">Contact</a></li>
                                <li className='flex items-center mr-[20px]  text-[16px] text-[#fff] font-ibm font-normal hover:text-[#12F7D6] duration-300'> <FaLinkedinIn className='text-[#12F7D6] mr-[5px]' /><a target='blank' href="https://www.linkedin.com/in/musfiqur-rahman02/">Linkedin</a></li>
                                <li className='flex items-center lg:py-0 py-[10px]   text-[16px] text-[#fff] font-ibm font-normal hover:text-[#12F7D6] duration-300'> <FaGithub className='text-[#12F7D6] mr-[5px]' /> <a target='blank' href="https://github.com/shoron68">Github</a></li>
                            </ul>

                            <div onClick={()=>setShow(!show)} className="lg:hidden flex justify-end ">
                            {show ? <RxCross2 className='text-[#fff] text-[25px] absolute top-[30px] right-[20px] z-50 ' /> : <FaBars className='text-[#fff] text-[25px]' />}
                            </div>
                        </div>
            </div>

        </div>
    </Container>
    </div>
    </>
  )
}

export default Menu