'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  FileText,
  Wallet,
  Scale,
  Users,
  Settings,
  LogOut,
  Calendar,
  Plus,
  Search,
  Bell,
  ArrowUpRight,
  ArrowDownLeft,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function HeroDashboardMockup() {
  return (
    <div className="w-full max-w-[1180px] mx-auto bg-[#0A090E] rounded-[24px] border border-white/10 p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] text-white font-sans text-left overflow-hidden">
      {/* Top Navbar */}
      <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/5">
        {/* Left branding & tabs */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-[#173CE0] flex items-center justify-center shadow-[0_0_15px_rgba(23,60,224,0.5)]">
              <Scale className="size-4 text-white" />
            </div>
            <span className="font-bold text-lg text-white font-serif-title tracking-tight">
              Omnilaw
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5 text-xs font-medium text-neutral-300">
            <button className="px-3.5 py-1.5 rounded-lg bg-[#173CE0] text-white shadow-sm font-semibold">
              Dashboard
            </button>
            <button className="px-3.5 py-1.5 rounded-lg hover:text-white transition-colors">
              Processos
            </button>
            <button className="px-3.5 py-1.5 rounded-lg hover:text-white transition-colors">
              Prazos & Intimações
            </button>
            <button className="px-3.5 py-1.5 rounded-lg hover:text-white transition-colors">
              Copiloto IA
            </button>
            <button className="px-3.5 py-1.5 rounded-lg hover:text-white transition-colors">
              Financeiro
            </button>
          </nav>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="size-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
            <Search className="size-4" />
          </button>
          <button className="size-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white transition-colors relative">
            <Bell className="size-4" />
            <span className="absolute top-2 right-2 size-2 rounded-full bg-[#173CE0]" />
          </button>
          <div className="flex items-center gap-2 pl-2 border-l border-white/10">
            <div className="size-8 rounded-full bg-gradient-to-tr from-[#173CE0] to-purple-600 flex items-center justify-center text-xs font-bold text-white">
              GS
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-semibold text-white leading-none">
                Dr. Gabriel Santos
              </span>
              <span className="text-[10px] text-neutral-400 mt-0.5">
                Sócio Sênior
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Layout (Sidebar + Content Grid) */}
      <div className="flex gap-5">
        {/* Left Icon Navigation Sidebar */}
        <aside className="hidden lg:flex flex-col justify-between items-center py-4 px-2.5 bg-white/[0.02] border border-white/5 rounded-2xl w-14 shrink-0">
          <div className="flex flex-col gap-3">
            <button className="size-9 rounded-xl bg-[#173CE0] text-white flex items-center justify-center shadow-[0_0_12px_rgba(23,60,224,0.4)]">
              <LayoutGrid className="size-4.5" />
            </button>
            <button className="size-9 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors">
              <FileText className="size-4.5" />
            </button>
            <button className="size-9 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors">
              <Wallet className="size-4.5" />
            </button>
            <button className="size-9 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors">
              <Sparkles className="size-4.5" />
            </button>
            <button className="size-9 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors">
              <Users className="size-4.5" />
            </button>
          </div>
          <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
            <button className="size-9 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors">
              <Settings className="size-4.5" />
            </button>
            <button className="size-9 rounded-xl text-neutral-400 hover:text-rose-400 hover:bg-rose-500/10 flex items-center justify-center transition-colors">
              <LogOut className="size-4.5" />
            </button>
          </div>
        </aside>

        {/* Dashboard Main Workspace */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Bem-vindo de volta, <span className="text-[#173CE0]">Dr. Gabriel</span>
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                48 novas intimações verificadas nos tribunais hoje via DataJud.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl px-3 py-1.5 text-xs text-neutral-300">
                <Calendar className="size-3.5 text-neutral-400" />
                <span>29 Jul, 2026 – 29 Ago, 2026</span>
              </div>
              <button className="bg-[#173CE0] hover:bg-[#173CE0]/90 text-white rounded-xl px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(23,60,224,0.4)] cursor-pointer">
                <Plus className="size-3.5" />
                Novo Processo
              </button>
            </div>
          </div>

          {/* Top Row Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Card 1: Carteira Jurídica & Card (4 Cols) */}
            <div className="md:col-span-4 bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                    Carteira de Honorários
                  </span>
                  <span className="text-xs text-neutral-500">Total sob gestão</span>
                </div>
                <button className="size-7 rounded-lg bg-white/5 text-neutral-400 hover:text-white flex items-center justify-center">
                  <ArrowUpRight className="size-3.5" />
                </button>
              </div>

              {/* Blue Signature Card */}
              <div className="bg-gradient-to-br from-[#173CE0] to-[#0D2491] rounded-xl p-4 text-white shadow-lg relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 size-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold tracking-wider uppercase opacity-90">
                    OMNILAW PRO
                  </span>
                  <Scale className="size-4 opacity-80" />
                </div>
                <div className="text-2xl font-bold font-mono tracking-tight mb-3">
                  R$ 78.989,09
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono opacity-80">
                  <span>•••• 9090</span>
                  <span>VAL 09/28</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                <span className="text-neutral-400">Faturamento Semanal</span>
                <span className="font-semibold text-white font-mono flex items-center gap-1">
                  +R$ 3.945,00
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                    +12.8%
                  </span>
                </span>
              </div>
            </div>

            {/* Card 2: Produtividade de Peças IA (5 Cols) */}
            <div className="md:col-span-5 bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-[#173CE0]" />
                  <span className="text-xs font-semibold text-white">
                    Petições Geradas por IA
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg text-[10px] text-neutral-400 font-medium">
                  <button className="px-2 py-0.5 rounded text-neutral-400">Mensal</button>
                  <button className="px-2 py-0.5 rounded bg-[#173CE0] text-white font-semibold">Anual</button>
                </div>
              </div>

              {/* Bar Chart Mockup */}
              <div className="h-36 flex items-end justify-between gap-3 pt-6 pb-2 px-2 relative">
                {/* Highlighted Tooltip over 4th Bar */}
                <div className="absolute left-[54%] -top-1 -translate-x-1/2 bg-[#173CE0] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1">
                  +28.4% (Abril)
                </div>

                {[
                  { label: "Jan", height: "45%", active: false },
                  { label: "Fev", height: "60%", active: false },
                  { label: "Mar", height: "50%", active: false },
                  { label: "Abr", height: "90%", active: true },
                  { label: "Mai", height: "70%", active: false },
                  { label: "Jun", height: "80%", active: false },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <div
                      className={`w-full rounded-t-lg transition-all ${
                        bar.active
                          ? "bg-[#173CE0] shadow-[0_0_15px_rgba(23,60,224,0.6)]"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                      style={{ height: bar.height }}
                    />
                    <span className="text-[10px] text-neutral-400 font-mono">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Saldo de Honorários & Cobrança (3 Cols) */}
            <div className="md:col-span-3 bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                  Honorários a Receber
                </span>
                <span className="text-2xl font-bold font-mono text-white mt-1 block">
                  R$ 32.678,90
                </span>
              </div>

              {/* Mini Sparkline Chart */}
              <div className="w-full h-12 my-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                  <path
                    d="M 0 30 Q 20 10 40 25 T 80 5 T 100 20"
                    fill="none"
                    stroke="#173CE0"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M 0 30 Q 20 10 40 25 T 80 5 T 100 20 V 40 H 0 Z"
                    fill="url(#blue-gradient)"
                    opacity="0.25"
                  />
                  <defs>
                    <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#173CE0" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button className="bg-[#173CE0] hover:bg-[#173CE0]/90 text-white rounded-lg py-1.5 text-xs font-semibold flex items-center justify-center gap-1 transition-colors">
                  <ArrowUpRight className="size-3" /> Pix
                </button>
                <button className="bg-white/5 hover:bg-white/10 text-neutral-300 rounded-lg py-1.5 text-xs font-medium flex items-center justify-center gap-1 transition-colors">
                  <ArrowDownLeft className="size-3" /> Cobrar
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Card 4: Histórico de Prazos / DataJud (8 Cols) */}
            <div className="md:col-span-8 bg-white/[0.02] border border-white/5 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Histórico de Intimações & Prazos (DataJud)
                  </h3>
                  <span className="text-[11px] text-neutral-400">
                    Sincronizado automaticamente com os Tribunais
                  </span>
                </div>
                <button className="text-xs text-[#173CE0] font-semibold hover:underline flex items-center gap-1">
                  Ver Todos <ArrowUpRight className="size-3" />
                </button>
              </div>

              {/* Table */}
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/5 text-neutral-400 font-medium">
                      <th className="pb-2.5 font-normal">Ação / Processo</th>
                      <th className="pb-2.5 font-normal">Tribunal</th>
                      <th className="pb-2.5 font-normal">Horário</th>
                      <th className="pb-2.5 font-normal">Status IA</th>
                      <th className="pb-2.5 font-normal text-right">Valor Causa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-neutral-200">
                    {[
                      {
                        title: "Dribbble Design vs. Banco X",
                        court: "TJSP",
                        time: "10:30",
                        status: "Minuta Pronta",
                        value: "R$ 89.345,23",
                      },
                      {
                        title: "Google Brasil - Contrato Cível",
                        court: "TRF-3",
                        time: "11:45",
                        status: "Peça Protocolada",
                        value: "R$ 12.345,89",
                      },
                      {
                        title: "Amazon Shopping - Trabalhista",
                        court: "TST",
                        time: "14:15",
                        status: "Em Análise IA",
                        value: "R$ 32.123,67",
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 font-medium text-white flex items-center gap-2">
                          <div className="size-2 rounded-full bg-[#173CE0]" />
                          {row.title}
                        </td>
                        <td className="py-3 font-mono text-neutral-400">{row.court}</td>
                        <td className="py-3 font-mono text-neutral-400">{row.time}</td>
                        <td className="py-3">
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400">
                            <CheckCircle2 className="size-3" />
                            {row.status}
                          </span>
                        </td>
                        <td className="py-3 text-right font-mono font-semibold text-white">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Card 5: Crédito de Minutas & Equipe (4 Cols) */}
            <div className="md:col-span-4 bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                  Créditos de IA Jurídica
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-bold font-mono text-white">
                    R$ 8.945,89
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                    +12.8%
                  </span>
                </div>
              </div>

              {/* Advocates Team Stack */}
              <div className="pt-3 border-t border-white/5">
                <span className="text-xs text-neutral-400 block mb-2 font-medium">
                  Advogados Conectados
                </span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center -space-x-2">
                    {["GS", "MR", "AL", "VT"].map((initials, i) => (
                      <div
                        key={i}
                        className="size-8 rounded-full bg-neutral-800 border-2 border-[#0A090E] flex items-center justify-center text-[10px] font-bold text-neutral-200"
                      >
                        {initials}
                      </div>
                    ))}
                    <div className="size-8 rounded-full bg-[#173CE0] border-2 border-[#0A090E] flex items-center justify-center text-[10px] font-bold text-white">
                      +4
                    </div>
                  </div>
                  <button className="size-8 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-300 transition-colors">
                    <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
