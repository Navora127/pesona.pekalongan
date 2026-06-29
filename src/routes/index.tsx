import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Palette, Sparkles, Award, MapPin, ArrowRight, X,
  Phone, Clock, Ticket, Menu, Music, Pause, Play, Volume2, VolumeX,
} from "lucide-react";

import heroMosque from "@/assets/hero-pekalongan.jpeg";
import motifJlamprang from "@/assets/motif-jlamprang.jpeg";
import motifTujuhRupa from "@/assets/motif-tujuhrupa.jpg";
import motifBuketan from "@/assets/motif-buketan.jpeg";
import motifHokokai from "@/assets/motif-hokokai.jpeg";
import kampungBatik from "@/assets/kampungbatik.jpeg";
import pekalonganLandmark from "@/assets/pekalongan-landmark.png";
import museum from "@/assets/museum.jpeg";
import batikPattern from "@/assets/motif-pattern.jpg";
import cozyMusic from "@/assets/cozy.mpeg";

// Process step images
import imgNyungging from "@/assets/01_nyungging.png";
import imgNjaplak from "@/assets/02_njaplak.png";
import imgNglowong from "@/assets/03_nglowong.png";
import imgNgiseni from "@/assets/04_ngiseni.png";
import imgNyolet from "@/assets/05_nyolet.png";
import imgMopok from "@/assets/06_mopok.png";
import imgNgrentesi from "@/assets/07_ngrentesi.png";
import imgNyumii from "@/assets/08_nyumii.png";
import imgNyoga from "@/assets/09_nyoga.png";
import imgNglorod from "@/assets/10_nglorod.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pekalongan: Kota Batik - City of Crafts & Folk Arts" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "description", content: "Mengenal batik Pekalongan, warisan budaya UNESCO yang kaya akan sejarah, seni, dan kreativitas." },
      { property: "og:title", content: "Pekalongan: Kota Batik - City of Crafts & Folk Arts" },
      { property: "og:description", content: "Mengenal batik Pekalongan, warisan budaya UNESCO yang kaya akan sejarah, seni, dan kreativitas." },
    ],
  }),
  component: Index,
});

const motifs = [
  { id: "hokokai", tag: "Japanese Era", title: "Hokokai", desc: "Jenis batik ini lahir di masa pendudukan Jepang yang membawa pengaruh estetika Jepang seperti bunga sakura, krisan, dan kupu-kupu ke dalam ragam hias batik Indonesia. Ketika dipadukan dengan teknik pagi sore (kain dua sisi warna atau motif berbeda), lahirlah bentuk unik yang mempertemukan tekanan kolonial, adaptasi budaya, dan kreativitas lokal.", img: motifHokokai, icon: Award },
  { id: "tujuhrupa", tag: "Chinese Influence", title: "Tujuh Rupa", desc: "Warna-warna cerah dengan elemen flora dan fauna khas Tionghoa.", img: motifTujuhRupa, icon: Palette },
  { id: "jelamprang", tag: "Arabic Influence", title: "Jelamprang", desc: "Motif geometris ini terinspirasi dari kain yang dibawa oleh pedagang India. Motif ini melambangkan keteraturan, keharmonisan, dan keseimbangan hidup", img: motifJlamprang, icon: Sparkles },
  { id: "boeketan", tag: "European Influence", title: "Boeketan", desc: "Motif Boeket Gringsing merupakan perpaduan antara unsur buketan atau rangkaian bunga gaya eropa yang menggambarkan keindahan, keanggunan, dan kehalusan rasa.Sementara Grinsing, menggambarkan kekuatan spiritual dan perlindungan diri ", img: motifBuketan, icon: BookOpen },
];

