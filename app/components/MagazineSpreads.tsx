"use client";

import React, { useState } from "react";
import {
  COMMODITIES,
  COMPLIANCE_DOCS,
  CONTAINER_PRESETS,
  CHAPTERS,
  LOCALE_COPY,
  type Locale,
  type Commodity,
} from "../data/agri-catalog";
import {
  CoverArtwork,
  AboutBotanicalCollage,
  CommodityIllustration,
} from "./EditorialArt";
import type { RfqInitialData } from "./RfqModal";

interface MagazineSheet {
  front: React.ReactNode;
  back: React.ReactNode;
  frontPageNum: number;
  backPageNum: number;
}

interface SpreadBuilderProps {
  locale: Locale;
  onJumpToSpread: (spreadIndex: number) => void;
  onOpenRfq: (data?: RfqInitialData) => void;
}

function PageFooter({ pageNum, label }: { pageNum: number; label: string }) {
  return (
    <div className="mt-auto pt-2 border-t border-[#DCE3DD]/70 flex items-center justify-between text-[10px] font-mono-tech text-[#6D7A71]">
      <span>AGRI · {label}</span>
      <span>{String(pageNum).padStart(2, "0")}</span>
    </div>
  );
}

function CommodityMagazineCard({
  commodity,
  onOpenRfq,
  compact = false,
}: {
  commodity: Commodity;
  onOpenRfq: (data: RfqInitialData) => void;
  compact?: boolean;
}) {
  return (
    <div className="rounded-xl bg-white border border-[#DCE3DD] shadow-[0_6px_22px_rgba(43,61,50,0.06)] overflow-hidden flex flex-col sm:flex-row">
      {/* Left Sage Panel with overlapping illustration */}
      <div className="sm:w-[34%] sage-canopy-gradient p-3 flex flex-col items-center justify-between text-white relative">
        <span className="self-start px-2 py-0.5 rounded-full bg-white/15 text-[9px] font-mono-tech tracking-wider">
          {commodity.hsCode}
        </span>
        <div className="my-1 transform sm:scale-105">
          <CommodityIllustration id={commodity.id} />
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-wider text-[#EDF2EE]/90 text-center">
          {commodity.badge}
        </span>
      </div>

      {/* Right Content Panel */}
      <div className="sm:w-[66%] p-3.5 flex flex-col justify-between gap-2">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono-tech text-[#C48B3F] font-semibold">
              COMMODITY {commodity.code}
            </span>
          </div>
          <h3 className="text-base font-bold text-[#2B3D32] leading-snug">
            {commodity.name}
          </h3>
          <p className="text-[11px] text-[#6D7A71] font-medium">
            {commodity.botanicalOrType}
          </p>
          {!compact && (
            <p className="mt-1.5 text-[11px] text-[#3D4740] leading-relaxed">
              {commodity.application}
            </p>
          )}
        </div>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 gap-1.5">
          {commodity.specs.slice(0, compact ? 4 : 6).map((spec) => (
            <div
              key={spec.label}
              className="px-2 py-1 rounded bg-[#EDF2EE]/75 border border-[#DCE3DD]/70"
            >
              <div className="text-[9px] text-[#6D7A71] truncate">
                {spec.label}
              </div>
              <div className="text-[10.5px] font-mono-tech font-semibold text-[#2B3D32] truncate">
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-2 pt-1">
          <span className="text-[9.5px] text-[#6D7A71] truncate max-w-[56%]">
            {commodity.packaging}
          </span>
          <button
            type="button"
            onClick={() => onOpenRfq({ commodityId: commodity.id })}
            className="shrink-0 px-3 py-1.5 rounded-md bg-[#2B3D32] text-white text-[10.5px] font-semibold hover:bg-[#7D9985] transition-colors cursor-pointer"
          >
            Request Quote &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export function ContainerCalculatorWidget({
  onOpenRfq,
}: {
  onOpenRfq: (data: RfqInitialData) => void;
}) {
  const [presetId, setPresetId] = useState(CONTAINER_PRESETS[0].id);
  const [containerType, setContainerType] = useState<"20ft" | "40hq">("20ft");

  const preset =
    CONTAINER_PRESETS.find((p) => p.id === presetId) || CONTAINER_PRESETS[0];
  const units =
    containerType === "20ft" ? preset.fcl20Units : preset.hq40Units;
  const tons = containerType === "20ft" ? preset.fcl20Tons : preset.hq40Tons;

  const commodityMap: Record<string, string> = {
    "briquettes-box": "briquettes",
    "essential-oil-drum": "patchouli",
    "teak-leaves-bale": "teak-leaves",
    "timber-kd": "timber",
  };

  return (
    <div
      data-interactive="true"
      className="rounded-xl bg-white border border-[#DCE3DD] shadow-[0_8px_24px_rgba(43,61,50,0.06)] p-4 space-y-3"
    >
      <div>
        <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#6D7A71] mb-1">
          Select Commodity &amp; Packaging
        </label>
        <select
          value={presetId}
          onChange={(e) => setPresetId(e.target.value)}
          className="w-full px-2.5 py-1.5 rounded-md border border-[#DCE3DD] bg-[#F7F9F7] text-xs text-[#2B3D32] font-medium focus:outline-none focus:border-[#7D9985]"
        >
          {CONTAINER_PRESETS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#6D7A71] mb-1">
          Container Size
        </label>
        <div className="grid grid-cols-2 gap-2">
          {(
            [
              { id: "20ft", label: "20ft FCL" },
              { id: "40hq", label: "40ft HQ" },
            ] as const
          ).map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setContainerType(c.id)}
              className={`py-1.5 rounded-md border text-xs font-mono-tech font-semibold transition-colors cursor-pointer ${
                containerType === c.id
                  ? "bg-[#2B3D32] border-[#2B3D32] text-white"
                  : "bg-[#F7F9F7] border-[#DCE3DD] text-[#3D4740] hover:border-[#7D9985]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <div className="p-2.5 rounded-lg bg-[#EDF2EE] border border-[#DCE3DD]">
          <div className="text-[10px] text-[#6D7A71]">Estimated Load</div>
          <div className="text-lg font-bold font-mono-tech text-[#2B3D32]">
            {units.toLocaleString()}
          </div>
          <div className="text-[10px] text-[#3D4740]">{preset.unitName}</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#EDF2EE] border border-[#DCE3DD]">
          <div className="text-[10px] text-[#6D7A71]">Net Tonnage</div>
          <div className="text-lg font-bold font-mono-tech text-[#C48B3F]">
            {tons.toFixed(1)} MT
          </div>
          <div className="text-[10px] text-[#3D4740] truncate">
            POL: {preset.port}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() =>
          onOpenRfq({
            commodityId: commodityMap[preset.id] || "briquettes",
            quantity: containerType === "20ft" ? "1 × 20ft FCL" : "1 × 40ft HQ",
            notes: `Calculated load: ${units} ${preset.unitName} (~${tons} MT) via ${preset.port}.`,
          })
        }
        className="w-full py-2 rounded-md bg-[#7D9985] text-white text-xs font-semibold hover:bg-[#2B3D32] transition-colors cursor-pointer"
      >
        Request Quote for This Load →
      </button>
    </div>
  );
}

function ComplianceHubWidget() {
  const [selectedCode, setSelectedCode] = useState(COMPLIANCE_DOCS[0].code);
  const activeDoc =
    COMPLIANCE_DOCS.find((d) => d.code === selectedCode) || COMPLIANCE_DOCS[0];

  return (
    <div data-interactive="true" className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {COMPLIANCE_DOCS.map((doc) => {
          const active = doc.code === selectedCode;
          return (
            <button
              key={doc.code}
              type="button"
              onClick={() => setSelectedCode(doc.code)}
              className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                active
                  ? "bg-[#2B3D32] border-[#2B3D32] text-white shadow-sm"
                  : "bg-white border-[#DCE3DD] text-[#2B3D32] hover:border-[#7D9985]"
              }`}
            >
              <div className="text-xs font-mono-tech font-bold">
                {doc.code}
              </div>
              <div
                className={`text-[9.5px] mt-0.5 truncate ${
                  active ? "text-[#EDF2EE]/80" : "text-[#6D7A71]"
                }`}
              >
                {doc.title}
              </div>
            </button>
          );
        })}
      </div>

      <div className="p-3.5 rounded-xl bg-[#EDF2EE] border border-[#DCE3DD]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#2B3D32]">
            {activeDoc.title} ({activeDoc.code})
          </span>
          <span className="px-2 py-0.5 rounded-full bg-[#7D9985] text-white text-[9px] font-semibold">
            VERIFIED
          </span>
        </div>
        <p className="mt-1.5 text-xs text-[#3D4740] leading-relaxed">
          {activeDoc.desc}
        </p>
      </div>
    </div>
  );
}

export function buildMagazineSheets({
  locale,
  onJumpToSpread,
  onOpenRfq,
}: SpreadBuilderProps): MagazineSheet[] {
  const copy = LOCALE_COPY[locale];

  return [
    // SHEET 0: Front Cover (Page 1) & Table of Contents (Page 2)
    {
      frontPageNum: 1,
      backPageNum: 2,
      front: (
        <div className="h-full p-6 md:p-8 flex flex-col justify-between relative">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded bg-[#E6E2D8] text-[#2B3D32] text-[10px] font-mono-tech font-semibold tracking-widest uppercase">
              ISSUE 01 · 2026
            </span>
            <span className="text-[10px] font-mono-tech text-[#6D7A71] uppercase tracking-wider">
              B2B Export Edition
            </span>
          </div>

          <div className="mt-2">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-[-0.04em] text-[#1C2921] leading-none">
              AGRI
            </h1>
            <p className="mt-1 text-xs font-medium text-[#7D9985] tracking-wide uppercase">
              {copy.tagline}
            </p>
          </div>

          <div className="my-auto py-1">
            <CoverArtwork />
          </div>

          <div className="space-y-3">
            {/* Floating glassmorphism highlight from design.md */}
            <div className="p-3 rounded-xl bg-[#7D9985]/20 backdrop-blur-md border border-[#7D9985]/35 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#2B3D32] text-white flex items-center justify-center text-xs font-bold shrink-0">
                ✦
              </div>
              <div>
                <div className="text-xs font-bold text-[#1C2921]">
                  Export-Grade Purity
                </div>
                <div className="text-[10.5px] text-[#3D4740]">
                  COA-verified commodities from certified Indonesian sources.
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-semibold text-[#2B3D32] leading-snug max-w-[65%]">
                {copy.heroHeadline}
              </p>
              <button
                type="button"
                onClick={() => onJumpToSpread(1)}
                className="px-3.5 py-2 rounded-full bg-[#2B3D32] text-white text-[11px] font-semibold hover:bg-[#7D9985] transition-colors cursor-pointer shrink-0"
              >
                {copy.openMagazine} →
              </button>
            </div>
          </div>
        </div>
      ),
      back: (
        <div className="h-full p-6 md:p-8 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full bg-[#EDF2EE] text-[#2B3D32] text-[10px] font-semibold uppercase tracking-[0.1em]">
              Contents &amp; Index
            </span>
            <span className="text-[10px] font-mono-tech text-[#6D7A71]">
              EN · ID · CN
            </span>
          </div>

          <h2 className="mt-4 text-2xl font-bold text-[#2B3D32] tracking-tight">
            Inside Issue 01
          </h2>
          <p className="mt-1 text-xs text-[#6D7A71] leading-relaxed">
            Click any section below to flip directly to the specification sheet,
            capacity metrics, or interactive container calculator.
          </p>

          <div className="mt-5 space-y-2">
            {CHAPTERS.slice(1).map((ch, idx) => (
              <button
                key={ch.label}
                type="button"
                onClick={() => onJumpToSpread(ch.spreadIndex)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-white border border-[#DCE3DD] hover:border-[#7D9985] hover:bg-[#EDF2EE]/50 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono-tech font-semibold text-[#C48B3F]">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#2B3D32] group-hover:text-[#1C2921]">
                    {ch.label}
                  </span>
                </div>
                <span className="text-[11px] font-mono-tech text-[#6D7A71] group-hover:text-[#2B3D32]">
                  p. {ch.pageRange} →
                </span>
              </button>
            ))}
          </div>

          <div className="mt-auto mb-3 p-3.5 rounded-xl bg-[#EDF2EE] border border-[#DCE3DD]">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-[#2B3D32]">
              Direct B2B Procurement
            </div>
            <p className="mt-1 text-[11px] text-[#3D4740]">
              Need a custom OEM quotation or laboratory sample? Open our export
              desk anytime.
            </p>
            <button
              type="button"
              onClick={() => onOpenRfq()}
              className="mt-2 px-3 py-1.5 rounded-md bg-[#2B3D32] text-white text-[11px] font-semibold hover:bg-[#7D9985] transition-colors cursor-pointer"
            >
              {copy.requestQuote} →
            </button>
          </div>

          <PageFooter pageNum={2} label="INDEX" />
        </div>
      ),
    },

    // SHEET 1: About Us (Page 3) & Why Choose Us Part 1 (Page 4)
    {
      frontPageNum: 3,
      backPageNum: 4,
      front: (
        <div className="h-full p-6 md:p-8 flex flex-col">
          <span className="self-start px-2.5 py-1 rounded-full bg-[#EDF2EE] text-[#2B3D32] text-[10px] font-semibold uppercase tracking-[0.1em]">
            About Us
          </span>

          <h2 className="mt-3 text-2xl font-bold text-[#2B3D32] leading-tight tracking-tight">
            Indonesian Natural Resources &amp; Export Specialist
          </h2>

          <p className="mt-2.5 text-xs text-[#3D4740] leading-relaxed">
            <strong>AGRI</strong> operates as a B2B exporter, manufacturer, and
            trusted commodity aggregator across Indonesia. We connect global
            importers in perfumery, shisha/BBQ, food packaging, and
            architecture directly with verified Indonesian origins.
          </p>

          <div className="my-auto flex items-center justify-center py-2">
            <div className="w-56">
              <AboutBotanicalCollage />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="p-3 rounded-xl bg-white border border-[#DCE3DD] shadow-[0_6px_20px_rgba(43,61,50,0.05)]">
              <div className="text-xl font-bold font-mono-tech text-[#2B3D32]">
                1,500+
              </div>
              <div className="text-[10.5px] text-[#6D7A71]">
                Partner Farmers &amp; Artisans
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#DCE3DD] shadow-[0_6px_20px_rgba(43,61,50,0.05)]">
              <div className="text-xl font-bold font-mono-tech text-[#C48B3F]">
                5 Core
              </div>
              <div className="text-[10.5px] text-[#6D7A71]">
                Export-Ready Commodities
              </div>
            </div>
          </div>

          <PageFooter pageNum={3} label="HERITAGE" />
        </div>
      ),
      back: (
        <div className="h-full p-6 md:p-8 flex flex-col">
          <span className="self-start px-2.5 py-1 rounded-full bg-[#EDF2EE] text-[#2B3D32] text-[10px] font-semibold uppercase tracking-[0.1em]">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-2xl font-bold text-[#2B3D32] leading-tight tracking-tight">
            Our Export Capacity in Numbers
          </h2>
          <p className="mt-1 text-xs text-[#6D7A71]">
            Direct sourcing, strict laboratory QC, and global container readiness.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3 my-auto">
            <div className="col-span-2 p-4 rounded-xl sage-canopy-gradient text-white flex items-center justify-between gap-4">
              <div>
                <div className="text-3xl font-bold font-heading">100%</div>
                <div className="text-xs font-semibold mt-0.5">
                  Batch Lab-Tested with COA &amp; MSDS
                </div>
                <div className="text-[10.5px] text-[#EDF2EE]/80 mt-1">
                  Transparent proximate &amp; GC-MS verification before shipment.
                </div>
              </div>
              <div className="text-right shrink-0 border-l border-white/20 pl-4">
                <div className="text-2xl font-bold font-mono-tech text-[#D7A45E]">
                  24h
                </div>
                <div className="text-[10px] text-[#EDF2EE]/90">
                  Export RFQ SLA
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl sage-canopy-gradient text-white">
              <div className="text-xl font-bold font-mono-tech">20ft / 40ft</div>
              <div className="text-xs font-semibold mt-1">
                FCL &amp; LCL Readiness
              </div>
              <p className="text-[10.5px] text-[#EDF2EE]/80 mt-1">
                Loading from Tanjung Emas, Tanjung Perak &amp; Tanjung Priok.
              </p>
            </div>

            <div className="p-4 rounded-xl sage-canopy-gradient text-white">
              <div className="text-xl font-bold font-mono-tech">5 Core</div>
              <div className="text-xs font-semibold mt-1">
                Indonesian Origins
              </div>
              <p className="text-[10.5px] text-[#EDF2EE]/80 mt-1">
                Sulawesi, Sumatera &amp; Java direct-harvested supply chains.
              </p>
            </div>
          </div>

          <PageFooter pageNum={4} label="CAPACITY" />
        </div>
      ),
    },

    // SHEET 2: Why Choose Us Part 2 (Page 5) & Briquettes (Page 6)
    {
      frontPageNum: 5,
      backPageNum: 6,
      front: (
        <div className="h-full p-6 md:p-8 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full bg-[#EDF2EE] text-[#2B3D32] text-[10px] font-semibold uppercase tracking-[0.1em]">
              Quality &amp; Legality
            </span>
            <span className="text-[10px] font-mono-tech text-[#C48B3F] font-semibold">
              EXPORT STANDARD
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 my-auto">
            <div className="p-4 rounded-xl sage-canopy-gradient text-white">
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold font-mono-tech">
                  30%–34%+ PA
                </div>
                <span className="text-[10px] font-mono-tech text-[#D7A45E]">
                  GC-MS VERIFIED
                </span>
              </div>
              <div className="text-xs font-semibold mt-1">
                Patchouli Alcohol &amp; 78%–88%+ Eugenol Purity
              </div>
              <p className="text-[10.5px] text-[#EDF2EE]/80 mt-1">
                Steam-distilled in stainless steel units for iron-free clarity.
              </p>
            </div>

            <div className="p-4 rounded-xl sage-canopy-gradient text-white">
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold font-mono-tech">SVLK</div>
                <span className="text-[10px] font-mono-tech text-[#D7A45E]">
                  FLEGT / V-LEGAL
                </span>
              </div>
              <div className="text-xs font-semibold mt-1">
                100% Legal Indonesian Timber Compliance
              </div>
              <p className="text-[10.5px] text-[#EDF2EE]/80 mt-1">
                Full chain-of-custody traceability for Teak, Mahogany &amp;
                tropical hardwoods.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DCE3DD] flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#7D9985]">
                  Direct Partnerships
                </div>
                <div className="text-sm font-bold text-[#2B3D32] mt-0.5">
                  Embracing 1,500+ Farmers &amp; Artisans
                </div>
                <p className="text-[10.5px] text-[#6D7A71] mt-1">
                  Consistent harvest quality and fair-origin sourcing.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onJumpToSpread(3)}
                className="shrink-0 px-3 py-2 rounded-md bg-[#2B3D32] text-white text-[11px] font-semibold hover:bg-[#7D9985] transition-colors cursor-pointer"
              >
                Commodities →
              </button>
            </div>
          </div>

          <PageFooter pageNum={5} label="QUALITY" />
        </div>
      ),
      back: (
        <div className="h-full p-6 md:p-8 flex flex-col">
          <span className="self-start px-2.5 py-1 rounded-full bg-[#EDF2EE] text-[#2B3D32] text-[10px] font-semibold uppercase tracking-[0.1em]">
            Our Commodities · 01
          </span>
          <h2 className="mt-2.5 text-xl font-bold text-[#2B3D32] tracking-tight">
            Coconut Charcoal Briquettes
          </h2>
          <p className="text-xs text-[#6D7A71] mb-3">
            High-calorific, white-ash briquettes with custom OEM/ODM packaging.
          </p>

          <div className="my-auto">
            <CommodityMagazineCard
              commodity={COMMODITIES[0]}
              onOpenRfq={onOpenRfq}
            />
          </div>

          <PageFooter pageNum={6} label="BRIQUETTES" />
        </div>
      ),
    },

    // SHEET 3: Patchouli Oil (Page 7) & Clove + Teak Leaves (Page 8)
    {
      frontPageNum: 7,
      backPageNum: 8,
      front: (
        <div className="h-full p-6 md:p-8 flex flex-col">
          <span className="self-start px-2.5 py-1 rounded-full bg-[#EDF2EE] text-[#2B3D32] text-[10px] font-semibold uppercase tracking-[0.1em]">
            Our Commodities · 02
          </span>
          <h2 className="mt-2.5 text-xl font-bold text-[#2B3D32] tracking-tight">
            Pure Steam-Distilled Patchouli Oil
          </h2>
          <p className="text-xs text-[#6D7A71] mb-3">
            Sourced from Sulawesi, Sumatera &amp; Java for global perfumery.
          </p>

          <div className="my-auto">
            <CommodityMagazineCard
              commodity={COMMODITIES[1]}
              onOpenRfq={onOpenRfq}
            />
          </div>

          <PageFooter pageNum={7} label="PATCHOULI OIL" />
        </div>
      ),
      back: (
        <div className="h-full p-5 md:p-6 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full bg-[#EDF2EE] text-[#2B3D32] text-[10px] font-semibold uppercase tracking-[0.1em]">
              Commodities · 03 &amp; 04
            </span>
          </div>

          <div className="space-y-2.5 my-auto">
            <CommodityMagazineCard
              commodity={COMMODITIES[2]}
              onOpenRfq={onOpenRfq}
              compact
            />
            <CommodityMagazineCard
              commodity={COMMODITIES[3]}
              onOpenRfq={onOpenRfq}
              compact
            />
          </div>

          <PageFooter pageNum={8} label="CLOVE & TEAK LEAVES" />
        </div>
      ),
    },

    // SHEET 4: Timber & Wood (Page 9) & Compliance Hub (Page 10)
    {
      frontPageNum: 9,
      backPageNum: 10,
      front: (
        <div className="h-full p-6 md:p-8 flex flex-col">
          <span className="self-start px-2.5 py-1 rounded-full bg-[#EDF2EE] text-[#2B3D32] text-[10px] font-semibold uppercase tracking-[0.1em]">
            Our Commodities · 05
          </span>
          <h2 className="mt-2.5 text-xl font-bold text-[#2B3D32] tracking-tight">
            SVLK Timber &amp; Wood Products
          </h2>
          <p className="text-xs text-[#6D7A71] mb-3">
            Kiln-dried Teak, Mahogany &amp; legal tropical hardwoods.
          </p>

          <div className="my-auto">
            <CommodityMagazineCard
              commodity={COMMODITIES[4]}
              onOpenRfq={onOpenRfq}
            />
          </div>

          <PageFooter pageNum={9} label="TIMBER & WOOD" />
        </div>
      ),
      back: (
        <div className="h-full p-6 md:p-8 flex flex-col">
          <span className="self-start px-2.5 py-1 rounded-full bg-[#EDF2EE] text-[#2B3D32] text-[10px] font-semibold uppercase tracking-[0.1em]">
            Compliance Hub
          </span>
          <h2 className="mt-2.5 text-xl font-bold text-[#2B3D32] tracking-tight">
            Export Legality &amp; Documentation
          </h2>
          <p className="mt-1 mb-3 text-xs text-[#6D7A71]">
            Click any document badge below to inspect export compliance details.
          </p>

          <div className="my-auto">
            <ComplianceHubWidget />
          </div>

          <div className="mt-3 mb-2 p-3 rounded-lg bg-white border border-[#DCE3DD] flex items-center justify-between text-[11px]">
            <span className="font-semibold text-[#2B3D32]">
              Ports of Loading
            </span>
            <span className="font-mono-tech text-[#6D7A71]">
              IDSRG · IDSUB · IDTPP
            </span>
          </div>

          <PageFooter pageNum={10} label="COMPLIANCE" />
        </div>
      ),
    },

    // SHEET 5: Container Calculator (Page 11) & Back Cover (Page 12)
    {
      frontPageNum: 11,
      backPageNum: 12,
      front: (
        <div className="h-full p-6 md:p-8 flex flex-col">
          <span className="self-start px-2.5 py-1 rounded-full bg-[#EDF2EE] text-[#2B3D32] text-[10px] font-semibold uppercase tracking-[0.1em]">
            Logistics Tool
          </span>
          <h2 className="mt-2.5 text-xl font-bold text-[#2B3D32] tracking-tight">
            Container Load Estimator
          </h2>
          <p className="mt-1 mb-3 text-xs text-[#6D7A71]">
            Calculate 20ft FCL vs 40ft HQ volume &amp; tonnage before requesting a quote.
          </p>

          <div className="my-auto">
            <ContainerCalculatorWidget onOpenRfq={onOpenRfq} />
          </div>

          <PageFooter pageNum={11} label="LOGISTICS" />
        </div>
      ),
      back: (
        <div className="h-full p-6 md:p-8 flex flex-col justify-between bg-[#2B3D32] text-white relative overflow-hidden">
          {/* Subtle organic background ring */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 w-72 h-72 rounded-full border border-white/10 pointer-events-none"
          />

          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold tracking-tight">AGRI</span>
            <span className="text-[10px] font-mono-tech text-[#EDF2EE]/70 uppercase">
              End of Issue 01
            </span>
          </div>

          <div className="space-y-4 my-auto">
            <span className="inline-block px-2.5 py-1 rounded-full bg-white/10 text-[#D7A45E] text-[10px] font-semibold uppercase tracking-widest">
              Global B2B Export Desk
            </span>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Ready to Source Indonesian Natural Resources?
            </h2>
            <p className="text-xs text-[#EDF2EE]/80 leading-relaxed">
              Request a tailored FOB/CIF quotation or order a lab-tested sample
              of our Coconut Charcoal Briquettes, Patchouli Oil, Clove Oil,
              Dried Teak Leaves, or SVLK Timber.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => onOpenRfq()}
                className="px-4 py-2.5 rounded-md bg-[#C48B3F] text-white text-xs font-semibold hover:bg-[#b07b34] transition-colors cursor-pointer"
              >
                {copy.requestQuote} →
              </button>
              <button
                type="button"
                onClick={() => onJumpToSpread(0)}
                className="px-4 py-2.5 rounded-md border border-white/25 text-white text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer"
              >
                Back to Cover
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] text-[#EDF2EE]/70 font-mono-tech">
            <span>export@agri-indonesia.com</span>
            <span>© 2026 AGRI · All Rights Reserved</span>
          </div>
        </div>
      ),
    },
  ];
}
