import { motion } from 'framer-motion'
import React, { useState } from 'react'
const Featured = () => {
    const [isHovering,setHovering] = useState(false)
    const handleHover = ()=>{
        

    }
  return (
    <div className='w-full py-20 '>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-7xl font-[""Neue_Montreal] tracking-tight'>FEATURED Projects</h1>

        </div>
        <div className='px-20'>
        <div className='cards w-full flex gap-8 mt-10'>
                <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className='card-Container relative  w-1/2 h-[75vh]  overflow-hidden'>
                <h1 className='absolute flex text-zinc-900 overflow-hidden reft-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl'>FYDE
                {"FYDE".split('').map((item,index)=>
                <motion.span initial={{y: "100%"}} className='inline-block '>{item}</motion.span>
                )}
                </h1>
                <div className='card rounded-xl w-full h-full overflow-hidden'>
                        <img className='w-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div className='card-Container relative w-1/2 h-[75vh]  overflow-hidden'>
                    <div className='card rounded-xl w-full h-full overflow-hidden'>
                    <h1 className='absolute  right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl'>VISE
                    {"VISE".split('').map((item,index)=><span className=''>{item}</span>)}
                    </h1>
                        <img className='w-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured