"use client";

import React, { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { buildMagazineSheets } from "../components/MagazineSpreads";
import type { Locale } from "../data/agri-catalog";

function RenderPage() {
  const params = useSearchParams();
  const locale = (params.get("locale") || "EN") as Locale;
  const page = Math.max(1, Math.min(12, Number(params.get("page")) || 1));

  const content = useMemo(() => {
    const sheets = buildMagazineSheets({
      locale,
      onJumpToSpread: () => {},
      onOpenRfq: () => {},
    });
    const sheet = sheets[Math.floor((page - 1) / 2)];
    return page % 2 === 1 ? sheet?.front : sheet?.back;
  }, [locale, page]);

  return (
    <div
      data-page-root
      dir="ltr"
      className="magazine-paper rounded-lg border border-[#DCE3DD]/90 overflow-hidden"
      style={{ width: 1200, height: 1560 }}
    >
      {content}
    </div>
  );
}

export default function RenderPageRoute() {
  return (
    <Suspense fallback={null}>
      <RenderPage />
    </Suspense>
  );
}
