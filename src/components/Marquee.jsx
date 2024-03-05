import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-green-900'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x: "0"}} animate={{x:'-100%'}} transition={{repeatType:Infinity, ease: "linear", duration: 10}} className='text-[12vw] leading-none font["Founders_Grotesk_x_Condensed"] uppercase pt-10 -px-20 mb-6 font-semibold pr-20'>we are ochi </motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x:'-100%'}} transition={{repeatType:Infinity ,ease: "linear", duration: 10}} className='text-[12vw] leading-none font["Founders_Grotesk_x_Condensed"] uppercase pt-10 -px-20 mb-6 font-semibold  pr-20 '>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee;