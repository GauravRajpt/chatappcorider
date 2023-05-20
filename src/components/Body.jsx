import React from "react";
import verified from "../constants/verified.svg";

function Body({ userData }) {
  return (
    <section className="h-full flex flex-col-reverse p-2 overflow-scroll scrollbar-hide">
      {userData &&
        userData?.chats?.map((item) => {
          

          return (
            <div
              className=" flex flex-row items-start p-0 gap-2 my-5 "
              key={item?.id}
            >
              {item.sender.self? null :
              <div className="w-7 h-7 relative">
                <img
                  className=" absolute h-7 w-7  left-0 top-0 rounded-full bg-[#ffffff]"
                  src={item?.sender?.image}
                  alt="profile"
                />
                {item?.sender?.is_kyc_verified ? (
                  <img
                    className="w-[7.64px] h-[7.64px] absolute left-[16.36px] top-[16.36px]"
                    src={verified}
                    alt="verified"
                  />
                ) : (
                 
                  null
                )}
              </div>}
              {item.sender.self ? (
                <div className="flex flex-row justify-end w-full">
                <div
                  className="w-[287px] rounded-[12px_12px_0px_12px] p-2 shadow-[0px_4px_8px_rgba(0,0,0,0.08)] flex flex-col justify-center
                items-center bg-[#1C63D5]"
                >
                  <div className="w-[271px]  leading-[18px] text-[14px] font-normal text-[#ffffff] bg-[#1C63D5]">
                    {item?.message}
                  </div>
                </div>
                </div>
              ) : (
                <div
                  className="w-[287px] rounded-[0px_12px_12px_12px] p-2 shadow-[0px_4px_8px_rgba(0,0,0,0.08)] flex flex-col justify-center
      items-center"
                >
                  <div className="w-[271px]  leading-[18px] text-[14px] font-normal text-[#606060] ">
                    {item?.message}
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </section>
  );
}

export default Body;
