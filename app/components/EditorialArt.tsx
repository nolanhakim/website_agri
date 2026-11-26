"use client";

import React from "react";

export function CoverArtwork() {
  return (
    <svg
      viewBox="0 0 420 340"
      className="w-full h-auto select-none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sageBlock" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#93AE9A" />
          <stop offset="100%" stopColor="#6B8773" />
        </linearGradient>
        <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2B3D32" />
          <stop offset="100%" stopColor="#4F6958" />
        </linearGradient>
        <linearGradient id="amberStrip" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D7A45E" />
          <stop offset="100%" stopColor="#C48B3F" />
        </linearGradient>
      </defs>

      {/* Editorial muted sun / circle */}
      <circle cx="292" cy="112" r="68" fill="#C48B3F" opacity="0.24" />
      <circle cx="292" cy="112" r="52" fill="#7D9985" opacity="0.22" />

      {/* Sage vertical collage block */}
      <rect
        x="76"
        y="36"
        width="104"
        height="196"
        rx="2"
        fill="url(#sageBlock)"
        opacity="0.82"
      />

      {/* Misty Indonesian archipelago peaks */}
      <path
        d="M128 240 L205 118 L248 168 L294 94 L378 240 Z"
        fill="url(#mountainGrad)"
      />
      <path
        d="M168 240 L226 154 L268 194 L318 130 L388 240 Z"
        fill="#1C2921"
        opacity="0.45"
      />
      {/* Mist highlight */}
      <path
        d="M150 218 Q210 198 265 214 T375 210 L375 240 L150 240 Z"
        fill="#F7F9F7"
        opacity="0.28"
      />

      {/* Botanical Patchouli / Teak stem silhouette */}
      <g stroke="#1C2921" strokeWidth="1.6" fill="none">
        <path d="M114 252 C116 185, 110 120, 128 66" />
        <path d="M116 172 C92 158, 72 132, 74 106 C96 112, 114 140, 116 172 Z" fill="#EDF2EE" fillOpacity="0.88" />
        <path d="M115 138 C138 122, 160 100, 158 76 C138 82, 120 108, 115 138 Z" fill="#EDF2EE" fillOpacity="0.88" />
        <path d="M123 95 C106 84, 96 64, 102 48 C118 56, 126 74, 123 95 Z" fill="#EDF2EE" fillOpacity="0.88" />
      </g>

      {/* Torn paper / warm amber editorial ribbon */}
      <path
        d="M52 214 L132 198 L212 220 L294 234 L362 250 L354 278 L278 264 L196 244 L112 232 L46 240 Z"
        fill="url(#amberStrip)"
        opacity="0.88"
      />

      {/* Orbital precision line & crosshair */}
      <ellipse
        cx="256"
        cy="132"
        rx="138"
        ry="58"
        transform="rotate(-22 256 132)"
        fill="none"
        stroke="#2B3D32"
        strokeWidth="1"
        opacity="0.55"
      />
      <circle cx="372" cy="96" r="4.5" fill="#1C2921" />

      {/* Architectural registration crosshair */}
      <g stroke="#2B3D32" strokeWidth="0.9" opacity="0.55">
        <line x1="68" y1="248" x2="68" y2="310" />
        <line x1="38" y1="278" x2="98" y2="278" />
      </g>
    </svg>
  );
}

export function AboutBotanicalCollage() {
  return (
    <svg
      viewBox="0 0 340 340"
      className="w-full h-auto select-none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dropSage" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7D9985" />
          <stop offset="100%" stopColor="#2B3D32" />
        </linearGradient>
        <linearGradient id="dropMist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDF2EE" />
          <stop offset="100%" stopColor="#DCE3DD" />
        </linearGradient>
      </defs>

      {/* Outer organic droplet mask */}
      <path
        d="M170 22 C245 78, 304 146, 304 214 C304 282, 244 322, 170 322 C96 322, 36 282, 36 214 C36 146, 95 78, 170 22 Z"
        fill="url(#dropMist)"
      />

      {/* Inner sage canopy droplet */}
      <path
        d="M170 52 C228 98, 274 152, 274 208 C274 262, 228 296, 170 296 C112 296, 66 262, 66 208 C66 152, 112 98, 170 52 Z"
        fill="url(#dropSage)"
      />

      {/* Botanical veins & natural resource motifs */}
      <g stroke="#EDF2EE" strokeWidth="1.5" fill="none" opacity="0.85">
        <path d="M170 92 L170 278" />
        <path d="M170 135 C140 124, 116 140, 108 162" />
        <path d="M170 172 C202 158, 228 172, 236 198" />
        <path d="M170 212 C136 198, 108 214, 102 242" />
        <path d="M170 242 C204 228, 230 244, 236 266" />
      </g>

      {/* Floating amber accent badge */}
      <circle cx="264" cy="96" r="28" fill="#C48B3F" opacity="0.9" />
      <text
        x="264"
        y="94"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="11"
        fontWeight="700"
        fontFamily="var(--font-mono)"
      >
        100%
      </text>
      <text
        x="264"
        y="108"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="8"
        fontWeight="600"
      >
        PURE
      </text>
    </svg>
  );
}

