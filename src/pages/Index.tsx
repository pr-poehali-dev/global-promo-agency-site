import { useEffect, useRef, useState } from "react";

const ACID = "#CCFF00";

const useInView = (threshold = 0.15) => {
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

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{ background: ACID, color: "#000" }}
    className="inline-block font-oswald font-semibold text-sm md:text-base px-3 py-1 mr-2 mb-2"
  >
    {children}
  </span>
);

const SlashTag = ({ children }: { children: React.ReactNode }) => (
  <div className="font-ibm text-white text-base md:text-lg mb-1">
    <span style={{ color: ACID }} className="mr-1">/</span>{children}
  </div>
);

const SectionReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
};

export default function Index() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  return (
    <div style={{ background: "#000", color: "#fff" }} className="font-ibm overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}>
        <span className="font-bebas text-2xl tracking-widest" style={{ color: ACID }}>GLOBAL PROMO</span>
        <a
          href="#contact"
          style={{ background: ACID, color: "#000" }}
          className="font-oswald font-bold text-sm px-5 py-2 tracking-wider hover:opacity-80 transition-opacity"
        >
          СВЯЗАТЬСЯ
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/files/673425be-f279-47c6-9152-b959abbcc0a7.jpg"
            alt="концерт"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(100%)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.95) 100%)" }} />
        </div>
        <div className="relative z-10 px-6 md:px-16 pb-0">
          {/* tags row */}
          <div
            style={{
              background: ACID,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease",
            }}
            className="py-6 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-1"
          >
            <div>
              <SlashTag>Усиление портфеля концертов и туров артистов</SlashTag>
              <SlashTag>Масштабирование фестивалей</SlashTag>
              <SlashTag>Выход в инфраструктуру</SlashTag>
            </div>
            <div className="md:text-right">
              <SlashTag>Развитие медиа</SlashTag>
              <SlashTag>Рост капитализации</SlashTag>
            </div>
          </div>
          {/* big title */}
          <div
            style={{
              background: ACID,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s 0.5s ease, transform 0.8s 0.5s ease",
            }}
            className="px-6 md:px-12 pt-6 pb-8"
          >
            <h1 className="font-bebas text-5xl md:text-8xl lg:text-[7rem] leading-none tracking-wide text-black uppercase">
              GLOBAL PROMO:
            </h1>
            <h1 className="font-bebas text-5xl md:text-7xl lg:text-[6rem] leading-none tracking-wide text-black uppercase">
              ПУТЬ К ТОП-3 МЕДИАКОМПАНИИ
            </h1>
          </div>
        </div>
      </section>

      {/* WHAT IS GLOBAL PROMO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="about">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/files/fc88bfa1-e9e6-4567-89a1-dde27dc4d578.jpg"
            alt="артист"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(100%)" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.72)" }} />
        </div>
        <div className="relative z-10 px-6 md:px-16 py-20">
          <SectionReveal>
            <h2 className="font-bebas text-5xl md:text-8xl lg:text-9xl leading-none tracking-wide uppercase mb-8"
              style={{ color: ACID }}>
              ЧТО ТАКОЕ<br />GLOBAL PROMO
            </h2>
          </SectionReveal>
          <SectionReveal>
            <div className="mb-8">
              <Tag>Global Promo — продюсерская и инвестиционная платформа</Tag>
            </div>
          </SectionReveal>
          <SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 mb-12">
              <div>
                <Tag>Концерты и туры</Tag>
                <br />
                <Tag>Фестивальные бренды</Tag>
                <br />
                <Tag>Бренд-интеграции</Tag>
              </div>
              <div>
                <Tag>Медиа-проекты</Tag>
                <br />
                <Tag>Будущие активы (площадки, инфраструктура)</Tag>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal>
            <div style={{ borderTop: `3px solid ${ACID}` }} className="pt-6">
              <p className="font-bebas text-3xl md:text-5xl uppercase tracking-widest" style={{ color: ACID }}>
                СТРАТЕГИЯ — СТАТЬ ВЛАДЕЛЬЦЕМ АКТИВОВ
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* WHY CAN SCALE */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="scale">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/files/d603fbda-05ad-4311-9870-cc2a7a0322e1.jpg"
            alt="масштабирование"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(100%)" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.70)" }} />
        </div>
        <div className="relative z-10 px-6 md:px-16 py-20">
          <SectionReveal>
            <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-wide uppercase mb-12"
              style={{ color: ACID }}>
              ПОЧЕМУ GLOBAL PROMO<br />МОЖЕТ МАСШТАБИРОВАТЬСЯ
            </h2>
          </SectionReveal>
          <SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12 max-w-3xl">
              {[
                "Системный подход",
                "Доступ к артистам",
                "Масштабируемый портфель",
                "Партнёрства федерального уровня",
                "Бренд-мышление",
                "Ориентация на капитализацию",
                "Опыт реализации",
              ].map((item) => (
                <div
                  key={item}
                  style={{ border: `1px solid ${ACID}`, color: "#fff" }}
                  className="font-ibm text-sm md:text-base px-4 py-3 hover:bg-acid hover:text-black transition-all duration-300 cursor-default"
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = ACID; (e.currentTarget as HTMLElement).style.color = "#000"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                >
                  {item}
                </div>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal>
            <div style={{ borderTop: `2px solid rgba(204,255,0,0.3)` }} className="pt-6">
              <p className="font-oswald text-sm md:text-base uppercase tracking-widest text-gray-400 mb-2">ПАРТНЁРЫ</p>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="font-oswald font-bold text-xl md:text-2xl border border-white px-4 py-2">STUDIO 21</span>
                <span className="font-oswald font-bold text-xl md:text-2xl" style={{ color: ACID }}>Europa Plus TV</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* INVESTMENT FOCUS */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="invest">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/files/7185dfe1-0e2d-421e-83d8-6131fba0fb1d.jpg"
            alt="инвестиции"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(100%)" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.75)" }} />
        </div>
        <div className="relative z-10 px-6 md:px-16 py-20">
          <SectionReveal>
            <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-wide uppercase mb-10"
              style={{ color: ACID }}>
              ТЕКУЩИЙ<br />ИНВЕСТИЦИОННЫЙ ФОКУС
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <SectionReveal>
              <div>
                <p className="font-bebas text-6xl md:text-8xl" style={{ color: ACID }}>30 МЛН ₽</p>
                <p className="font-ibm text-gray-300 text-base md:text-lg mt-2 max-w-sm">
                  Запуск и масштабирование отечественных проектов
                </p>
              </div>
            </SectionReveal>
            <SectionReveal>
              <div>
                <p className="font-oswald font-bold text-xl md:text-2xl uppercase mb-4 px-3 py-1 inline-block" style={{ background: ACID, color: "#000" }}>
                  ЗАДАЧИ ИНВЕСТИЦИЙ
                </p>
                <div className="space-y-2 mt-4">
                  {[
                    "Усиление продуктовой линейки",
                    "Команда",
                    "Маркетинг",
                    "Инфраструктура",
                    "Активы",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="font-bebas text-lg" style={{ color: ACID }}>/</span>
                      <span className="font-ibm text-white text-base md:text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* MARKETING */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="marketing">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/files/209c2bde-6a3f-44b9-9b10-7e36222362da.jpg"
            alt="маркетинг"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(100%)" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.78)" }} />
        </div>
        <div className="relative z-10 px-6 md:px-16 py-20">
          <SectionReveal>
            <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-none tracking-wide uppercase mb-12"
              style={{ color: ACID }}>
              МАРКЕТИНГ И PR<br />КОМАНДА
            </h2>
          </SectionReveal>
          <div className="space-y-4 max-w-3xl">
            {[
              "Крупнейший конный фестиваль «Иваново Поле» с 2016 по 2025 — продают 10–25 тыс билетов ежегодно от 2 месяцев продвижения",
              "Продали более 5500 билетов за 3 недели продвижения концерта DABABY в VK Стадиуме, февраль 2025",
              "Продали более 12500 билетов за 1 мес и 3 недели продвижения концерта TYGA в Москве, ЦСКА Арена, май 2025",
              "Продали 14 200 билетов «Конное Гала-Шоу» 2023 г Live Arena",
              "Продали 7 500 билетов «Рыцарский турнир» 7 500 зр 2023 г Live Arena",
            ].map((item, i) => (
              <SectionReveal key={i}>
                <div
                  style={{ background: ACID, color: "#000" }}
                  className="font-ibm text-sm md:text-base px-5 py-4 leading-snug"
                >
                  {item}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ background: ACID }} className="py-24 px-6 md:px-16 text-center">
        <SectionReveal>
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-black uppercase leading-none tracking-wide mb-6">
            СТАНЬ ЧАСТЬЮ<br />GLOBAL PROMO
          </h2>
          <p className="font-ibm text-black text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Инвестиции в музыкальную индустрию с прозрачной моделью возврата и реальными активами.
          </p>
          <a
            href="mailto:info@globalpromo.ru"
            style={{ background: "#000", color: ACID }}
            className="font-oswald font-bold text-lg md:text-xl px-10 py-4 tracking-widest inline-block hover:opacity-80 transition-opacity uppercase"
          >
            НАПИСАТЬ НАМ
          </a>
        </SectionReveal>
        <SectionReveal>
          <p className="font-ibm text-black/50 text-sm mt-16">© 2025 Global Promo. Все права защищены.</p>
        </SectionReveal>
      </section>

    </div>
  );
}
