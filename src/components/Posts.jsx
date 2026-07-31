import axios from "axios";
import React, { useEffect, useState } from "react";
const Datafetch = () => {
  let api = "https://dummyjson.com/posts";
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    try {
      const res = await axios.get(api);
      console.log("Datafetched", res.data.posts);
      setData(res.data.posts);
    } catch (error) {
      console.log("Error occured during datafetch", error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <h1 className="bg-black text-center text-white text-3xl rounded-md m-2 p-2">
        useEffect Hook
      </h1>
      {data.length === 0 ? (
        <p className="bg-purple-400 text-blue text-2xl ml-100 mt-10 p-5 text-center rounded-md">
          Not added data yet
        </p>
      ) : (
        <div className="grid grid-cols-3 p-2 gap-1">
          {data.map((item, index) => {
            return (
              <div className="border m-2 p-2 ">
                <h2 className="text-center p-2">{item.title}</h2>
                {/* <img src={item.images}></img> */}
                <p className="border rounded-md m-2 p-2 text-black bg-teal-300">{item.body}</p>
                <div className='flex justify-between p-2 m-2'>
                  <p className='bg-pink-300 p-2 rounded-md text-black'>Views: {item.views}</p>
                  {/* <p className='bg-pink-300 p-2 rounded-md text-black'>Category: {item.category}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Datafetch;

