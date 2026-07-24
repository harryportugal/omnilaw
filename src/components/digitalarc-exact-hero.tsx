'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
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
      {/* Top Navbar */}
      <header className="w-full border-b border-white/[0.15] flex justify-center relative z-50 bg-[#060608]">
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
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-white">
            <a href="#" className="text-white hover:text-white/80 transition-colors">Início</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Plataforma</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Recursos</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Casos de Sucesso</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Sobre Nós</a>
          </nav>

          {/* Right Button */}
          <button className="bg-white hover:bg-neutral-200 text-black text-[13px] font-semibold rounded-full px-5 py-2 transition-colors cursor-pointer">
            Testar Grátis
          </button>
        </div>
      </header>

      {/* Main Content Area with Vertical Grid Lines */}
      <div className="w-full max-w-[1340px] mx-auto relative flex flex-col border-x border-white/[0.12] flex-1">

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
            Automatize sua rotina jurídica com IA
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
            <button className="bg-white/[0.03] hover:bg-white/[0.08] text-white text-[14px] font-medium rounded-full px-6 py-2.5 transition-colors cursor-pointer">
              Agendar Demonstração
            </button>
          </motion.div>
        </main>

        {/* Tab Navigation Header Bar */}
        <div className="relative z-10 w-full border-y border-white/[0.2] bg-[#060608]">
          <div className="grid grid-cols-2 md:grid-cols-5 text-[16px] font-medium divide-x divide-white/[0.2]">
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
                      : "bg-transparent text-white/70 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <Icon className="w-5.5 h-5.5 stroke-[1.75]" />
                  <span className="text-[16px] font-medium tracking-tight text-white">{tab.label}</span>
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
        </div>

        {/* Dashboard Frame (Moldura) */}
        <div className="relative z-10 w-full flex-1 min-h-[550px] flex justify-center px-4 md:px-8 pt-10 pb-12 overflow-hidden bg-[#060608]">
          {/* Background Image (back dack.png) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <img
              src="/back dack.png"
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
        </div>
      </div>
    </div>
  );
}
