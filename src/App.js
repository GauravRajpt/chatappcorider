import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://3.111.128.67/assignment/chat?page=0");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setUserData(ApiData);
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

const ApiData = [
  {
    "chats": [
        {
            "id": "ad0e5ef8941f487481e20536c0d47b21",
            "message": "Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.Quisque vitae varius ex, eu volutpat orci.Quisque vitae varius ex, eu volutpat orci.",
            "sender": {
                "image": "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o",
                "is_kyc_verified": false,
                "self": false,
                "user_id": "a6c04ceed74b447280f5fa7ab053adcc"
            },
            "time": "2023-05-20 14:29:10"
        },
        {
            "id": "1a9dc571415142beb63455db3ad5b9ea",
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            "sender": {
                "image": "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o",
                "is_kyc_verified": false,
                "self": false,
                "user_id": "a6c04ceed74b447280f5fa7ab053adcc"
            },
            "time": "2023-05-20 14:29:40"
        },
        {
            "id": "09ef3dcd687b4e77875bb4f09107f46e",
            "message": "Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Quisque vitae varius ex, eu volutpat orci.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.",
            "sender": {
                "image": "https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g",
                "is_kyc_verified": false,
                "self": false,
                "user_id": "54fbcca87afa4527b28221df348018b1"
            },
            "time": "2023-05-20 14:30:10"
        },
        {
            "id": "7e6dc50b011e45debbb05b759902bcb4",
            "message": "Integer ultricies malesuada quam.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            "sender": {
                "image": "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o",
                "is_kyc_verified": false,
                "self": false,
                "user_id": "a6c04ceed74b447280f5fa7ab053adcc"
            },
            "time": "2023-05-20 14:30:40"
        },
        {
            "id": "9c61c824b9a141fbb20c01bacbedd36f",
            "message": "Quisque vitae varius ex, eu volutpat orci.<br>Page 0<br>Quisque vitae varius ex, eu volutpat orci.Cras vel elit sed mi placerat pharetra eget vel odio.Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Cras erat dui, finibus vel lectus ac, pharetra dictum odio.",
            "sender": {
                "image": "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o",
                "is_kyc_verified": false,
                "self": false,
                "user_id": "a6c04ceed74b447280f5fa7ab053adcc"
            },
            "time": "2023-05-20 14:31:10"
        },
        {
            "id": "49a767b9201f4d30aa69f96614165bfe",
            "message": "Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.Aenean ullamcorper orci et vulputate fermentum.Integer ultricies malesuada quam.",
            "sender": {
                "image": "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o",
                "is_kyc_verified": false,
                "self": false,
                "user_id": "a6c04ceed74b447280f5fa7ab053adcc"
            },
            "time": "2023-05-20 14:31:40"
        },
        {
            "id": "4437351b108b40bdba9821941c5f0c0d",
            "message": "Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Duis ac nulla varius diam ultrices rutrum.",
            "sender": {
                "image": "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o",
                "is_kyc_verified": false,
                "self": false,
                "user_id": "a6c04ceed74b447280f5fa7ab053adcc"
            },
            "time": "2023-05-20 14:32:10"
        },
        {
            "id": "6b234656638d4b65b3c3101267be1d04",
            "message": "Duis ac nulla varius diam ultrices rutrum.Aenean ullamcorper orci et vulputate fermentum.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Integer ultricies malesuada quam.Duis ac nulla varius diam ultrices rutrum.",
            "sender": {
                "image": "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0",
                "is_kyc_verified": true,
                "self": false,
                "user_id": "73785ed67d034f6290b0334c6e756433"
            },
            "time": "2023-05-20 14:32:40"
        },
        {
            "id": "37f4848dc9014bfc8c8746b852eb3a32",
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Cras vel elit sed mi placerat pharetra eget vel odio.Quisque vitae varius ex, eu volutpat orci.<br>Page 0<br>",
            "sender": {
                "image": "https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g",
                "is_kyc_verified": false,
                "self": false,
                "user_id": "54fbcca87afa4527b28221df348018b1"
            },
            "time": "2023-05-20 14:33:10"
        },
        {
            "id": "d9273e43f1ad4763b94189e3622b8c3f",
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque vitae varius ex, eu volutpat orci.<br>Page 0<br>",
            "sender": {
                "image": "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0",
                "is_kyc_verified": true,
                "self": false,
                "user_id": "73785ed67d034f6290b0334c6e756433"
            },
            "time": "2023-05-20 14:33:40"
        }
    ],
    "from": "HSR Layout",
    "message": "Chat retrieved successfully",
    "name": "Trip No. 26",
    "status": "success",
    "to": "Bellandur"
}
]

export default App;
