'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Search,
  LayoutGrid,
  FileText,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  Moon,
  Sun,
  Bell,
  Cpu,
  Layers,
  Zap,
  Server,
  Sliders,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export function DigitalArcHero() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeFilter, setActiveFilter] = useState("30 Dias");

  const tabs = [
    { id: 0, label: "Inteligência Jurídica", icon: Cpu },
    { id: 1, label: "Gestão de Prazos", icon: Layers },
    { id: 2, label: "Redator de Peças", icon: Zap },
    { id: 3, label: "Conexão DataJud", icon: Server },
    { id: 4, label: "Financeiro & Honorários", icon: Sliders },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#070709] text-white font-sans overflow-hidden flex flex-col justify-between selection:bg-[#173CE0] selection:text-white">
      {/* Top Navbar */}
      <header className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between border-b border-white/5 relative z-50">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="size-6 text-white transition-transform group-hover:rotate-45 duration-300">
            <Sparkles className="size-6 fill-white text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-sans">
            Omnilaw
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="#" className="text-white hover:text-white transition-colors">
            Início
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Plataforma
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Soluções
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Casos de Sucesso
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Sobre Nós
          </a>
        </nav>

        {/* Right Action */}
        <button className="bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-semibold rounded-full px-5 py-2 transition-all cursor-pointer shadow-md">
          Testar Grátis
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-12 pb-8 max-w-5xl mx-auto w-full z-10">
        {/* Update Badge Pill */}
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs text-neutral-300 transition-colors mb-8 cursor-pointer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>Conheça a plataforma Omnilaw 2.0</span>
          <ArrowRight className="size-3.5 text-neutral-400" />
        </motion.a>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mb-6 font-sans leading-[1.08]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Automatize sua rotina jurídica com IA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl leading-relaxed mb-8 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          O Omnilaw conecta processos, tribunais e cobranças em um ecossistema
          com inteligência artificial. Menos retrabalho, mais capacidade
          operacional.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button className="bg-white hover:bg-neutral-200 text-black text-sm font-semibold rounded-full px-7 py-3 transition-all cursor-pointer shadow-lg">
            Testar Grátis
          </button>
          <button className="bg-[#18161D] hover:bg-white/10 text-white border border-white/10 text-sm font-medium rounded-full px-7 py-3 transition-all cursor-pointer">
            Agendar Demonstração
          </button>
        </motion.div>

        {/* Tab Navigation Header Bar */}
        <motion.div
          className="w-full max-w-[1140px] grid grid-cols-2 md:grid-cols-5 border-t border-x border-white/10 rounded-t-2xl bg-[#0F0E13] overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 py-4 px-3 text-xs md:text-sm font-medium transition-all relative border-r border-white/5 last:border-r-0 cursor-pointer ${
                  isActive
                    ? "bg-[#18171E] text-white font-semibold"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.02]"
                }`}
              >
                <Icon className={`size-4 ${isActive ? "text-[#173CE0]" : "text-neutral-500"}`} />
                <span className="truncate">{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Embedded Dashboard Container with Warm Glow Backdrop */}
        <motion.div
          className="w-full max-w-[1140px] relative rounded-b-2xl border border-white/10 bg-[#0C0B0F] overflow-hidden text-left shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Top Warm Glow background effect */}
          <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-r from-amber-600/15 via-orange-500/10 to-amber-700/15 blur-3xl pointer-events-none" />

          {/* Dashboard Window Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#121117]/80 relative z-10">
            <div className="flex items-center gap-3">
              <div className="size-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                O
              </div>
              <span className="text-sm font-semibold text-white">Omnilaw Workspace</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-black/40 border border-white/10 rounded-lg p-1 text-xs">
                <button className="p-1 rounded text-neutral-400 hover:text-white">
                  <Moon className="size-3.5" />
                </button>
                <button className="p-1 rounded text-neutral-400 hover:text-white">
                  <Sun className="size-3.5" />
                </button>
              </div>
              <button className="size-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white relative">
                <Bell className="size-4" />
                <span className="absolute top-2 right-2 size-1.5 rounded-full bg-[#173CE0]" />
              </button>
            </div>
          </div>

          {/* Dashboard Inner Workspace */}
          <div className="flex min-h-[460px] relative z-10">
            {/* Left Sidebar */}
            <aside className="w-52 shrink-0 border-r border-white/5 bg-[#0A090D]/90 p-4 flex flex-col justify-between text-left hidden sm:flex">
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="size-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="w-full bg-white/5 border border-white/5 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/20"
                  />
                </div>

                {/* Main Navigation Group */}
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 block mb-2 px-2">
                    PRINCIPAL
                  </span>
                  <nav className="space-y-1 text-xs">
                    <a
                      href="#"
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-white/10 text-white font-medium"
                    >
                      <LayoutGrid className="size-3.5 text-[#173CE0]" />
                      Painel
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <FileText className="size-3.5" />
                      Processos (4.820)
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <Calendar className="size-3.5" />
                      Agenda de Prazos
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <BarChart3 className="size-3.5" />
                      Relatórios
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <Users className="size-3.5" />
                      Advogados
                    </a>
                  </nav>
                </div>

                {/* Support Group */}
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 block mb-2 px-2">
                    SUPORTE
                  </span>
                  <nav className="space-y-1 text-xs">
                    <a
                      href="#"
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <HelpCircle className="size-3.5" />
                      Ajuda
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <Settings className="size-3.5" />
                      Configurações
                    </a>
                  </nav>
                </div>
              </div>
            </aside>

            {/* Dashboard Content Grid */}
            <div className="flex-1 p-5 space-y-5 bg-[#0C0B0F]/90">
              {/* Header Title & Filter Tabs */}
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Painel Jurídico
                </h2>
                <div className="flex items-center gap-1 bg-black/40 border border-white/10 rounded-lg p-1 text-xs">
                  {["12 meses", "30 Dias", "7 Dias", "24 horas"].map((f) => (
                    <button
                      key={f}
                      onClick={() => setActiveFilter(f)}
                      className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
                        activeFilter === f
                          ? "bg-white/15 text-white"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Metrics Top Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Metric 1 */}
                <div className="bg-[#121118] border border-white/5 rounded-xl p-4 flex justify-between items-start">
                  <div>
                    <span className="text-xs text-neutral-400 font-medium block mb-1">
                      Honorários Hoje
                    </span>
                    <span className="text-2xl font-bold font-mono text-white">
                      R$ 4.699,00
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono font-medium">
                    +12%
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="bg-[#121118] border border-white/5 rounded-xl p-4 flex justify-between items-start">
                  <div>
                    <span className="text-xs text-neutral-400 font-medium block mb-1">
                      Intimações Lidas Hoje
                    </span>
                    <span className="text-2xl font-bold font-mono text-white">
                      48
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#173CE0]/20 text-[#173CE0] font-mono font-medium">
                    100% OK
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="bg-[#121118] border border-white/5 rounded-xl p-4 flex justify-between items-start">
                  <div>
                    <span className="text-xs text-neutral-400 font-medium block mb-1">
                      Prazos Cumpridos
                    </span>
                    <span className="text-2xl font-bold font-mono text-white">
                      15
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono font-medium">
                    100%
                  </span>
                </div>
              </div>

              {/* Main Content Grid Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Faturamento & Conciliação Card */}
                <div className="bg-[#121118] border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-neutral-400 font-medium">
                        Faturamento Mensal
                      </span>
                      <span className="text-xs text-emerald-400 font-mono">+34%</span>
                    </div>
                    <span className="text-3xl font-bold font-mono text-white block mb-1">
                      R$ 148.500,00
                    </span>
                    <span className="text-[11px] text-neutral-500 block">
                      Conciliado via Pix & Boleto
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#173CE0] h-full w-[94%]" />
                    </div>
                    <div className="flex justify-between text-[10px] text-neutral-400 mt-2 font-mono">
                      <span>94% Conciliado</span>
                      <span>Meta R$ 150k</span>
                    </div>
                  </div>
                </div>

                {/* Êxito Preditivo & Jurisprudência Card */}
                <div className="bg-[#121118] border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400 font-medium">
                      Êxito Preditivo em Tribunais
                    </span>
                    <span className="text-xs text-[#173CE0] font-mono font-medium">
                      STJ & TJs
                    </span>
                  </div>

                  {/* Sparkline Chart */}
                  <div className="my-3 flex items-baseline gap-3">
                    <span className="text-3xl font-bold font-mono text-white">
                      89.2%
                    </span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                      <TrendingUp className="size-3" /> +4.2% este mês
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                    <span>Inteligência de Jurisprudência</span>
                    <span className="text-white font-medium flex items-center gap-1">
                      <CheckCircle2 className="size-3 text-emerald-400" /> Ativada
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-xs text-neutral-600 font-mono border-t border-white/5">
        OMNILAW © 2026 — PLATAFORMA JURÍDICA COM INTELIGÊNCIA ARTIFICIAL
      </footer>
    </div>
  );
}
