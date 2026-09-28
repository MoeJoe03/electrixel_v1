export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  role?: string;
  deliverablesType?: string;
  year?: string;
  location?: string;
  src: string;
  alt: string;
  gallery: string[];
  services: string[];
  technologies: string[];
  executiveSummary?: string;
  deliverableSummary?: string;
  overview: string;
  challenge: string;
  solution: string;
  keyDeliverables: string[];
  metrics?: ProjectMetric[];
  href?: string;
}

export const projects: Project[] = [
  {
    id: "saiiiw",
    title: "SAIIIW",
    subtitle:
      "A compassionate, responsive digital platform connecting individuals with Islamically integrated counselling, faith-aligned therapy modalities, and holistic mental wellness care.",
    category: "Islamic Mental Health & Wellness",
    client: "SAIIIW Mental Health Practice",
    role: "Lead UX Engineer & Systems Architect",
    deliverablesType: "Interactive Web Platform",
    year: "2024",
    location: "Johannesburg, South Africa",
    href: "https://saiiiw.co.za/",
    src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/saiiiw/image_!.jpeg",
    alt: "SAIIIW Islamic Mental Health Platform",
    gallery: [
      "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/saiiiw/image_!.jpeg",
    ],
    services: [
      "Mental Health UX/UI Design",
      "Confidential Booking Architecture",
      "Psychoeducation Content System",
      "Specialized Therapy Pathways",
      "Mobile-First Responsive Engineering",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
    executiveSummary:
      "A compassionate, responsive digital platform connecting individuals with Islamically integrated counselling, faith-aligned therapy modalities, and holistic mental wellness care.",
    overview:
      "A compassionate, responsive digital platform connecting individuals with Islamically integrated counselling, faith-aligned therapy modalities, and holistic mental wellness care. Electrixel developed a serene, welcoming online space that bridges professional psychological support with faith-congruent counseling pathways for clients seeking confidential, values-aligned healing.",
    challenge:
      "Individuals seeking faith-grounded psychological support often face barriers of stigma, uncertainty about clinical qualifications, and anxiety around booking sensitive mental health consultations through complex, clinical web forms.",
    solution:
      "We created an accessible, calming digital sanctuary with dedicated specialized care pathways, transparent clinical team profiles and credentials, educational faith-grounded mental health resources, and a gentle, friction-free inquiry and booking flow.",
    deliverableSummary:
      "Responsive interactive web platform for an Islamic mental health practice, including:",
    keyDeliverables: [
      "Streamlined client booking and consultation inquiry flow",
      "Specialized service pathways (individual, couples, youth counselling)",
      "Clinical team profiles, credentials, and practice philosophy",
      "Faith-grounded mental health psychoeducation & articles",
      "Accessible, calming aesthetic with responsive mobile-first design",
    ],
  },
  {
    id: "sunshine-thai-massage",
    title: "SUNSHINE THAI MASSAGE",
    subtitle:
      "Luxury Spa & Wellness Experiences for Rest, Renewal, and Balance. An inviting, calming digital experience created to showcase holistic therapies and facilitate seamless appointment bookings.",
    category: "Luxury Spa & Wellness",
    client: "Sunshine Thai Massage",
    role: "Full-Stack Web Developer & UI Designer",
    deliverablesType: "Responsive Spa Platform & Booking Engine",
    year: "2024",
    location: "Rosebank, Johannesburg",
    href: "https://sunshinethaimassage.co.za/",
    src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/sunshine/website_development_johannesburg_spa_website.jpeg",
    alt: "Sunshine Thai Massage Spa Website",
    gallery: [
      "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/sunshine/website_development_johannesburg_spa_website.jpeg",
    ],
    services: [
      "Spa Web Design & Branding",
      "Treatment Menu Architecture",
      "Promotional Specials System",
      "Appointment Booking Flow",
      "Mobile-Friendly Layout",
    ],
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Router",
      "Vercel Deployment",
    ],
    executiveSummary:
      "Luxury Spa & Wellness Experiences for Rest, Renewal, and Balance. An inviting, calming digital experience created to showcase holistic therapies and facilitate seamless appointment bookings.",
    overview:
      "Luxury Spa & Wellness Experiences for Rest, Renewal, and Balance. An inviting, calming digital experience created to showcase holistic therapies and facilitate seamless appointment bookings. Electrixel transformed their online presence into an automated, serene booking channel that mirrors the calmness and warmth of their physical sanctuary.",
    challenge:
      "The client relied on manual inquiries and fragmented messaging to book appointments, leading to scheduling delays and missed reservations from visitors browsing on mobile devices.",
    solution:
      "We engineered a responsive spa and wellness platform combining serene aesthetics with structured treatment offerings, highlighted promotional specials, transparent pricing, and effortless appointment booking call-to-actions.",
    deliverableSummary:
      "A responsive spa and wellness website designed to showcase services, pricing, monthly specials, and appointment booking. The project includes:",
    keyDeliverables: [
      "Hero section and brand storytelling",
      "Treatment offerings and service highlights",
      "Promotional special cards",
      "Pricing and contact sections",
      "Book appointment CTA and mobile-friendly layout",
    ],
  },
  {
    id: "pat-press",
    title: "PAT PRESS",
    subtitle:
      "Modern Print Studio Website for Branding, Design, and Creative Production. Built with high tactile precision to showcase premium paper stocks, finishes, and conversion-focused creative inquiries.",
    category: "Branding, Design & Creative Production",
    client: "Pat Press Studio",
    role: "Creative Technologist & Web Developer",
    deliverablesType: "Commercial Print Studio Website",
    year: "2024",
    location: "Johannesburg, South Africa",
    href: "https://patpress.co.za/",
    src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/pat%20press/web_design_johannesburg_print_shop.jpeg",
    alt: "Pat Press Commercial Printing Web Platform",
    gallery: [
      "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/pat%20press/web_design_johannesburg_print_shop.jpeg",
    ],
    services: [
      "Brand Positioning & Strategy",
      "Tactile Print Portfolio Showcase",
      "Services & Capabilities Architecture",
      "Customer Testimonials System",
      "Conversion-Focused Inquiries",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide React",
      "ESLint",
      "PostCSS / Autoprefixer",
    ],
    executiveSummary:
      "Modern Print Studio Website for Branding, Design, and Creative Production. Built with high tactile precision to showcase premium paper stocks, finishes, and conversion-focused creative inquiries.",
    overview:
      "Modern Print Studio Website for Branding, Design, and Creative Production. Built with high tactile precision to showcase premium paper stocks, finishes, and conversion-focused creative inquiries. Electrixel delivered a sharp, tactile digital experience crafted to elevate the studio's brand positioning and drive high-intent print and design contracts.",
    challenge:
      "Commercial print options involve delicate paper weights, textures, lamination, and finishes. Customers frequently struggled to visualize materials online, delaying inquiry turnarounds.",
    solution:
      "We engineered a responsive, conversion-focused business website featuring an impactful hero section, dynamic portfolio showcase, authentic client testimonials, and a frictionless inquiry call-to-action.",
    deliverableSummary:
      "A responsive, conversion-focused business website for a print and design studio, featuring:",
    keyDeliverables: [
      "Hero section and brand positioning",
      "Services overview",
      "Portfolio/gallery showcase",
      "Customer testimonials",
      "About section",
      "Contact and inquiry call-to-action",
    ],
  },
  {
    id: "movex",
    title: "MOVEX",
    subtitle:
      "Complete digital identity re-architecture, bespoke variable typography, and an interactive 3D tour of hand-finished tourbillon escapements for a Swiss independent micro-manufacture.",
    category: "Haute Horlogerie & Interactive 3D",
    client: "Movex Micro-Manufacture",
    role: "3D WebGL Developer & Creative Technologist",
    deliverablesType: "Interactive 3D Movement Explorer & Portal",
    year: "2025",
    location: "Geneva, Switzerland / Global",
    href: "https://movex-concept.vercel.app/",
    src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/movex/website_design_jhb_logistics_company_web_development.jpeg",
    alt: "Movex Interactive 3D Watchmaking Experience",
    gallery: [
      "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/movex/website_design_jhb_logistics_company_web_development.jpeg",
    ],
    services: [
      "Digital Identity Re-Architecture",
      "Interactive 3D Movement Engine",
      "Bespoke Variable Typography",
      "Exploded Component Inspection",
      "Private Client Allocation Portal",
    ],
    technologies: [
      "Next.js",
      "Three.js",
      "WebGL Shaders",
      "Variable Typography",
      "Tailwind CSS",
    ],
    executiveSummary:
      "Complete digital identity re-architecture, bespoke variable typography, and an interactive 3D tour of hand-finished tourbillon escapements for a Swiss independent micro-manufacture.",
    overview:
      "Complete digital identity re-architecture, bespoke variable typography, and an interactive 3D tour of hand-finished tourbillon escapements for a Swiss independent micro-manufacture. Electrixel merged haute horlogerie craftsmanship with real-time WebGL graphics to create an exploded mechanical inspection tour for private collectors.",
    challenge:
      "Conveying the microscopic tolerances, hand-chamfered anglage, and tourbillon escapement mechanics of an independent Swiss micro-manufacture through a web browser with zero lag and exceptional visual fidelity.",
    solution:
      "We engineered a real-time Three.js and custom WebGL shader pipeline featuring an interactive exploded movement inspector, a bespoke variable typography system, and an exclusive allocation portal tailored for high-net-worth clients.",
    deliverableSummary:
      "Interactive 3D mechanical movement explorer with exploded component inspection, bespoke typography system, private client allocation portal, and tactile packaging finish guidelines.",
    keyDeliverables: [
      "Interactive 3D mechanical movement explorer with exploded component inspection",
      "Bespoke typography system",
      "Private client allocation portal",
      "Tactile packaging finish guidelines",
    ],
  },
  {
    id: "aurelia-home",
    title: "AURELIA HOME",
    subtitle:
      "Curated luxury furniture and interiors for refined living. A boutique digital flagship engineered to evoke high-end editorial calm with modern conversion-focused architectural UX.",
    category: "Luxury Furniture & Interior Flagship",
    client: "Aurelia Home",
    role: "Lead Creative Developer & E-Commerce Architect",
    deliverablesType: "Production Concept",
    year: "2025",
    location: "Sandton, Johannesburg",
    href: "https://auriela-home-concept.vercel.app/",
    src: "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/aurelia/website_jhb_furniture_site_.jpeg",
    alt: "Aurelia Home Curated Luxury Furniture",
    gallery: [
      "https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/aurelia/website_jhb_furniture_site_.jpeg",
    ],
    services: [
      "Editorial Landing Page & UX",
      "Category-Based Collection Browsing",
      "Curated Product Listings System",
      "Shopping Cart & Checkout Flow",
      "Boutique Luxury E-Commerce",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostCSS",
      "Lucide React",
      "Motion",
    ],
    executiveSummary:
      "Curated luxury furniture and interiors for refined living. A boutique digital flagship engineered to evoke high-end editorial calm with modern conversion-focused architectural UX.",
    overview:
      "Curated luxury furniture and interiors for refined living. A boutique digital flagship engineered to evoke high-end editorial calm with modern conversion-focused architectural UX. Electrixel translated Aurelia Home's artisanal collections into a museum-grade digital flagship combining editorial serenity with high-converting e-commerce architecture.",
    challenge:
      "Conveying the tactile refinement, scale, and high-ticket craftsmanship of bespoke furniture and luxury home décor online while providing an effortless, seamless cart and checkout flow.",
    solution:
      "We engineered an immersive editorial landing page paired with intuitive category-based navigation (rugs, curtains, lighting, furniture), high-fidelity product showcases, and a streamlined shopping cart and checkout pipeline.",
    deliverableSummary:
      "A premium e-commerce storefront and brand experience for a luxury home décor business, featuring:",
    keyDeliverables: [
      "Immersive hero section and editorial-style landing page",
      "Category-based browsing for rugs, curtains, lighting, and furniture",
      "Curated product listings and new arrivals",
      "Shopping cart and checkout flow",
      "Responsive design optimized for mobile and desktop",
      "Boutique luxury aesthetic with modern conversion-focused UX",
    ],
  },
];