const processSteps = [
  {
    n: "01", title: "Nyungging",
    desc: "Membuat pola pada kertas.",
    detail: "Nyungging adalah tahap awal dalam proses membatik, yaitu membuat sketsa atau pola desain batik di atas kertas. Pengrajin menggambar motif dengan teliti menggunakan pensil, memperhatikan setiap detail ornamen yang akan dipindahkan ke kain. Proses ini menentukan keindahan akhir motif batik dan membutuhkan keahlian seni yang tinggi.",
    img: imgNyungging,
  },
  {
    n: "02", title: "Njaplak",
    desc: "Memindahkan pola pada kertas ke kain.",
    detail: "Njaplak adalah proses memindahkan pola yang telah digambar di kertas ke permukaan kain menggunakan pensil atau kapur. Kain diletakkan di atas meja rata, kemudian pola dijiplak dengan hati-hati agar garis-garis motif tercetak dengan akurat di atas kain putih yang akan dibatik.",
    img: imgNjaplak,
  },
  {
    n: "03", title: "Nglowong",
    desc: "Pelekatan malam pada canting sesuai pola.",
    detail: "Nglowong adalah proses menuangkan malam (lilin batik) panas melalui canting mengikuti garis-garis utama pola yang sudah dijiplak. Malam berfungsi sebagai perintang warna agar bagian tertentu tidak terkena pewarna. Tahap ini membutuhkan ketenangan dan kesabaran karena kesalahan sulit diperbaiki.",
    img: imgNglowong,
  },
  {
    n: "04", title: "Ngiseni",
    desc: "Pemberian motif isen pada ornamen utama.",
    detail: "Ngiseni adalah proses mengisi bagian dalam ornamen utama dengan motif-motif pengisi (isen-isen) seperti titik-titik, garis halus, atau pola kecil lainnya. Isen-isen memberi kekayaan visual dan kedalaman pada motif batik. Proses ini sangat membutuhkan ketelitian dan ciri khas pengrajin.",
    img: imgNgiseni,
  },
  {
    n: "05", title: "Nyolet",
    desc: "Pewarnaan bagian tertentu dengan kuas.",
    detail: "Nyolet adalah proses mewarnai bagian-bagian tertentu dari motif batik menggunakan kuas kecil. Pewarna yang digunakan bisa berupa zat sintetis atau pewarna alami. Teknik ini memberikan gradasi warna yang lebih beragam pada motif batik, menciptakan tampilan yang lebih hidup dan dinamis.",
    img: imgNyolet,
  },
  {
    n: "06", title: "Mopok",
    desc: "Menutup bagian yang dicolet dengan malam.",
    detail: "Mopok adalah proses menutup kembali bagian-bagian yang sudah diwarnai dengan nyolet menggunakan malam. Tujuannya agar warna yang sudah diaplikasikan terlindungi dari pewarnaan celup berikutnya. Proses ini memerlukan ketepatan agar malam benar-benar menutupi seluruh area yang dimaksud.",
    img: imgMopok,
  },
  {
    n: "07", title: "Ngrentesi",
    desc: "Pemberian titik pada klowongan.",
    detail: "Ngrentesi adalah proses memberi titik-titik halus menggunakan canting khusus pada bagian klowongan (garis-garis utama motif) yang belum terisi. Titik-titik ini berfungsi sebagai ornamen tambahan yang memperindah batik dan menjadi salah satu ciri khas batik tulis Pekalongan yang mendetail.",
    img: imgNgrentesi,
  },
  {
    n: "08", title: "Nyumi'i",
    desc: "Menutup bagian tertentu dengan malam.",
    detail: "Nyumi'i adalah proses menutup bidang-bidang tertentu yang luas pada kain dengan malam menggunakan kuas atau canting besar. Tahap ini dilakukan sebelum proses pencelupan warna dasar agar bagian-bagian yang ingin dipertahankan warnanya tidak terkena pewarna.",
    img: imgNyumii,
  },
  {
    n: "09", title: "Nyoga",
    desc: "Penyelupan kain dengan warna coklat (sogan).",
    detail: "Nyoga adalah proses mencelup kain ke dalam larutan pewarna coklat yang disebut sogan, berasal dari kulit kayu pohon soga. Warna sogan menjadi ciri khas batik tradisional Jawa, memberikan nuansa coklat keemasan yang hangat dan alami. Proses ini dilakukan beberapa kali untuk mendapatkan kedalaman warna yang diinginkan.",
    img: imgNyoga,
  },
  {
    n: "10", title: "Nglorod",
    desc: "Penghilangan malam dengan merendamnya dalam air mendidih.",
    detail: "Nglorod adalah tahap akhir proses membatik, yaitu menghilangkan seluruh malam yang melekat pada kain dengan cara merendam dan merebus kain dalam air mendidih yang dicampur abu atau soda abu. Setelah malam larut, kain dicuci bersih dan dikeringkan, sehingga motif batik yang indah pun terungkap secara sempurna.",
    img: imgNglorod,
  },
];

