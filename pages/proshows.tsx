import { CollegeLogo, Footer, PageHead } from "components";
import { Club } from "components/clubs";
import { Clubs } from "data/debugClubs";
import React from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Events() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <h2 className="mt-20 mb-2 font-bold text-center lg:text-4xl sm:text-3xl font-title">
          Pro Shows
        </h2>
        <div
          id="container"
          className="justify-center min-w-[96vw] flex md:min-w-[85vw] my-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] text-xl rounded-br-3xl w-full">
            <Link href="/dj" className="shadow-2xl w-full  clubimage">
              <Image
                src={"/images/proshows/dj/dj1.jpg"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[90vw] h-[90vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
              <h2 className="mb-4 text-3xl font-bold text-center font-title">
                DJ Night
              </h2>
            </Link>
            <Link href="/celebrity" className="shadow-2xl w-full  clubimage mb-4">
              <Image
                src={"/images/proshows/jagan.jpg"}
                id="celeb"
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[90vw] h-[90vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
              <h2 className="mb-4 text-3xl font-bold text-center font-title">
                Celebrity Variety Show
              </h2>
            </Link>
            <Link href="/proshow" className="shadow-2xl w-full  clubimage">
              <img
                src={"/images/proshows/pro0.jpg"}
                alt={""}
                id="pro"
                width={244}
                height={244}
                className="mb-4 mx-auto w-[90vw] h-[90vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
              <h2 className="mb-4 text-3xl font-bold text-center font-title">
                Pro Show
              </h2>
            </Link>
            <Link href="/bike" className="shadow-2xl w-full  clubimage">
              <Image
                src={"/images/proshows/bike.jpg"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[90vw] h-[90vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
              <h2 className="mb-4 text-3xl font-bold text-center font-title">
                Bike Stunt
              </h2>
            </Link>
            <Link href="/choreo" className="shadow-2xl w-full  clubimage">
              <Image
                src={"/images/proshows/choreo.jpg"}
                alt={""}
                width={244}
                height={244}
                className="mb-4 mx-auto w-[90vw] h-[90vw] md:w-[45vw] md:h-[45vw] lg:w-[20vw] lg:h-[20vw]"
              />
              <h2 className="mb-4 text-3xl font-bold text-center font-title">
                Choreo Nite
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <Script src="imagechanges.js">
      </Script>
      <Script src="imagechanges2.js"></Script>
    </>
  );
}
