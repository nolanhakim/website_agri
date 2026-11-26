"use client";

import React, { useState } from "react";
import { COMMODITIES } from "../data/agri-catalog";

export interface RfqInitialData {
  commodityId?: string;
  quantity?: string;
  notes?: string;
}

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: RfqInitialData;
}

export function RfqModal({ isOpen, onClose, initialData }: RfqModalProps) {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [commodityId, setCommodityId] = useState(
    initialData?.commodityId || COMMODITIES[0].id
  );
  const [inquiryType, setInquiryType] = useState<"Quotation" | "Sample">(
    "Quotation"
  );
  const [quantity, setQuantity] = useState(
    initialData?.quantity || "1 × 20ft FCL"
  );
  const [incoterm, setIncoterm] = useState("FOB");
  const [notes, setNotes] = useState(initialData?.notes || "");
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const selectedCommodity =
    COMMODITIES.find((c) => c.id === commodityId) || COMMODITIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = `AGRI-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;
    setSubmittedRef(refId);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C2921]/60 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rfq-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto thin-scroll rounded-xl bg-white border border-[#DCE3DD] shadow-[0_24px_70px_rgba(28,41,33,0.3)] p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#6D7A71] hover:bg-[#EDF2EE] hover:text-[#2B3D32] transition-colors"
        >
          ✕
        </button>

        {submittedRef ? (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#EDF2EE] text-[#2B3D32] flex items-center justify-center text-xl font-bold">
              ✓
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#EDF2EE] text-[#2B3D32] text-[11px] font-semibold uppercase tracking-widest">
              RFQ Received · 24h Response SLA
            </span>
            <h3
              id="rfq-modal-title"
              className="text-2xl font-bold text-[#2B3D32]"
            >
              Thank You, {fullName || "Partner"}
            </h3>
            <p className="text-sm text-[#3D4740] max-w-md mx-auto leading-relaxed">
              Your {inquiryType.toLowerCase()} request for{" "}
              <strong className="text-[#2B3D32]">{selectedCommodity.name}</strong>{" "}
              ({quantity}, {incoterm}) has been logged for our Export Sales team.
            </p>
            <div className="inline-block px-4 py-2 rounded-lg bg-[#F7F9F7] border border-[#DCE3DD] font-mono-tech text-xs text-[#2B3D32]">
              Reference: {submittedRef}
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-md bg-[#2B3D32] text-white text-sm font-medium hover:bg-[#1C2921] transition-colors"
              >
                Return to Magazine
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <span className="inline-block px-2.5 py-1 rounded-full bg-[#EDF2EE] text-[#2B3D32] text-[10px] font-semibold uppercase tracking-[0.1em]">
                B2B Export Desk
              </span>
              <h3
                id="rfq-modal-title"
                className="mt-2 text-2xl font-bold text-[#2B3D32] tracking-tight"
              >
                Request for Quotation &amp; Sample
              </h3>
              <p className="text-xs text-[#6D7A71] mt-1">
                Direct Indonesian sourcing with COA, MSDS &amp; SVLK documentation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Inquiry Type Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-lg bg-[#EDF2EE]">
                {(["Quotation", "Sample"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInquiryType(type)}
                    className={`py-1.5 rounded-md text-xs font-semibold transition-colors ${
                      inquiryType === type
                        ? "bg-[#2B3D32] text-white shadow-sm"
                        : "text-[#3D4740] hover:text-[#1C2921]"
                    }`}
                  >
                    {type === "Quotation"
                      ? "Bulk Quotation (FCL/LCL)"
                      : "Lab / Trial Sample Request"}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6D7A71] mb-1">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full px-3 py-2 rounded-md border border-[#DCE3DD] bg-[#F7F9F7] text-sm text-[#1C2921] focus:outline-none focus:border-[#7D9985]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6D7A71] mb-1">
                    Company Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Al-Noor Trading LLC"
                    className="w-full px-3 py-2 rounded-md border border-[#DCE3DD] bg-[#F7F9F7] text-sm text-[#1C2921] focus:outline-none focus:border-[#7D9985]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6D7A71] mb-1">
                    Destination Country *
                  </label>
                  <input
                    required
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. UAE, Germany, USA, China"
                    className="w-full px-3 py-2 rounded-md border border-[#DCE3DD] bg-[#F7F9F7] text-sm text-[#1C2921] focus:outline-none focus:border-[#7D9985]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6D7A71] mb-1">
                    Corporate Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="procurement@company.com"
                    className="w-full px-3 py-2 rounded-md border border-[#DCE3DD] bg-[#F7F9F7] text-sm text-[#1C2921] focus:outline-none focus:border-[#7D9985]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6D7A71] mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+971 50 000 0000"
                    className="w-full px-3 py-2 rounded-md border border-[#DCE3DD] bg-[#F7F9F7] text-sm text-[#1C2921] focus:outline-none focus:border-[#7D9985]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6D7A71] mb-1">
                    Commodity *
                  </label>
                  <select
                    value={commodityId}
                    onChange={(e) => setCommodityId(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-[#DCE3DD] bg-[#F7F9F7] text-sm text-[#1C2921] focus:outline-none focus:border-[#7D9985]"
                  >
                    {COMMODITIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.code}. {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6D7A71] mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-[#DCE3DD] bg-[#F7F9F7] text-sm text-[#1C2921] font-mono-tech focus:outline-none focus:border-[#7D9985]"
                  >
                    <option value="Sample (1–5 kg)">Sample (1–5 kg)</option>
                    <option value="MOQ / LCL">MOQ / LCL</option>
                    <option value="1 × 20ft FCL">1 × 20ft FCL</option>
                    <option value="1 × 40ft HQ">1 × 40ft HQ</option>
                    <option value="Recurring Monthly Contract">
                      Recurring Monthly Contract
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6D7A71] mb-1">
                    Shipping Incoterms
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {["FOB", "CIF", "CFR", "EXW"].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setIncoterm(term)}
                        className={`py-2 rounded-md border text-xs font-mono-tech font-semibold transition-colors ${
                          incoterm === term
                            ? "bg-[#7D9985] border-[#7D9985] text-white"
                            : "bg-[#F7F9F7] border-[#DCE3DD] text-[#3D4740] hover:border-[#7D9985]"
                        }`}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6D7A71] mb-1">
                  Specifications / OEM Packaging Notes
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Cube size, PA% target, drum size, or custom branding requirements..."
                  className="w-full px-3 py-2 rounded-md border border-[#DCE3DD] bg-[#F7F9F7] text-sm text-[#1C2921] focus:outline-none focus:border-[#7D9985]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-md border border-[#DCE3DD] text-xs font-medium text-[#3D4740] hover:bg-[#EDF2EE]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-md bg-[#2B3D32] text-white text-xs font-semibold tracking-wide hover:bg-[#1C2921] transition-colors"
                >
                  Submit Export Inquiry →
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
