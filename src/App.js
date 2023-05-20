import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


import "./App.css";


function App() {

  const [userData, setUserData]= useState([]);


  useEffect(()=>{
    
    async function getData(){
      const data=  await fetch('http://3.111.128.67/assignment/chat?page=0');
      const json=  await data.json();
      
      setUserData(json);
      }
   getData();
  },[])
  return (
    <div className="bg-[#FAF9F4] h-full w-[100vw] sm:max-w-[450px] sm:m-auto relative flex flex-col  ">
     <Header userData={userData}/>
     <Body userData={userData}/>
     <Footer userData={userData}/>
    </div>
  );
}

export default App;
