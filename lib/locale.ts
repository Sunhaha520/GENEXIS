export type Locale = "zh" | "en";

const LOCALES: Locale[] = ["zh", "en"];

/** 将当前路径切换到目标语言，保留页面路径（如 /zh/cases → /en/cases） */
export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && LOCALES.includes(segments[0] as Locale)) {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }

  return `/${targetLocale}`;
}
