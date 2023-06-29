import Head from "next/head";
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

      <section className="fixed flex h-16 w-[96vw] left-[2vw] mt-2 rounded-3xl bg-blue-100 border-2 border-black transition-all duration-500 active:-translate-y-20">
        <ul className="flex flex-row w-full h-full justify-around">
          <li className="flex w-fit h-fit px-3 py-1 mt-3 border-2  bg-blue-300 border-black rounded-3xl">
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
              {isLoading ? <p>loading</p> : <div>{JSON.stringify(data)}</div>}
              <svg
                className="animate-spin"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8C16 6.14916 15.3582 4.35557 14.1841 2.92485C13.0099 1.49413 11.376 0.514799 9.56072 0.153718C7.74544 -0.207364 5.86112 0.0721488 4.22883 0.94463C2.59653 1.81711 1.31725 3.22858 0.608964 4.93853C-0.0993228 6.64849 -0.192794 8.55113 0.344477 10.3223C0.881748 12.0934 2.01652 13.6235 3.55544 14.6518C5.09436 15.68 6.94221 16.1429 8.78414 15.9615C10.6261 15.7801 12.3481 14.9656 13.6569 13.6569L12.1642 12.1642C11.2008 13.1277 9.93315 13.7272 8.57723 13.8608C7.22132 13.9943 5.86104 13.6536 4.72818 12.8966C3.59532 12.1397 2.75997 11.0133 2.36446 9.70952C1.96896 8.40571 2.03777 7.0051 2.55916 5.74633C3.08056 4.48757 4.02229 3.44853 5.22389 2.80626C6.42549 2.16399 7.81261 1.95823 9.14891 2.22404C10.4852 2.48985 11.688 3.21077 12.5524 4.26398C13.4167 5.31719 13.8891 6.63752 13.8891 8H16Z"
                  fill="white"
                />
              </svg>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58 17C58 15.1492 57.3582 13.3556 56.1841 11.9249C55.0099 10.4941 53.376 9.5148 51.5607 9.15372C49.7454 8.79264 47.8611 9.07215 46.2288 9.94463C44.5965 10.8171 43.3173 12.2286 42.609 13.9385C41.9007 15.6485 41.8072 17.5511 42.3445 19.3223C42.8817 21.0934 44.0165 22.6235 45.5554 23.6518C47.0944 24.68 48.9422 25.1429 50.7841 24.9615C52.6261 24.7801 54.3481 23.9656 55.6569 22.6569L54.1642 21.1642C53.2008 22.1277 51.9332 22.7272 50.5772 22.8608C49.2213 22.9943 47.861 22.6536 46.7282 21.8966C45.5953 21.1397 44.76 20.0133 44.3645 18.7095C43.969 17.4057 44.0378 16.0051 44.5592 14.7463C45.0806 13.4876 46.0223 12.4485 47.2239 11.8063C48.4255 11.164 49.8126 10.9582 51.1489 11.224C52.4852 11.4898 53.688 12.2108 54.5524 13.264C55.4167 14.3172 55.8891 15.6375 55.8891 17H58Z"
                  fill="#FF4646"
                />
                <path
                  d="M21 17C21 15.1492 20.3582 13.3556 19.1841 11.9249C18.0099 10.4941 16.376 9.5148 14.5607 9.15372C12.7454 8.79264 10.8611 9.07215 9.22883 9.94463C7.59653 10.8171 6.31725 12.2286 5.60896 13.9385C4.90068 15.6485 4.80721 17.5511 5.34448 19.3223C5.88175 21.0934 7.01652 22.6235 8.55544 23.6518C10.0944 24.68 11.9422 25.1429 13.7841 24.9615C15.6261 24.7801 17.3481 23.9656 18.6569 22.6569L17.1642 21.1642C16.2008 22.1277 14.9332 22.7272 13.5772 22.8608C12.2213 22.9943 10.861 22.6536 9.72818 21.8966C8.59532 21.1397 7.75997 20.0133 7.36446 18.7095C6.96896 17.4057 7.03777 16.0051 7.55916 14.7463C8.08056 13.4876 9.02229 12.4485 10.2239 11.8063C11.4255 11.164 12.8126 10.9582 14.1489 11.224C15.4852 11.4898 16.688 12.2108 17.5524 13.264C18.4167 14.3172 18.8891 15.6375 18.8891 17H21Z"
                  fill="#FF4646"
                />
                <rect
                  className="animate-bounce"
                  x="21"
                  y="33"
                  width="21"
                  height="21"
                  fill="#FF3939"
                />
              </svg>
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