export function CommodityIllustration({ id }: { id: string }) {
  if (id === "briquettes") {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-md" aria-hidden="true">
        {/* Isometric Charcoal Cube 1 */}
        <polygon points="60,22 92,38 60,54 28,38" fill="#3D4740" />
        <polygon points="28,38 60,54 60,88 28,72" fill="#1C2921" />
        <polygon points="92,38 60,54 60,88 92,72" fill="#2B3D32" />
        {/* Ember / White Ash precision edge */}
        <polyline
          points="28,38 60,54 92,38"
          fill="none"
          stroke="#C48B3F"
          strokeWidth="1.5"
          opacity="0.85"
        />
        <circle cx="84" cy="82" r="14" fill="#C48B3F" opacity="0.9" />
        <text x="84" y="85" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="700" fontFamily="var(--font-mono)">
          7200+
        </text>
      </svg>
    );
  }

  if (id === "patchouli" || id === "clove") {
    const isClove = id === "clove";
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-md" aria-hidden="true">
        {/* Amber Glass Export Bottle */}
        <rect x="44" y="18" width="32" height="12" rx="2" fill="#1C2921" />
        <rect x="48" y="30" width="24" height="8" fill="#3D4740" />
        <rect
          x="34"
          y="38"
          width="52"
          height="62"
          rx="8"
          fill={isClove ? "#A86E28" : "#C48B3F"}
        />
        <rect x="40" y="54" width="40" height="32" rx="3" fill="#FCFBF9" opacity="0.94" />
        <text x="60" y="69" textAnchor="middle" fill="#2B3D32" fontSize="8" fontWeight="700" fontFamily="var(--font-heading)">
          {isClove ? "CLOVE" : "PATCHOULI"}
        </text>
        <text x="60" y="80" textAnchor="middle" fill="#6D7A71" fontSize="7" fontFamily="var(--font-mono)">
          {isClove ? "88% EUG" : "34% PA"}
        </text>
        {/* Botanical leaf accent */}
        <path
          d="M24 88 C16 68, 28 52, 42 56 C40 72, 32 82, 24 88 Z"
          fill="#EDF2EE"
          stroke="#2B3D32"
          strokeWidth="1.2"
        />
      </svg>
    );
  }

  if (id === "teak-leaves") {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-md" aria-hidden="true">
        <path
          d="M60 16 C86 34, 96 68, 60 104 C24 68, 34 34, 60 16 Z"
          fill="#C48B3F"
          opacity="0.92"
        />
        <path
          d="M60 22 L60 100 M60 44 L44 36 M60 60 L78 50 M60 74 L42 64 M60 84 L74 74"
          stroke="#2B3D32"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Timber
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-md" aria-hidden="true">
      <rect x="20" y="34" width="80" height="18" rx="2" fill="#C48B3F" />
      <rect x="24" y="56" width="80" height="18" rx="2" fill="#A86E28" />
      <rect x="18" y="78" width="80" height="18" rx="2" fill="#8C591E" />
      <line x1="28" y1="43" x2="90" y2="43" stroke="#EDF2EE" strokeWidth="1" opacity="0.5" />
      <line x1="32" y1="65" x2="94" y2="65" stroke="#EDF2EE" strokeWidth="1" opacity="0.5" />
      <circle cx="88" cy="30" r="13" fill="#2B3D32" />
      <text x="88" y="33" textAnchor="middle" fill="#FFF" fontSize="7" fontWeight="700" fontFamily="var(--font-mono)">
        SVLK
      </text>
    </svg>
  );
}
