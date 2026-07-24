'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MEDIA = "https://qclay.design/lovable/codeba/";
const dash01 = { url: MEDIA + "01.svg" };
const dash02 = { url: MEDIA + "dash02.svg" };
const dashLine = { url: MEDIA + "Line.svg" };
const dashCard3 = { url: MEDIA + "Card_3.png" };
const dashCard3Pink = { url: MEDIA + "Card_3pink.png" };
const dashCard4 = { url: MEDIA + "Card_4.png" };
const dashCard5 = { url: MEDIA + "Card_5.png" };

function CountUpInView({ end, duration = 1200, delay = 0, active = true }: { end: number; duration?: number; delay?: number; active?: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => {
      let start = 0;
      const steps = 30;
      const stepTime = duration / steps;
      const increment = end / steps;
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
    }, delay);
    return () => clearTimeout(timer);
  }, [end, duration, delay, active]);

  return <>{count.toLocaleString()}</>;
}

export function OriginalHeroDashboard() {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="w-full max-w-[1124px] h-[465px] mx-auto bg-black rounded-[20px] outline outline-[1.4px] outline-neutral-100/10 flex overflow-hidden relative z-10 anim-rise text-left"
      style={{ animationDelay: "2100ms" }}
    >
      {/* Left sidebar */}
      <aside className="w-56 shrink-0 h-full relative bg-black border-r border-white/10">
        <motion.div
          className="flex items-center gap-5 px-4 py-5"
          initial={{ opacity: 0, y: 20 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.36, delay: 0.06, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold text-neutral-100">Processos</span>
          <span className="text-sm font-medium text-neutral-100 opacity-30">Prazos</span>
        </motion.div>
        <div className="flex flex-col gap-4 p-4 w-[calc(100%+1rem)] -ml-4 pl-8 border-t border-white/10">
          {[
            <img key="d1" src={dash01.url} alt="Headlines" className="h-[34px] w-auto object-contain object-left ml-2" />,
            <img key="d2" src={dash02.url} alt="Images and fill" className="h-[34px] w-auto object-contain object-left ml-2" />,
            <div key="tools" className="flex items-center gap-3 h-9 px-2 text-neutral-300 text-sm">
              <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m14.7 6.3 3 3" />
                  <path d="M3 21v-3l11-11 3 3L6 21z" />
                </svg>
              </span>
              PJe / e-SAJ
            </div>,
            <div key="cards" className="flex items-center gap-3 h-[46px] px-1 rounded-lg bg-white/[0.08] outline outline-1 outline-white/5">
              <span className="w-9 h-9 ml-1 rounded-lg bg-[#173CE0] flex items-center justify-center shadow-[0_0_12px_rgba(23,60,224,0.4)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
              </span>
              <span className="text-sm font-medium text-neutral-100">DataJud IA</span>
            </div>,
            <div key="add" className="flex items-center gap-3 h-9 px-2 text-neutral-300 text-sm">
              <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </span>
              Minuta IA
            </div>,
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.72, delay: 0.12 + i * 0.2, ease: "easeOut" }}
            >
              {node}
            </motion.div>
          ))}
        </div>
      </aside>

      {/* Right grid */}
      <div className="flex-1 p-5 flex flex-wrap gap-x-4 gap-y-5 content-start bg-[#0F0D0F]">
        {/* Card 1 - Beige */}
        <motion.div
          className="w-96 h-60 relative bg-[#D0C9B9] rounded-2xl overflow-hidden p-5 flex flex-col text-[#131113]"
          initial={{ opacity: 0, y: 20 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.36, delay: 0.18, ease: "easeOut" }}
        >
          <div className="flex justify-between relative z-10">
            <div className="flex flex-col">
              <span className="text-xs opacity-50 font-semibold uppercase tracking-wider block">Honorários & Prazos</span>
              <span className="text-2xl font-bold mt-1 block">48 Intimações</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs opacity-50 font-semibold block">Pontualidade</span>
              <span className="text-2xl font-bold mt-1 text-[#173CE0]">
                <CountUpInView end={99} duration={1200} delay={780} active={heroReady} />%
              </span>
            </div>
          </div>
          <div className="flex justify-between w-full mt-3 relative z-10">
            <span className="text-xs text-stone-950 font-bold">TJSP / e-SAJ</span>
            <span className="text-xs opacity-60 font-medium">TRF-3 & STJ</span>
          </div>
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none opacity-80"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={heroReady ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
            transition={{ duration: 0.72, delay: 0.48, ease: "easeInOut" }}
          >
            <img src={dashLine.url} alt="" className="absolute inset-0 w-full h-full object-cover scale-[1.015] origin-center pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Card 2 - Pink Accent / Processos Ativos */}
        <motion.div
          className="w-36 h-60 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.36, delay: 0.24, ease: "easeOut" }}
        >
          <img src={dashCard3Pink.url} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-3xl font-bold text-neutral-900">
              <CountUpInView end={8420} duration={1200} delay={360} active={heroReady} />
            </span>
            <motion.span
              className="text-xs font-semibold text-neutral-900/70 mt-1 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.42, ease: "easeOut" }}
            >
              Processos Ativos
            </motion.span>
          </div>
        </motion.div>

        {/* Card 3 - Custom AI */}
        <motion.div
          className="w-72 h-60 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.36, delay: 0.3, ease: "easeOut" }}
        >
          <img src={dashCard3.url} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* Card 4 - Its Magic */}
        <motion.div
          className="w-72 h-60 rounded-2xl overflow-hidden -mt-[56px]"
          initial={{ opacity: 0, y: 20 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.36, delay: 0.36, ease: "easeOut" }}
        >
          <img src={dashCard4.url} alt="" className="w-full h-full object-contain object-center" />
        </motion.div>

        {/* Card 5 - AI Created */}
        <motion.div
          className="w-[555px] h-60 rounded-2xl overflow-hidden -mt-[56px]"
          initial={{ opacity: 0, y: 20 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.36, delay: 0.42, ease: "easeOut" }}
        >
          <img src={dashCard5.url} alt="" className="w-full h-full object-contain object-center" />
        </motion.div>
      </div>
    </div>
  );
}
