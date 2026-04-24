import Icon from "@/components/ui/icon";
import { ACID, Reveal, navLinks } from "@/components/ui/shared";

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

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-16" style={{ background: "#080808" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/files/556ffe4a-8c50-41ba-9409-933cff31a094.jpg"
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
  );
}

export function ServicesSection() {
  return (
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
  );
}

export function CasesSection() {
  return (
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
  );
}

export function PartnersSection() {
  return (
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
  );
}

export function ContactSection() {
  return (
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
                { icon: "Mail", label: "Email", val: "info@global.promo" },
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
  );
}

export function Footer() {
  return (
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
  );
}