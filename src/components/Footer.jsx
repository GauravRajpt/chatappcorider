import React from 'react';
import "../App.css";
import Attachment from "../constants/Attachment.svg";
import sendicon from "../constants/sendicon.svg";


function Footer() {
  return (
    <footer className=' bottom-0 left-0 h-[58px] bg-[#FAF9F4]  flex justify-center px-4 py-2'>
        <div className='w-[90vw] h-[42px] border flex flex-row items-center gap-4 justify-center bg-white
        rounded-lg'>
        <input className='w-[247px] h-6 focus:outline-gray-200' placeholder='type something' type='text'/>
        <img className='w-4 h-4 cursor-pointer '  src={Attachment} alt='attachment'/>

        <img className='w-4 h-4 cursor-pointer'  src={sendicon} alt='sendIcon'/>
        </div>
    </footer>
  )
}

export default Footer;