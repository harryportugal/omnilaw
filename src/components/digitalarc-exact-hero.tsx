'use client';

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrainCircuit, FolderKanban, CalendarClock, Receipt, LineChart } from "lucide-react";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

export function DigitalArcExactHero() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "IA Jurídica", icon: BrainCircuit },
    { id: 1, label: "Gestão de Processos", icon: FolderKanban },
    { id: 2, label: "Automação de Prazos", icon: CalendarClock },
    { id: 3, label: "Financeiro & Honorários", icon: Receipt },
    { id: 4, label: "Analytics & BI", icon: LineChart },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#060608] text-white font-sans overflow-x-hidden flex flex-col selection:bg-white selection:text-black">
      {/* Background Left Shiny Blue Ambient Light (Floating across page background) */}
      <motion.div
        className="absolute -top-10 left-0 -translate-x-[50%] w-[950px] h-[950px] rounded-full blur-[110px] pointer-events-none z-0 mix-blend-screen opacity-90"
        style={{
          backgroundImage: "linear-gradient(110deg, #1d4ed8 0%, #2563eb 25%, #60a5fa 40%, #ffffff 50%, #60a5fa 60%, #2563eb 75%, #1d4ed8 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          scale: [0.95, 1.3, 1, 1.25, 0.95],
          opacity: [0.75, 0.95, 0.8, 0.95, 0.75],
          backgroundPosition: ["0% 0%", "200% 200%", "0% 0%"],
          rotate: [0, 45, 90, 45, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Background Right Shiny Blue Ambient Light (Floating across page background) */}
      <motion.div
        className="absolute -top-10 right-0 translate-x-[50%] w-[950px] h-[950px] rounded-full blur-[110px] pointer-events-none z-0 mix-blend-screen opacity-90"
        style={{
          backgroundImage: "linear-gradient(110deg, #1e40af 0%, #3b82f6 25%, #93c5fd 40%, #ffffff 50%, #93c5fd 60%, #3b82f6 75%, #1e40af 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          scale: [1.25, 0.95, 1.2, 0.9, 1.25],
          opacity: [0.8, 0.95, 0.75, 0.95, 0.8],
          backgroundPosition: ["200% 200%", "0% 0%", "200% 200%"],
          rotate: [0, -45, -90, -45, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top Navbar */}
      <header className="w-full border-b border-white/[0.15] flex justify-center relative z-50 bg-[#060608]/80 backdrop-blur-md">
        <div className="w-full max-w-[1340px] px-6 py-5 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="/" className="flex items-center group">
            <img
              src="/omnilawwordmark.svg"
              alt="Omnilaw"
              className="h-6 w-auto object-contain"
            />
          </a>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-normal text-white">
            <a href="#" className="text-white hover:text-white transition-colors">Início</a>
            <a href="#" className="text-white hover:text-white transition-colors">Plataforma</a>
            <a href="#" className="text-white hover:text-white transition-colors">Recursos</a>
            <a href="#" className="text-white hover:text-white transition-colors">Casos de Sucesso</a>
            <a href="#" className="text-white hover:text-white transition-colors">Sobre Nós</a>
          </nav>

          {/* Right Button */}
          <button className="bg-white hover:bg-neutral-200 text-black text-[13px] font-normal rounded-full px-5 py-2 transition-colors cursor-pointer">
            Testar Grátis
          </button>
        </div>
      </header>

      {/* Main Content Area with Dark Frosted Glass & Vertical Grid Lines */}
      <div className="w-full max-w-[1340px] mx-auto relative flex flex-col border-x border-white/[0.12] flex-1 bg-[#060608]/55 backdrop-blur-xl shadow-2xl">

        {/* Hero Section */}
        <main className="relative z-40 flex flex-col items-center text-center pt-24 pb-20 px-4 w-full">

          {/* Badge Pill */}
          <motion.a
            href="#"
            className="relative z-10 inline-flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.06] rounded-full px-4 py-1.5 text-xs text-white transition-colors mb-8 cursor-pointer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>Conheça o Omnilaw IA</span>
            <span className="text-white">→</span>
          </motion.a>

          {/* H1 Headline (Super enxuta, 1 linha) */}
          <motion.h1
            className="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-['Inter',sans-serif] font-normal tracking-tight text-white mb-6 leading-tight whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Automatize sua rotina <span className="shiny-blue-text">jurídica</span> com <span className="shiny-blue-text">IA</span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            className="relative z-10 text-[16px] text-white max-w-[760px] leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            O Omnilaw conecta processos, tribunais e cobranças em um ecossistema com inteligência artificial. Menos retrabalho, mais capacidade operacional.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="relative z-10 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ButtonWithIcon text="Começar Agora" />
            <button className="bg-white/[0.03] hover:bg-white/[0.08] text-white text-[14px] font-normal rounded-full px-6 py-2.5 transition-colors cursor-pointer">
              Agendar Demonstração
            </button>
          </motion.div>
        </main>

        {/* Tab Navigation Header Bar */}
        <motion.div
          className="relative z-10 w-full border-y border-white/[0.2] bg-[#060608]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 text-[16px] font-normal divide-x divide-white/[0.2]">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-3.5 py-6.5 px-6 transition-all relative cursor-pointer ${
                    isActive
                      ? "bg-transparent text-white"
                      : "bg-transparent text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <Icon className="w-5.5 h-5.5 stroke-[1.75]" />
                  <span className="text-[16px] font-normal tracking-tight text-white">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBorder"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white z-20"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dashboard Frame (Moldura com Animação de Entrada) */}
        <motion.div
          className="relative z-10 w-full flex-1 min-h-[550px] flex justify-center px-4 md:px-8 pt-10 pb-12 overflow-hidden bg-[#060608]"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Background Image (back dack.webp) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <img
              src="/back dack.webp"
              alt="Background"
              className="w-full h-full object-cover opacity-85"
            />
          </div>

          {/* Wireframe Dashboard Mockup */}
          <div className="relative z-20 w-full max-w-[1140px] bg-[#111113] rounded-xl shadow-2xl flex flex-col overflow-hidden h-[660px]">
            
            {/* Top Bar Wireframe */}
            <div className="h-14 flex items-center justify-between px-4 bg-[#1a1a1c]">
               {/* Logo area */}
               <div className="flex items-center gap-2">
                 <div className="size-6 bg-white/10 rounded-md" />
                 <div className="h-3 w-20 bg-white/10 rounded" />
               </div>
               
               {/* Right actions */}
               <div className="flex items-center gap-3">
                 <div className="flex bg-black/40 rounded-md p-1">
                   <div className="size-6 bg-white/10 rounded" />
                   <div className="size-6 rounded" />
                 </div>
                 <div className="size-8 bg-white/5 rounded-md flex items-center justify-center">
                   <div className="size-4 rounded-full bg-white/10" />
                 </div>
               </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar */}
              <div className="w-56 p-4 hidden md:flex flex-col gap-6 bg-[#141416]">
                <div className="h-8 bg-white/5 rounded-md" />
                <div className="space-y-3">
                  <div className="h-2 w-12 bg-white/10 rounded mb-4" />
                  <div className="h-8 bg-white/10 rounded-md" />
                  <div className="h-8 bg-white/[0.04] rounded-md" />
                  <div className="h-8 bg-white/[0.04] rounded-md" />
                  <div className="h-8 bg-white/[0.04] rounded-md" />
                  <div className="h-8 bg-white/[0.04] rounded-md" />
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 p-6 flex flex-col gap-6 bg-[#101012]">
                 {/* Title & Tabs */}
                 <div className="flex justify-between items-center">
                   <div className="h-6 w-32 bg-white/10 rounded" />
                   <div className="h-8 w-64 bg-white/5 rounded-md" />
                 </div>

                 {/* Metric Cards Row 1 */}
                 <div className="grid grid-cols-3 gap-4">
                   <div className="h-24 bg-[#1e1e22] rounded-lg p-4 flex flex-col justify-between">
                     <div className="h-3 w-24 bg-white/10 rounded" />
                     <div className="h-6 w-20 bg-white/20 rounded" />
                   </div>
                   <div className="h-24 bg-[#1e1e22] rounded-lg p-4 flex flex-col justify-between">
                     <div className="h-3 w-24 bg-white/10 rounded" />
                     <div className="h-6 w-16 bg-white/20 rounded" />
                   </div>
                   <div className="h-24 bg-[#1e1e22] rounded-lg p-4 flex flex-col justify-between">
                     <div className="h-3 w-32 bg-white/10 rounded" />
                     <div className="h-6 w-16 bg-white/20 rounded" />
                   </div>
                 </div>

                 {/* Metric Cards Row 2 */}
                 <div className="grid grid-cols-2 gap-4 flex-1">
                   <div className="bg-[#1e1e22] rounded-lg p-4 flex flex-col justify-between">
                     <div className="h-3 w-32 bg-white/10 rounded" />
                     <div className="h-8 w-40 bg-white/20 rounded" />
                     <div className="h-2 w-full bg-white/5 rounded mt-4" />
                   </div>
                   <div className="grid grid-rows-2 gap-4">
                     <div className="bg-[#1e1e22] rounded-lg p-4">
                       <div className="h-3 w-32 bg-white/10 rounded mb-4" />
                       <div className="h-12 w-full bg-white/5 rounded" />
                     </div>
                     <div className="bg-[#1e1e22] rounded-lg p-4 flex items-end gap-2">
                       <div className="w-full h-[60%] bg-white/5 rounded-t" />
                       <div className="w-full h-[80%] bg-white/10 rounded-t" />
                       <div className="w-full h-[40%] bg-white/5 rounded-t" />
                       <div className="w-full h-[90%] bg-white/10 rounded-t" />
                       <div className="w-full h-[50%] bg-white/5 rounded-t" />
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Worked With / Logos Section */}
        <div className="w-full border-t border-white/[0.12] bg-transparent pt-16 z-10 relative">
          <div className="px-6 md:px-12 pb-10">
            <motion.h2
              className="text-3xl md:text-4xl font-normal text-white tracking-tight font-['Inter',sans-serif]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Integrado aos Principais Tribunais & Sistemas
            </motion.h2>
          </div>

          {/* Logos Grid Matrix (5 columns x 2 rows) - Real Official Government & Judicial Logos */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-white/[0.12]">
            {[
              { name: "gov.br", src: "/logos/govbr.svg" },
              { name: "STF", src: "/logos/stf.svg" },
              { name: "STJ", src: "/logos/stj.svg" },
              { name: "TJSP", src: "/logos/tjsp.svg" },
              { name: "OAB", src: "/logos/oab.webp" },
              { name: "MPF", src: "/logos/mpf.webp" },
              { name: "AGU", src: "/logos/agu.webp" },
              { name: "Receita Federal", src: "/logos/receita.svg" },
              { name: "Banco do Brasil", src: "/logos/bb.svg" },
              { name: "Governo Federal", src: "/logos/brasao.svg" },
            ].map((logo, idx) => (
              <motion.div
                key={idx}
                className="h-28 border-r border-b border-white/[0.12] md:[&:nth-child(5n)]:border-r-0 flex items-center justify-center p-6 group hover:bg-white/[0.02] transition-colors"
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-10 w-auto max-w-[140px] object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Text Reveal Section with Outer Left & Right Images */}
        <div className="w-full border-t border-white/[0.12] bg-transparent py-36 md:py-52 px-6 md:px-12 flex flex-col items-center justify-center gap-12 z-10 relative">
          
          {/* Outer Left Image (juridico 2.webp) - Enlarged & Positioned Lower */}
          <motion.div
            className="absolute top-[75%] left-0 -translate-x-[55%] -translate-y-1/2 w-[340px] sm:w-[420px] md:w-[500px] lg:w-[560px] xl:w-[620px] aspect-[4/5] rounded-3xl overflow-hidden z-20 pointer-events-none"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{ y: ["-50%", "-54%", "-50%"], rotate: [-3, -1, -3] }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <img
              src="/juridico 2.webp"
              alt="Jurídico Omnilaw 2"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

          {/* Center Scroll Text & Button */}
          <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-10 text-center relative z-30">
            <ScrollRevealText text="O Omnilaw transforma a rotina de escritórios e departamentos jurídicos ao conectar processos, prazos e inteligência artificial em uma única plataforma de alta performance." />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <ButtonWithIcon text="Começar Agora" />
            </motion.div>
          </div>

          {/* Outer Right Image (juridico.webp) - Enlarged & Positioned Much Lower */}
          <motion.div
            className="absolute top-[125%] right-0 translate-x-[55%] -translate-y-1/2 w-[340px] sm:w-[420px] md:w-[500px] lg:w-[560px] xl:w-[620px] aspect-[4/5] rounded-3xl overflow-hidden z-20 pointer-events-none"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{ y: ["-50%", "-46%", "-50%"], rotate: [3, 1, 3] }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <img
              src="/juridico.webp"
              alt="Jurídico Omnilaw"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

        </div>

        {/* Trusted By Millions / Metrics Bento Section */}
        <div className="w-full border-t border-white/[0.12] bg-transparent pt-16 flex flex-col z-10 relative">
          {/* Header */}
          <div className="px-6 md:px-12 pb-12">
            <motion.h2
              className="text-3xl md:text-5xl font-normal text-white tracking-tight font-['Inter',sans-serif]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Confiado por <span className="shiny-blue-text">milhares</span>
            </motion.h2>
          </div>

          {/* Main 2-Column Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-t border-white/[0.12]">
            {/* Left Column: 3 Metric Cards */}
            <div className="flex flex-col divide-y divide-white/[0.12] lg:border-r lg:border-white/[0.12]">
              {/* Card 1 */}
              <motion.div
                className="p-8 md:p-12 flex flex-col gap-2 group hover:bg-white/[0.01] transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight font-['Inter',sans-serif] shiny-blue-text">
                  <AnimatedCounter value={120} prefix="R$ " suffix="M+" />
                </span>
                <span className="text-sm md:text-base text-white font-normal">
                  Honorários e valores gerenciados
                </span>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="p-8 md:p-12 flex flex-col gap-2 group hover:bg-white/[0.01] transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight font-['Inter',sans-serif] shiny-blue-text">
                  <AnimatedCounter value={8500} prefix="+" suffix="" />
                </span>
                <span className="text-sm md:text-base text-white font-normal">
                  Escritórios e departamentos jurídicos
                </span>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="p-8 md:p-12 flex flex-col gap-2 group hover:bg-white/[0.01] transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight font-['Inter',sans-serif] shiny-blue-text">
                  <AnimatedCounter value={45} prefix="" suffix="M+" />
                </span>
                <span className="text-sm md:text-base text-white font-normal">
                  Andamentos e prazos analisados por IA
                </span>
              </motion.div>
            </div>

            {/* Right Column: Top Stats + Bottom Glowing Arc Matrix */}
            <div className="flex flex-col border-t lg:border-t-0 border-white/[0.12]">
              {/* Top 2 Stats Sub-grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.12] border-b border-white/[0.12]">
                <motion.div
                  className="p-8 md:p-12 flex flex-col gap-2 group hover:bg-white/[0.01] transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-['Inter',sans-serif] shiny-blue-text">
                    <AnimatedCounter value={250} prefix="+" suffix="k" />
                  </span>
                  <span className="text-xs sm:text-sm text-white font-normal leading-relaxed">
                    Prazos automatizados no mês
                  </span>
                </motion.div>
                <motion.div
                  className="p-8 md:p-12 flex flex-col gap-2 group hover:bg-white/[0.01] transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-['Inter',sans-serif] shiny-blue-text">
                    <AnimatedCounter value={10} prefix="" suffix="x" />
                  </span>
                  <span className="text-xs sm:text-sm text-white font-normal leading-relaxed">
                    Aumento na capacidade operacional
                  </span>
                </motion.div>
              </div>

              {/* Bottom Glowing Arc Graphic Card */}
              <div className="flex-1 min-h-[300px] relative overflow-hidden bg-transparent flex items-end justify-center p-6">
                {/* Dotted Grid Background */}
                <div
                  className="absolute inset-0 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
                    backgroundSize: "200px 20px"
                  }}
                />

                {/* Blue Glowing Arc Line SVG with Animated Path Drawing */}
                <svg
                  className="w-full h-[260px] relative z-10 overflow-visible"
                  viewBox="0 0 600 240"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="arcStroke" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e40af" stopOpacity="0.2" />
                      <stop offset="40%" stopColor="#2563eb" stopOpacity="0.8" />
                      <stop offset="85%" stopColor="#3b82f6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#93c5fd" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="arcFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Area under curve */}
                  <motion.path
                    d="M 0 240 C 200 238, 380 210, 600 20 L 600 240 Z"
                    fill="url(#arcFill)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />

                  {/* Curved Line with Glow & Path Drawing */}
                  <motion.path
                    d="M 0 240 C 200 238, 380 210, 600 20"
                    stroke="url(#arcStroke)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayVal, setDisplayVal] = useState("0");

  useEffect(() => {
    let animationFrameId: number;
    let isMounted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const startTime = performance.now();

          const updateCounter = (now: number) => {
            if (!isMounted) return;
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeProgress * value);
            setDisplayVal(current.toLocaleString("pt-BR"));

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(updateCounter);
            } else {
              setDisplayVal(value.toLocaleString("pt-BR"));
            }
          };

          animationFrameId = requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      isMounted = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [value]);

  return <span ref={ref}>{prefix}{displayVal}{suffix}</span>;
}

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className="text-2xl sm:text-4xl md:text-[46px] font-normal leading-[1.3] tracking-tight text-center max-w-4xl mx-auto flex flex-wrap justify-center gap-x-[0.32em] gap-y-2 select-none font-['Inter',sans-serif]"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 1)"]
        );

        return (
          <motion.span
            key={i}
            style={{ opacity, color }}
            className="transition-colors duration-100 inline-block"
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}
