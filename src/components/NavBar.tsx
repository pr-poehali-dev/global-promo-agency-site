import Icon from "@/components/ui/icon";
import { ACID, navLinks } from "@/components/ui/shared";

interface NavBarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}

export default function NavBar({ scrolled, menuOpen, setMenuOpen }: NavBarProps) {
  return (
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
  );
}
