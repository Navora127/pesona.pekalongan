import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Palette, Sparkles, Award, MapPin, ArrowRight, X,
  Phone, Clock, Ticket, Menu, Music, Pause, Play, Volume2, VolumeX,
} from "lucide-react";

import heroMosque from "@/assets/pekalongan-hero.jpeg";
import motifJlamprang from "@/assets/motif-jlamprang.jpeg";
import motifTujuhRupa from "@/assets/motif-tujuhrupa.jpg";
import motifBuketan from "@/assets/motif-buketan.jpeg";
import motifHokokai from "@/assets/motif-hokokai.jpeg";
import artisan from "@/assets/museum.jpeg";
import kampungBatik from "@/assets/kampungbatik.jpeg";
import pekalonganLandmark from "@/assets/pekalongan-landmark.png";
import museum from "@/assets/museum.jpeg";
import batikPattern from "@/assets/motif-pattern.jpg";
import cozyMusic from "@/assets/cozy.mpeg";

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
  { n: "01", title: "Nyungging", desc: "Membuat pola pada kertas." },
  { n: "02", title: "Njaplak", desc: "Memindahkan pola pada kertas ke kain." },
  { n: "03", title: "Nglowong", desc: "Pelekatan malam pada canting sesuai pola." },
  { n: "04", title: "Ngiseni", desc: "Pemberian motif isen pada ornamen utama." },
  { n: "05", title: "Nyolet", desc: "Pewarnaan bagian tertentu dengan kuas." },
  { n: "06", title: "Mopok", desc: "Menutup bagian yang dicolet dengan malam." },
  { n: "07", title: "Ngrentesi", desc: "Pemberian titik pada klowongan." },
  { n: "08", title: "Nyumi'i", desc: "Menutup bagian tertentu dengan malam." },
  { n: "09", title: "Nyoga", desc: "Penyelupan kain dengan warna coklat (sogan)." },
  { n: "10", title: "Nglorod", desc: "Penghilangan malam dengan merendamnya dalam air mendidih." },
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
  const [openMuseum, setOpenMuseum] = useState<string | null>(null);
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
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.08 }}
                className="p-5 rounded-2xl bg-card border border-border/70 hover:border-primary/50 transition-colors"
              >
                <span className="font-serif text-4xl text-primary/60">{s.n}</span>
                <h4 className="mt-2 font-serif text-lg">{s.title}</h4>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
              </motion.div>
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
              className="relative bg-background rounded-3xl overflow-hidden max-w-3xl w-full grid md:grid-cols-2"
            >
              <button onClick={() => setOpenMotif(null)} className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background">
                <X className="w-4 h-4" />
              </button>
              <img src={activeMotif.img} alt={activeMotif.title} className="w-full h-64 md:h-full object-cover" />
              <div className="p-8">
                <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold">{activeMotif.tag}</p>
                <h3 className="mt-2 font-serif text-3xl">{activeMotif.title}</h3>
                <p className="mt-4 text-foreground/70 leading-relaxed">{activeMotif.desc}</p>
                <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
                  Motif ini menjadi bagian penting dari identitas batik pesisir Pekalongan,
                  mencerminkan akulturasi budaya yang telah berlangsung selama berabad-abad.
                </p>
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
    </div>
  );
}
