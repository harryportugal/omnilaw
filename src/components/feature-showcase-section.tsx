'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Star, CheckCircle2, ShieldCheck } from "lucide-react";

function IconBarChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="14" width="3" height="6" rx="0.8" />
      <rect x="10.5" y="7" width="3" height="13" rx="0.8" />
      <rect x="17" y="11" width="3" height="9" rx="0.8" />
    </svg>
  );
}

function IconTrendLine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 16L9.5 10.5L13.5 14.5L20 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8H20V13" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLayersStack({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 4L4 8L12 12L20 8L12 4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12L12 16L20 12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16L12 20L20 16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FeatureShowcaseSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      icon: IconBarChart,
      title: "Automação Inteligente",
      subtitle: "Automatize fluxos repetitivos, prazos e petições reduzindo o trabalho manual com sistemas inteligentes baseados em IA.",
      badge: "Produtividade +300%",
      stats: {
        revenue: "R$ 48.900",
        growth: "+14.2%",
        referrals: "24",
        rating: "4.9 / 5.0",
      }
    },
    {
      id: 1,
      icon: IconTrendLine,
      title: "Insights em Tempo Real",
      subtitle: "Acompanhe métricas financeiras, performance da equipe e prazos em painéis atualizados instantaneamente.",
      badge: "Decisões Guiadas por Dados",
      stats: {
        revenue: "R$ 132.400",
        growth: "+28.5%",
        referrals: "68",
        rating: "5.0 / 5.0",
      }
    },
    {
      id: 2,
      icon: IconLayersStack,
      title: "Integrações Nativas",
      subtitle: "Conexão direta com sistemas de tribunais (PJe, e-SAJ, Projudi) e plataformas de pagamento sem fricção.",
      badge: "100% Integrado aos Tribunais",
      stats: {
        revenue: "R$ 95.000",
        growth: "+22.0%",
        referrals: "42",
        rating: "4.8 / 5.0",
      }
    },
  ];

  const currentFeature = features[activeFeature];

  return (
    <section className="w-full border-t border-white/[0.12] bg-[#060608] z-10 relative font-['Inter',sans-serif]">
      {/* Section Header */}
      <div className="w-full px-6 py-20 text-center flex flex-col items-center">
        <motion.h2
          className="text-3xl sm:text-5xl md:text-[54px] font-normal tracking-tight text-white font-['Inter',sans-serif] max-w-3xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tudo o que você precisa para <span className="shiny-blue-text">escalar</span> com <span className="shiny-blue-text">IA</span>
        </motion.h2>
      </div>

      {/* Main 2-Column Split Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 border-t border-white/[0.12]">
        
        {/* Left Column: Interactive UI Showcase Frame */}
        <motion.div
          className="lg:col-span-7 p-6 sm:p-10 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/[0.12] bg-[#060608]"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative w-full max-w-[660px] aspect-[16/10] rounded-2xl p-4 sm:p-6 overflow-hidden flex items-center justify-center shadow-2xl group">
            
            {/* Ambient Dark Gradient Background Framing */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900/60 via-blue-950/40 to-black/80 pointer-events-none opacity-90 shadow-[0_0_50px_rgba(37,99,235,0.15)] transition-all duration-700 group-hover:scale-105" />

            {/* Inner Dark Dashboard Card Container (Sem contornos/bordas) */}
            <div className="relative z-10 w-full h-full bg-[#111113] rounded-xl shadow-2xl flex flex-col overflow-hidden text-white/90 text-xs font-['Inter',sans-serif]">
              {/* Header Bar */}
              <div className="h-12 bg-[#161618] px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-5 rounded-md bg-white/10 flex items-center justify-center text-white/80 font-bold text-[10px]">
                    ❖
                  </div>
                  <span className="font-normal text-white text-sm font-['Inter',sans-serif]">Omnilaw</span>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 bg-black/40 rounded-md px-2.5 py-1 text-[11px] text-white/70 font-['Inter',sans-serif]">
                  <Search className="size-3.5 text-white/40" />
                  <span className="font-normal">Buscar processo...</span>
                </div>

                <div className="flex items-center gap-1 bg-white/5 rounded-md p-1 font-['Inter',sans-serif]">
                  <button className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white font-normal">12 Meses</button>
                  <button className="px-2 py-0.5 rounded text-[10px] text-white/50 hover:text-white font-normal">30 Dias</button>
                  <button className="px-2 py-0.5 rounded text-[10px] text-white/50 hover:text-white font-normal">7 Dias</button>
                </div>
              </div>

              {/* Body Content */}
              <div className="flex-1 flex overflow-hidden font-['Inter',sans-serif]">
                {/* Mini Sidebar */}
                <div className="w-40 bg-[#131315] p-3 hidden sm:flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-normal text-white/40 uppercase tracking-wider px-2">Principal</span>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/10 text-white font-normal">
                      <IconBarChart className="size-3.5 text-white/80" />
                      <span>Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60 hover:bg-white/5 transition-colors font-normal">
                      <IconLayersStack className="size-3.5 text-white/60" />
                      <span>Processos</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60 hover:bg-white/5 transition-colors font-normal">
                      <Calendar className="size-3.5" />
                      <span>Prazos</span>
                    </div>
                  </div>

                  <div className="pt-2 space-y-1">
                    <span className="text-[9px] font-normal text-white/40 uppercase tracking-wider px-2">Configurações</span>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-white/60 hover:bg-white/5 transition-colors font-normal">
                      <ShieldCheck className="size-3.5" />
                      <span>Suporte IA</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Main Stats Area */}
                <div className="flex-1 p-4 flex flex-col justify-between gap-3 bg-[#0d0d0f] overflow-y-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-3 h-full justify-between"
                    >
                      {/* Metric Cards Row 1 */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#18181b] rounded-lg p-3 flex flex-col justify-between">
                          <span className="text-[10px] text-white/50 font-normal">Faturamento Hoje</span>
                          <div className="flex items-baseline justify-between mt-1">
                            <span className="text-lg font-normal text-white">{currentFeature.stats.revenue}</span>
                            <span className="text-[10px] text-white/70 font-normal">{currentFeature.stats.growth}</span>
                          </div>
                        </div>

                        <div className="bg-[#18181b] rounded-lg p-3 flex flex-col justify-between">
                          <span className="text-[10px] text-white/50 font-normal">Andamentos Hoje</span>
                          <div className="flex items-baseline justify-between mt-1">
                            <span className="text-lg font-normal text-white">{currentFeature.stats.referrals}</span>
                            <span className="text-[10px] text-white/70 font-normal">IA Ativa</span>
                          </div>
                        </div>
                      </div>

                      {/* Main Graphic Chart Mockup */}
                      <div className="flex-1 bg-[#18181b] rounded-lg p-3 flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[11px] font-normal text-white/80">Receita Total Acumulada</span>
                          <span className="text-[9px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full font-normal">
                            {currentFeature.badge}
                          </span>
                        </div>

                        {/* Minimalist Chart Bars SVG */}
                        <div className="flex items-end gap-2 h-24 pt-2">
                          {[40, 65, 45, 80, 55, 95, 70, 85, 100].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                              <div className="w-full bg-white/5 rounded-t relative overflow-hidden h-full flex items-end">
                                <motion.div
                                  className="w-full bg-white/30 rounded-t"
                                  initial={{ height: 0 }}
                                  animate={{ height: `${h}%` }}
                                  transition={{ duration: 0.5, delay: i * 0.04 }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Rating Bar */}
                      <div className="bg-[#18181b] rounded-lg px-3 py-2 flex items-center justify-between font-normal">
                        <div className="flex items-center gap-1.5">
                          <Star className="size-3.5 text-white/80" />
                          <span className="text-[11px] font-normal text-white">Avaliação dos Clientes:</span>
                          <span className="text-[11px] text-white/70">{currentFeature.stats.rating}</span>
                        </div>
                        <span className="text-[10px] text-white/80 flex items-center gap-1 font-normal">
                          <CheckCircle2 className="size-3 text-white/60" /> Sistema Operacional
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3 Stacked Interactive Feature Items */}
        <div className="lg:col-span-5 flex flex-col divide-y divide-white/[0.12] bg-[#060608]">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isActive = activeFeature === feat.id;

            return (
              <motion.div
                key={feat.id}
                onClick={() => setActiveFeature(feat.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className={`p-8 sm:p-10 flex flex-col gap-4 cursor-pointer transition-all duration-300 relative group ${
                  isActive
                    ? "bg-white/[0.03] text-white"
                    : "bg-transparent text-white/70 hover:bg-white/[0.015] hover:text-white"
                }`}
              >
                {/* Active Left Indicator Line (Clean subtle white/blue line) */}
                {isActive && (
                  <motion.div
                    layoutId="activeFeatureIndicator"
                    className="absolute top-0 bottom-0 left-0 w-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Minimalist Icon Container (No blue background, no blue outline) */}
                <div className="size-9 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/10 text-white/80 transition-colors">
                  <Icon className="size-4.5" />
                </div>

                {/* Content - Strictly Inter Font, Normal Weight */}
                <div className="flex flex-col gap-2 font-['Inter',sans-serif]">
                  <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-white font-['Inter',sans-serif]">
                    {feat.title}
                  </h3>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-white/70 leading-relaxed font-normal font-['Inter',sans-serif]"
                    >
                      {feat.subtitle}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