const navItems = [
  { id: "history", label: "History" },
  { id: "motifs", label: "Motifs" },
  { id: "process", label: "Procces" },
  { id: "statistics", label: "Facts" },
  { id: "destination", label: "Destination" },
];

// Museum locations for interactive map
const museums = [
  {
    id: "batik",
    name: "Museum Batik Pekalongan",
    tag: "Museum Utama",
    address: "Jl. Jetayu No.1, Pekalongan, Jawa Tengah 51141",
    hours: "Senin – Sabtu · 08.00 – 15.00",
    ticket: "Rp 7.000 / orang",
    phone: "(0285) 431698",
    desc: "Menyimpan ribuan koleksi batik dari berbagai daerah, ruang pameran bersejarah, serta area workshop untuk mempelajari dan mempraktikkan proses membatik.",
    img: museum,
    // SVG map coordinates (percent)
    x: 42, y: 38,
    coords: "-6.8825, 109.6753",
    exploreUrl: "https://linktr.ee/museumbatikpekalongan",
    mapsUrl: "https://maps.app.goo.gl/Ge5vz9hQKn6vQ1mR7?g_st=aw",
  },
  {
    id: "kampung",
    name: "Kampung Batik Kauman",
    tag: "Sentra Pengrajin",
    address: "Kauman, Pekalongan Timur, Jawa Tengah",
    hours: "Setiap hari · 09.00 – 17.00",
    ticket: "Gratis",
    phone: "(0285) 421433",
    desc: "Kampung batik tertua dengan deretan rumah pengrajin yang masih aktif memproduksi batik tulis halus, lengkap dengan galeri dan demo membatik.",
    img: kampungBatik,
    x: 58, y: 55,
    coords: "-6.8893, 109.6745",
    exploreUrl: "https://www.kampoengbatikkauman.com/",
    mapsUrl: "https://maps.app.goo.gl/F2MtCUrb58WX3j8PA?g_st=aw",
  },
];

