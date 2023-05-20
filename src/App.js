import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import axios from 'axios';
import { ApiData } from "./ApiData";

const App = () => {
  const [userData, setUserData] = useState([]);
  const randomNumber = Math.floor(Math.random() * 25);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://3.111.128.67/assignment   /chat?page=0");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setUserData(ApiData[randomNumber]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#FAF9F4] h-full w-[100vw] sm:max-w-[450px] sm:m-auto relative flex flex-col">
      <Header userData={userData} />
      <Body userData={userData} />
      <Footer userData={userData} />
    </div>
  );
};




export default App;
