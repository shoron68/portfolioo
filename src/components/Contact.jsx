import React from 'react'
import Container from './Container'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "61d94a2d-eda7-4d94-b053-64ab5ec67c65");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            toast("Success")
        }
      };
    return (
        <div id='contact' className='bg-[#1A1E23] lg:py-[128px] py-[50px]'>
            <Container>
                <div className="">
                    <h2 className='lg:text-[64px] text-[40px] text-[#12F7D6] font-Ubuntu font-normal border-b-2 lg:w-[235px] w-[147px] mx-auto border-[#12F7D6] '>Contact</h2>
                    <p className='pt-[20px] text-[16px] text-[#fff] font-ibm font-normal text-center lg:leading-[40px] leading-[30px]'>I am striving to never stop learning and improving</p>
                </div>

                <div className="flex justify-center lg:pt-[100px] pt-[40px]">
                    <div className=" ">
                        <p className=' lg:py-[20px] lg:px-[35px] py-[14px] px-[30px] border-[2px] border-[#12F7D6] lg:rounded-tl-[35px] rounded-tl-[30px] lg:rounded-br-[35px] rounded-br-[30px] lg:text-[32px] text-[26px] text-[#12F7D6] leading-[42px] font-ibm'>Send me a message</p>
                    </div>
                </div>

                <div className="pt-[64px] lg:mx-0 mx-[15px]">
                    <form onSubmit={onSubmit}>
                        <div className="lg:flex justify-between">
                            <div className="lg:w-[45%]">
                                <h3 className='text-[#12F7D6] text-[16px] font-Ubuntu leading-[18px] pb-[15px]'>Your name *</h3>
                                <input type="text" name="Name" placeholder='Enter your name' className='outline-none border-b-[2px] border-[#12F7D6] bg-transparent text-[#fff] w-full py-[10px]' />
                            </div>
                            <div className="lg:w-[45%] lg:pt-0 pt-[30px]">
                                <h3 className='text-[#12F7D6] text-[16px] font-Ubuntu leading-[18px] pb-[15px]'>Your email *</h3>
                                <input type="email" name="Email" placeholder='Enter your email' className='outline-none border-b-[2px] border-[#12F7D6] bg-transparent text-[#fff] w-full py-[10px]' />
                            </div>
                        </div>

                        <div className="w-full lg:pt-[64px] pt-[30px]">
                            <h3 className='text-[#12F7D6] text-[16px] font-Ubuntu leading-[18px] pb-[20px]'>Your message *</h3>
                            <textarea name="Message" className='outline-none border-b-[2px] border-[#12F7D6] bg-transparent text-[#fff] w-full' placeholder='Enter your needs'></textarea>
                        </div>

                        <div className="flex justify-center lg:pt-[64px] pt-[50px]">
                            <button type='submit' className='lg:text-[20px] text-[16px] text-[#292F36] border-[2px] border-[#12F7D6] font-Ubuntu lg:leading-[24px] lg:py-[15px] py-[10px] lg:px-[30px] px-[20px] bg-[#12F7D6] rounded-full hover:text-[#12F7D6] hover:border-[#12F7D6] hover:bg-transparent duration-300'>
                                Send Message
                            </button>
                            <ToastContainer/>

                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Contact
