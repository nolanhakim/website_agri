export type Locale = "EN" | "ID" | "ZH";

export interface CommoditySpec {
  label: string;
  value: string;
}

export interface Commodity {
  id: string;
  code: string;
  name: string;
  botanicalOrType: string;
  variants: string;
  application: string;
  packaging: string;
  hsCode: string;
  image: string;
  specs: CommoditySpec[];
  badge: string;
}

export const COMMODITIES: Commodity[] = [
  {
    id: "briquettes",
    code: "01",
    name: "Coconut Charcoal Briquettes",
    botanicalOrType: "Shisha / Hookah & BBQ Grade",
    variants: "Cube (25/26mm), Hexagonal, Finger",
    application:
      "Premium smokeless & odorless coconut shell briquettes engineered for international shisha lounges and commercial BBQ.",
    packaging: "Custom OEM/ODM: Inner Plastic + Inner Box + Master Carton",
    hsCode: "HS 4402.90",
    image: "/images/briquettes.png",
    badge: "Shisha & BBQ Export",
    specs: [
      { label: "Ash Content", value: "< 2.2%" },
      { label: "Moisture", value: "< 5.0%" },
      { label: "Fixed Carbon", value: "> 80.0%" },
      { label: "Calorific Value", value: "> 7,200 kcal/kg" },
      { label: "Burning Time", value: "2.0 – 2.5 hrs" },
      { label: "Ash Color", value: "White / Light Grey" },
    ],
  },
  {
    id: "patchouli",
    code: "02",
    name: "Patchouli Oil",
    botanicalOrType: "100% Pure Steam-Distilled Pogostemon cablin",
    variants: "Origin: Sulawesi, Sumatera & Jawa",
    application:
      "Base fixative for global fine perfumery, cosmetics, and aromatherapy. Distilled in stainless steel for iron-free clarity.",
    packaging: "HDPE / Galvanized Steel Drum (25, 50, 200 kg) · Aluminum Sample",
    hsCode: "HS 3301.29",
    image: "/images/essential-oils.png",
    badge: "Iron-Free Distilled",
    specs: [
      { label: "Patchouli Alcohol", value: "30% – 34%+" },
      { label: "Distillation", value: "100% Steam / SS" },
      { label: "Appearance", value: "Clear Golden–Dark Brown" },
      { label: "Heavy Metals", value: "Iron-Free" },
      { label: "Refractive Index", value: "1.507 – 1.515" },
      { label: "Specific Gravity", value: "0.950 – 0.975" },
    ],
  },
  {
    id: "clove",
    code: "03",
    name: "Clove Oil",
    botanicalOrType: "Syzygium aromaticum · Bud, Stem & Leaf",
    variants: "Rectified & Crude Fractions",
    application:
      "High-eugenol botanical extract for flavor & fragrance, oral care, food & beverage, and pharmaceutical synthesis.",
    packaging: "25 kg / 200 kg Export Standard Drum",
    hsCode: "HS 3301.29",
    image: "/images/essential-oils.png",
    badge: "Eugenol 78%–88%+",
    specs: [
      { label: "Total Eugenol", value: "78% – 88%+" },
      { label: "Fractions", value: "Bud / Stem / Leaf" },
      { label: "Ethanol Solubility", value: "1:2 in 70% EtOH" },
      { label: "Specific Gravity", value: "1.038 – 1.060" },
    ],
  },
  {
    id: "teak-leaves",
    code: "04",
    name: "Dried Teak Leaves",
    botanicalOrType: "Tectona grandis · Whole Leaf Processed",
    variants: "Grade A (> 35 cm) & Grade B (25–35 cm)",
    application:
      "Eco-friendly natural food wrapping, artisan craft material, and botanical extraction. Mold-free and pest-free.",
    packaging: "Pressed Bales or Moisture-Barrier Corrugated Master Box",
    hsCode: "HS 1404.90",
    image: "/images/teak-timber.png",
    badge: "Eco-Packaging Grade",
    specs: [
      { label: "Grade A Size", value: "> 35 cm Whole" },
      { label: "Grade B Size", value: "25 – 35 cm Whole" },
      { label: "Moisture Content", value: "< 10.0%" },
      { label: "Drying Process", value: "Sun / Oven-Dried" },
    ],
  },
  {
    id: "timber",
    code: "05",
    name: "Timber & Wood Products",
    botanicalOrType: "Teak, Mahogany & Legal Tropical Hardwoods",
    variants: "Logs, Sawn Timber (RST), Decking & Flooring",
    application:
      "Precision kiln-dried Indonesian hardwoods for architectural millwork, outdoor decking, and fine furniture manufacturing.",
    packaging: "Bundled & Strapped Export Pallets / Containerized",
    hsCode: "HS 4407.29",
    image: "/images/teak-timber.png",
    badge: "SVLK Legal Certified",
    specs: [
      { label: "Kiln Dried (KD)", value: "10% – 12% MC" },
      { label: "Quality Grades", value: "Grade A / B / C" },
      { label: "Legality", value: "SVLK Verified" },
      { label: "Dimensions", value: "Standard & Custom" },
    ],
  },
];

