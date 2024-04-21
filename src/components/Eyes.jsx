import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // console.log(e.clientX, e.clientY)
      let x = e.clientX;
      let y = e.clientY;
      let delX = x - window.innerWidth / 2;
      let delY = y - window.innerHeight / 2;

      var angle = (Math.atan2(delY, delX) * (180 / Math.PI));
      // console.log(angle);
      setRotate(angle-180);
    });
  });

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className=" w-full  h-full relative bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center">
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3 flex items-center justify-center gap-10'>
          <div className='w-[13vw] h-[13vw] rounded-full bg-white flex justify-center items-center'>
            <div className='w-2/3 relative h-2/3 rounded-full bg-zinc-900 flex justify-center items-center '>
              <div style={{transform: `rotate(${rotate}deg)`}} className='line ease-linear duration-100 flex  w-full h-10'>
                <div className='w-6 h-6 rounded-full bg-zinc-100 ease-linear'></div>
              </div>
            </div>
          </div>
          <div className='w-[13vw] h-[13vw] rounded-full bg-white flex justify-center items-center'>
            <div className='w-2/3 relative h-2/3 rounded-full bg-zinc-900 flex justify-center items-center '>
              <div style={{transform: `rotate(${rotate}deg)`}} className='line ease-linear duration-100 flex  w-full h-10'>
                <div className='w-6 h-6 rounded-full bg-zinc-100 ease-linear'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
