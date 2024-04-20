import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='text-structure mt-[12vw] px-[4vw]'>
        {["we create", "Eye-opening", "Presentaions"].map((item, index) => {
          return (
            <div className='masker'>
              <div className="w-fit flex">
                { index === 1 && <div className=' h-[5.2vw] w-[9vw] mr-[1.5vw] rounded-lg  -translate-y-[.85vw] bg-[url("content-image01.jpg")] bg-cover '>
                  </div>}
                <h1
                  key={index}
                  className={`font-['Founders_Grotesk_X-Condensed'] ${
                    index === 1 &&
                    "text-stroke-[1px] text-stroke-white text-zinc-900"
                  } leading-[6.5vw] tracking-normal font-[600] text-[8vw] uppercase`}
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className='border-t-2 border-zinc-700 mt-[8vh] flex justify-between items-center py-5 px-20 '>
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md tracking-wider text-xl leading-none font-['Neue_Montreal']"
            >
              {item}
            </p>
          );
        })}
        <div className='start flex items-center gap-2  '>
          <div className='px-5 py-2 border-2 border-zinc-700 rounded-full uppercase text-lg hover:bg-white hover:text-zinc-900 transition-all font-["Neue_Montreal"] '>
            Start the Project
          </div>
          <div className='h-12 w-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:scale-[1.2] hover:text-zinc-900 transition-all '>
            <MdOutlineArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
