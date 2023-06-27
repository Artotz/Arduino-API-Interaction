import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const writeToFile = () => {};

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Head>
        <title>Arduino Interaction</title>
      </Head>

      <section className="fixed flex h-16 w-[96vw] left-[2vw] mt-2 rounded-3xl bg-blue-100 border-2 border-black transition-all duration-500 active:-translate-y-20">
        <ul className="flex flex-row w-full h-full justify-around">
          <li
            className="flex w-fit h-fit px-3 py-1 mt-3 border-2  bg-blue-300 border-black rounded-3xl"
            onClick={() => setToggle(!toggle)}
          >
            meme
          </li>
          <li className="flex w-fit h-fit px-3 py-1 mt-3 border-2  bg-blue-300 border-black rounded-3xl">
            meme
          </li>
          <li className="flex w-fit h-fit px-3 py-1 mt-3 border-2  bg-blue-300 border-black rounded-3xl">
            meme
          </li>
          {toggle && (
            <li className="flex w-fit h-fit px-3 py-1 mt-3 border-2  bg-blue-300 border-black rounded-3xl">
              meme
            </li>
          )}
        </ul>
      </section>

      <div className="flex min-h-screen bg-slate-600">
        <main className="flex mx-auto my-24 w-4/6 h-fit justify-center rounded-3xl bg-white">
          <ul className="flex flex-col w-full">
            <li className="flex h-40 mx-8 my-5 justify-center rounded-3xl bg-blue-600">
              <p className="flex h-fit mt-4 font-bold ">useless</p>
            </li>
            <li className="flex h-40 mx-8 my-5 justify-center rounded-3xl bg-blue-600">
              <p>useless</p>
            </li>
            <li className="flex h-40 mx-8 my-5 justify-center rounded-3xl bg-blue-600">
              <p>useless</p>
            </li>
            <li className="flex h-40 mx-8 my-5 justify-center rounded-3xl bg-blue-600">
              <p>useless</p>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}
