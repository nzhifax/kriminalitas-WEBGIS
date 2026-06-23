import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crime Atlas — Spatial Intelligence for Urban Safety" },
      {
        name: "description",
        content:
          "An interactive geospatial platform for understanding crime distribution, hotspots, and urban safety patterns through maps and data.",
      },
      {
        property: "og:title",
        content: "Crime Atlas",
      },
      {
        property: "og:description",
        content:
          "Spatial intelligence platform for crime distribution, hotspots, and urban safety patterns.",
      },
    ],
  }),
  component: CrimeAtlas,
});

const RED = "#D62828";

function CrimeAtlas() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <MapSection />
      <TemporalAnalysis />
      <CategoriesSection />
      <RiskDistribution />
      <Methodology />
      <About />
      <Footer />
    </main>
  );
}

/* ---------------- Navigation ---------------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b hairline bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-2">
          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: RED }}
            aria-hidden
          />
          <span className="text-display text-[15px] font-medium tracking-tight">
            Crime Atlas
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-[13px] text-[var(--ink-soft)] md:flex">
          <a href="#map" className="hover:text-foreground">Map</a>
          <a href="#spatial" className="hover:text-foreground">Spatial</a>
          <a href="#temporal" className="hover:text-foreground">Temporal</a>
          <a href="#methodology" className="hover:text-foreground">Methodology</a>
          <a href="#about" className="hover:text-foreground">About</a>
        </nav>
        <a
          href="#map"
          className="rounded-md bg-foreground px-3.5 py-1.5 text-[12.5px] font-medium text-background transition hover:opacity-90"
        >
          Open Atlas
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="border-b hairline">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border hairline bg-[var(--surface-1)] px-3 py-1 text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]"
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: RED }}
            />
            Spatial Intelligence · v2025
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-display text-[clamp(3rem,6.5vw,5.75rem)] text-foreground"
          >
            Crime <span style={{ color: RED }}>Atlas.</span>
            <br />
            <span className="text-[var(--ink-soft)]">Mapped with intent.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-xl text-[16px] leading-[1.65] text-[var(--ink-mute)]"
          >
            A spatial intelligence platform for understanding crime distribution,
            hotspot locations, and urban safety patterns — through interactive
            mapping and data visualization.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#map"
              className="rounded-md bg-foreground px-5 py-3 text-[13.5px] font-medium text-background transition hover:opacity-90"
            >
              Explore Map →
            </a>
            <a
              href="#spatial"
              className="rounded-md border hairline bg-background px-5 py-3 text-[13.5px] font-medium text-foreground transition hover:bg-[var(--surface-1)]"
            >
              View Analysis
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative h-[440px] overflow-hidden rounded-xl border hairline bg-[var(--surface-1)] lg:h-[560px]"
        >
        <iframe
          src="https://your-carto-url"
          className="h-full w-full border-0"
          loading="lazy"
        />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 rounded-md border hairline bg-white/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)] backdrop-blur">
            Live preview
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-md border hairline bg-white/85 px-3 py-2 text-[11.5px] text-[var(--ink-soft)] backdrop-blur">
            <span>area kajian - kabupaten kudus </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: RED }} />
              CARTO basemap
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */

// function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });
//   const mv = useMotionValue(0);
//   const spring = useSpring(mv, { stiffness: 60, damping: 18 });
//   const rounded = useTransform(spring, (v) => Math.round(v).toLocaleString());
//   useEffect(() => {
//     if (inView) mv.set(value);
//   }, [inView, mv, value]);
//   return (
//     <span ref={ref}>
//       <motion.span>{rounded}</motion.span>
//       {suffix}
//     </span>
//   );
// }

// function Stats() {
//   const items = [
//     { label: "Total Cases", value: STATS.totalCases },
//     { label: "Crime Categories", value: STATS.categories },
//     { label: "High Risk Areas", value: STATS.highRisk },
//     { label: "Data Coverage", value: STATS.coverage, suffix: "%" },
//   ];
//   return (
//     <section className="border-b hairline">
//       <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px overflow-hidden bg-[var(--hairline)] lg:grid-cols-4">
//         {items.map((it) => (
//           <div key={it.label} className="bg-background p-8 lg:p-10">
//             <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
//               {it.label}
//             </div>
//             <div className="text-display mt-4 text-[44px] leading-none text-foreground lg:text-[56px]">
//               <Counter value={it.value} suffix={it.suffix} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

/* ---------------- Interactive Map Section ---------------- */

function MapSection() {
  return (
    <section id="map" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 pb-6 pt-20 lg:px-10 lg:pt-28">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
              Interactive · 01
            </div>

            <h2 className="text-display mt-3 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)]">
              Where crime concentrates.
            </h2>
          </div>

          <p className="max-w-md text-[14.5px] leading-[1.65] text-[var(--ink-mute)]">
            Explore crime patterns directly through the CARTO dashboard.
            Spatial filters, legends, and analysis tools are provided within
            the interactive map.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="relative mx-auto h-[640px] max-w-[1400px] overflow-hidden border-y hairline rounded-xl lg:h-[720px]">
          <iframe
            src="LINK_CARTO_MAP"
            title="Crime Atlas Dashboard"
            loading="lazy"
            className="h-full w-full border-0"
          />

          {/* Top label */}
          <div className="absolute left-6 top-6 rounded-md border hairline bg-white/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)] backdrop-blur">
            Interactive Dashboard
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-md border hairline bg-white/85 px-4 py-3 text-[11.5px] text-[var(--ink-soft)] backdrop-blur">
            <span>CARTO Analytics Platform</span>

            <span className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: RED }}
              />
              Live Spatial Analysis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Temporal Analysis ---------------- */

