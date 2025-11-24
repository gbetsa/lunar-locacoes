import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

import LunarLogo from "../assets/lunar-logo.png";
import { categories } from "../data/mockData";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const submenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta scroll para mudar a cor do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha submenu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (window.innerWidth > 900) {
        if (submenuRef.current && !submenuRef.current.contains(target)) {
          setSubmenuOpen(false);
        }
      } else {
        const mobileMenu = document.querySelector(`.${styles.mobileNav}`);
        if (mobileMenu && !mobileMenu.contains(target)) {
          setSubmenuOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === "/";

  // Função para ir para home + rolar para a seção
  const goToHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`${styles.header} ${
          isHome
            ? isScrolled || mobileMenuOpen
              ? styles.scrolled
              : styles.transparent
            : styles.scrolled
        }`}
      >
        {" "}
        <div className={styles.container}>
          {/* LOGO */}
          <a
            href="#home"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              goToHome();
            }}
          >
            {" "}
            <img className={styles.logoIcon} src={LunarLogo} alt="Logo" />{" "}
            <span className={styles.logoText}>Lunar Locações</span>{" "}
          </a>

          {/* NAV DESKTOP */}
          <nav className={styles.nav}>
            <a
              href="#home"
              className={`${styles.navLink} ${
                isActive("/") ? styles.active : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                goToHome();
              }}
            >
              Home
            </a>

            {/* MENU CATEGORIAS */}
            <div
              className={styles.navItemWithSub}
              ref={submenuRef}
              onMouseEnter={() => {
                if (window.innerWidth > 900) {
                  clearTimeout((window as any).submenuTimer);
                  setSubmenuOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 900) {
                  (window as any).submenuTimer = setTimeout(() => {
                    setSubmenuOpen(false);
                  }, 200);
                }
              }}
            >
              <button
                className={styles.navLink}
                onClick={() => {
                  if (window.innerWidth <= 900) {
                    setSubmenuOpen((prev) => !prev);
                  }
                }}
              >
                Categorias ▾
              </button>

              {submenuOpen && window.innerWidth > 900 && (
                <div
                  className={styles.submenu}
                  onMouseEnter={() =>
                    clearTimeout((window as any).submenuTimer)
                  }
                  onMouseLeave={() => {
                    (window as any).submenuTimer = setTimeout(() => {
                      setSubmenuOpen(false);
                    }, 200);
                  }}
                >
                  {categories.map((c) => (
                    <Link
                      key={c.name}
                      to={`/?categoria=${c.name}`}
                      className={styles.submenuItem}
                      onClick={() => setSubmenuOpen(false)}
                    >
                      <c.icon size={18} /> {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="#contato" className={styles.navLink}>
              Contato
            </a>
          </nav>

          {/* BOTÃO MOBILE */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              setSubmenuOpen(false);
            }}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* MENU MOBILE */}
      <nav
        className={`${styles.mobileNav} ${
          !mobileMenuOpen ? styles.closed : ""
        }`}
      >
        <a
          href="#home"
          className={styles.mobileNavLink}
          onClick={(e) => {
            e.preventDefault();
            goToHome();
            setMobileMenuOpen(false);
          }}
        >
          Home
        </a>

        <div className={styles.mobileSubmenuContainer}>
          <button
            className={styles.mobileNavLink}
            onClick={() => setSubmenuOpen((prev) => !prev)}
          >
            Categorias ▾
          </button>

          <div
            className={`${styles.mobileSubmenu} ${
              submenuOpen ? styles.open : ""
            }`}
          >
            {categories.map((c) => (
              <Link
                key={c.name}
                to={`/?categoria=${c.name}`}
                className={styles.mobileSubmenuItem}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSubmenuOpen(false);
                }}
              >
                <c.icon size={18} /> {c.name}
              </Link>
            ))}
          </div>
        </div>

        <a
          href="#contato"
          className={styles.mobileNavLink}
          onClick={() => setMobileMenuOpen(false)}
        >
          Contato
        </a>
      </nav>
    </>
  );
};

export default Header;
