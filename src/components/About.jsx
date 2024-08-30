import React from 'react'
import bgimg from "../assets/aboutbg.png"
import Container from './Container'
import aboutimg from "../assets/aboutimg.png"

const About = () => {
    return (
        <div style={{ backgroundImage: `url(${bgimg})` }} className=" bg-cover bg-no-repeat bg-center ">
            <Container>

                <div id='aboutme' className="lg:flex justify-between lg:py-[128px] py-[50px]">
                    <div className="lg:w-[60%] w-full">
                        <div className="">
                            <div className=" lg:static lg:mx-0 mx-auto lg:h-[130px] h-[90px] w-[300px] lg:w-[400px] border-4 bg-[#292F36] lg:rounded-tl-[50px] rounded-tl-[35px] rounded-br-[35px] lg:rounded-br-[50px] border-[#12F7D6] ">
                                <h3 className='lg:text-[64px] text-[40px] flex justify-center pt-[10px] font-Ubuntu font-normal text-[#fff]'>About Me</h3>
                            </div>
                        </div>
                        <div className="pt-[64px]">
                            <div className="bg-[#292F36] rounded-[50px]">
                                <div className="lg:mx-[40px] mx-[15px] py-[24px]">
                                    <span className='text-[14px] text-[#98FAEC] font-ibm font-medium'>&lt;p&gt;</span>

                                    <h3 className='pt-[20px] text-[32px] text-[#98FAEC] font-ibm font-medium'>Hello !</h3>
                                    <p className='text-[16px] text-[#fff] font-ibm font-medium'>My name is Musfiqur Rahman and I specialize in web developement that utilizes <span className='text-[#98FAEC]'>HTML</span>, <span className='text-[#98FAEC]'>CSS</span>, <span className='text-[#98FAEC]'>JS</span>, and <span className='text-[#98FAEC]'>REACT</span> etc.</p>
                                    <p className='text-[16px] text-[#fff] font-ibm font-medium'>I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                                    </p>
                                    <p className='text-[16px] text-[#fff] font-ibm font-medium'>I like to have my perspective and belief systems challenged so that I see the world through new eyes.</p>
                                    <span className='text-[14px] text-[#98FAEC] font-ibm font-medium'>&lt;p&gt;</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-[30%] lg:block hidden">
                        <img src={aboutimg} className='w-full' alt="" />
                    </div>
                </div>




            </Container>

        </div>
    )
}

export default About