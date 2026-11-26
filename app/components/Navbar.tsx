"use client";

import React from "react";
import Link from "next/link";
import type { Locale } from "../data/agri-catalog";

interface NavbarProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function Navbar({ locale, onLocaleChange }: NavbarProps) {
  return (
    <header className="w-full sticky top-0 z-40 bg-gradient-to-r from-[#1C2921] via-[#2B3D32] to-[#7D9985] shadow-[0_4px_20px_rgba(28,41,33,0.18)]">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 h-14 flex items-center justify-between gap-6">
        {/* Left: Organic Line-Art Monogram + Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer shrink-0"
        >
          <svg
            viewBox="0 0 36 36"
            className="w-8 h-8 text-white/95 group-hover:text-[#EDF2EE] transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 4 C23 11, 29 17, 29 24 C29 29.5, 24 33, 18 33 C12 33, 7 29.5, 7 24 C7 17, 13 11, 18 4 Z" />
            <path d="M18 11 C21.5 16, 24.5 20, 24.5 24.5 C24.5 27.8, 21.6 30, 18 30 C14.4 30, 11.5 27.8, 11.5 24.5 C11.5 20, 14.5 16, 18 11 Z" />
            <path d="M18 18 C19.8 20.5, 21 22.5, 21 25 C21 26.8, 19.6 28, 18 28 C16.4 28, 15 26.8, 15 25 C15 22.5, 16.2 20.5, 18 18 Z" />
          </svg>
          <span className="text-xl font-heading font-bold tracking-tight text-white lowercase leading-none">
            agri
          </span>
        </Link>

        {/* Center: Static Navigation Labels (not magazine controls) */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {[
            "ABOUT US",
            "OUR BUSINESS",
            "MEDIA",
            "CAREER",
            "CONTACT US",
          ].map((label) => (
            <span
              key={label}
              className="text-[12px] font-medium tracking-[0.07em] whitespace-nowrap text-white/80 py-1"
            >
              {label}
            </span>
          ))}
        </nav>

        {/* Right: Pipe-Separated Language Switcher */}
        <div className="flex items-center shrink-0">
          <div className="flex items-center text-[11px] font-medium tracking-wider">
            {(
              [
                { value: "EN", label: "EN" },
                { value: "ID", label: "ID" },
                { value: "ZH", label: "CN" },
              ] as const
            ).map(({ value, label }, idx) => (
              <React.Fragment key={value}>
                {idx > 0 && (
                  <span className="text-white/35 mx-1.5 select-none">|</span>
                )}
                <button
                  type="button"
                  onClick={() => onLocaleChange(value)}
                  className={`transition-colors cursor-pointer ${locale === value
                    ? "text-white font-bold"
                    : "text-white/60 hover:text-white"
                    }`}
                >
                  {label}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
