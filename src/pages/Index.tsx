import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const ACID = "#CCFF00";

const useInView = (threshold = 0.12) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
    }}>
      {children}
    </div>
  );
};

const events = [
  {
    id: 1,
    img: "https://cdn.poehali.dev/files/673425be-f279-47c6-9152-b959abbcc0a7.jpg",
    title: "DABABY",
    subtitle: "Exclusive Show",
    date: "15 МАР",
    year: "2026",
    venue: "VK Стадиум, Москва",
    genre: "Hip-Hop",
    price: "от 3 500 ₽",
    status: "hot",
  },
  {
    id: 2,
    img: "https://cdn.poehali.dev/files/d603fbda-05ad-4311-9870-cc2a7a0322e1.jpg",
    title: "TYGA",
    subtitle: "World Tour",
    date: "22 МАЯ",
    year: "2026",
    venue: "ЦСКА Арена, Москва",
    genre: "Hip-Hop / R&B",
    price: "от 4 000 ₽",
    status: "sale",
  },
  {
    id: 3,
    img: "https://cdn.poehali.dev/files/fc88bfa1-e9e6-4567-89a1-dde27dc4d578.jpg",
    title: "ФЕСТИВАЛЬ",
    subtitle: "Иваново Поле 2026",
    date: "12–14 ИЮН",
    year: "2026",
    venue: "Открытая площадка, МО",
    genre: "Фестиваль",
    price: "от 2 500 ₽",
    status: "new",
  },
  {
    id: 4,
    img: "https://cdn.poehali.dev/files/7185dfe1-0e2d-421e-83d8-6131fba0fb1d.jpg",
    title: "АМНЕЗИЯ",
    subtitle: "Большой концерт",
    date: "5 ИЮЛ",
    year: "2026",
    venue: "Live Arena, Москва",
    genre: "Рэп",
    price: "от 2 000 ₽",
    status: null,
  },
  {
    id: 5,
    img: "https://cdn.poehali.dev/files/209c2bde-6a3f-44b9-9b10-7e36222362da.jpg",
    title: "КОННОЕ ГАЛ\u200bА-ШОУ",
    subtitle: "Грандиозное представление",
    date: "19 АВГ",
    year: "2026",
    venue: "Live Arena, Москва",
    genre: "Шоу",
    price: "от 1 800 ₽",
    status: null,
  },
  {
    id: 6,
    img: "https://cdn.poehali.dev/files/673425be-f279-47c6-9152-b959abbcc0a7.jpg",
    title: "РЫЦАРСКИЙ ТУРНИР",
    subtitle: "Историческое шоу",
    date: "10 СЕН",
    year: "2026",
    venue: "Live Arena, Москва",
    genre: "Шоу",
    price: "от 1 500 ₽",
    status: null,
  },
];

const services = [
  { icon: "Mic2", title: "Концерты и туры", desc: "Организация концертов любого масштаба — от клубных вечеринок до стадионных шоу" },
  { icon: "Music", title: "Фестивали", desc: "Создание фестивальных брендов с нуля и масштабирование существующих проектов" },
  { icon: "Users", title: "Бренд-интеграции", desc: "Партнёрства с федеральными брендами для совместных событий и промо" },
  { icon: "Tv", title: "Медиа-проекты", desc: "Съёмки, трансляции и создание медиаконтента вокруг событий" },
  { icon: "Building2", title: "Инфраструктура", desc: "Собственные площадки и партнёрская сеть по всей России" },
  { icon: "TrendingUp", title: "Продвижение", desc: "Полный цикл маркетинга: от SMM до федеральных PR-кампаний" },
];

const cases = [
  { num: "14 200", label: "билетов", event: "Конное Гала-Шоу", venue: "Live Arena 2023" },
  { num: "12 500+", label: "билетов", event: "TYGA в Москве", venue: "ЦСКА Арена 2025" },
  { num: "5 500+", label: "билетов", event: "DABABY Concert", venue: "VK Стадиум 2025" },
  { num: "25 000", label: "билетов", event: "Иваново Поле", venue: "Сезон 2024" },
];

const StatusBadge = ({ status }: { status: string | null }) => {
  if (!status) return null;
  const map: Record<string, { label: string; bg: string; color: string }> = {
    hot: { label: "🔥 Хит", bg: "#ff3b30", color: "#fff" },
    sale: { label: "ПРОДАЖА", bg: ACID, color: "#000" },
    new: { label: "НОВИНКА", bg: "#fff", color: "#000" },
  };
  const s = map[status];
  return (
    <span className="font-oswald text-xs font-bold px-2 py-1 tracking-wider" style={{ background: s.bg, color: s.color }}>
      {s.label}
    </span>
  );
};

