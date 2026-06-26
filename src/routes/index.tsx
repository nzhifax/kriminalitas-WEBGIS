import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence  } from "framer-motion";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  component: CrimeAtlas,
});

const RED = "#D62828";

function CrimeAtlas() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero /> 
      <Introduction />
      <StudyArea/>
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
            KUDUS CRIMAP
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-[13px] text-[var(--ink-soft)] md:flex">
          <a href="#introduction" className="hover:text-foreground">Pendahuluan</a>
          <a href="#studyarea" className="hover:text-foreground">Area Kajian</a>
          <a href="#methodology" className="hover:text-foreground">Metodologi</a>
          <a href="#analisysmap" className="hover:text-foreground">Peta</a>
          <a href="#results" className="hover:text-foreground">Hasil</a>
          <a href="#about" className="hover:text-foreground">Tentang</a>
        </nav>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfhFhbMKaPjnmYlFufaUiLD8DHizI5LpojGgYfNMxaMWZ3I7Q/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-foreground px-3.5 py-1.5 text-[12.5px] font-medium text-background transition hover:opacity-90"
          >
            Beri Penilaian Anda
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
      <div className="mx-auto grid min-h-[calc(100vh-65px)] max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-10 lg:py-16">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-display text-[clamp(3rem,6vw,5.4rem)] text-foreground"
          >
            KUDUS{" "}
            <span style={{ color: RED }}>CRIMAP</span>
          <span className="mt-5 block max-w-3xl text-[clamp(1.55rem,2.5vw,2.25rem)] font-normal leading-snug text-[var(--ink-soft)]">
            WebGIS Analisis Spasial Kerawanan Kriminalitas di Kabupaten Kudus
          </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-2xl text-[16px] leading-[1.75] text-[var(--ink-mute)]"
          >
            WebGIS interaktif untuk mengidentifikasi pola sebaran, hotspot,
            dan tingkat kerawanan kriminalitas di Kabupaten Kudus berbasis
            analisis spasial.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#analisysmap"
              className="rounded-md bg-foreground px-5 py-3 text-[13.5px] font-medium text-background transition hover:opacity-90"
            >
              Jelajahi Peta &rarr;
            </a>
            <a
              href="#methodology"
              className="rounded-md border hairline bg-white px-5 py-3 text-[13.5px] font-medium text-foreground transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            >
              Lihat Metodologi
            </a>

          </motion.div>
        </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative h-[420px] overflow-hidden rounded-lg border hairline bg-white shadow-[0_22px_70px_-52px_rgba(0,0,0,0.45)] lg:h-[540px]"
          >
            <img
              src="/images/landing.png"
              alt="Menara Kudus sebagai ikon Kabupaten Kudus"
              className="h-full w-full object-cover"
              loading="lazy"
            />

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1.5" style={{ background: RED }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 rounded-md border hairline bg-white/88 px-4 py-3 text-[11.5px] text-[var(--ink-soft)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium text-foreground">
                Kabupaten Kudus, Jawa Tengah
              </span>

              <span className="flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: RED }}
                />
                Analisis Kriminalitas 2026
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
        <div className="mb-12 flex flex-col gap-5">
          <div>
            {/* <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
              Profil· 01
            </div> */}

            <h2 className="mt-2 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-bold">
               PENDAHULUAN
            </h2>
          </div>

          
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg border hairline bg-white p-6 transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-[0_18px_50px_-38px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-x-0 top-0 h-1" style={{ background: RED }} />
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
                Latar Belakang
              </div>
              <div className="text-display text-[22px] text-[var(--brand)]">
                01
              </div>
            </div>

            <p className="text-[14px] leading-[1.8] text-[var(--ink-soft)]">
              Kriminalitas tidak tersebar secara acak, melainkan cenderung
              terkonsentrasi pada lokasi tertentu yang membentuk hotspot.
              Identifikasi pola spasial tersebut penting untuk memahami
              karakteristik wilayah rawan dan mendukung strategi pencegahan
              kejahatan secara lebih tepat.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-lg border hairline bg-white p-6 transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-[0_18px_50px_-38px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-x-0 top-0 h-1" style={{ background: RED }} />
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
                Tujuan Penelitian
              </div>
              <div className="text-display text-[22px] text-[var(--brand)]">
                02
              </div>
            </div>

            <p className="text-[14px] leading-[1.8] text-[var(--ink-soft)]">
              Penelitian ini bertujuan menganalisis pola sebaran dan kawasan
              rawan kriminalitas di Kabupaten Kudus menggunakan Kernel Density
              Estimation, mengevaluasi kemampuan prediktif hotspot dengan
              Predictive Accuracy Index, serta menyajikan hasil analisis melalui
              WebGIS interaktif.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-lg border hairline bg-white p-6 transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-[0_18px_50px_-38px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-x-0 top-0 h-1" style={{ background: RED }} />
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
                Manfaat Penelitian
              </div>
              <div className="text-display text-[22px] text-[var(--brand)]">
                03
              </div>
            </div>

            <p className="text-[14px] leading-[1.8] text-[var(--ink-soft)]">
              Hasil penelitian diharapkan dapat menjadi bahan pertimbangan
              dalam pengambilan keputusan, mendukung pencegahan dan
              penanggulangan kriminalitas, serta menyediakan media informasi
              spasial yang mudah diakses oleh pengguna melalui web map
              interaktif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Study Area Section ---------------- */

function StudyArea() {
  return (
    <section id="studyarea" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="mt-2 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-bold">
              AREA KAJIAN
            </h2>

            <p className="mt-8 max-w-2xl text-[15px] leading-[1.9] text-[var(--ink-mute)]">
              Kabupaten Kudus merupakan salah satu pusat kegiatan ekonomi di Jawa Tengah
              dengan karakteristik wilayah yang beragam, mulai dari kawasan perkotaan,
              permukiman padat, hingga wilayah perdesaan. Tingginya aktivitas penduduk
              dan mobilitas pada berbagai pusat kegiatan berpotensi memengaruhi pola
              persebaran kriminalitas. Oleh karena itu, Kabupaten Kudus dipilih sebagai
              wilayah kajian untuk mengidentifikasi kawasan rawan kriminalitas dan
              karakteristik spasialnya.
            </p>

            {/* Stats */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border hairline p-5">
                <div className="text-[28px] font-semibold text-foreground">
                  425
                </div>
                <div className="mt-1 text-[13px] text-[var(--ink-mute)]">
                  Luas Wilayah km²
                </div>
              </div>

              <div className="rounded-xl border hairline p-5">
                <div className="text-[28px] font-semibold text-foreground">
                  9
                </div>
                <div className="mt-1 text-[13px] text-[var(--ink-mute)]">
                  Kecamatan
                </div>
              </div>

              <div className="rounded-xl border hairline p-5">
                <div className="text-[28px] font-semibold text-foreground">
                  132
                </div>
                <div className="mt-1 text-[13px] text-[var(--ink-mute)]">
                  Desa/Kelurahan
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative h-[440px] overflow-hidden rounded-xl border hairline bg-[var(--surface-1)] lg:h-[560px]"
          >
            <iframe
              src="https://thunbergii.app.carto.com/map/88d93d66-fe82-4ff6-9c6f-a39d03ffea51"
              className="h-full w-full border-0"
              loading="eager"
            />

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent" />

            {/* Live Preview */}
            <div className="absolute left-4 top-4 rounded-md border hairline bg-white/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)] backdrop-blur">
              Live preview
            </div>

            {/* Custom Legend */}
            <div className="absolute bottom-11 left-3 rounded-lg border hairline bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--ink-mute)]">
                Kepadatan Permukiman
              </div>

              <div className="space-y-1.5">
                {[
                  { label: "Sangat Rendah", color: "#d1eeea" },
                  { label: "Rendah", color: "#96d0d1" },
                  { label: "Sedang", color: "#68abb8" },
                  { label: "Tinggi", color: "#45829b" },
                  { label: "Sangat Tinggi", color: "#2a5674" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-sm border border-black/10"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-[11px] text-gray-700">
                      {item.label}
                    </span>
                  </div>
                ))}

                {/* Jalan utama */}
                <div className="mt-2 border-t pt-2">
                  <div className="flex items-center gap-2">
                    <div className="h-[2px] w-4 rounded bg-gray-300" />
                    <span className="text-[11px] text-gray-700">
                      Jalan Utama
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </motion.div>
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
    d: "Mengklasifikasikan data laporan polisi berdasarkan ICCS.",
    detail:
      "Data Laporan Polisi (LP) dari Polres Kudus periode 2021–2026 dikompilasi dan disusun ke dalam format tabular yang seragam. Selanjutnya, setiap kejadian diklasifikasikan ulang berdasarkan International Classification of Crime for Statistical Purposes (ICCS) untuk menghasilkan kategori kelompok dan jenis kejahatan yang konsisten sebagai dasar analisis spasial.",
    image: "/images/md1.png",
      visual: "Diagram distribusi kelompok dan jenis kejahatan"
  },

  {
    n: "02",
    t: "Geocoding TKP",
    d: "Mengonversi lokasi kejadian kriminal menjadi koordinat geografis.",
    detail:
      "Informasi lokasi kejadian (TKP) yang tersimpan dalam basis data dikonversi menjadi koordinat geografis melalui proses geocoding menggunakan Google My Maps. Seluruh titik hasil geocoding kemudian diverifikasi dan disesuaikan secara manual berdasarkan informasi pada Laporan Polisi untuk memastikan lokasi kejadian direpresentasikan secara lebih akurat.",
    image: "/images/md2.png",
      visual: "Alamat TKP → Koordinat → Titik pada Peta"
  },

  {
    n: "03",
    t: "Analisis Spasial",
    d: "Mengidentifikasi kawasan rawan kriminalitas dan menganalisis karakteristik spasial kejadian kriminal.",
    detail:
      "Data lokasi kejadian kriminal periode Juni 2021-Mei 2025 digunakan dalam analisis Kernel Density Estimation (KDE) untuk mengidentifikasi hotspot kriminalitas. Selain itu, dilakukan juga analisis karakteristik spasial terhadap faktor lingkungan sekitar kejadian serta perhitungan statistik per wilayah administrasi untuk memperoleh informasi tingkat kerawanan kriminalitas pada setiap desa.",
    image: "/images/tahap3.png",
      visual: "Peta Hotspot KDE"
  },

  {
    n: "04",
    t: "Evaluasi PAI",
    d: "Pengujian kemampuan prediktif hotspot kriminalitas.",
    detail:
      "Area hotspot dengan tingkat kepadatan kriminalitas tertinggi hasil KDE dievaluasi menggunakan data kriminalitas pada periode pengujian yaitu data Juni 2025-Mei 2026. Evaluasi dilakukan dengan metode Predictive Accuracy Index (PAI) untuk mengukur efektivitas hotspot dalam memprediksi lokasi kejadian kriminal pada periode berikutnya.",
    image: "/images/md4.png",
      visual: "Hotspot + Titik Kriminalitas Tahun Berikutnya"
  },

  {
    n: "05",
    t: "Integrasi Hasil",
    d: "Mengintegrasikan hasil analisis dan memvisualisasikannya melalui platform CRIMEMAP.",
    detail:
      "Seluruh hasil analisis, mulai dari hotspot kriminalitas, karakteristik spasial kejadian, tingkat kerawanan desa, hingga hasil evaluasi PAI, diintegrasikan ke dalam platform WebGIS KUDUS CRIMAP. Integrasi ini memungkinkan pengguna mengeksplorasi informasi kriminalitas secara interaktif melalui peta, grafik, filter, dan berbagai fitur analisis dalam satu platform yang terhubung.",
    image: "/images/md5.png",
      visual: "Dashboard CRIMEMAP"
  },

  {
    n: "06",
    t: "Uji Usabilitas",
    d: "Mengukur tingkat kemudahan penggunaan webmap melalui pengujian usabilitas.",
    detail:
      "WebGIS KUDUS CRIMAP dievaluasi melalui pengujian usabilitas menggunakan kuesioner yang diberikan kepada pengguna. Pengujian ini bertujuan untuk mengukur lima aspek usabilitas (5Es), yaitu effective, efficient, engaging, error tolerant, dan easy to learn, sehingga dapat diketahui tingkat kemudahan penggunaan serta kualitas pengalaman pengguna dalam mengakses informasi kriminalitas melalui platform.",
    image: "/images/md6.png",
      visual: "Diagram Hasil Evaluasi 5Es"
  }
  ];

  return (
    <section id="methodology" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        {/* <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
          Methodology · 02
        </div> */}

        <h2 className="mt-2 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-bold">
           ALUR PENELITIAN
        </h2>

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
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <img
                    src={selectedStep.image}
                    alt={selectedStep.t}
                    style={{ flex: 1, width: '100%', objectFit: 'contain', minHeight: 0 }}
                    className="rounded-xl border shadow-sm"
                  />

                  
                </div>

                {/* Penjelasan */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: 1 }} className="rounded-xl border p-6">
                    

                    <p className="mt-4 leading-8 text-gray-600 text-justify">
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
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isFullscreen]);

  return (
    <section id="analisysmap" className="border-b hairline">
      {/* Header — tombol fullscreen ada di sini, bukan di dalam map */}
      <div className="mx-auto max-w-[1400px] px-6 pb-8 pt-20 lg:px-10 lg:pt-28">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-4xl leading-tight text-[clamp(2rem,4.5vw,3.75rem)] font-bold">
            JELAJAHI{" "}
            KUDUS{" "}
            <span className="text-red-600">CRIMAP</span>
          </h2>
          <button
            onClick={() => setIsFullscreen(true)}
            className="inline-flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3"/>
              <path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
              <path d="M3 16v3a2 2 0 0 0 2 2h3"/>
              <path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
            </svg>
            Buka Fullscreen
          </button>
        </div>
      </div>

      {/* Peta normal — bersih tanpa tombol overlay */}
      <div className="relative mx-auto h-[640px] max-w-[1400px] overflow-hidden border-y hairline rounded-xl lg:h-[720px]">
        <iframe
          src="https://thunbergii.app.carto.com/map/9a2dd299-ab32-47dd-a569-df0016c77cc6"
          title="CRIMAP Dashboard"
          loading="eager"
          className="h-full w-full border-0"
        />
      </div>

      {/* Fullscreen overlay — topbar di atas, iframe di bawah */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-black"
          >
            {/* Topbar tersendiri, tidak nempel di peta */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#111] px-5 py-2.5">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ background: RED }} />
                <span className="text-[13px] font-medium tracking-tight text-white">
                  KUDUS CRIMAP
                </span>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-[12px] font-medium text-white transition hover:bg-white/20"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3"/>
                  <path d="M21 8h-3a2 2 0 0 1-2-2V3"/>
                  <path d="M3 16h3a2 2 0 0 1 2 2v3"/>
                  <path d="M16 21v-3a2 2 0 0 1 2-2h3"/>
                </svg>
                Keluar Fullscreen
              </button>
            </div>

            {/* iframe mengisi sisa ruang */}
            <iframe
              src="https://thunbergii.app.carto.com/map/9a2dd299-ab32-47dd-a569-df0016c77cc6"
              title="CRIMEMAP Dashboard Fullscreen"
              className="flex-1 w-full border-0"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Results Section ---------------- */

function Results() {
   const [selectedResult, setSelectedResult] = useState<any>(null);
  const results = [
    {
      n: "01",
      t: "Distribusi Kriminalitas",
      d: "Identifikasi kawasan dengan konsentrasi kriminalitas tertinggi menggunakan KDE.",
      image: "/images/Picture1.png",
      visual: "Diagram klasifikasi kejadian kriminal di Kabupaten Kudus.",
      detail:
        "Sebanyak 415 kejadian kriminal di Kabupaten Kudus diklasifikasikan ke dalam sembilan kelompok kejahatan berdasarkan ICCS. Kasus didominasi oleh kejahatan terhadap hak milik tanpa kekerasan, penipuan dan penggelapan, serta kejahatan terhadap fisik yang menyebabkan luka atau menyakiti orang lain."
        },

    {
      n: "02",
      t: "Hotspot Kriminalitas",
      d: "Hubungan kriminalitas dengan kepadatan permukiman dan jaringan jalan.",
      image: "/images/Picture2.png",
      visual:
        "Hotspot kriminalitas yang terjadi di Kabupaten Kudus.",
      detail:
        "Analisis KDE menunjukkan bahwa kriminalitas di Kabupaten Kudus terkonsentrasi pada wilayah tengah kabupaten, terutama di Kecamatan Kota Kudus. Tingkat kerawanan cenderung menurun ke arah wilayah pinggiran, dengan area berkerawanan sangat rendah yang dominan di bagian selatan dan utara kabupaten."
        },

    {
      n: "03",
      t: "Zonal Statistik",
      d: "Klasifikasi tingkat kerawanan kriminalitas pada setiap desa berdasarkan hasil KDE.",
      image: "/images/Picture3.png",
      visual:
        "Peta tingkat kerawanan kriminalitas per kecamatan hasil analisis Zonal Statistics.",
      detail:
        "Analisis zonal statistik digunakan untuk mengidentifikasi tingkat kerawanan kriminalitas pada setiap desa berdasarkan nilai kepadatan kriminalitas hasil KDE. Hasil analisis menunjukkan bahwa desa dengan tingkat kerawanan sangat tinggi terkonsentrasi di Kecamatan Kota Kudus, sedangkan tingkat kerawanan tinggi hingga sedang umumnya berada di wilayah sekitar pusat kota. Sebaliknya, desa-desa yang berada lebih jauh dari pusat kabupaten didominasi oleh tingkat kerawanan rendah hingga sangat rendah."
      },

    {
      n: "04",
      t: "Kriminalitas pada Permukiman Padat",
      d: "Analisis hubungan antara kepadatan permukiman dan persebaran kejadian kriminalitas.",
      image: "/images/Picture4.png",
      visual: "Diagram distribusi jumlah kejadian kriminalitas berdasarkan tingkat kepadatan permukiman.",
      detail:
        "Sebagian besar kejadian kriminalitas di Kabupaten Kudus terjadi pada wilayah dengan kepadatan permukiman sedang hingga sangat tinggi. Kawasan yang lebih padat umumnya memiliki aktivitas dan interaksi penduduk yang lebih intens sehingga menciptakan lebih banyak peluang terjadinya tindak kejahatan. Temuan ini menunjukkan bahwa kepadatan permukiman merupakan salah satu karakteristik spasial yang berkaitan dengan persebaran kriminalitas."
      },
     {
      n: "05",
      t: "Kedekatan Kriminalitas dengan Jalan Utama",
      d: "Analisis keterkaitan lokasi kejadian kriminalitas terhadap jaringan jalan utama.",
      image: "/images/Picture5.png",
      visual: "Diagram distribusi jumlah kejadian kriminalitas berdasarkan jarak terhadap jaringan jalan.",
      detail:
        "Analisis menunjukkan bahwa kejadian kriminalitas lebih banyak ditemukan pada lokasi yang berdekatan dengan jalan utama. Jumlah kejadian cenderung menurun seiring bertambahnya jarak dari jalan, yang mengindikasikan adanya hubungan antara aksesibilitas wilayah dan peluang terjadinya kejahatan. Tingginya mobilitas manusia dan kendaraan di sekitar jalan utama diduga menjadi faktor yang mendukung pola tersebut."
      },
        {
      n: "06",
      t: "Kemampuan Prediktif Hotspot",
      d: "Evaluasi kemampuan hotspot kriminalitas dalam memprediksi kejadian kriminalitas pada periode berikutnya.",
      image: "/images/paii.png",
      visual: "Diagram hasil evaluasi Predictive Accuracy Index (PAI) yang menunjukkan perbandingan luas hotspot dan jumlah kejadian kriminalitas yang berhasil diprediksi.",
      detail:
        "Nilai PAI sebesar 3,09 menunjukkan bahwa hotspot kriminalitas mampu memprediksi lokasi kejadian kriminal lebih baik dibandingkan distribusi acak. Meskipun hanya mencakup 18% luas wilayah, area hotspot berhasil mengidentifikasi 55% kejadian kriminalitas pada periode pengujian, sehingga berpotensi mendukung strategi pengawasan yang lebih efektif dan tepat sasaran."
      },
        
  ];

  return (
    <section id="results" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/* <div className="text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
              Result · 04
            </div> */}

            <h2 className="mt-2 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-bold">
              HASIL ANALISIS
            </h2>
          </div>
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

                <div className="flex flex-col">
                  <img
                    src={selectedResult.image}
                    alt={selectedResult.t}
                    className="h-full w-full rounded-xl border shadow-sm object-contain"
                  />
                </div>

                  <div className="flex flex-col">
                    <div className="flex-1 rounded-xl border p-6">
                      <h4 className="text-lg font-medium">
                       Interpretasi Hasil
                      </h4>

                    <p className="mt-4 leading-8 text-gray-600 text-justify">
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

/* ---------------- About CRIMEMAP ---------------- */

function About() {
  return (
    <section id="about" className="border-b hairline relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">

        
        <h2 className="mt-2 text-[clamp(2rem,4.5vw,3.75rem)] font-bold">
          Dari Kudus, untuk <span style={{ color: RED }}>Kudus.</span>
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* LEFT — narasi */}
          <div>
            <p className="text-[15px] leading-[1.9] text-[var(--ink-soft)]">
              CRIMEMAP dikembangkan sebagai upaya pemanfaatan teknologi geospasial untuk
              memahami pola dan karakteristik kriminalitas di Kabupaten Kudus. Melalui
              integrasi analisis spasial dan WebGIS interaktif, platform ini dirancang
              untuk menyajikan informasi yang lebih mudah diakses, dipahami, dan dieksplorasi.
            </p>
            <p className="mt-5 text-[15px] leading-[1.9] text-[var(--ink-soft)]">
              Lebih dari sekadar luaran akademik, CRIMEMAP diharapkan menjadi kontribusi
              nyata dalam mendukung pemahaman pola kriminalitas, meningkatkan kewaspadaan
              masyarakat, serta memperkuat pengambilan keputusan berbasis lokasi.
            </p>

            <blockquote className="mt-8 border-l-[3px] pl-5" style={{ borderColor: RED }}>
              <p className="text-[14px] italic leading-[1.85] text-[var(--ink-mute)]">
                "Kriminalitas tidak tersebar acak, ia punya pola. Platform ini adalah
                upaya membaca pola itu dengan lebih jelas."
              </p>
            </blockquote>

            {/* Stat strip */}
            <div className="mt-8 grid grid-cols-3 divide-x hairline overflow-hidden rounded-xl border hairline">
              {[
                { val: "132", lbl: "Desa" },
                { val: "2021 – 2026", lbl: "Periode Data" },
                { val: "KDE", lbl: "Metode Analisis" },
              ].map((s) => (
                <div key={s.lbl} className="bg-[var(--surface-1)] px-4 py-3.5">
                  <div className="text-[20px] font-semibold" style={{ color: RED }}>{s.val}</div>
                  <div className="mt-0.5 text-[10.5px] uppercase tracking-[0.1em] text-[var(--ink-mute)]">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — profile card */}
          <div>
            <div className="overflow-hidden rounded-2xl border hairline bg-[var(--surface-1)]">

              {/* Header — avatar inisial + nama + subtitle */}
              <div className="border-b hairline px-6 py-5 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center text-[13px] font-semibold flex-shrink-0 border hairline"
                  style={{ background: "#fdf2f1", color: RED }}
                >
                  BSP
                </div>
                <div>
                  <div className="text-[15px] font-medium text-foreground">Bausa Seta Pandega</div>
                  <div className="text-[12px] text-[var(--ink-mute)] mt-0.5">Mahasiswa S1 · Teknik Geodesi, UGM</div>
                </div>
              </div>

              {/* Info rows */}
              <div className="divide-y hairline px-6">
                {[
                  { key: "Institusi", val: "Universitas Gadjah Mada" },
                  { key: "Program Studi", val: "Teknik Geodesi" },
                  { key: "Topik Penelitian", val: "Analisis Kawasan Rawan Kriminalitas menggunakan Metode KDE" },
                  { key: "Wilayah Kajian", val: "Kabupaten Kudus, Jawa Tengah" },
                  { key: "Tahun", val: "2026" },
                ].map((r) => (
                  <div key={r.key} className="flex items-start justify-between gap-4 py-3">
                    <span className="text-[11.5px] uppercase tracking-[0.1em] text-[var(--ink-mute)] pt-0.5 flex-shrink-0">
                      {r.key}
                    </span>
                    <span className="text-[14px] text-foreground text-right">{r.val}</span>
                  </div>
                ))}
              </div>

              {/* Status badge */}
              <div className="border-t hairline px-6 py-3 bg-[var(--surface-0)] flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-[11.5px] text-[var(--ink-mute)]">Platform aktif</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["KDE Hotspot Analysis", "Predictive Accuracy Index", "WebGIS", "ICCS Classification", "Spatial Crime Analysis"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border hairline bg-background px-3 py-1 text-[11.5px] text-[var(--ink-soft)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <img
        src="/images/ugm-logo.jpg"
        alt=""
        className="pointer-events-none absolute right-[-120px] top-1/2 w-[450px] -translate-y-1/2 opacity-[0.05]"
      />
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-3 py-6 lg:flex-row lg:items-center lg:justify-between">
          <span className="text-[11.5px] text-[var(--ink-mute)]">
            © {new Date().getFullYear()} Bausa Seta Pandega · Tugas Akhir S1 Teknik Geodesi UGM
          </span>
          <a
            href="https://instagram.com/bausahd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12.5px] text-[var(--ink-soft)] hover:text-foreground transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none"/>
            </svg>
            @bausahd
          </a>
        </div>
      </div>
    </footer>
  );
}