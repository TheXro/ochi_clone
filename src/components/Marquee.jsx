import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className='w-full py-10 bg-[#044D43] rounded-t-3xl'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap items-center overflow-hidden gap-24'>
        <motion.h1 initial={{x:0}} animate={{x:-1036}} transition={{ease:'linear', repeatType: "loop",repeat: Infinity, duration: 5}} className='text-[20vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase -mb-24 pt-12'>
          We are ochi
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:-1036}} transition={{ease:'linear', repeatType: "loop",repeat: Infinity, duration: 5}} className='text-[20vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase -mb-24 pt-12'>
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
