import Head from "next/head";

export default function Home() {
  const writeToFile = () => {};

  return (
    <>
      <Head>
        <title>Arduino Interaction</title>
      </Head>

      <section className="fixed flex h-16 left-2 right-2 top-2 justify-center bg-slate-100 border-2 border-black"></section>

      {/*
        <div className="flex absolute bottom-0 left-0 right-0 top-0 -z-30 bg-slate-600"></div>
      */}

      <div className="flex bg-slate-600">
        <main className="flex mx-auto mt-20 w-4/6 h-screen justify-center bg-white">
          <div className="flex flex-col my-auto w-full overflow-hidden">
            <div className="flex h-40 mx-3 my-5 justify-center bg-blue-600">
              <p>useless</p>
            </div>
            <div className="flex h-40 mx-3 my-5 justify-center bg-blue-600">
              <p>useless</p>
            </div>
            <div className="flex h-40 mx-3 my-5 justify-center bg-blue-600">
              <p>useless</p>
            </div>
            <div className="flex h-40 mx-3 my-5 justify-center bg-blue-600">
              <p>useless</p>
            </div>
            <div className="flex h-40 mx-3 my-5 justify-center bg-blue-600">
              <p>useless</p>
            </div>
            <div className="flex h-40 mx-3 my-5 justify-center bg-blue-600">
              <p>useless</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
