import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

// pages/MyComponent.js
//import { useQuery } from "react-query";
import axios from "axios";

// const fetchMyData = async () => {
//   const { data } = await axios.get("/api");
//   return data;
// };

export default function Home() {
  const [toggle, setToggle] = useState(false);
  //const { data, isLoading, isError } = useQuery("myData", fetchMyData);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (isError) {
  //   return <p>Error occurred while fetching data</p>;
  // }

  return (
    <>
      <Head>
        <title>Create a Post</title>
      </Head>

      <section className="fixed flex h-16 w-[96vw] left-[2vw] mt-2 rounded-3xl items-center shadow-md shadow-black bg-blue-100 border-2 border-black">
        <ul className="flex flex-row w-full h-fit justify-around items-center">
          <li className="flex w-fit h-fit px-3 py-1">
            <a className="flex text-4xl select-none transition-all hover:-translate-y-1">
              😀
            </a>
          </li>
          <li className="flex w-fit h-fit px-3 py-1">
            <a className="flex text-4xl select-none transition-all hover:-translate-y-1">
              🏚
            </a>
          </li>
          <li className="flex w-fit h-fit px-3 py-1">
            <a className="flex text-4xl select-none transition-all hover:-translate-y-1">
              ✍
            </a>
          </li>
          <li className="flex w-fit h-fit px-3 py-1">
            <a className="flex text-4xl select-none transition-all hover:-translate-y-1">
              ❓
            </a>
          </li>
        </ul>
      </section>

      <div className="flex min-h-screen bg-slate-600">
        <main className="flex mx-auto mt-[84px] mb-4 w-4/6 min-h-full justify-center shadow-md shadow-black rounded-3xl border-2 border-black bg-white">
          {false ? (
            <p>loading...</p>
          ) : (
            <div className="flex flex-col w-full">
              <div className="flex bg-red-400 h-16 m-4">
                <input
                  className="flex w-full"
                  alt="Author"
                  defaultValue="Author"
                ></input>
              </div>
              <div className="flex bg-red-200 h-full m-4"></div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
