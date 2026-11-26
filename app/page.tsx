"use client";

import { useRef, useState } from "react";
import {
  LeafThrough,
  type LeafThroughHandle,
  type PageChangeDetail,
} from "leafthrough/react";
import { LOCALE_COPY, type Locale } from "./data/agri-catalog";
import { LEAFTHROUGH_PAGES } from "./data/leafthrough-pages";
import { Navbar } from "./components/Navbar";

export default function HomePage() {
  const [pageDetail, setPageDetail] = useState<PageChangeDetail | null>(null);
  const [locale, setLocale] = useState<Locale>("EN");
  const [showHint, setShowHint] = useState(true);
  const magazineRef = useRef<LeafThroughHandle>(null);

  const totalPages = 12;
  const pages = LEAFTHROUGH_PAGES[locale];

  const visible = pageDetail?.visiblePages ?? [0];
  const isAtStart = visible.includes(0);
  const isAtEnd = visible.includes(totalPages - 1);

  const pageLabel =
    visible.length > 1
      ? `${visible[0] + 1}–${visible[visible.length - 1] + 1} / ${totalPages}`
      : `${(visible[0] ?? 0) + 1} / ${totalPages}`;

  const copy = LOCALE_COPY[locale];

  return (
    <div
      dir="ltr"
      className="min-h-screen flex flex-col justify-between bg-[#F5F3EE] text-[#3D4740] relative"
    >
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* Main Magazine Studio Stage */}
      <main className="flex-1 w-full max-w-[1320px] mx-auto px-3 sm:px-6 md:px-8 flex items-center justify-center relative py-3 md:py-2">
        {/* Left Dismissible Instruction Card (matching reference screenshot) */}
        {showHint && isAtStart && (
          <aside className="hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 z-30 w-64 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-[#DCE3DD] shadow-[0_12px_32px_rgba(28,41,33,0.08)]">
            <button
              type="button"
              onClick={() => setShowHint(false)}
              aria-label="Dismiss hint"
              className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full flex items-center justify-center text-[#6D7A71] hover:bg-[#EDF2EE] hover:text-[#2B3D32] text-xs cursor-pointer"
            >
              ✕
            </button>
            <p className="text-xs font-semibold text-[#2B3D32] pr-5 leading-snug">
              {copy.hintTitle}
            </p>
            <p className="mt-1.5 text-[11px] text-[#6D7A71] leading-relaxed">
              {copy.hintBody}
            </p>
          </aside>
        )}

        <LeafThrough
          ref={magazineRef}
          pages={pages}
          className="w-full max-w-[430px] aspect-[10/13.5] md:max-w-[1040px] md:aspect-[16/10.4]"
          layout="auto"
          pageAspect={1.3}
          paper={{
            showThrough: 0.04,
            grainStrength: 0.06,
            inkGloss: 0.1,
            roughness: 0.8,
          }}
          label="AGRI Issue 01 magazine"
          interaction={{ keyboard: "global" }}
          onPageChange={(detail) => setPageDetail(detail)}
        />
      </main>

      {/* Bottom Center Pagination Bar (Mobile & Desktop) */}
      <footer className="w-full pb-5 pt-1 flex items-center justify-center z-30">
        <div className="flex items-center gap-8 px-4 py-1.5 rounded-full text-xs font-mono-tech text-[#3D4740]">
          <button
            type="button"
            onClick={() => magazineRef.current?.prev()}
            disabled={isAtStart}
            aria-label="Previous page"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:shadow-xs disabled:opacity-30 transition-all cursor-pointer disabled:cursor-default"
          >
            ←
          </button>
          <span className="min-w-[64px] text-center font-medium text-[#2B3D32]">
            {pageLabel}
          </span>
          <button
            type="button"
            onClick={() => magazineRef.current?.next()}
            disabled={isAtEnd}
            aria-label="Next page"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:shadow-xs disabled:opacity-30 transition-all cursor-pointer disabled:cursor-default"
          >
            →
          </button>
        </div>
      </footer>
    </div>
  );
}
