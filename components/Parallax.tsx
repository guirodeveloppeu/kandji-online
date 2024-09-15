"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
//import Image from 'next/image';

const Parallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/para3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y
        }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 flex items-center text-orange-800">KPANDJI <p className='mx-4 text-orange-500 border-2 p-4'>DJETRAN</p></h1>
          <p className="text-2xl ">Le Pick-UP pour vous qui aimez le Luxe et le Confort</p>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default Parallax;


