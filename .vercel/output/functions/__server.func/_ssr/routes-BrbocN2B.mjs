import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BrbocN2B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RED = "#D62828";
function CrimeAtlas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Introduction, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudyArea, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Methodology, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b hairline bg-background/80 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2.5 w-2.5 rounded-full",
						style: { background: RED },
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-display text-[15px] font-medium tracking-tight",
						children: "CRIMEMAP"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 text-[13px] text-[var(--ink-soft)] md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#introduction",
							className: "hover:text-foreground",
							children: "Pendahuluan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#studyarea",
							className: "hover:text-foreground",
							children: "Area Kajian"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#methodology",
							className: "hover:text-foreground",
							children: "Metodologi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#analisysmap",
							className: "hover:text-foreground",
							children: "Peta"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#results",
							className: "hover:text-foreground",
							children: "Hasil"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#about",
							className: "hover:text-foreground",
							children: "Tentang"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://forms.gle/xxxxxxxxxxxxxxxxx",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "rounded-md bg-foreground px-3.5 py-1.5 text-[12.5px] font-medium text-background transition hover:opacity-90",
						children: "Isi Formulir"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#analisysmap",
						className: "rounded-md bg-foreground px-3.5 py-1.5 text-[12.5px] font-medium text-background transition hover:opacity-90",
						children: "Buka Peta"
					})]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b hairline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-10 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "mb-6 inline-flex w-fit items-center gap-2 rounded-full border hairline bg-[var(--surface-1)] px-3 py-1 text-[11.5px] uppercase tracking-[0.14em] text-[var(--ink-mute)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-1.5 w-1.5 rounded-full",
							style: { background: RED }
						}), "Crime Spatial Analysis · KDE"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .05
						},
						className: "text-display text-[clamp(3rem,6.5vw,5.75rem)] text-foreground",
						children: [
							"CRIME",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: RED },
								children: "MAP."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block mt-3 text-[28px]  font-normal leading-relaxed tracking-wide text-[var(--ink-soft)]",
								children: "Platform Analisis Spasial Kriminalitas Kabupaten Kudus"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .15
						},
						className: "mt-8 max-w-xl text-[16px] leading-[1.65] text-[var(--ink-mute)]",
						children: "WebGIS interaktif untuk eksplorasi hotspot kriminalitas, analisis risiko wilayah, dan karakteristik kejadian kriminal di Kabupaten Kudus."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .25
						},
						className: "mt-10 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#analisysmap",
							className: "rounded-md bg-foreground px-5 py-3 text-[13.5px] font-medium text-background transition hover:opacity-90",
							children: "Jelajahi Peta →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://forms.gle/xxxxxxxxxxxxxxxxx",
							className: "rounded-md border hairline bg-background px-5 py-3 text-[13.5px] font-medium text-foreground transition hover:bg-[var(--surface-1)]",
							children: "Berikan Penilaian Anda"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .98
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .9,
					delay: .1
				},
				className: "relative h-[440px] overflow-hidden bg-white lg:h-[560px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "src/public/images/landing.png",
						alt: "Peta Kriminalitas Kabupaten Kudus",
						className: "h-full w-full object-cover",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-md border hairline bg-white/85 px-3 py-2 text-[11.5px] text-[var(--ink-soft)] backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kabupaten Kudus, Jawa Tengah" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-1.5 w-1.5 rounded-full",
								style: { background: RED }
							}), "Penelitian Tugas Akhir · 2026"]
						})]
					})
				]
			})]
		})
	});
}
function Introduction() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "introduction",
		className: "border-b hairline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-bold",
					children: "PENDAHULUAN"
				}) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border hairline p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]",
							children: "Latar Belakang"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] leading-[1.8] text-[var(--ink-soft)]",
							children: "Kriminalitas tidak tersebar secara acak, melainkan cenderung terkonsentrasi pada lokasi tertentu yang membentuk hotspot kriminalitas. Identifikasi pola spasial tersebut penting untuk mendukung pencegahan dan penanggulangan kejahatan secara lebih efektif."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border hairline p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]",
							children: "Tujuan Penelitian"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] leading-[1.8] text-[var(--ink-soft)]",
							children: "Menganalisis pola spasial kawasan rawan kriminalitas di Kabupaten Kudus menggunakan KDE, mengevaluasi kemampuan prediktif hasil analisis dengan PAI, serta menyajikan informasi kriminalitas melalui web map interaktif."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border hairline p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]",
							children: "Manfaat Penelitian"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] leading-[1.8] text-[var(--ink-soft)]",
							children: "Hasil penelitian diharapkan dapat mendukung pengambilan keputusan dalam pencegahan dan penanggulangan kriminalitas, serta menyediakan media informasi spasial yang mudah diakses melalui web map interaktif."
						})]
					})
				]
			})]
		})
	});
}
function StudyArea() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "studyarea",
		className: "border-b hairline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-bold",
						children: "WILAYAH KAJIAN"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-[15px] leading-[1.9] text-[var(--ink-mute)]",
						children: "Kabupaten Kudus merupakan salah satu pusat kegiatan ekonomi di Jawa Tengah dengan karakteristik wilayah yang beragam, mulai dari kawasan perkotaan, permukiman padat, hingga wilayah perdesaan. Tingginya aktivitas penduduk dan mobilitas pada berbagai pusat kegiatan berpotensi memengaruhi pola persebaran kriminalitas. Oleh karena itu, Kabupaten Kudus dipilih sebagai wilayah kajian untuk mengidentifikasi kawasan rawan kriminalitas dan karakteristik spasialnya."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border hairline p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[28px] font-semibold text-foreground",
									children: "425"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[13px] text-[var(--ink-mute)]",
									children: "Luas Wilayah km²"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border hairline p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[28px] font-semibold text-foreground",
									children: "9"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[13px] text-[var(--ink-mute)]",
									children: "Kecamatan"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border hairline p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[28px] font-semibold text-foreground",
									children: "132"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[13px] text-[var(--ink-mute)]",
									children: "Desa/Kelurahan"
								})]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .98
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .9,
						delay: .1
					},
					className: "relative h-[440px] overflow-hidden rounded-xl border hairline bg-[var(--surface-1)] lg:h-[560px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: "https://your-carto-url",
							className: "h-full w-full border-0",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-4 top-4 rounded-md border hairline bg-white/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)] backdrop-blur",
							children: "Live preview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-md border hairline bg-white/85 px-3 py-2 text-[11.5px] text-[var(--ink-soft)] backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "area kajian - kabupaten kudus " }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-1.5 w-1.5 rounded-full",
									style: { background: RED }
								}), "CARTO basemap"]
							})]
						})
					]
				})]
			})
		})
	});
}
function Methodology() {
	const [selectedStep, setSelectedStep] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "methodology",
		className: "border-b hairline",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-bold",
				children: "ALUR PENELITIAN"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border hairline bg-[var(--hairline)] md:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						n: "01",
						t: "Pengumpulan & Klasifikasi Data",
						d: "Mengklasifikasikan data laporan polisi berdasarkan ICCS.",
						detail: "Data Laporan Polisi (LP) dari Polres Kudus periode 2021–2026 dikompilasi dan disusun ke dalam format tabular yang seragam. Selanjutnya, setiap kejadian diklasifikasikan ulang berdasarkan International Classification of Crime for Statistical Purposes (ICCS) untuk menghasilkan kategori kelompok dan jenis kejahatan yang konsisten sebagai dasar analisis spasial.",
						image: "/src/public/images/md1.png",
						visual: "Diagram distribusi kelompok dan jenis kejahatan"
					},
					{
						n: "02",
						t: "Geocoding TKP",
						d: "Mengonversi lokasi kejadian kriminal menjadi koordinat geografis.",
						detail: "Informasi lokasi kejadian (TKP) yang tersimpan dalam basis data dikonversi menjadi koordinat geografis melalui proses geocoding menggunakan Google My Maps. Seluruh titik hasil geocoding kemudian diverifikasi dan disesuaikan secara manual berdasarkan informasi pada Laporan Polisi untuk memastikan lokasi kejadian direpresentasikan secara lebih akurat.",
						image: "/src/public/images/md2.png",
						visual: "Alamat TKP → Koordinat → Titik pada Peta"
					},
					{
						n: "03",
						t: "Analisis Spasial",
						d: "Mengidentifikasi kawasan rawan kriminalitas dan menganalisis karakteristik spasial kejadian kriminal.",
						detail: "Data lokasi kejadian kriminal dianalisis menggunakan metode Kernel Density Estimation (KDE) untuk mengidentifikasi hotspot kriminalitas. Selain itu, dilakukan analisis karakteristik spasial terhadap faktor lingkungan sekitar kejadian serta perhitungan statistik per wilayah administrasi untuk memperoleh informasi tingkat kerawanan kriminalitas pada setiap desa.",
						image: "/src/public/images/md3.png",
						visual: "Peta Hotspot KDE"
					},
					{
						n: "04",
						t: "Evaluasi PAI",
						d: "Pengujian kemampuan prediktif hotspot kriminalitas.",
						detail: "Area hotspot dengan tingkat kepadatan kriminalitas tertinggi hasil KDE dievaluasi menggunakan data kriminalitas pada periode pengujian. Evaluasi dilakukan dengan metode Predictive Accuracy Index (PAI) untuk mengukur efektivitas hotspot sebagai indikator kawasan rawan kriminalitas.",
						image: "/src/public/images/md4.png",
						visual: "Hotspot + Titik Kriminalitas Tahun Berikutnya"
					},
					{
						n: "05",
						t: "Integrasi Hasil",
						d: "Mengintegrasikan hasil analisis dan memvisualisasikannya melalui platform CRIMEMAP.",
						detail: "Seluruh hasil analisis, mulai dari hotspot kriminalitas, karakteristik spasial kejadian, tingkat kerawanan desa, hingga hasil evaluasi PAI, diintegrasikan ke dalam platform WebGIS CRIMEMAP. Integrasi ini memungkinkan pengguna mengeksplorasi informasi kriminalitas secara interaktif melalui peta, grafik, filter, dan berbagai fitur analisis dalam satu platform yang terhubung.",
						image: "/src/public/images/md5.png",
						visual: "Dashboard CRIMEMAP"
					},
					{
						n: "06",
						t: "Uji Usabilitas",
						d: "Mengukur tingkat kemudahan penggunaan webmap melalui pengujian usabilitas.",
						detail: "WebGIS CRIMEMAP dievaluasi melalui pengujian usabilitas menggunakan kuesioner yang diberikan kepada pengguna. Pengujian ini bertujuan untuk mengukur lima aspek usabilitas (5Es), yaitu effective, efficient, engaging, error tolerant, dan easy to learn, sehingga dapat diketahui tingkat kemudahan penggunaan serta kualitas pengalaman pengguna dalam mengakses informasi kriminalitas melalui platform.",
						image: "/src/public/images/md6.png",
						visual: "Diagram Hasil Evaluasi 5Es"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .06
					},
					onClick: () => setSelectedStep(s),
					className: "cursor-pointer bg-background p-8 transition-all hover:bg-gray-50 lg:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]",
								children: ["Tahap ", s.n]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl",
								children: "→"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-display mt-6 text-[24px] text-foreground",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[13.5px] leading-[1.65] text-[var(--ink-mute)]",
							children: s.d
						})
					]
				}, s.n))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedStep && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setSelectedStep(null),
			className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .95,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .95,
					opacity: 0
				},
				onClick: (e) => e.stopPropagation(),
				className: "max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs uppercase tracking-[0.14em] text-gray-500",
						children: ["Tahap ", selectedStep.n]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-3xl font-semibold",
						children: selectedStep.t
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSelectedStep(null),
						className: "text-3xl text-gray-400 transition hover:text-black",
						children: "×"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 p-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: selectedStep.image,
						alt: selectedStep.t,
						className: "w-full rounded-xl border object-cover shadow-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-lg bg-gray-50 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-gray-500",
							children: "Visual Output"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-gray-700",
							children: selectedStep.visual
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-lg font-medium",
							children: "Deskripsi Tahapan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-8 text-gray-600",
							children: selectedStep.detail
						})]
					}) })]
				})]
			})
		}) })]
	});
}
function MapSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "analisysmap",
		className: "border-b hairline",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-6 pb-6 pt-20 lg:px-10 lg:pt-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-bold",
					children: "Jelajahi CRIMEMAP"
				}) })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto h-[640px] max-w-[1400px] overflow-hidden border-y hairline rounded-xl lg:h-[720px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						src: "https://thunbergii.app.carto.com/map/d66edab3-d873-435f-bef3-f896fe2716c5",
						title: "Crime Atlas Dashboard",
						loading: "lazy",
						className: "h-full w-full border-0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-6 top-6 rounded-md border hairline bg-white/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)] backdrop-blur",
						children: "Interactive Dashboard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-md border hairline bg-white/85 px-4 py-3 text-[11.5px] text-[var(--ink-soft)] backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CARTO Analytics Platform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-1.5 w-1.5 rounded-full",
								style: { background: RED }
							}), "Live Spatial Analysis"]
						})]
					})
				]
			})
		})]
	});
}
function Results() {
	const [selectedResult, setSelectedResult] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "results",
		className: "border-b hairline",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-bold",
					children: "HASIL ANALISIS"
				}) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border hairline bg-[var(--hairline)] md:grid-cols-2",
				children: [
					{
						n: "01",
						t: "Distribusi Kriminalitas",
						d: "Identifikasi kawasan dengan konsentrasi kriminalitas tertinggi menggunakan KDE.",
						image: "/src/public/images/Picture1.png",
						visual: "Diagram klasifikasi kejadian kriminal di Kabupaten Kudus.",
						detail: "Sebanyak 415 kejadian kriminal di Kabupaten Kudus diklasifikasikan ke dalam sembilan kelompok kejahatan berdasarkan ICCS. Kasus didominasi oleh kejahatan terhadap hak milik tanpa kekerasan, penipuan dan penggelapan, serta kejahatan terhadap fisik yang menyebabkan luka atau menyakiti orang lain."
					},
					{
						n: "02",
						t: "Hotspot Kriminalitas",
						d: "Hubungan kriminalitas dengan kepadatan permukiman dan jaringan jalan.",
						image: "/src/public/images/Picture2.png",
						visual: "Hotspot kriminalitas yang terjadi di Kabupaten Kudus.",
						detail: "Analisis KDE menunjukkan bahwa kriminalitas di Kabupaten Kudus terkonsentrasi pada wilayah tengah kabupaten, terutama di Kecamatan Kota Kudus. Tingkat kerawanan cenderung menurun ke arah wilayah pinggiran, dengan area berkerawanan sangat rendah yang dominan di bagian selatan dan utara kabupaten."
					},
					{
						n: "03",
						t: "Analisis Zona",
						d: "Klasifikasi tingkat kerawanan kriminalitas pada setiap desa berdasarkan hasil KDE.",
						image: "/src/public/images/Picture3.png",
						visual: "Peta tingkat kerawanan kriminalitas per kecamatan hasil analisis Zonal Statistics.",
						detail: "Analisis zonal statistik digunakan untuk mengidentifikasi tingkat kerawanan kriminalitas pada setiap desa berdasarkan nilai kepadatan kriminalitas hasil KDE. Hasil klasifikasi menunjukkan bahwa wilayah dengan tingkat kerawanan sangat tinggi seluruhnya berada di Kecamatan Kota Kudus, yaitu Kelurahan Panjunan, Barongan, Wergu Wetan, Nganguk, Wergu Kulon, Mlati Lor, dan Kramat. Sementara itu, tingkat kerawanan tinggi dan sedang umumnya ditemukan pada desa-desa yang berada di sekitar pusat kota dan kecamatan yang berbatasan langsung dengan Kecamatan Kota Kudus. Sebaliknya, desa-desa yang berada lebih jauh dari pusat kabupaten, terutama di Kecamatan Undaan, Dawe, dan Gebog, didominasi oleh tingkat kerawanan rendah hingga sangat rendah."
					},
					{
						n: "04",
						t: "Analisis kepadatan permukiman",
						d: "Analisis hubungan antara kepadatan permukiman dan persebaran kejadian kriminalitas.",
						image: "/src/public/images/Picture4.png",
						visual: "Diagram distribusi jumlah kejadian kriminalitas berdasarkan tingkat kepadatan permukiman.",
						detail: "Sebagian besar kejadian kriminalitas di Kabupaten Kudus terjadi pada wilayah dengan kepadatan permukiman sedang hingga sangat tinggi. Kawasan yang lebih padat umumnya memiliki aktivitas dan interaksi penduduk yang lebih intens sehingga menciptakan lebih banyak peluang terjadinya tindak kejahatan. Temuan ini menunjukkan bahwa kepadatan permukiman merupakan salah satu karakteristik spasial yang berkaitan dengan persebaran kriminalitas."
					},
					{
						n: "05",
						t: "Analisis jaringan jalan",
						d: "Analisis keterkaitan lokasi kejadian kriminalitas terhadap jaringan jalan utama.",
						image: "/src/public/images/Picture5.png",
						visual: "Diagram distribusi jumlah kejadian kriminalitas berdasarkan jarak terhadap jaringan jalan.",
						detail: "Analisis menunjukkan bahwa kejadian kriminalitas lebih banyak ditemukan pada lokasi yang berdekatan dengan jalan utama. Jumlah kejadian cenderung menurun seiring bertambahnya jarak dari jalan, yang mengindikasikan adanya hubungan antara aksesibilitas wilayah dan peluang terjadinya kejahatan. Tingginya mobilitas manusia dan kendaraan di sekitar jalan utama diduga menjadi faktor yang mendukung pola tersebut."
					},
					{
						n: "06",
						t: "Analisis PAI",
						d: "Evaluasi kemampuan hotspot kriminalitas dalam memprediksi kejadian kriminalitas pada periode berikutnya.",
						image: "/src/public/images/Picture5.png",
						visual: "Diagram hasil evaluasi Predictive Accuracy Index (PAI) yang menunjukkan perbandingan luas hotspot dan jumlah kejadian kriminalitas yang berhasil diprediksi.",
						detail: "Nilai PAI sebesar 3,09 menunjukkan bahwa hotspot kriminalitas mampu memprediksi lokasi kejadian kriminal lebih baik dibandingkan distribusi acak. Meskipun hanya mencakup 18% luas wilayah, area hotspot berhasil mengidentifikasi 55% kejadian kriminalitas pada periode pengujian, sehingga berpotensi mendukung strategi pengawasan yang lebih efektif dan tepat sasaran."
					},
					{
						n: "07",
						t: "Uji Usabilitas",
						d: "Integrasi seluruh hasil analisis ke dalam platform WebGIS.",
						image: "/src/public/images/md6.png",
						visual: "Dashboard interaktif KRIMATLAS berbasis CARTO.",
						detail: "Hasil analisis KDE, evaluasi PAI, serta berbagai informasi spasial lainnya diintegrasikan ke dalam platform KRIMATLAS untuk mendukung eksplorasi data kriminalitas secara interaktif."
					}
				].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .08
					},
					onClick: () => setSelectedResult(r),
					className: "cursor-pointer bg-background p-8 transition hover:bg-gray-50 lg:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]",
								children: ["Hasil ", r.n]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl",
								children: "→"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-display mt-6 text-[24px] text-foreground",
							children: r.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[13.5px] leading-[1.65] text-[var(--ink-mute)]",
							children: r.d
						})
					]
				}, r.n))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedResult && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setSelectedResult(null),
			className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .95,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .95,
					opacity: 0
				},
				onClick: (e) => e.stopPropagation(),
				className: "max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs uppercase tracking-[0.14em] text-gray-500",
						children: ["Hasil ", selectedResult.n]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-3xl font-semibold",
						children: selectedResult.t
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSelectedResult(null),
						className: "text-3xl text-gray-400 transition hover:text-black",
						children: "×"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 p-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: selectedResult.image,
						alt: selectedResult.t,
						className: "w-full rounded-xl border shadow-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-lg bg-gray-50 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-gray-500",
							children: "Visualisasi"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-gray-700",
							children: selectedResult.visual
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-lg font-medium",
							children: "Interpretasi Hasil"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-8 text-gray-600",
							children: selectedResult.detail
						})]
					}) })]
				})]
			})
		}) })]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "border-b hairline relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 max-w-5xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-bold",
						children: "Dari Kudus, untuk Kudus."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-4xl text-[17px] leading-[1.9] text-[var(--ink-soft)]",
						children: "CRIMEMAP dikembangkan sebagai upaya pemanfaatan teknologi geospasial untuk memahami pola dan karakteristik kriminalitas di Kabupaten Kudus. Melalui integrasi analisis spasial dan WebGIS interaktif, platform ini dirancang untuk menyajikan informasi kriminalitas yang lebih mudah diakses, dipahami, dan dieksplorasi."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-4xl text-[17px] leading-[1.9] text-[var(--ink-soft)]",
						children: "Lebih dari sekadar luaran akademik, CRIMEMAP diharapkan dapat menjadi kontribusi bagi Kabupaten Kudus dalam mendukung pemahaman pola kriminalitas, meningkatkan kewaspadaan masyarakat, serta memperkuat pengambilan keputusan berbasis lokasi."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-px overflow-hidden rounded-xl border hairline bg-[var(--hairline)] md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]",
							children: "Peneliti"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-lg",
							children: "Bausa Seta Pandega"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]",
							children: "Institusi"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-lg",
							children: "Universitas Gadjah Mada"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]",
							children: "Program Studi"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-lg",
							children: "Teknik Geodesi"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]",
							children: "Tahun"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-lg",
							children: "2026"
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "src/public/images/ugm-logo.jpg",
			alt: "",
			className: "pointer-events-none absolute right-[-120px] top-1/2 w-[450px] -translate-y-1/2 opacity-[0.05]"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2.5 w-2.5 rounded-full",
					style: { background: RED }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-display text-[14px] font-medium",
					children: "KRIMATLAS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-3 text-[12px] text-[var(--ink-mute)]",
					children: ["© ", (/* @__PURE__ */ new Date()).getFullYear()]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex flex-wrap gap-6 text-[13px] text-[var(--ink-soft)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#introduction",
					className: "hover:text-foreground",
					children: "About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#methodology",
					className: "hover:text-foreground",
					children: "Methodology"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#about",
					className: "hover:text-foreground",
					children: "Contact"
				})
			]
		})]
	}) });
}
//#endregion
export { CrimeAtlas as component };
