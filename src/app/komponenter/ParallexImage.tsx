"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallexImage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🎯 Background moves slower
  const bgY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  // ✍️ Text moves faster (parallax depth)
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // 🔍 Subtle zoom
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  // 🌫 Fade out
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
    <section
    ref={ref} 
     className="relative h-[70vh]
      overflow-hidden">
      {/* 🖼 Background */}
      <motion.div style={{ y: bgY, scale }} className="absolute inset-0">
        <Image
          src="/familiefotograf_barnefotograf_vestfold_telemark17.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* ✍️ Foreground content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4"
      ></motion.div>
    </section>
    </>
  );
}
