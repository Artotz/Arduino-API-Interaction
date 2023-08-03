import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

// pages/MyComponent.js
import { useQuery } from "react-query";
import axios from "axios";

const fetchMyData = async () => {
  const { data } = await axios.get("/api");
  return data;
};

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const { data, isLoading, isError } = useQuery("myData", fetchMyData);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  if (isError) {
    return <p>Error occurred while fetching data</p>;
  }

  return (
    <>
      <Head>
        <title>Arduino Interaction</title>
      </Head>

      <section className="fixed flex h-16 w-[96vw] left-[2vw] mt-2 rounded-3xl items-center shadow-md shadow-black bg-blue-100 border-2 border-black">
        <ul className="flex flex-row w-full h-fit justify-around items-center">
          <li className="flex w-fit h-fit px-3 py-1">
            <a className="flex text-4xl select-none transition-all hover:-translate-y-1">
              🐵
            </a>
          </li>
          <li className="flex w-fit h-fit px-3 py-1">
            <a className="flex text-4xl select-none transition-all hover:-translate-y-1">
              🏚
            </a>
          </li>
          <li className="flex w-fit h-fit px-3 py-1">
            <a
              className="flex text-4xl select-none transition-all hover:-translate-y-1"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              ✍🏿
            </a>
          </li>
          <li className="flex w-fit h-fit px-3 py-1">
            <a
              className="flex text-4xl select-none transition-all hover:-translate-y-1"
              href="https://cdn.discordapp.com/attachments/220733806011744267/1120030948524838974/SPOILER_unknown.png"
            >
              ❓
            </a>
          </li>
        </ul>
      </section>

      <div className="flex min-h-screen bg-slate-600">
        <main className="flex mx-auto mt-[84px] mb-4 w-4/6 min-h-full justify-center shadow-md shadow-black rounded-3xl border-2 border-black bg-white">
          {isLoading || toggle ? (
            <p>loading...</p>
          ) : (
            <ul className="flex flex-col w-full pt-5">
              <li className="flex flex-col h-fit mx-8 mb-5 justify-center items-center shadow-md shadow-black rounded-3xl border-1 border-black bg-blue-600">
                <p className="flex h-fit p-4 font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer at volutpat eros. Morbi ultricies tortor magna, eu
                  scelerisque nisi iaculis at. Vestibulum convallis quam et
                  dolor pellentesque hendrerit. Curabitur at ante sit amet odio
                  eleifend egestas. Nunc efficitur metus nisl, non pulvinar
                  ligula vulputate nec.
                </p>
                <div className="flex flex-row-reverse w-full h-8">
                  <p className="flex h-fit mx-4 font-bold">
                    Anonymous - {new Date().toUTCString()}
                  </p>
                </div>
              </li>
              <li className="flex flex-col h-fit mx-8 mb-5 justify-center items-center shadow-md shadow-black rounded-3xl border-1 border-black bg-blue-600">
                <p className="flex h-fit p-4 font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer at volutpat eros. Morbi ultricies tortor magna, eu
                  scelerisque nisi iaculis at. Vestibulum convallis quam et
                  dolor pellentesque hendrerit. Curabitur at ante sit amet odio
                  eleifend egestas. Nunc efficitur metus nisl, non pulvinar
                  ligula vulputate nec. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Integer at volutpat eros. Morbi ultricies
                  tortor magna, eu scelerisque nisi iaculis at. Vestibulum
                  convallis quam et dolor pellentesque hendrerit. Curabitur at
                  ante sit amet odio eleifend egestas. Nunc efficitur metus
                  nisl, non pulvinar ligula vulputate nec.
                </p>
                <div className="flex flex-row-reverse w-full h-8">
                  <p className="flex h-fit mx-4 font-bold">
                    Anonymous - {new Date().toUTCString()}
                  </p>
                </div>
              </li>
              <li className="flex flex-col h-fit mx-8 mb-5 justify-center items-center shadow-md shadow-black rounded-3xl border-1 border-black bg-blue-600">
                <p className="flex h-fit p-4 font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex flex-row-reverse w-full h-8">
                  <p className="flex h-fit mx-4 font-bold">
                    Anonymous - {new Date().toUTCString()}
                  </p>
                </div>
              </li>
              <li className="flex flex-col h-fit mx-8 mb-5 justify-center items-center shadow-md shadow-black rounded-3xl border-1 border-black bg-blue-600">
                <p className="flex h-fit p-4 font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer at volutpat eros. Morbi ultricies tortor magna, eu
                  scelerisque nisi iaculis at. Vestibulum convallis quam et
                  dolor pellentesque hendrerit. Curabitur at ante sit amet odio
                  eleifend egestas. Nunc efficitur metus nisl, non pulvinar
                  ligula vulputate nec.
                </p>
                <div className="flex flex-row-reverse w-full h-8">
                  <p className="flex h-fit mx-4 font-bold">
                    Anonymous - {new Date().toUTCString()}
                  </p>
                </div>
              </li>
              <li className="flex flex-col h-fit mx-8 mb-5 justify-center items-center shadow-md shadow-black rounded-3xl border-1 border-black bg-blue-600">
                <p className="flex h-fit p-4 font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer at volutpat eros. Morbi ultricies tortor magna, eu
                  scelerisque nisi iaculis at. Vestibulum convallis quam et
                  dolor pellentesque hendrerit. Curabitur at ante sit amet odio
                  eleifend egestas. Nunc efficitur metus nisl, non pulvinar
                  ligula vulputate nec.
                </p>
                <div className="flex flex-row-reverse w-full h-8">
                  <p className="flex h-fit mx-4 font-bold">
                    Anonymous - {new Date().toUTCString()}
                  </p>
                </div>
              </li>
              <li className="flex flex-col h-fit mx-8 mb-5 justify-center items-center shadow-md shadow-black rounded-3xl border-1 border-black bg-blue-600">
                <p className="flex h-fit p-4 font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer at volutpat eros. Morbi ultricies tortor magna, eu
                  scelerisque nisi iaculis at. Vestibulum convallis quam et
                  dolor pellentesque hendrerit. Curabitur at ante sit amet odio
                  eleifend egestas. Nunc efficitur metus nisl, non pulvinar
                  ligula vulputate nec.
                </p>
                <div className="flex flex-row-reverse w-full h-8">
                  <p className="flex h-fit mx-4 font-bold">
                    Anonymous - {new Date().toUTCString()}
                  </p>
                </div>
              </li>
            </ul>
          )}
        </main>
      </div>
    </>
  );
}