function Index() {
  const [active, setActive] = useState("history");
  const [openMotif, setOpenMotif] = useState<string | null>(null);
  const [motifSlideDir, setMotifSlideDir] = useState<1 | -1>(1);
  const [openMuseum, setOpenMuseum] = useState<string | null>(null);
  const [openProcessIndex, setOpenProcessIndex] = useState<number | null>(null);
  const [slideDir, setSlideDir] = useState<1 | -1>(1);
  const [zoomImg, setZoomImg] = useState<{ src: string; alt: string } | null>(null);
  const [navOpen, setNavOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showPlayer, setShowPlayer] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Collapse player saat scroll, expand saat berhenti
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      setIsCollapsed(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsCollapsed(false), 1500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { window.removeEventListener("scroll", handleScroll); clearTimeout(timeout); };
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Audio handlers
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (audioRef.current) audioRef.current.volume = val;
    setVolume(val);
  };

  const activeMotif = motifs.find((m) => m.id === openMotif);
  const activeMuseum = museums.find((m) => m.id === openMuseum);
  const activeProcess = openProcessIndex !== null ? processSteps[openProcessIndex] : null;

  const goNextProcess = () => {
    setSlideDir(1);
    setOpenProcessIndex((i) => (i === null ? 0 : (i + 1) % processSteps.length));
  };
  const goPrevProcess = () => {
    setSlideDir(-1);
    setOpenProcessIndex((i) => (i === null ? 0 : (i - 1 + processSteps.length) % processSteps.length));
  };

  const activeMotifIndex = motifs.findIndex((m) => m.id === openMotif);
  const goNextMotif = () => {
    setMotifSlideDir(1);
    const next = (activeMotifIndex + 1) % motifs.length;
    setOpenMotif(motifs[next].id);
  };
  const goPrevMotif = () => {
    setMotifSlideDir(-1);
    const prev = (activeMotifIndex - 1 + motifs.length) % motifs.length;
    setOpenMotif(motifs[prev].id);
  };

  // ESC key to close modals
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomImg(null);
        setOpenProcessIndex(null);
        setOpenMotif(null);
        setOpenMuseum(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ ["--batik-pattern-image" as any]: `url(${batikPattern})` }}
    >
      {/* ===== NAVIGATION ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
          <a href="#top" className="font-serif text-base font-semibold tracking-tight text-ink/90 md:hidden">
            Pekalongan Batik
          </a>
          <nav className="hidden md:flex items-center justify-center gap-12 text-[15px] font-serif w-full">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                data-active={active === n.id}
                className="story-link text-ink/85 hover:text-ink transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <AnimatePresence>
          {navOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border bg-cream"
            >
              <div className="px-6 py-4 flex flex-col gap-3 text-sm font-serif">
                {navItems.map((n) => (
                  <a key={n.id} href={`#${n.id}`} onClick={() => setNavOpen(false)} className="py-1 underline underline-offset-4">
                    {n.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>


      {/* ===== AUDIO ===== */}
      <audio ref={audioRef} src={cozyMusic} loop preload="auto" />

      {/* ===== MUSIC PLAYER (floating) ===== */}
      <AnimatePresence>
        {showPlayer && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed bottom-5 right-4 z-50"
          >
            <AnimatePresence mode="wait">
              {isCollapsed ? (
                // Mode collapsed — hanya ikon kecil
                <motion.button
                  key="collapsed"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsCollapsed(false)}
                  className="w-10 h-10 rounded-full bg-card/95 backdrop-blur border border-border/60 shadow-lg flex items-center justify-center"
                  aria-label="Buka music player"
                >
                  {isPlaying
                    ? <Music className="w-4 h-4 text-primary animate-pulse" />
                    : <Music className="w-4 h-4 text-primary/50" />}
                </motion.button>
              ) : (
                // Mode expand — full player
                <motion.div
                  key="expanded"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-card/95 backdrop-blur border border-border/60 shadow-lg"
                >
                  {/* Album icon */}
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Music className="w-4 h-4 text-primary" />
                  </div>

                  {/* Label */}
                  <div className="hidden sm:block min-w-0">
                    <p className="text-[10px] font-semibold text-foreground leading-none truncate max-w-[90px]">Cozy Batik</p>
                    <p className="text-[9px] text-foreground/50 leading-none mt-0.5">Background Music</p>
                  </div>

                  {/* Play / Pause */}
                  <button
                    onClick={togglePlay}
                    className="w-7 h-7 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying
                      ? <Pause className="w-3.5 h-3.5 text-primary-foreground" />
                      : <Play className="w-3.5 h-3.5 text-primary-foreground translate-x-px" />}
                  </button>

                  {/* Mute */}
                  <button
                    onClick={toggleMute}
                    className="w-6 h-6 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors shrink-0"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted
                      ? <VolumeX className="w-3.5 h-3.5" />
                      : <Volume2 className="w-3.5 h-3.5" />}
                  </button>

                  {/* Volume slider — only on sm+ */}
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolume}
                    className="hidden sm:block w-16 accent-[var(--terracotta)] cursor-pointer"
                    aria-label="Volume"
                  />

                  {/* Close */}
                  <button
                    onClick={() => { setShowPlayer(false); if (audioRef.current) audioRef.current.pause(); setIsPlaying(false); }}
                    className="w-5 h-5 flex items-center justify-center text-foreground/40 hover:text-foreground transition-colors shrink-0"
                    aria-label="Tutup player"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== HERO ===== */}
      <section id="top" className="relative min-h-screen flex items-start lg:items-end overflow-hidden pt-16">
        <img
          src={heroMosque}
          alt="Masjid Agung Pekalongan"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 sm:pb-24 lg:pt-0 lg:pb-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-cream text-ink text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase shadow-sm">
              City of Crafts & Folk Arts
            </span>
            <h1 className="mt-4 sm:mt-6 font-serif text-[2.5rem] sm:text-5xl md:text-7xl leading-[1.05] text-cream drop-shadow-md">
              Pekalongan :<br />Kota Batik
            </h1>
            <p className="mt-3 sm:mt-6 text-sm sm:text-base md:text-lg text-cream/90 max-w-xl leading-relaxed drop-shadow">
              Mengenal batik Pekalongan, warisan budaya yang kaya akan sejarah,
              seni, dan kreativitas.
            </p>
            <div className="mt-5 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
              <a
                href="#history"
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-cream text-ink font-medium text-xs sm:text-sm hover:bg-cream/90 transition-colors shadow-sm"
              >
                Pelajari warisan
              </a>
              <a
                href="#motifs"
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-rose text-cream font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                Galeri Motif
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== HISTORY ===== */}
      <section id="history" className="batik-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-foreground/40" />
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">Sejak 1800-an</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Asal-usul & Sejarah</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Batik Pekalongan diperkirakan sudah ada sejak sekitar tahun 1800. Dikenal
              dengan pengaruh lintas budaya yang kaya: <strong>Tionghoa</strong> memberikan
              warna-warna cerah, <strong>Belanda</strong> memperkenalkan motif bunga Eropa
              (Buketan), dan era <strong>Jepang</strong> membawa kerumitan motif Hokokai.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Akulturasi ini melahirkan identitas "Batik Pesisir" yang dinamis, berani,
              dan selalu relevan dengan perkembangan zaman, menjadikannya napas utama
              ekonomi kota.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src={pekalonganLandmark} alt="Landmark Pekalongan World's City of Batik" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== MOTIFS ===== */}
      <section id="motifs" className="py-24 lg:py-32" style={{ backgroundColor: "#593d31" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/60">Galeri Warisan</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-cream">Galeri Warisan</h2>
            <p className="mt-4 text-cream/70 leading-relaxed">
              Setiap guratan lilin menceritakan kisah perjalanan budaya yang melintasi
              samudera dan waktu. Sentuh kartu untuk mengetahui detailnya.
            </p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {motifs.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.button
                  key={m.id}
                  onClick={() => setOpenMotif(m.id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group text-left rounded-3xl overflow-hidden bg-card border border-border/70 shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold">{m.tag}</p>
                    <h3 className="mt-2 font-serif text-2xl">{m.title}</h3>
                    <p className="mt-2 text-sm text-foreground/65 line-clamp-2">{m.desc}</p>
                    <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Explore <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="batik-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">Proses</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Seni di balik kain</h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Proses panjang penuh ketelitian untuk tetap menjaga kualitas
              setiap serat kain Pekalongan.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {processSteps.map((s, i) => (
              <motion.button
                key={s.n}
                onClick={() => { setSlideDir(1); setOpenProcessIndex(i); }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.08 }}
                whileHover={{ scale: 1.04, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group text-left p-5 rounded-2xl bg-card border border-border/70 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer"
              >
                <span className="font-serif text-4xl text-primary/60">{s.n}</span>
                <h4 className="mt-2 font-serif text-lg">{s.title}</h4>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed line-clamp-3">{s.desc}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Explore <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>


      {/* ===== STATISTICS ===== */}
      <section id="statistics" className="py-24 lg:py-32" style={{ backgroundColor: "#593d31" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/60">Fakta dan Pencapaian</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-cream">Fakta & Pencapaian</h2>
          </div>


          <div className="grid md:grid-cols-3 gap-6">
            {[
              { k: "2009", l: "UNESCO Heritage", d: "Batik Indonesia diakui UNESCO sebagai Warisan Budaya Takbenda Dunia karena nilai budaya dan tradisinya yang terus dilestarikan." },
              { k: "2014", l: "UNESCO Creative Cities Network (UCCN)", d: "Pekalongan menjadi bagian dari anggota jaringan UNESCO Creative Cities Network (UCCN) kategori Kerajinan dan Kesenian Rakyat." },
              { k: "Kota Batik", l: "World's City Of Batik", d: "Pekalongan meluncurkan branding \"World's City Of Batik\" sebagai simbol identitas kota." },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-accent/60 to-cream border border-border/60"
              >
                <p className="font-serif text-5xl text-primary">{s.k}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] font-semibold">{s.l}</p>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESTINATION (INTERACTIVE) ===== */}
      <section id="destination" className="batik-bg relative py-12 sm:py-24 lg:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-8 sm:mb-16">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-foreground/60">Destinasi Budaya</span>
            <h2 className="mt-4 font-serif text-2xl sm:text-4xl lg:text-5xl">Jelajahi museum & sentra batik</h2>
            <p className="mt-4 text-xs sm:text-sm text-foreground/70 leading-relaxed">
              Dua destinasi pilihan untuk menyelami warisan batik Pekalongan secara
              langsung. Klik pin pada peta atau kartu di bawah untuk detail lengkap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-10 items-start">
            {/* Interactive map */}
            <div className="lg:col-span-2 relative h-80 sm:h-96 lg:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#593d31] bg-card p-2 sm:p-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="oklch(0.3 0.04 38 / 0.12)" strokeWidth="0.3" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
                {/* Stylized coastline */}
                <path
                  d="M0,18 Q20,22 35,17 T70,20 T100,15 L100,0 L0,0 Z"
                  fill="oklch(0.32 0.045 45 / 0.18)"
                />
                <path
                  d="M0,18 Q20,22 35,17 T70,20 T100,15"
                  stroke="oklch(0.32 0.045 45 / 0.5)" strokeWidth="0.4" fill="none"
                />
                <text x="50" y="10" textAnchor="middle" className="fill-foreground/50" fontSize="3">LAUT JAWA</text>
                <text x="50" y="92" textAnchor="middle" className="fill-foreground/50" fontSize="2.5" letterSpacing="0.3">PEKALONGAN</text>

                {museums.map((m) => {
                  const isActive = openMuseum === m.id;
                  return (
                    <g
                      key={m.id}
                      onClick={() => window.open(m.mapsUrl, "_blank", "noopener,noreferrer")}
                      className="cursor-pointer"
                    >
                      <title>Buka di Google Maps — {m.name}</title>
                      <circle
                        cx={m.x} cy={m.y} r={isActive ? 4 : 3}
                        fill="var(--terracotta)"
                        className="transition-all"
                      >
                        <animate attributeName="r" values={`${isActive ? 4 : 3};${isActive ? 5.5 : 4.5};${isActive ? 4 : 3}`} dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx={m.x} cy={m.y} r="1.4" fill="var(--cream)" />
                      <text
                        x={m.x} y={m.y - 5}
                        textAnchor="middle" fontSize="2.4"
                        className="fill-foreground font-medium pointer-events-none"
                      >
                        {m.name.split(" ").slice(0, 2).join(" ")}
                      </text>
                    </g>
                  );
                })}
              </svg>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 flex items-center gap-1 sm:gap-2 text-[9px] sm:text-[11px] text-foreground/60">
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" /> Klik pin untuk Google Maps
              </div>
            </div>

            {/* Cards */}
            <div className="lg:col-span-3 grid gap-3 sm:gap-4">
              {museums.map((m, i) => (
                <motion.button
                  key={m.id}
                  onClick={() => setOpenMuseum(m.id)}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group text-left flex flex-row gap-3 sm:gap-4 p-3 sm:p-6 rounded-2xl bg-card hover:bg-card/80 border-2 border-[#593d31] hover:border-[#7a5544] transition-all items-start"
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-20 h-20 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-xl object-cover shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-primary font-semibold">{m.tag}</p>
                    <h3 className="mt-0.5 font-serif text-base sm:text-2xl leading-snug">{m.name}</h3>
                    <p className="mt-1 text-[11px] sm:text-sm text-foreground/65 flex items-start gap-1">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{m.address}</span>
                    </p>
                    <p className="mt-0.5 text-[10px] sm:text-xs text-foreground/60 hidden sm:block">Koordinat: {m.coords}</p>
                    <span className="mt-2 sm:mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary">
                      Explore <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ===== FOOTER ===== */}
      <footer className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-serif text-2xl">World's City Of Batik</p>
            <p className="mt-4 text-sm text-foreground/65 max-w-md leading-relaxed">
              Batik Pekalongan bukan sekadar kain yang bermotif, melainkan warisan budaya
              yang terus hidup melalui tradisi, kreativitas, dan dedikasi para pengrajinnya.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-foreground/50 mb-4">Jelajahi</p>
            <ul className="space-y-2 text-sm">
              {navItems.map((n) => (
                <li key={n.id}><a href={`#${n.id}`} className="hover:text-primary transition-colors">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-foreground/50 mb-4">Sumber Informasi</p>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Pemerintah Kabupaten Pekalongan</li>
              <li>UNESCO</li>
              <li>Museum Batik Pekalongan</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 text-xs text-foreground/55 flex flex-wrap justify-between gap-3">
            <p>© 2026 Kelompok 2 Multimedia — UIN KH. Abdurrahman Wahid Pekalongan</p>
            <p>Terms & Support · Privacy Policy</p>
          </div>
        </div>
      </footer>

      {/* ===== MOTIF MODAL ===== */}
      <AnimatePresence>
        {activeMotif && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpenMotif(null)}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background rounded-3xl overflow-hidden max-w-3xl w-full flex flex-col md:grid md:grid-cols-2"
              style={{ maxHeight: "88dvh" }}
            >
              {/* Close */}
              <button onClick={() => setOpenMotif(null)} className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background border border-border/50 transition-colors">
                <X className="w-4 h-4" />
              </button>

              {/* Image with slide */}
              <div className="relative overflow-hidden h-52 md:h-auto">
                <AnimatePresence mode="wait" custom={motifSlideDir}>
                  <motion.img
                    key={activeMotif.id}
                    custom={motifSlideDir}
                    variants={{
                      enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
                    }}
                    initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    src={activeMotif.img}
                    alt={activeMotif.title}
                    className="w-full h-full object-cover cursor-zoom-in"
                    onClick={() => setZoomImg({ src: activeMotif.img, alt: activeMotif.title })}
                  />
                </AnimatePresence>
                {/* Zoom hint */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-background/80 backdrop-blur flex items-center justify-center pointer-events-none">
                  <svg className="w-3.5 h-3.5 text-foreground/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
                {/* Progress dots */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                  {motifs.map((m, idx) => (
                    <button
                      key={m.id}
                      onClick={() => { setMotifSlideDir(idx > activeMotifIndex ? 1 : -1); setOpenMotif(m.id); }}
                      className={`rounded-full transition-all duration-300 ${m.id === openMotif ? "w-5 h-2 bg-cream" : "w-2 h-2 bg-cream/50 hover:bg-cream/80"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 md:p-8 min-h-0 overflow-y-auto">
                {/* Counter */}
                <p className="text-[10px] text-foreground/40 uppercase tracking-[0.18em] mb-3">
                  {activeMotifIndex + 1} dari {motifs.length}
                </p>
                <AnimatePresence mode="wait" custom={motifSlideDir}>
                  <motion.div
                    key={activeMotif.id}
                    custom={motifSlideDir}
                    variants={{
                      enter: (dir: number) => ({ x: dir * 30, opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (dir: number) => ({ x: dir * -30, opacity: 0 }),
                    }}
                    initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-1"
                  >
                    <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold">{activeMotif.tag}</p>
                    <h3 className="mt-2 font-serif text-2xl md:text-3xl">{activeMotif.title}</h3>
                    <p className="mt-4 text-foreground/70 leading-relaxed text-sm">{activeMotif.desc}</p>
                    <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
                      Motif ini menjadi bagian penting dari identitas batik pesisir Pekalongan,
                      mencerminkan akulturasi budaya yang telah berlangsung selama berabad-abad.
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Prev / Next */}
                <div className="flex items-center justify-between gap-3 mt-6 pt-5 border-t border-border shrink-0">
                  <button
                    onClick={goPrevMotif}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs sm:text-sm font-medium hover:bg-muted transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Previous
                  </button>
                  <button
                    onClick={goNextMotif}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== MUSEUM MODAL ===== */}
      <AnimatePresence>
        {activeMuseum && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpenMuseum(null)}
            className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button onClick={() => setOpenMuseum(null)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background">
                <X className="w-4 h-4" />
              </button>
              <img src={activeMuseum.img} alt={activeMuseum.name} className="w-full h-64 md:h-80 object-cover" />
              <div className="p-8 md:p-10">
                <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold">{activeMuseum.tag}</p>
                <h3 className="mt-2 font-serif text-3xl md:text-4xl">{activeMuseum.name}</h3>
                <p className="mt-4 text-foreground/70 leading-relaxed">{activeMuseum.desc}</p>

                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-muted">
                    <Clock className="w-4 h-4 text-primary mb-2" />
                    <p className="text-[10px] uppercase tracking-wider text-foreground/55">Jam Buka</p>
                    <p className="text-sm mt-1">{activeMuseum.hours}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted">
                    <Ticket className="w-4 h-4 text-primary mb-2" />
                    <p className="text-[10px] uppercase tracking-wider text-foreground/55">Tiket</p>
                    <p className="text-sm mt-1">{activeMuseum.ticket}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted">
                    <Phone className="w-4 h-4 text-primary mb-2" />
                    <p className="text-[10px] uppercase tracking-wider text-foreground/55">Kontak</p>
                    <p className="text-sm mt-1">{activeMuseum.phone}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={activeMuseum.exploreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={activeMuseum.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-medium text-sm hover:bg-muted transition-colors"
                  >
                    <MapPin className="w-4 h-4" /> Lihat Peta
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ===== PROCESS MODAL ===== */}
      <AnimatePresence>
        {activeProcess !== null && openProcessIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpenProcessIndex(null)}
            className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background rounded-3xl overflow-hidden w-full max-w-[900px] flex flex-col md:flex-row"
              style={{ maxHeight: "88dvh" }}
            >
              {/* Close button */}
              <button
                onClick={() => setOpenProcessIndex(null)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background border border-border/50 transition-colors"
                aria-label="Tutup modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image — left on desktop, top on mobile (fixed height, no shrink) */}
              <div className="w-full md:w-[45%] shrink-0 relative overflow-hidden h-44 sm:h-56 md:h-auto md:min-h-[460px]">
                <AnimatePresence mode="wait" custom={slideDir}>
                  <motion.img
                    key={openProcessIndex}
                    custom={slideDir}
                    variants={{
                      enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    src={activeProcess.img}
                    alt={activeProcess.title}
                    className="w-full h-full object-cover cursor-zoom-in"
                    onClick={() => setZoomImg({ src: activeProcess.img, alt: activeProcess.title })}
                  />
                </AnimatePresence>
                {/* Zoom hint */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-background/80 backdrop-blur flex items-center justify-center pointer-events-none">
                  <svg className="w-3.5 h-3.5 text-foreground/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
                {/* Step number overlay */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-background/90 backdrop-blur flex items-center justify-center shadow">
                  <span className="font-serif text-base font-bold text-primary">{activeProcess.n}</span>
                </div>
              </div>

              {/* Content — right on desktop, bottom on mobile */}
              <div className="flex-1 flex flex-col min-h-0 p-5 sm:p-7 md:p-10">
                {/* Progress indicator — always visible */}
                <div className="flex items-center gap-2 mb-4 shrink-0">
                  <span className="text-[10px] text-foreground/50 uppercase tracking-[0.18em] font-medium shrink-0">
                    {openProcessIndex + 1} dari {processSteps.length}
                  </span>
                  <div className="flex-1 h-1 rounded-full bg-border overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={false}
                      animate={{ width: `${((openProcessIndex + 1) / processSteps.length) * 100}%` }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                {/* Scrollable text area */}
                <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                  <AnimatePresence mode="wait" custom={slideDir}>
                    <motion.div
                      key={openProcessIndex}
                      custom={slideDir}
                      variants={{
                        enter: (dir: number) => ({ x: dir * 40, opacity: 0 }),
                        center: { x: 0, opacity: 1 },
                        exit: (dir: number) => ({ x: dir * -40, opacity: 0 }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
                        Proses {activeProcess.n}
                      </span>
                      <h3 className="mt-1.5 font-serif text-2xl sm:text-3xl md:text-4xl">{activeProcess.title}</h3>
                      <p className="mt-3 text-foreground/70 leading-relaxed text-xs sm:text-sm md:text-base pb-2">
                        {activeProcess.detail}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Step dots — always visible */}
                <div className="flex items-center justify-center gap-1.5 mt-4 shrink-0">
                  {processSteps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setSlideDir(idx > openProcessIndex ? 1 : -1); setOpenProcessIndex(idx); }}
                      aria-label={`Proses ${idx + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        idx === openProcessIndex
                          ? "w-5 h-2 bg-primary"
                          : "w-2 h-2 bg-border hover:bg-primary/40"
                      }`}
                    />
                  ))}
                </div>

                {/* Prev / Next buttons — always visible at bottom */}
                <div className="flex items-center justify-between gap-3 mt-4 pt-4 border-t border-border shrink-0">
                  <button
                    onClick={goPrevProcess}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs sm:text-sm font-medium hover:bg-muted transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Previous
                  </button>
                  <button
                    onClick={goNextProcess}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ===== IMAGE LIGHTBOX ===== */}
      <AnimatePresence>
        {zoomImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImg(null)}
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setZoomImg(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={zoomImg.src}
              alt={zoomImg.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-5 left-0 right-0 text-center text-white/60 text-sm">
              {zoomImg.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
