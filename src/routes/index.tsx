import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence  } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KRIMATLAS" },
      {
        name: "description",
        content:
          "An interactive geospatial platform for understanding crime distribution, hotspots, and urban safety patterns through maps and data.",
      },
      {
        property: "og:title",
        content: "KRIMATLAS",
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
      <Introduction />
      <Methodology />
      <MapSection />
      <Results />
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
            KRIMATLAS
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-[13px] text-[var(--ink-soft)] md:flex">
          <a href="#introduction" className="hover:text-foreground">introduction</a>
          <a href="#methodology" className="hover:text-foreground">Methodology</a>
          <a href="#analisysmap" className="hover:text-foreground">Map</a>
          <a href="#results" className="hover:text-foreground">Result</a>
          <a href="#about" className="hover:text-foreground">About</a>
        </nav>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="https://forms.gle/xxxxxxxxxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-foreground px-3.5 py-1.5 text-[12.5px] font-medium text-background transition hover:opacity-90"
          >
            Isi Formulir
          </a>

          <a
            href="#analisysmap"
            className="rounded-md bg-foreground px-3.5 py-1.5 text-[12.5px] font-medium text-background transition hover:opacity-90"
          >
            Buka Peta
          </a>
        </div>
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
            Crime Spatial Analysis · KDE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-display text-[clamp(3rem,6.5vw,5.75rem)] text-foreground"
          >
            KRIM<span style={{ color: RED }}>ATLAS.</span>
<span className="block mt-3 text-[28px]  font-normal leading-relaxed tracking-wide text-[var(--ink-soft)]">
  Crime Risk Mapping & Spatial Analysis
</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-xl text-[16px] leading-[1.65] text-[var(--ink-mute)]"
          >
            Mengidentifikasi kawasan rawan kriminalitas
            di Kabupaten Kudus menggunakan metode
            Kernel Density Estimation (KDE).
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

/* ---------------- Introduction Section ---------------- */

function Introduction() {
  return (
    <section id="introduction" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
              Introduction · 01
            </div>

            <h2 className="text-display mt-3 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)]">
              Analisis Kawasan Rawan Kriminalitas di Kabupaten Kudus.
            </h2>
          </div>

          <p className="max-w-md text-[14.5px] leading-[1.65] text-[var(--ink-mute)]">
            KRIMATLAS merupakan web map interaktif yang dikembangkan untuk
            memvisualisasikan kawasan rawan kriminalitas di Kabupaten Kudus
            menggunakan metode Kernel Density Estimation (KDE).
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border hairline p-6">
            <div className="mb-3 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
              Latar Belakang
            </div>

            <p className="text-[14px] leading-[1.8] text-[var(--ink-soft)]">
              Kriminalitas merupakan permasalahan yang dapat memengaruhi
              keamanan, ketertiban, dan kualitas hidup masyarakat. Analisis
              spasial diperlukan untuk mengidentifikasi lokasi yang memiliki
              konsentrasi kejadian kriminalitas tinggi.
            </p>
          </div>

          <div className="rounded-xl border hairline p-6">
            <div className="mb-3 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
              Tujuan Penelitian
            </div>

            <p className="text-[14px] leading-[1.8] text-[var(--ink-soft)]">
              Menganalisis pola spasial kawasan rawan kriminalitas menggunakan
              metode KDE, mengevaluasi kemampuan prediktif hotspot dengan PAI,
              serta menyajikan hasil analisis melalui web map interaktif.
            </p>
          </div>

          <div className="rounded-xl border hairline p-6">
            <div className="mb-3 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
              Metodologi
            </div>

            <p className="text-[14px] leading-[1.8] text-[var(--ink-soft)]">
              Kernel Density Estimation (KDE) digunakan untuk menghasilkan
              permukaan kepadatan kriminalitas sehingga hotspot dapat
              diidentifikasi dan divisualisasikan secara spasial di wilayah
              Kabupaten Kudus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Methodology ---------------- */

function Methodology() {
  const [selectedStep, setSelectedStep] = useState<any>(null);

  const steps = [
  {
    n: "01",
    t: "Pengumpulan & Klasifikasi Data",
    d: "Data laporan polisi diklasifikasikan berdasarkan ICCS.",
    detail:
      "Data penelitian diperoleh dari Laporan Polisi Polres Kudus periode Juni 2021–Mei 2026. Setiap kejadian diklasifikasikan berdasarkan International Classification of Crime for Statistical Purposes (ICCS) sehingga diperoleh kelompok dan jenis kejahatan yang terstandarisasi. Tahap ini menghasilkan basis data kriminalitas yang siap digunakan untuk analisis spasial.",
    image: "/src/public/images/md1.png",
      visual: "Diagram distribusi kelompok dan jenis kejahatan"
  },

  {
    n: "02",
    t: "Geocoding TKP",
    d: "Konversi lokasi kejadian menjadi koordinat geografis.",
    detail:
      "Informasi lokasi pada setiap laporan polisi dikonversi menjadi koordinat geografis melalui proses geocoding. Hasil proses ini berupa data titik kriminalitas yang merepresentasikan lokasi kejadian di lapangan. Data titik selanjutnya digunakan sebagai dasar seluruh analisis spasial.",
    image: "/src/public/images/md1.png",
      visual: "Alamat LP → Koordinat → Titik pada Peta"
  },

  {
    n: "03",
    t: "Analisis Spasial",
    d: "Identifikasi hotspot dan karakteristik spasial kriminalitas.",
    detail:
      "Pola persebaran kriminalitas dianalisis menggunakan Kernel Density Estimation (KDE) untuk mengidentifikasi hotspot kriminalitas. Selain itu dilakukan analisis kepadatan permukiman dan jarak kejadian kriminalitas terhadap jaringan jalan arteri maupun kolektor untuk memahami hubungan antara kriminalitas dan kondisi lingkungan.",
    image: "/src/public/images/md1.png",
      visual: "Peta Hotspot KDE"
  },

  {
    n: "04",
    t: "Evaluasi PAI",
    d: "Pengujian kemampuan prediktif hotspot kriminalitas.",
    detail:
      "Hotspot kriminalitas dievaluasi menggunakan Predictive Accuracy Index (PAI). Evaluasi dilakukan dengan membandingkan hotspot periode Juni 2021–Mei 2025 terhadap data kejadian kriminalitas periode Juni 2025–Mei 2026 untuk mengetahui kemampuan prediksi hotspot.",
    image: "/src/public/images/md1.png",
      visual: "Hotspot + Titik Kriminalitas Tahun Berikutnya"
  },

  {
    n: "05",
    t: "Integrasi Hasil",
    d: "Visualisasi hasil analisis pada platform KRIMATLAS.",
    detail:
      "Seluruh hasil analisis diintegrasikan ke dalam platform CARTO untuk membangun webmap kriminalitas Kabupaten Kudus. Peta interaktif dilengkapi layer hotspot kriminalitas, tingkat kerawanan per desa, karakteristik spasial, serta dashboard statistik yang dapat dieksplorasi pengguna.",
    image: "/src/public/images/md1.png",
      visual: "Dashboard KRIMATLAS"
  },

  {
    n: "06",
    t: "Evaluasi Usabilitas",
    d: "Pengujian kemudahan penggunaan webmap.",
    detail:
      "Webmap yang telah dikembangkan dievaluasi menggunakan kuesioner berbasis lima aspek usabilitas (5Es), yaitu Effective, Efficient, Engaging, Error Tolerant, dan Easy to Learn. Hasil evaluasi digunakan untuk menilai kualitas penggunaan sistem.",
    image: "/src/public/images/md1.png",
      visual: "Diagram Hasil Evaluasi 5Es"
  }
  ];

  return (
    <section id="methodology" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
          Methodology · 02
        </div>

        <h2 className="text-display mt-3 max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)]">
          Alur Analisis Kawasan Rawan Kriminalitas
        </h2>

        <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[var(--ink-mute)]">
          Penelitian ini menggunakan pendekatan analisis spasial berbasis
          Kernel Density Estimation (KDE) untuk mengidentifikasi hotspot
          kriminalitas di Kabupaten Kudus, mengevaluasi kemampuan prediktif
          menggunakan Predictive Accuracy Index (PAI), dan menyajikannya
          melalui platform KRIMATLAS.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border hairline bg-[var(--hairline)] md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => setSelectedStep(s)}
              className="cursor-pointer bg-background p-8 transition-all hover:bg-gray-50 lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
                  Tahap {s.n}
                </span>

                <span className="text-xl">→</span>
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

      {/* Modal */}
      <AnimatePresence>
        {selectedStep && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStep(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b p-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-gray-500">
                    Tahap {selectedStep.n}
                  </div>

                  <h3 className="mt-1 text-3xl font-semibold">
                    {selectedStep.t}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedStep(null)}
                  className="text-3xl text-gray-400 transition hover:text-black"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="grid gap-8 p-6 lg:grid-cols-2">

                {/* Visual */}
                <div>
                  <img
                    src={selectedStep.image}
                    alt={selectedStep.t}
                    className="w-full rounded-xl border object-cover shadow-sm"
                  />

                  <div className="mt-4 rounded-lg bg-gray-50 p-4">
                    <div className="text-xs uppercase tracking-wider text-gray-500">
                      Visual Output
                    </div>

                    <p className="mt-2 text-sm text-gray-700">
                      {selectedStep.visual}
                    </p>
                  </div>
                </div>

                {/* Penjelasan */}
                <div>
                  <div className="rounded-xl border p-6">
                    <h4 className="text-lg font-medium">
                      Deskripsi Tahapan
                    </h4>

                    <p className="mt-4 leading-8 text-gray-600">
                      {selectedStep.detail}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Interactive Map Section ---------------- */

function MapSection() {
  return (
    <section id="analisysmap" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 pb-6 pt-20 lg:px-10 lg:pt-28">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
              Analysis Map · 03
            </div>

            <h2 className="text-display mt-3 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)]">
              Visualisasi Kawasan Rawan Kriminalitas.
            </h2>
          </div>

          <p className="max-w-md text-[14.5px] leading-[1.65] text-[var(--ink-mute)]">
            Eksplorasi hasil analisis kriminalitas Kabupaten Kudus melalui
            platform KRIMATLAS. Peta interaktif menampilkan hotspot
            kriminalitas, tingkat kerawanan wilayah, karakteristik spasial,
            serta berbagai informasi pendukung untuk mendukung interpretasi
            hasil penelitian.
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

/* ---------------- Results Section ---------------- */

function Results() {
   const [selectedResult, setSelectedResult] = useState<any>(null);
  const results = [
    {
      n: "01",
      t: "Hotspot Kriminalitas",
      d: "Identifikasi kawasan dengan konsentrasi kriminalitas tertinggi menggunakan KDE.",
      image: "/images/results/hotspot-map.png",
      visual: "Peta hotspot kriminalitas hasil Kernel Density Estimation.",
      detail:
        "Hasil analisis KDE menunjukkan bahwa kriminalitas di Kabupaten Kudus tidak tersebar secara merata. Konsentrasi kejadian kriminalitas cenderung terpusat pada wilayah tertentu yang membentuk hotspot dengan tingkat kerawanan tinggi."
    },

    {
      n: "02",
      t: "Karakteristik Spasial",
      d: "Hubungan kriminalitas dengan kepadatan permukiman dan jaringan jalan.",
      image: "/images/results/spatial-characteristics.png",
      visual:
        "Diagram kepadatan permukiman dan jarak terhadap jalan arteri/kolektor.",
      detail:
        "Sebagian besar kejadian kriminalitas ditemukan pada wilayah dengan kepadatan permukiman sedang hingga tinggi. Selain itu, kejadian kriminalitas cenderung berada pada lokasi yang berdekatan dengan jaringan jalan utama."
    },

    {
      n: "03",
      t: "Evaluasi PAI",
      d: "Pengujian kemampuan prediktif hotspot kriminalitas.",
      image: "/images/results/pai-evaluation.png",
      visual:
        "Overlay hotspot dengan data kriminalitas periode pengujian.",
      detail:
        "Predictive Accuracy Index (PAI) digunakan untuk mengevaluasi efektivitas hotspot dalam memprediksi lokasi kejadian kriminalitas pada periode berikutnya."
    },

    {
      n: "04",
      t: "Implementasi KRIMATLAS",
      d: "Integrasi seluruh hasil analisis ke dalam platform WebGIS.",
      image: "/images/results/dashboard.png",
      visual: "Dashboard interaktif KRIMATLAS berbasis CARTO.",
      detail:
        "Hasil analisis KDE, evaluasi PAI, serta berbagai informasi spasial lainnya diintegrasikan ke dalam platform KRIMATLAS untuk mendukung eksplorasi data kriminalitas secara interaktif."
    }
  ];

  return (
    <section id="results" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
              Result · 04
            </div>

            <h2 className="text-display mt-3 max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)]">
              Mengungkap Pola Kriminalitas Kabupaten Kudus
            </h2>
          </div>

          <p className="max-w-md text-[14.5px] leading-[1.65] text-[var(--ink-mute)]">
            Hasil penelitian menunjukkan pola persebaran kriminalitas,
            karakteristik spasial, kemampuan prediktif hotspot, serta
            implementasi hasil analisis ke dalam platform KRIMATLAS.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border hairline bg-[var(--hairline)] md:grid-cols-2">
          {results.map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelectedResult(r)}
              className="cursor-pointer bg-background p-8 transition hover:bg-gray-50 lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
                  Hasil {r.n}
                </span>

                <span className="text-xl">→</span>
              </div>

              <h3 className="text-display mt-6 text-[24px] text-foreground">
                {r.t}
              </h3>

              <p className="mt-3 text-[13.5px] leading-[1.65] text-[var(--ink-mute)]">
                {r.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedResult(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b p-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-gray-500">
                    Hasil {selectedResult.n}
                  </div>

                  <h3 className="mt-1 text-3xl font-semibold">
                    {selectedResult.t}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedResult(null)}
                  className="text-3xl text-gray-400 transition hover:text-black"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="grid gap-8 p-6 lg:grid-cols-2">

                <div>
                  <img
                    src={selectedResult.image}
                    alt={selectedResult.t}
                    className="w-full rounded-xl border shadow-sm"
                  />

                  <div className="mt-4 rounded-lg bg-gray-50 p-4">
                    <div className="text-xs uppercase tracking-wider text-gray-500">
                      Visualisasi
                    </div>

                    <p className="mt-2 text-sm text-gray-700">
                      {selectedResult.visual}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="rounded-xl border p-6">
                    <h4 className="text-lg font-medium">
                      Interpretasi Hasil
                    </h4>

                    <p className="mt-4 leading-8 text-gray-600">
                      {selectedResult.detail}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section id="about" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">

        <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
          About Researcher · 05
        </div>

        <div className="mt-6 grid gap-12 lg:grid-cols-[320px_1fr]">

          {/* Foto */}
          <div>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border hairline bg-gray-100">
              <img
                src="src/public/images/md1.png"
                alt="Peneliti"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Informasi */}
          <div>
            <h2 className="text-display text-[clamp(2rem,4vw,3.75rem)]">
              Bausa Seta Pandega
            </h2>

            <p className="mt-4 text-lg text-[var(--ink-soft)]">
              Mahasiswa Sarjana Program Studi Teknik Geodesi 
            </p>

            <p className="mt-8 max-w-3xl text-[15px] leading-[1.9] text-[var(--ink-mute)]">
              KRIMATLAS dikembangkan sebagai bagian dari penelitian
              Tugas Akhir yang berfokus pada analisis kawasan rawan
              kriminalitas di Kabupaten Kudus menggunakan metode
              Kernel Density Estimation (KDE) dan Predictive Accuracy
              Index (PAI).
            </p>

            <p className="mt-4 max-w-3xl text-[15px] leading-[1.9] text-[var(--ink-mute)]">
              Penelitian ini mengintegrasikan analisis spasial dan
              teknologi WebGIS untuk menyajikan informasi kriminalitas
              secara interaktif, sehingga dapat dimanfaatkan sebagai
              sarana eksplorasi data dan pendukung pengambilan
              keputusan berbasis lokasi.
            </p>

            {/* Info Card */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">

              <div className="rounded-xl border hairline p-5">
                <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
                  Program Studi
                </div>

                <div className="mt-3 text-sm">
                  Teknik Geodesi 
                </div>
              </div>

              <div className="rounded-xl border hairline p-5">
                <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
                  Institusi
                </div>

                <div className="mt-3 text-sm">
                  Universitas Gadjah Mada
                </div>
              </div>

              <div className="rounded-xl border hairline p-5">
                <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
                  Bidang
                </div>

                <div className="mt-3 text-sm">
                Crime Mapping • Spatial Analysis • WebGIS
                </div>
              </div>

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
            KRIMATLAS
          </span>
          <span className="ml-3 text-[12px] text-[var(--ink-mute)]">
            © {new Date().getFullYear()}
          </span>
        </div>
        <nav className="flex flex-wrap gap-6 text-[13px] text-[var(--ink-soft)]">
          <a href="#introduction" className="hover:text-foreground">About</a>
          <a href="#methodology" className="hover:text-foreground">Methodology</a>
          <a href="#about" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
