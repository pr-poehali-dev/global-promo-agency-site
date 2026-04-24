import { useState } from "react";
import Icon from "@/components/ui/icon";
import { ACID, Reveal } from "@/components/ui/shared";

const CAPTOWN_IMG = "https://cdn.qtickets.tech/thumbs/530142_445_0_0_0_auto_90_cc08600d.jpg";

const captownShows = [
  { id: "ct1",  date: "12 МАЯ",  day: "ВТ", city: "Краснодар",      venue: "Клуб",              ticketUrl: "https://captowntour.ru/" },
  { id: "ct2",  date: "17 МАЯ",  day: "ВС", city: "Ростов-на-Дону", venue: "Клуб",              ticketUrl: "https://captowntour.ru/" },
  { id: "ct3",  date: "21 МАЯ",  day: "ЧТ", city: "Казань",         venue: "Клуб",              ticketUrl: "https://captowntour.ru/" },
  { id: "ct4",  date: "22 МАЯ",  day: "ПТ", city: "Уфа",            venue: "Клуб",              ticketUrl: "https://captowntour.ru/" },
  { id: "ct5",  date: "24 МАЯ",  day: "ВС", city: "Екатеринбург",   venue: "Клуб",              ticketUrl: "https://captowntour.ru/" },
  { id: "ct6",  date: "27 МАЯ",  day: "СР", city: "Новосибирск",    venue: "Клуб",              ticketUrl: "https://captowntour.ru/" },
  { id: "ct7",  date: "29 МАЯ",  day: "ПТ", city: "Красноярск",     venue: "Клуб",              ticketUrl: "https://captowntour.ru/" },
  { id: "ct8",  date: "31 МАЯ",  day: "ВС", city: "Иркутск",        venue: "Клуб",              ticketUrl: "https://captowntour.ru/" },
  { id: "ct9",  date: "9 ИЮН",   day: "ПН", city: "Нижний Новгород", venue: "Клуб",             ticketUrl: "https://captowntour.ru/" },
  { id: "ct10", date: "11 ИЮН",  day: "СР", city: "Санкт-Петербург", venue: "Клуб",             ticketUrl: "https://captowntour.ru/" },
  { id: "ct11", date: "13 ИЮН",  day: "СБ", city: "Москва",          venue: "Urban",            ticketUrl: "https://moscow.qtickets.events/225340-captown" },
  { id: "ct12", date: "15 ИЮН",  day: "ПН", city: "Самара",          venue: "Клуб",             ticketUrl: "https://captowntour.ru/" },
];

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
    ticketUrl: null,
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
    ticketUrl: null,
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
    ticketUrl: null,
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
    ticketUrl: null,
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
    ticketUrl: null,
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
    ticketUrl: null,
  },
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
          style={{ filter: "grayscale(100%)", transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85) 100%)" }} />
        <div className="absolute top-3 left-3"><StatusBadge status={ev.status} /></div>
        <div className="absolute bottom-3 left-3">
          <div className="font-oswald font-bold text-xs tracking-widest px-2 py-0.5" style={{ background: ACID, color: "#000" }}>{ev.genre}</div>
        </div>
        <div className="absolute bottom-3 right-3 text-right">
          <div className="font-bebas text-3xl leading-none" style={{ color: ACID }}>{ev.date}</div>
          <div className="font-oswald text-xs text-gray-300">{ev.year}</div>
        </div>
      </div>
      <div style={{ background: "#111", borderTop: `2px solid ${hovered ? ACID : "transparent"}`, transition: "border-color 0.3s" }} className="p-4">
        <h3 className="font-bebas text-2xl leading-none tracking-wide text-white mb-1">{ev.title}</h3>
        <p className="font-ibm text-gray-400 text-sm mb-3">{ev.subtitle}</p>
        <div className="flex items-center gap-1 mb-4">
          <Icon name="MapPin" size={12} className="text-gray-500" />
          <span className="font-ibm text-xs text-gray-500">{ev.venue}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-oswald font-semibold text-sm text-white">{ev.price}</span>
          <button
            style={{ background: hovered ? ACID : "transparent", color: hovered ? "#000" : ACID, border: `1px solid ${ACID}`, transition: "all 0.3s" }}
            className="font-oswald font-bold text-xs px-4 py-2 tracking-wider uppercase"
          >
            Купить билет
          </button>
        </div>
      </div>
    </div>
  );
};

