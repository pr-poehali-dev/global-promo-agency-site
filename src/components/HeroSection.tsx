import Icon from "@/components/ui/icon";
import { ACID } from "@/components/ui/shared";

interface HeroSectionProps {
  heroLoaded: boolean;
}

export default function HeroSection({ heroLoaded }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col" style={{ minHeight: "100vh" }}>
      {/* фото на весь экран */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/files/a77740a0-e31a-4183-9dd8-efa4783ec13a.jpg"
          alt="hero"
          className="w-full h-full object-cover object-center"
          style={{ filter: "grayscale(80%)", transform: "scale(1.05)" }}
        />
        {/* лёгкий оверлей только снизу и по краям */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.95) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)" }} />
        {/* кислотная линия сверху */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: ACID }} />
      </div>

      {/* контент — по центру экрана */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 md:px-16 pt-32 pb-0"
        style={{ minHeight: "75vh" }}>
        <div style={{
          opacity: heroLoaded ? 1 : 0,
          transform: heroLoaded ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1.1s 0.15s ease, transform 1.1s 0.15s ease",
        }}>
          <p className="font-oswald text-sm tracking-[0.35em] uppercase mb-5" style={{ color: ACID }}>
            Концертное агентство · Москва
          </p>
          <h1 className="font-bebas leading-[0.9] tracking-wide uppercase text-white mb-6"
            style={{ fontSize: "clamp(4rem, 12vw, 11rem)", textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}>
            Создаём события,<br />
            <span style={{ color: ACID, WebkitTextStroke: "0px" }}>которые помнят</span>
          </h1>
          <p className="font-ibm text-gray-200 text-lg md:text-xl max-w-xl mb-10"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
            Организуем концерты, туры и фестивали мирового уровня в России с 2016 года
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#events" style={{ background: ACID, color: "#000" }}
              className="font-oswald font-bold text-base px-8 py-4 tracking-wider hover:opacity-85 transition-opacity uppercase">
              Смотреть афишу
            </a>
            <a href="#about" style={{ border: `1px solid rgba(255,255,255,0.55)`, color: "#fff", backdropFilter: "blur(4px)", background: "rgba(0,0,0,0.2)" }}
              className="font-oswald font-bold text-base px-8 py-4 tracking-wider hover:border-white transition-colors uppercase">
              О компании
            </a>
          </div>
        </div>
      </div>

      {/* статистика — прижата к низу поверх фото */}
      <div className="relative z-10 px-6 md:px-16 pb-10">
        <div style={{
          borderTop: `1px solid rgba(204,255,0,0.4)`,
          opacity: heroLoaded ? 1 : 0,
          transition: "opacity 1s 0.9s ease",
          backdropFilter: "blur(2px)",
        }} className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "250+", label: "Мероприятий" },
            { num: "10 лет", label: "На рынке" },
            { num: "2 млн+", label: "Зрителей" },
            { num: "50+", label: "Партнёров" },
          ].map(s => (
            <div key={s.label}>
              <div className="font-bebas text-4xl md:text-5xl" style={{ color: ACID }}>{s.num}</div>
              <div className="font-ibm text-gray-300 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-8 hidden md:block" style={{ animation: "bounce 2s infinite" }}>
        <Icon name="ChevronDown" size={28} style={{ color: ACID }} />
      </div>
    </section>
  );
}