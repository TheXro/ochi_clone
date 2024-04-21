import React from "react";

const About = () => {
  return (
    <div className='w-full font-["Neue_Montreal"] pt-24 bg-[#CDEA68] rounded-t-3xl text-zinc-900'>
      <h1 className=' px-20 text-[3.5vw] leading-[4vw] tracking-tight w-[79vw]'>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise <span className=' underline-offset-8 underline'>funds</span>
        <span>, </span>
        <span className=' underline-offset-8 underline'>sell products</span>
        <span>, </span>
        <span className=' underline-offset-8 underline'>
          explain complex ideas
        </span>
        <span>, </span> and hire great people.
      </h1>
      <div className='mt-20 mb-32  border-t-2 border-[#b2cf499f] px-20 py-4 text-[1vw] w-full flex'>
        <div className='w-1/2 text-xl font-light '>What you can expect:</div>
        <div className='w-1/2 text-xl flex gap-32'>
          <div className='w-[45%]'>
            <p className=" font-light">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people. <br /> <br /> <br />
              
              We believe the mix of
              strategy and design (with a bit of coffee) is what makes your
              message clear, convincing, and captivating.
            </p>
          </div>
          <div className='w-[25%] ml-16 mt-28'>
            <p>S: <br />Instagram <br />Behance <br />Facebook <br /> Linkedin</p>
          </div>
        </div>
      </div>
      <div className=' w-full mt-20 p-20 pt-10 flex border-[#b2cf499f] border-t-[2px] '>
        <div className='w-1/2'>
          <h1 className='text-6xl text-zinc-900'>Our approach:</h1>
          <button className='mt-4 px-10 py-6 bg-zinc-900 rounded-full text-[#fff] flex items-center gap-8'>
            Read More
            <div className='circle w-3 h-3 bg-zinc-100 rounded-full inline-block'></div>
          </button>
        </div>
        <div className="w-1/2 h-[65vh] rounded-lg bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default About;
