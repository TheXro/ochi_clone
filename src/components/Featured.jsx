import React from "react";

const Featured = () => {
  const links = [
    "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
    "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
    "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
  ];


  return (
    <div className='w-full py-[2vw] bg-zinc-800'>
      <div className='w-full px-20 pb-[1vw]'>
        <h1 className='text-[3vw] font-["Neue_Montreal"]'>Featured Projects</h1>
      </div>
      <div className='cards w-full p-20 border-t-2 border-zinc-700 grid grid-cols-2 gap-6'>
        {links.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${item})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={`card w-full h-[35vw] bg-red-200 rounded-xl hover:scale-95 ease-linear duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