const EventCard = ({ ev }: { ev: typeof events[0] }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{ border: `1px solid rgba(255,255,255,0.1)` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={ev.img}
          alt={ev.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            filter: "grayscale(100%)",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85) 100%)" }} />
        <div className="absolute top-3 left-3">
          <StatusBadge status={ev.status} />
        </div>
        <div className="absolute bottom-3 left-3">
          <div className="font-oswald font-bold text-xs tracking-widest px-2 py-0.5" style={{ background: ACID, color: "#000" }}>
            {ev.genre}
          </div>
        </div>
        <div className="absolute bottom-3 right-3 text-right">
          <div className="font-bebas text-3xl leading-none" style={{ color: ACID }}>{ev.date}</div>
          <div className="font-oswald text-xs text-gray-300">{ev.year}</div>
        </div>
      </div>
      <div style={{ background: "#111", borderTop: `2px solid ${hovered ? ACID : "transparent"}`, transition: "border-color 0.3s" }}
        className="p-4">
        <h3 className="font-bebas text-2xl leading-none tracking-wide text-white mb-1">{ev.title}</h3>
        <p className="font-ibm text-gray-400 text-sm mb-3">{ev.subtitle}</p>
        <div className="flex items-center gap-1 mb-4">
          <Icon name="MapPin" size={12} className="text-gray-500" />
          <span className="font-ibm text-xs text-gray-500">{ev.venue}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-oswald font-semibold text-sm text-white">{ev.price}</span>
          <button
            style={{
              background: hovered ? ACID : "transparent",
              color: hovered ? "#000" : ACID,
              border: `1px solid ${ACID}`,
              transition: "all 0.3s",
            }}
            className="font-oswald font-bold text-xs px-4 py-2 tracking-wider uppercase"
          >
            Купить билет
          </button>
        </div>
      </div>
    </div>
  );
};

