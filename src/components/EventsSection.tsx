import { ACID, Reveal } from "@/components/ui/shared";

const CAPTOWN_IMG = "https://cdn.qtickets.tech/thumbs/530142_445_0_0_0_auto_90_cc08600d.jpg";

const captownShows = [
  { id: "ct1",  date: "12 МАЯ",  day: "ПН", city: "Краснодар",       venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct2",  date: "14 МАЯ",  day: "СР", city: "Ростов-на-Дону",  venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct3",  date: "15 МАЯ",  day: "ЧТ", city: "Воронеж",         venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct4",  date: "16 МАЯ",  day: "ПТ", city: "Саратов",         venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct5",  date: "17 МАЯ",  day: "СБ", city: "Самара",          venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct6",  date: "19 МАЯ",  day: "ПН", city: "Казань",          venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct7",  date: "21 МАЯ",  day: "СР", city: "Пермь",           venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct8",  date: "22 МАЯ",  day: "ЧТ", city: "Екатеринбург",    venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct9",  date: "24 МАЯ",  day: "СБ", city: "Красноярск",      venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct10", date: "26 МАЯ",  day: "ПН", city: "Новосибирск",     venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct11", date: "27 МАЯ",  day: "ВТ", city: "Барнаул",         venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct12", date: "31 МАЯ",  day: "СБ", city: "Нижний Новгород", venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct13", date: "5 ИЮН",   day: "ПТ", city: "Санкт-Петербург", venue: "Клуб", ticketUrl: "https://captowntour.ru/" },
  { id: "ct14", date: "13 ИЮН",  day: "СБ", city: "Москва",          venue: "Urban", ticketUrl: "https://moscow.qtickets.events/225340-captown" },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 px-6 md:px-16">
      <Reveal className="mb-12">
        <p className="font-oswald text-xs tracking-[0.3em] uppercase mb-3" style={{ color: ACID }}>— Ближайшие события</p>
        <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide uppercase text-white">АФИША</h2>
      </Reveal>

      <Reveal>
        <div style={{ border: `1px solid rgba(204,255,0,0.25)`, background: "#080808" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* фото + заголовок тура */}
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
                <div className="font-ibm text-gray-400 text-sm mt-1">14 городов · Май–Июнь 2026</div>
              </div>
            </div>

            {/* список дат */}
            <div className="md:col-span-2" style={{ borderLeft: `1px solid rgba(204,255,0,0.15)` }}>
              {captownShows.map((show, i) => (
                <a
                  key={show.id}
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-3 transition-colors"
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
              className="font-oswald text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
              style={{ color: ACID }}
            >
              captowntour.ru →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