const CaptownTourBlock = () => (
  <Reveal className="mb-16">
    <div style={{ border: `1px solid rgba(204,255,0,0.25)`, background: "#080808" }}>
      {/* шапка блока */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="relative overflow-hidden" style={{ minHeight: 220 }}>
          <img
            src={CAPTOWN_IMG}
            alt="CAPTOWN"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(80%)", position: "absolute", inset: 0 }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, #080808 100%)" }} />
          <div className="absolute inset-0 md:hidden" style={{ background: "rgba(0,0,0,0.55)" }} />
          <div className="relative z-10 p-6 flex flex-col justify-end h-full">
            <div className="font-oswald text-xs tracking-[0.25em] uppercase mb-1" style={{ color: ACID }}>Большой тур</div>
            <div className="font-bebas text-4xl md:text-5xl text-white leading-none tracking-wide">CAPTOWN</div>
            <div className="font-ibm text-gray-400 text-sm mt-1">12 городов · Май–Июнь 2026</div>
          </div>
        </div>

        {/* список дат */}
        <div className="md:col-span-2 divide-y" style={{ borderLeft: `1px solid rgba(204,255,0,0.15)`, borderColor: "rgba(255,255,255,0.07)" }}>
          {captownShows.map((show, i) => (
            <a
              key={show.id}
              href={show.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-5 py-3 group transition-colors"
              style={{
                background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(204,255,0,0.06)")}
              onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)")}
            >
              <div className="flex items-center gap-4">
                <div className="text-center" style={{ minWidth: 52 }}>
                  <div className="font-bebas text-xl leading-none" style={{ color: ACID }}>{show.date}</div>
                  <div className="font-oswald text-xs text-gray-600 tracking-wider">{show.day}</div>
                </div>
                <div>
                  <div className="font-oswald font-semibold text-sm text-white uppercase tracking-wide">{show.city}</div>
                  <div className="font-ibm text-xs text-gray-500">{show.venue}</div>
                </div>
              </div>
              <div
                className="font-oswald font-bold text-xs px-4 py-2 tracking-wider uppercase whitespace-nowrap transition-all"
                style={{ border: `1px solid ${ACID}`, color: ACID }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = ACID; (e.currentTarget as HTMLElement).style.color = "#000"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = ACID; }}
              >
                Билеты
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* футер блока */}
      <div className="px-6 py-4 flex items-center justify-between" style={{ borderTop: `1px solid rgba(204,255,0,0.15)` }}>
        <div className="font-ibm text-gray-500 text-xs">Билеты от 1 500 ₽ · 16+</div>
        <a
          href="https://captowntour.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-oswald text-xs tracking-widest uppercase transition-colors"
          style={{ color: ACID }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          captowntour.ru →
        </a>
      </div>
    </div>
  </Reveal>
);

const filters = ["Все", "Концерты", "Фестивали", "Шоу"];

export default function EventsSection() {
  const [activeFilter, setActiveFilter] = useState("Все");

  const filtered = events.filter(e => {
    if (activeFilter === "Все") return true;
    if (activeFilter === "Концерты") return e.genre.includes("Hip-Hop") || e.genre.includes("Рэп") || e.genre.includes("R&B");
    if (activeFilter === "Фестивали") return e.genre === "Фестиваль";
    if (activeFilter === "Шоу") return e.genre === "Шоу";
    return true;
  });

  return (
    <section id="events" className="py-20 px-6 md:px-16">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="font-oswald text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACID }}>— Ближайшие события</p>
          <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide uppercase text-white">АФИША</h2>
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

      {/* Тур CAPTOWN — только при фильтрах "Все" и "Концерты" */}
      {(activeFilter === "Все" || activeFilter === "Концерты") && <CaptownTourBlock />}

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
  );
}