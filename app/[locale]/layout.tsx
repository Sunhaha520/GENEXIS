import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SocialIcon } from "react-social-icons";
import { createSiteMetadata } from "@/lib/page-metadata";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  return createSiteMetadata(locale);
}

type Locale = "zh" | "en";

const navData: Record<Locale, { label: string; href: string }[]> = {
  zh: [
    { label: "首页", href: "" },
    { label: "关于", href: "/about" },
    { label: "案例", href: "/cases" },
    { label: "联系", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "" },
    { label: "About", href: "/about" },
    { label: "Cases", href: "/cases" },
    { label: "Contact", href: "/contact" },
  ],
};

const footerContent: Record<Locale, {
  brand: string;
  tagline: string;
  navTitle: string;
  contactTitle: string;
  email: string;
  location: string;
  socialLabel: string;
  copyright: string;
  links: { label: string; href: string }[];
}> = {
  zh: {
    brand: "极创数生",
    tagline: "让数智化从概念走进真实业务现场",
    navTitle: "导航",
    contactTitle: "联系我们",
    email: "contact@genexis.tech",
    location: "江苏省苏州市",
    socialLabel: "关注我们",
    copyright: "© 2025 极创数生. 保留所有权利。",
    links: [
      { label: "隐私政策", href: "#privacy" },
      { label: "使用条款", href: "#terms" },
    ],
  },
  en: {
    brand: "GENEXIS",
    tagline: "Move digital intelligence from concept to live operations",
    navTitle: "Navigation",
    contactTitle: "Contact Us",
    email: "hello@genexis.ai",
    location: "Suzhou, Jiangsu, China",
    socialLabel: "Follow Us",
    copyright: "© 2025 GENEXIS. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Use", href: "#terms" },
    ],
  },
};

import Image from "next/image";

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const currentLocale: Locale = locale === "zh" || locale === "en" ? locale : "zh";
  const nav = navData[currentLocale];
  const footer = footerContent[currentLocale];
  const currentPath = `/${currentLocale}`;

  return (
    <div className="site-shell">
      <div className="moon-bg">
        <div className="moon-bg-stars" />
        <div className="moon-blob blob-1" />
        <div className="moon-blob blob-2" />
        <div className="moon-orb" />
        <div className="moon-glow" />
        <div className="moon-grid" />
      </div>

      <SiteHeader nav={nav} footer={footer} currentPath={currentPath} currentLocale={currentLocale} />

      <main>{children}</main>

      <footer className="moon-footer">
        <div className="moon-footer-inner">
          <div className="footer-top">
            <div className="footer-brand-col">
              <div className="footer-logo">
                <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="footer-logo-img" />
                <span className="footer-logo-name">{footer.brand}</span>
              </div>
              <p className="footer-tagline">{footer.tagline}</p>
              <div className="footer-social">
                <span className="footer-social-label">{footer.socialLabel}</span>
                <div className="footer-social-links">
                  <SocialIcon network="wechat" url="#" style={{ height: 32, width: 32 }} bgColor="transparent" fgColor="currentColor" className="footer-social-link" />
                  <SocialIcon network="linkedin" url="#" style={{ height: 32, width: 32 }} bgColor="transparent" fgColor="currentColor" className="footer-social-link" />
                  <SocialIcon network="xiaohongshu" url="#" style={{ height: 32, width: 32 }} bgColor="transparent" fgColor="currentColor" className="footer-social-link" />
                  <SocialIcon network="tiktok" url="#" style={{ height: 32, width: 32 }} bgColor="transparent" fgColor="currentColor" className="footer-social-link" />
                </div>
              </div>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-col-title">{footer.navTitle}</h4>
              <ul className="footer-nav-list">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={`${currentPath}${item.href}`} className="footer-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact-col">
              <h4 className="footer-col-title">{footer.contactTitle}</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </span>
                  <a href={`mailto:${footer.email}`} className="footer-link">{footer.email}</a>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <span>{footer.location}</span>
                </div>
              </div>
            </div>

            <div className="footer-cta-col">
              <h4 className="footer-col-title">{currentLocale === "zh" ? "立即开始" : "Get Started"}</h4>
              <p className="footer-cta-desc">
                {currentLocale === "zh"
                  ? "准备好探索数智化落地了吗？"
                  : "Ready to explore digital intelligence delivery?"}
              </p>
              <Link href={`${currentPath}/contact`} className="footer-cta-btn">
                {currentLocale === "zh" ? "发起沟通" : "Contact Us"}
              </Link>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">{footer.copyright}</p>
            <div className="footer-bottom-links">
              {footer.links.map((link) => (
                <a key={link.href} href={link.href} className="footer-bottom-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
