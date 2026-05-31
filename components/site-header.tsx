"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, Info, Briefcase, Mail, Sparkles } from "lucide-react";
import { switchLocalePath, type Locale } from "@/lib/locale";

type SiteHeaderProps = {
  nav: { label: string; href: string }[];
  footer: { brand: string };
  currentPath: string;
  currentLocale: Locale;
};

export function SiteHeader({ nav, footer, currentPath, currentLocale }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useLayoutEffect(() => {
    const brand = brandRef.current;
    if (!brand) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      brand.classList.add("moon-brand-play");
      return;
    }

    brand.classList.remove("moon-brand-play");
    void brand.offsetWidth;
    brand.classList.add("moon-brand-play");
  }, [pathname]);

  const isNavActive = (href: string) => {
    if (href === "") {
      return pathname === currentPath || pathname === `${currentPath}/`;
    }
    return pathname === `${currentPath}${href}` || pathname.startsWith(`${currentPath}${href}/`);
  };

  const getNavIcon = (href: string) => {
    if (href === "") return <Home size={16} />;
    if (href === "/about") return <Info size={16} />;
    if (href === "/cases") return <Briefcase size={16} />;
    if (href === "/contact") return <Mail size={16} />;
    return <Sparkles size={16} />;
  };

  const alternateLocale: Locale = currentLocale === "zh" ? "en" : "zh";
  const localeSwitchHref = switchLocalePath(pathname, alternateLocale);

  return (
    <>
      <header className={`moon-nav${isScrolled ? " is-scrolled" : ""}`}>
        <div className="moon-nav-inner">
          <Link href={`/${currentLocale}`} className="moon-brand" ref={brandRef}>
            <Image src="/images/logo.png" alt="Logo" width={24} height={24} className="moon-brand-logo" />
            <span className="moon-brand-name">{currentLocale === "zh" ? "极创数生" : "GENEXIS"}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="moon-nav-links desktop-nav">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={`${currentPath}${item.href}`}
                className={`moon-nav-link${isNavActive(item.href) ? " is-active" : ""}`}
                aria-current={isNavActive(item.href) ? "page" : undefined}
              >
                {getNavIcon(item.href)}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="moon-nav-actions desktop-nav">
            <Link href={localeSwitchHref} className="moon-lang-btn">
              {currentLocale === "zh" ? "EN" : "中文"}
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="moon-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <button
          type="button"
          className="moon-nav-backdrop"
          aria-label={currentLocale === "zh" ? "关闭菜单" : "Close menu"}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`moon-mobile-drawer${isMobileMenuOpen ? " open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="moon-mobile-links">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`${currentPath}${item.href}`}
              className={`moon-mobile-link${isNavActive(item.href) ? " is-active" : ""}`}
              aria-current={isNavActive(item.href) ? "page" : undefined}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {getNavIcon(item.href)}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="moon-mobile-footer">
          <Link
            href={localeSwitchHref}
            className="moon-lang-btn mobile-lang-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {currentLocale === "zh" ? "Switch to English" : "切换至中文"}
          </Link>
        </div>
      </div>
    </>
  );
}