export const COMPLIANCE_DOCS = [
  {
    code: "COA",
    title: "Certificate of Analysis",
    desc: "Batch-specific GC-MS & proximate lab report verifying purity, moisture, ash, and active compounds.",
  },
  {
    code: "MSDS",
    title: "Material Safety Data Sheet",
    desc: "International maritime & air-freight safety documentation for essential oils and charcoal.",
  },
  {
    code: "SVLK",
    title: "Timber Legality Verification",
    desc: "Mandatory Indonesian FLEGT/V-Legal compliance ensuring 100% traceable legal wood.",
  },
  {
    code: "PHYTO",
    title: "Phytosanitary Certificate",
    desc: "Official quarantine clearance certifying dried teak leaves and timber are pest & mold-free.",
  },
  {
    code: "COO",
    title: "Certificate of Origin",
    desc: "Form E / Form A / Non-Preferential COO for customs tariff optimization at destination.",
  },
  {
    code: "B/L",
    title: "Bill of Lading & Packing List",
    desc: "Complete FOB, CIF, CFR, or EXW commercial invoice & shipping documentation.",
  },
];

export const CONTAINER_PRESETS = [
  {
    id: "briquettes-box",
    label: "Coconut Charcoal Briquettes (10 kg Master Box)",
    unitName: "Master Boxes",
    fcl20Units: 1850,
    fcl20Tons: 18.5,
    hq40Units: 2650,
    hq40Tons: 26.5,
    port: "Tanjung Perak / Tanjung Priok",
  },
  {
    id: "essential-oil-drum",
    label: "Patchouli / Clove Oil (200 kg Steel Drum)",
    unitName: "Export Drums",
    fcl20Units: 80,
    fcl20Tons: 16.0,
    hq40Units: 120,
    hq40Tons: 24.0,
    port: "Tanjung Priok / Tanjung Emas",
  },
  {
    id: "teak-leaves-bale",
    label: "Dried Teak Leaves (25 kg Pressed Bales)",
    unitName: "Pressed Bales",
    fcl20Units: 440,
    fcl20Tons: 11.0,
    hq40Units: 920,
    hq40Tons: 23.0,
    port: "Tanjung Emas (Semarang)",
  },
  {
    id: "timber-kd",
    label: "SVLK Kiln-Dried Teak Sawn Timber (m³)",
    unitName: "Cubic Meters (m³)",
    fcl20Units: 22,
    fcl20Tons: 16.5,
    hq40Units: 46,
    hq40Tons: 34.5,
    port: "Tanjung Emas / Tanjung Perak",
  },
];

export const CHAPTERS = [
  { label: "Cover", spreadIndex: 0, pageRange: "01" },
  { label: "About", spreadIndex: 1, pageRange: "02–03" },
  { label: "Numbers", spreadIndex: 2, pageRange: "04–05" },
  { label: "Briquettes & Patchouli", spreadIndex: 3, pageRange: "06–07" },
  { label: "Clove, Teak & Timber", spreadIndex: 4, pageRange: "08–09" },
  { label: "Compliance & Calc", spreadIndex: 5, pageRange: "10–11" },
  { label: "Back Cover", spreadIndex: 6, pageRange: "12" },
];

export const LOCALE_COPY: Record<
  Locale,
  {
    tagline: string;
    heroHeadline: string;
    openMagazine: string;
    requestQuote: string;
    hintTitle: string;
    hintBody: string;
  }
> = {
  EN: {
    tagline: "High Quality Indonesian Natural Resources",
    heroHeadline: "Crafting Indonesia's Natural Resources for the World",
    openMagazine: "Open Issue 01",
    requestQuote: "Request Quote",
    hintTitle: "Click or drag a page to turn it, or use the arrows below.",
    hintBody: "Click any commodity, calculator, or CTA inside the magazine to explore.",
  },
  ID: {
    tagline: "Sumber Daya Alam Indonesia Berkualitas Tinggi",
    heroHeadline: "Menghadirkan Sumber Daya Alam Indonesia untuk Dunia",
    openMagazine: "Buka Edisi 01",
    requestQuote: "Minta Penawaran",
    hintTitle: "Klik atau geser halaman untuk membalik, atau gunakan panah di bawah.",
    hintBody: "Klik komoditas, kalkulator, atau tombol di dalam majalah untuk menjelajah.",
  },
  ZH: {
    tagline: "高品质印尼天然资源",
    heroHeadline: "为全球市场精制印度尼西亚天然资源",
    openMagazine: "翻开第 01 期",
    requestQuote: "申请报价",
    hintTitle: "点击或拖动页面翻页，或使用下方箭头。",
    hintBody: "点击杂志内的任意商品、计算器或按钮即可互动。",
  },
};