function TemporalAnalysis() {
  return (
    <section id="temporal" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
          Temporal · 03
        </div>

        <h2 className="text-display mt-3 max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)]">
          When crime happens.
        </h2>

        <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-[var(--ink-mute)]">
          Temporal patterns and yearly crime trends are explored directly
          through the CARTO analytical dashboard.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 h-[420px] overflow-hidden rounded-xl border hairline bg-[var(--surface-1)]"
        >
          <iframe
            src="LINK_CARTO_TEMPORAL_CHART"
            title="Temporal Analysis"
            loading="lazy"
            className="h-full w-full border-0"
          />

          <div className="absolute left-4 top-4 rounded-md border hairline bg-white/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)] backdrop-blur">
            Temporal Trends
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Categories ---------------- */

function CategoriesSection() {
  return (
    <section className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
          Categories · 04
        </div>

        <h2 className="text-display mt-3 max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)]">
          The shape of risk.
        </h2>

        <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-[var(--ink-mute)]">
          Crime categories and their relative contribution to overall risk
          are explored through interactive CARTO visualizations.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 h-[480px] overflow-hidden rounded-xl border hairline bg-[var(--surface-1)]"
        >
          <iframe
            src="LINK_CARTO_CATEGORY_CHART"
            title="Crime Categories"
            loading="lazy"
            className="h-full w-full border-0"
          />

          <div className="absolute left-4 top-4 rounded-md border hairline bg-white/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)] backdrop-blur">
            Category Distribution
          </div>

          <div className="absolute bottom-4 left-4 rounded-md border hairline bg-white/85 px-3 py-2 text-[11.5px] text-[var(--ink-soft)] backdrop-blur">
            Interactive CARTO Chart
          </div>
        </motion.div>
      </div>
    </section>
  );
}
/* ---------------- Risk Distribution (hex map) ---------------- */

function RiskDistribution() {
  return (
    <section className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
          Risk Index · 05
        </div>

        <h2 className="text-display mt-3 max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)]">
          Crime Risk Index.
        </h2>

        <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-[var(--ink-mute)]">
          Risk aggregation and spatial intensity mapping are computed directly
          in CARTO using hexbin / density analysis layers.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 h-[520px] overflow-hidden rounded-xl border hairline bg-[var(--surface-1)]"
        >
          <iframe
            src="LINK_CARTO_RISK_MAP"
            title="Risk Index Map"
            loading="lazy"
            className="h-full w-full border-0"
          />

          {/* Label top */}
          <div className="absolute left-4 top-4 rounded-md border hairline bg-white/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)] backdrop-blur">
            Hex / Heat Analysis
          </div>

          {/* Legend bottom */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-md border hairline bg-white/85 px-4 py-2 text-[11.5px] text-[var(--ink-soft)] backdrop-blur">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              High
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gray-400" />
              Medium
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gray-200" />
              Low
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Methodology ---------------- */

function Methodology() {
  const steps = [
    { n: "01", t: "Data Collection", d: "Aggregated incident reports & open datasets." },
    { n: "02", t: "Spatial Processing", d: "Geocoding, projection, and de-duplication." },
    { n: "03", t: "CARTO Analysis", d: "Tile-based aggregation and basemap serving." },
    { n: "04", t: "Hotspot Detection", d: "Kernel density estimation across 600+ points." },
    { n: "05", t: "Visualization", d: "Layer rendering with Leaflet and Recharts." },
    { n: "06", t: "Crime Insights", d: "Patterns surfaced for analysts and citizens." },
  ];
  return (
    <section id="methodology" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
          Methodology · 06
        </div>
        <h2 className="text-display mt-3 max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)]">
          From points to patterns.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border hairline bg-[var(--hairline)] md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-background p-8 lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
                  Step {s.n}
                </span>
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: i === steps.length - 1 ? RED : "#cfcfcf" }}
                />
              </div>
              <h3 className="text-display mt-6 text-[24px] text-foreground">
                {s.t}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.65] text-[var(--ink-mute)]">
                {s.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section id="about" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
              About
            </div>
            <h2 className="text-display mt-3 text-[clamp(2rem,4vw,3.25rem)]">
              Safer cities, told through data.
            </h2>
          </div>
          <div className="space-y-6 text-[15.5px] leading-[1.75] text-[var(--ink-soft)]">
            <p>
              Crime Atlas is an independent geospatial research project that
              treats urban safety as a design problem. We combine modern
              cartography with rigorous spatial analysis to make complex
              datasets legible to anyone.
            </p>
            <p>
              The platform is open, reproducible, and built entirely in the
              browser — no proprietary GIS, no walled gardens.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Crime Mapping", "Spatial Intelligence", "Urban Safety", "Geospatial Analysis"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border hairline bg-[var(--surface-1)] px-3 py-1 text-[12px] text-[var(--ink-soft)]"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center gap-2">
          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: RED }}
          />
          <span className="text-display text-[14px] font-medium">
            Crime Atlas
          </span>
          <span className="ml-3 text-[12px] text-[var(--ink-mute)]">
            © {new Date().getFullYear()}
          </span>
        </div>
        <nav className="flex flex-wrap gap-6 text-[13px] text-[var(--ink-soft)]">
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#methodology" className="hover:text-foreground">Methodology</a>
          <a href="#" className="hover:text-foreground">Data Sources</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
