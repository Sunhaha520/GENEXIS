import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "极创数生",
  description:
    "极创数生专注企业数智化咨询与落地，帮助企业完成可行性验证、原型搭建、方案实施与供应商协同。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
