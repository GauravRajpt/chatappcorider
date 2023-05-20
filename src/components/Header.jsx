import back from "../constants/Back.svg";
import icon from "../constants/Icon.svg";
import threedot from "../constants/threedot.svg";

import React from 'react'

function Header({userData}) {
  
  return (
    <header className="sticky flex flex-col items-start py-2 px-4 h-[130px] border-b">
<div
  className="flex flex-row items-center p-0 gap-3 w-[343px] h-[30px]
flex-none order-none self-stretch flex-grow-0 my-3"
>
  <div className="w-[30px] h-[30px] flex-none order-none grow-0 relative ">
    <img
      className=" cursor-pointer absolute left-[20.83%] right-[20.83%] top-[20.83%] bottom-[20.83%]
       w-[20px] h-[20px]"
      src={back}
      alt="back"
    />
  </div>
  <div
    className="w-[275px] h-[30px] text-[24px] leading-[30px] text-[#141E0D] 
  font-bold flex-none order-1 flex-grow"
  >
    {userData?.name}
  </div>
    <div className="absolute right-4">
  <div className="w-6 h-6 flex-none order-2 flex-grow-0 relative ">
    <img
      className="cursor-pointer absolute left-[8.33%] bottom-[8.33%] top-[7.83%] right-[7.83%] w-[20px] h-[20px] "
      src={icon}
      alt="icon"
    />
  </div>
  </div>
</div>
<div className="flex flex-row items-center p-0 gap-3 w-[343px] h-[48px] flex-none order-1 grow-0">
  <div className="flex flex-row items-start p-0 gap-4 w-[307px] h-12 flex-none order-none grow">
    <div className="w-12 h-12 flex-none order-none grow-0 relative">
      <div
        className="absolute w-12 h-12 top-0 left-0 bg-[#ffffff] border border-solid 
    border-[#ffffff] rounded-full overflow-hidden "
      >
       {userData.chats? (<> <img
          className="w-6 h-6 absolute left-[-2px] top-[-2px]  bg-red-500"
          src={userData?.chats[0]?.sender?.image}
          alt="dp"
        />
        <img
          className="w-6 h-6 absolute left-[22px] top-[-2px] bg-blue-500"
          src={userData?.chats[1]?.sender?.image}
          alt="dp"
        />
        <img
          className="w-6 h-6 absolute left-[-2px] top-[22px] bg-gray-500"
          src={userData?.chats[2]?.sender?.image}
          alt="dp"
        />
        <img
          className="w-6 h-6 absolute left-[22px] top-[22px] bg-green-500"
          src={userData?.chats[3]?.sender?.image}
          alt="dp"
        /></>):null}
      </div>
    </div>
    <div className="w-[215px] h-[46px] font-bold text-lg leading-6 ">
      <span className="font-medium text-base leading-5 text-[#606060]">
        From
      </span>{" "}
      {userData?.from} <br></br>
      <span className="font-medium text-base leading-5 text-[#606060]">
        To{" "}
      </span>
      {userData.to}
    </div>
  </div>
  <div className="absolute right-6">
    <img src={threedot} alt="threedot" />
  </div>
</div>
</header>
  )
}

export default Header