const navLinks = [
  { label: "Афиша", href: "#events" },
  { label: "О нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Контакты", href: "#contact" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Все");
  const filters = ["Все", "Концерты", "Фестивали", "Шоу"];

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 80);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = events.filter(e => {
    if (activeFilter === "Все") return true;
    if (activeFilter === "Концерты") return e.genre.includes("Hip-Hop") || e.genre.includes("Рэп") || e.genre.includes("R&B");
    if (activeFilter === "Фестивали") return e.genre === "Фестиваль";
    if (activeFilter === "Шоу") return e.genre === "Шоу";
    return true;
  });

  return (
    <div style={{ background: "#000", color: "#fff" }} className="font-ibm overflow-x-hidden">

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(204,255,0,0.15)" : "none",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          <a href="#" className="font-bebas text-2xl tracking-widest" style={{ color: ACID }}>
            GLOBAL PROMO
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                className="font-oswald text-sm tracking-wider text-gray-300 uppercase transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = ACID)}
                onMouseLeave={e => (e.currentTarget.style.color = "#d1d5db")}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" style={{ background: ACID, color: "#000" }}
              className="font-oswald font-bold text-sm px-5 py-2 tracking-wider hover:opacity-80 transition-opacity">
              Связаться
            </a>
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: "#000", borderTop: `1px solid ${ACID}` }} className="md:hidden px-6 py-6 flex flex-col gap-5">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="font-oswald text-lg tracking-wider text-white uppercase">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              style={{ background: ACID, color: "#000" }}
              className="font-oswald font-bold text-sm px-5 py-3 tracking-wider text-center">
              Связаться
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col justify-end" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/files/673425be-f279-47c6-9152-b959abbcc0a7.jpg"
            alt="hero"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(100%)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%)" }} />
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: ACID }} />
        </div>
        <div className="relative z-10 px-6 md:px-16 pb-16 md:pb-24">
          <div style={{
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 1s 0.2s ease, transform 1s 0.2s ease",
          }}>
            <p className="font-oswald text-sm tracking-[0.3em] uppercase mb-4" style={{ color: ACID }}>
              Концертное агентство
            </p>
            <h1 className="font-bebas leading-none tracking-wide uppercase text-white mb-4"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}>
              Создаём события,<br />
              <span style={{ color: ACID }}>которые помнят</span>
            </h1>
            <p className="font-ibm text-gray-300 text-lg md:text-xl max-w-lg mb-10">
              Организуем концерты, туры и фестивали мирового уровня в России с 2016 года
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#events" style={{ background: ACID, color: "#000" }}
                className="font-oswald font-bold text-base px-8 py-4 tracking-wider hover:opacity-85 transition-opacity uppercase">
                Смотреть афишу
              </a>
              <a href="#about" style={{ border: `1px solid rgba(255,255,255,0.4)`, color: "#fff" }}
                className="font-oswald font-bold text-base px-8 py-4 tracking-wider hover:border-white transition-colors uppercase">
                О компании
              </a>
            </div>
          </div>
          <div style={{
            borderTop: `1px solid rgba(204,255,0,0.3)`,
            opacity: heroLoaded ? 1 : 0,
            transition: "opacity 1s 0.8s ease",
          }} className="mt-14 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "250+", label: "Мероприятий" },
              { num: "10 лет", label: "На рынке" },
              { num: "2 млн+", label: "Зрителей" },
              { num: "50+", label: "Партнёров" },
            ].map(s => (
              <div key={s.label}>
                <div className="font-bebas text-3xl md:text-4xl" style={{ color: ACID }}>{s.num}</div>
                <div className="font-ibm text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 right-8 hidden md:block" style={{ animation: "bounce 2s infinite" }}>
          <Icon name="ChevronDown" size={24} style={{ color: ACID }} />
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-20 px-6 md:px-16">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-oswald text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACID }}>— Ближайшие события</p>
            <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide uppercase text-white">
              АФИША
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                style={{
                  background: activeFilter === f ? ACID : "transparent",
                  color: activeFilter === f ? "#000" : "#fff",
                  border: `1px solid ${activeFilter === f ? ACID : "rgba(255,255,255,0.25)"}`,
                }}
                className="font-oswald text-sm font-semibold px-5 py-2 tracking-wider transition-all duration-200 uppercase">
                {f}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((ev, i) => (
            <Reveal key={ev.id} delay={i * 0.08}>
              <EventCard ev={ev} />
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-12">
          <button style={{ border: `1px solid rgba(204,255,0,0.4)`, color: ACID }}
            className="font-oswald font-semibold text-sm px-10 py-4 tracking-widest uppercase transition-all duration-300"
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = ACID; (e.currentTarget as HTMLElement).style.color = "#000"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = ACID; }}
          >
            Все мероприятия
          </button>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 md:px-16" style={{ background: "#080808" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/fc88bfa1-e9e6-4567-89a1-dde27dc4d578.jpg"
                alt="о нас"
                className="w-full object-cover"
                style={{ filter: "grayscale(100%)", aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-4 -right-4 px-6 py-4 font-bebas text-xl tracking-wide"
                style={{ background: ACID, color: "#000" }}>
                С 2016 ГОДА
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-oswald text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACID }}>— О компании</p>
              <h2 className="font-bebas text-5xl md:text-6xl leading-none tracking-wide uppercase text-white mb-6">
                GLOBAL PROMO —<br />
                <span style={{ color: ACID }}>продюсерская</span><br />
                платформа
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-ibm text-gray-400 text-base leading-relaxed mb-6">
                Мы организуем концерты, туры и фестивали мирового уровня, объединяя артистов,
                площадки и аудиторию. Стратегия — стать владельцем активов и войти в топ-3
                медиакомпаний России.
              </p>
              <p className="font-ibm text-gray-400 text-base leading-relaxed mb-8">
                Партнёры федерального уровня: Studio 21, Europa Plus TV. Более 250 реализованных
                событий и 2 миллиона зрителей по всей стране.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {["Системный подход", "Доступ к артистам", "Бренд-мышление", "Федеральные партнёрства"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="font-bebas text-lg mt-0.5" style={{ color: ACID }}>✓</span>
                    <span className="font-ibm text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 md:px-16">
        <Reveal className="mb-14">
          <p className="font-oswald text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACID }}>— Что мы делаем</p>
          <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide uppercase text-white">УСЛУГИ</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.07)" }}>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div
                className="p-8 cursor-default transition-colors duration-300"
                style={{ background: "#000" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(204,255,0,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.background = "#000")}
              >
                <div className="mb-4 w-10 h-10 flex items-center justify-center"
                  style={{ background: "rgba(204,255,0,0.1)", border: `1px solid rgba(204,255,0,0.3)` }}>
                  <Icon name={s.icon} size={18} style={{ color: ACID }} />
                </div>
                <h3 className="font-oswald font-semibold text-lg uppercase text-white mb-2 tracking-wide">{s.title}</h3>
                <p className="font-ibm text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-20 px-6 md:px-16 relative overflow-hidden" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://cdn.poehali.dev/files/7185dfe1-0e2d-421e-83d8-6131fba0fb1d.jpg"
            alt=""
            className="w-full h-full object-cover opacity-10"
            style={{ filter: "grayscale(100%)" }}
          />
        </div>
        <div className="relative z-10">
          <Reveal className="mb-14">
            <p className="font-oswald text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACID }}>— Результаты</p>
            <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide uppercase text-white">
              РЕАЛИЗОВАННЫЕ<br />ПРОЕКТЫ
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.08)" }}>
            {cases.map((c, i) => (
              <Reveal key={c.event} delay={i * 0.1}>
                <div className="p-8" style={{ background: "#080808" }}>
                  <div className="font-bebas text-5xl md:text-6xl leading-none mb-1" style={{ color: ACID }}>{c.num}</div>
                  <div className="font-oswald text-sm text-gray-400 uppercase tracking-wider mb-3">{c.label}</div>
                  <div className="font-oswald font-semibold text-white text-base mb-1">{c.event}</div>
                  <div className="font-ibm text-gray-500 text-xs">{c.venue}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3} className="mt-12">
            <div className="p-8 md:p-12" style={{ background: ACID }}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="font-bebas text-3xl md:text-5xl text-black uppercase leading-none mb-2">
                    Нужна организация концерта?
                  </h3>
                  <p className="font-ibm text-black/70 text-base">
                    Расскажите о вашем проекте — составим индивидуальное предложение
                  </p>
                </div>
                <a href="#contact" style={{ background: "#000", color: ACID }}
                  className="font-oswald font-bold text-sm px-8 py-4 tracking-widest uppercase whitespace-nowrap hover:opacity-80 transition-opacity">
                  Обсудить проект
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 px-6 md:px-16" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <Reveal className="text-center mb-10">
          <p className="font-oswald text-xs tracking-[0.3em] uppercase text-gray-500">Партнёры</p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["STUDIO 21", "EUROPA PLUS TV", "VK СТАДИУМ", "ЦСКА АРЕНА", "LIVE ARENA"].map(p => (
              <span key={p} className="font-oswald font-semibold text-sm md:text-base tracking-widest text-gray-600 hover:text-white transition-colors uppercase cursor-default">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-16" style={{ background: "#080808", borderTop: `3px solid ${ACID}` }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <Reveal>
              <p className="font-oswald text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACID }}>— Напишите нам</p>
              <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide uppercase text-white mb-8">
                ДАВАЙТЕ<br />РАБОТАТЬ<br />ВМЕСТЕ
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5">
                {[
                  { icon: "Mail", label: "Email", val: "info@globalpromo.ru" },
                  { icon: "Phone", label: "Телефон", val: "+7 (495) 000-00-00" },
                  { icon: "MapPin", label: "Адрес", val: "Москва, Россия" },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(204,255,0,0.1)", border: `1px solid rgba(204,255,0,0.25)` }}>
                      <Icon name={c.icon} size={16} style={{ color: ACID }} />
                    </div>
                    <div>
                      <div className="font-oswald text-xs uppercase tracking-wider text-gray-500">{c.label}</div>
                      <div className="font-ibm text-white text-sm">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 flex gap-4">
              {[
                { icon: "Send", label: "Telegram" },
                { icon: "MessageCircle", label: "VK" },
                { icon: "Youtube", label: "YouTube" },
              ].map(s => (
                <a key={s.label} href="#"
                  style={{ border: `1px solid rgba(255,255,255,0.2)`, color: "#fff" }}
                  className="w-10 h-10 flex items-center justify-center transition-colors"
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = ACID; (e.currentTarget as HTMLElement).style.color = ACID; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                >
                  <Icon name={s.icon} size={16} />
                </a>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              {[
                { placeholder: "Ваше имя", type: "text" },
                { placeholder: "Телефон или email", type: "text" },
              ].map(f => (
                <input key={f.placeholder} type={f.type} placeholder={f.placeholder}
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
                  className="w-full font-ibm text-sm px-5 py-4 placeholder-gray-600 focus:outline-none transition-colors"
                  onFocus={e => (e.currentTarget.style.borderColor = ACID)}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              ))}
              <textarea placeholder="Расскажите о вашем проекте"
                rows={5}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", resize: "none" }}
                className="w-full font-ibm text-sm px-5 py-4 placeholder-gray-600 focus:outline-none transition-colors"
                onFocus={e => (e.currentTarget.style.borderColor = ACID)}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
              <button type="submit"
                style={{ background: ACID, color: "#000" }}
                className="w-full font-oswald font-bold text-base py-4 tracking-widest uppercase hover:opacity-85 transition-opacity">
                Отправить заявку
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.07)" }}
        className="px-6 md:px-16 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bebas text-xl tracking-widest" style={{ color: ACID }}>GLOBAL PROMO</span>
          <div className="flex flex-wrap gap-6 justify-center">
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                className="font-oswald text-xs tracking-wider text-gray-600 hover:text-white transition-colors uppercase">
                {l.label}
              </a>
            ))}
          </div>
          <span className="font-ibm text-xs text-gray-700">© 2025 Global Promo</span>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </div>
  );
}