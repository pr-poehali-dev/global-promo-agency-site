import { useState } from "react";
import Icon from "@/components/ui/icon";
import { ACID, Reveal } from "@/components/ui/shared";

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
  );
}
