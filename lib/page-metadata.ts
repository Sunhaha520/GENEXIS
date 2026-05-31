import type { Metadata } from "next";

export type SiteLocale = "zh" | "en";

export const siteBrand: Record<SiteLocale, string> = {
  zh: "极创数生",
  en: "GENEXIS",
};

const pageTitles = {
  home: {
    zh: "为企业数智化赋能保驾护航",
    en: "Empowering Enterprise Digital Intelligence",
  },
  about: {
    zh: "关于",
    en: "About",
  },
  cases: {
    zh: "案例",
    en: "Cases",
  },
  contact: {
    zh: "联系",
    en: "Contact",
  },
} as const;

export type SitePage = keyof typeof pageTitles;

export function resolveLocale(locale: string): SiteLocale {
  return locale === "en" ? "en" : "zh";
}

export function getPageTitle(page: SitePage, locale: string): string {
  const loc = resolveLocale(locale);
  return pageTitles[page][loc];
}

export function getFullPageTitle(page: SitePage, locale: string): string {
  const loc = resolveLocale(locale);
  return `${siteBrand[loc]} | ${pageTitles[page][loc]}`;
}

export function createPageMetadata(page: SitePage, locale: string): Metadata {
  return {
    title: getFullPageTitle(page, locale),
  };
}

export function createSiteMetadata(locale: string): Metadata {
  const loc = resolveLocale(locale);

  return {
    title: getFullPageTitle("home", locale),
    description:
      loc === "zh"
        ? "极创数生专注企业数智化咨询与落地，帮助企业完成可行性验证、原型搭建、方案实施与供应商协同，打通数智化最后一公里。"
        : "GENEXIS helps enterprises validate, prototype, and implement digital intelligence solutions — bridging the last mile from validation to delivery.",
    icons: {
      icon: "/images/logos/logo1.png",
    },
  };
}
