import React from 'react'
import Container from './Container'
import { MdMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
import { GoLink,GoDownload } from "react-icons/go";
import profile from "../assets/profile2.jpg"






const Banner = () => {
    return (
        <div id='home'  className="bg-[#292F36] lg:py-[128px] py-[50px] ">
            <Container>
                    
                    <div className="lg:flex ">
                        <div className="lg:w-[35%] w-full relative lg:static flex justify-center">
                            <div className="relative">
                            <div className="h-[520px] w-[320px] bg-[#98FAEC]  rounded-tl-[150px] rounded-br-[150px]"></div>
                            <div className="absolute top-[5px] left-[5px] bg-[#292F36] h-[520px] w-[320px] border-2 rounded-tl-[150px] rounded-br-[150px]">


                                <div className=" mt-[30px]">
                                    <div className="h-[100px] w-[100px] rounded-full  mx-auto ">
                                        <img src={profile} className='rounded-full' alt="" />
                                    </div>
                                    <div className="pt-[20px] ">
                                        <h3 className='text-[22px] text-[#fff] font-ibm font-normal flex justify-center  ' >Musfiqur Rahman</h3>
                                        <h4 className='text-[16px] text-[#fff] font-ibm font-normal flex justify-center  '  >Frontend Developer</h4>
                                    </div>
                                    <div className=" ml-[20px] mt-[30px]">
                                        <div className="flex items-center ">
                                           <MdMailOutline className='text-[#98FAEC]'/>
                                           <a href="#" className='text-[16px] font-ibm font-normal text-[#fff] ml-[10px]'>mr.shoron.7514@gmail.com</a>
                                        </div>
                                        <div className="flex items-center py-[10px] ">
                                           <CiLocationOn className='text-[#98FAEC]'/>
                                           <a href="#" className='text-[16px] font-ibm font-normal text-[#fff] ml-[10px]'>Dhaka,Bangladesh</a>
                                        </div>
                                        <div className="flex items-center ">
                                           <MdWorkOutline className='text-[#98FAEC]'/>
                                           <a href="#" className='text-[16px] font-ibm font-normal text-[#fff] ml-[10px]'>Full-time / Freelancer</a>
                                        </div>
                                        <div className="flex items-center pt-[10px] ">
                                           <GoLink className='text-[#98FAEC]'/>
                                           <a href="#" className='text-[16px] font-ibm font-normal text-[#fff] ml-[10px]'>www.sinantokmak.com</a>
                                        </div>
                                    </div>
                                        

                                        <div className="flex justify-between ml-[20px] mr-[70px] mt-[10px]">
                                            <div className="">
                                                <p className='text-[14px] text-[#292F36] bg-[#98FAEC] py-[2px] px-[10px] rounded-full font-ibm font-normal'>HTML</p>
                                            </div>
                                            <div className="">
                                                <p className='text-[14px] text-[#292F36] bg-[#98FAEC] py-[2px] px-[10px] rounded-full font-ibm font-normal'>JS</p>
                                            </div>
                                            <div className="">
                                                <p className='text-[14px] text-[#292F36] bg-[#98FAEC] py-[2px] px-[10px] rounded-full font-ibm font-normal'>CSS</p>
                                            </div>
                                            <div className="">
                                                <p className='text-[14px] text-[#292F36] bg-[#98FAEC] py-[2px] px-[10px] rounded-full font-ibm font-normal'>REACT</p>
                                            </div>
                                        </div>

                                        <div className="relative pt-[15px] pl-[20px]">
                                            <a  target='blank' href="https://drive.google.com/file/d/1xP_LJgVaWvFew9u5b3bgZ6w8SQ18Ckvv/view?usp=sharing">
                                            
                                            <button className=' font-Ubuntu font-normal py-[16px] pl-[32px] pr-[68px] bg-[#fff] rounded-full text-[20px]'>Download CV</button>
                                            <GoDownload className='   absolute top-[57%] translate-y-[-50%] left-[58%] text-[24px] text-[#292F36]'/>
                                            </a>
                                        </div>

                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="lg:w-[60%] w-full ">
                            <div className="text-center lg:text-start">
                                <p className='lg:text-[64px] text-[36px] font-Ubuntu text-[#fff] font-normal'> <span className=' text-[14px] text-[#98FAEC] font-ibm font-medium'>&lt;h1&gt;</span><br/> Hey <br/> I'm <span className='text-[#12F7D6]'>Musfiqur Rahman</span> <br/> forntend Developer <span className='text-[14px] text-[#98FAEC] font-ibm font-medium'>&lt;h1/&gt;</span> </p>
                            </div>
                            <div className="lg:mx-0 mx-[15px]">
                                <span className='text-[14px] text-[#98FAEC] font-ibm font-medium'>&lt;p&gt;</span>
                                <p className='text-[16px] font-ibm text-[#fff] font-normal'>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,<br /> <span className='text-[14px] text-[#98FAEC] font-ibm font-medium'>&lt;p/&gt;</span> </p>
                            </div>
                            <div className="flex items-center lg:mx-0 mx-[15px]">
                               <h3 className='text-[#12F7D6] text-[16px] font-ibm font-normal leading-[42px]'>Let's Talk  </h3> 
                               <MdMailOutline className='text-[#12F7D6] text-[20px] ml-[10px] font-ibm font-normal leading-[42px]' />
                            </div>
                        </div>

                    </div>
            </Container>
        </div>
    )
}

export default Banner