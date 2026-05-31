import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/page-metadata";

type Locale = "zh" | "en";

const aboutContent: Record<Locale, {
  pageTitle: string;
  heroTitle: string;
  heroHighlight: string;
  heroSub: string;
  heroStat: { value: string; label: string }[];
  valuesTitle: string;
  values: { title: string; desc: string; num: string }[];
  teamTitle: string;
  teamSub: string;
  team: { title: string; desc: string }[];
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
  teamImageAlt: string;
}> = {
  zh: {
    pageTitle: "关于",
    heroTitle: "我们相信",
    heroHighlight: "真实的落地",
    heroSub: "优质咨询，源于对技术的深度洞悉与对业务的精准把控。极创数生（GENEXIS）是一家技术驱动型专业咨询公司，我们深谙人工智能与数据智能的能力边界，也透彻理解一线真实业务流程。",
    heroStat: [
      { value: "2026", label: "团队创立" },
      { value: "8+", label: "深度合作企业" },
      { value: "100%", label: "客户满意度" },
    ],
    valuesTitle: "理念",
    values: [
      { num: "01", title: "技术驱动", desc: "最好的咨询来自对技术的深刻理解，而不是纸上谈兵的概念与框架。" },
      { num: "02", title: "结果导向", desc: "每个项目都设定可衡量的业务指标，不做无法量化的价值承诺。" },
      { num: "03", title: "先验证后交付", desc: "在投入大规模资源前，先用轻量级原型验证核心假设，降低决策风险。" },
      { num: "04", title: "深度协同", desc: "与企业内部团队及外部供应商紧密合作，确保方案嵌入现有工作流。" },
    ],
    teamTitle: "核心优势",
    teamSub: "为什么顶尖企业选择我们",
    team: [
      { title: "多元产业背景", desc: "团队成员覆盖制造、供应链等多个领域，能快速理解不同行业的业务逻辑。" },
      { title: "数智技术与落地并重", desc: "既掌握 AI、数据与自动化能力边界，又具备工程落地经验，知道哪些想法可以变成现实。" },
      { title: "供应商网络", desc: "与优质开发团队和系统集成商建立了稳定合作关系，可快速组建交付力量。" },
      { title: "立足本土，服务全球", desc: "扎根苏州，深度服务本地领先企业，并协助出海企业实现全球化业务赋能。" },
    ],
    ctaTitle: "准备好聊聊了吗？",
    ctaDesc: "如果你正在评估数智化是否适合自己的业务，或者遇到了落地瓶颈，欢迎联系我们。",
    ctaBtn: "发起沟通",
    teamImageAlt: "极创数生团队",
  },
  en: {
    pageTitle: "About",
    heroTitle: "We believe in",
    heroHighlight: "Real execution",
    heroSub: "Great consulting stems from profound insight into technology and precise grasp of business. GENEXIS is a technology-driven professional consulting firm. We fully understand the boundaries of AI and data intelligence, as well as real-world business processes.",
    heroStat: [
      { value: "2026", label: "Founded" },
      { value: "8+", label: "Enterprise Partners" },
      { value: "100%", label: "Client Satisfaction" },
    ],
    valuesTitle: "Philosophy",
    values: [
      { num: "01", title: "Tech-Driven", desc: "The best consulting stems from deep technical understanding, not generic frameworks." },
      { num: "02", title: "Outcome-Oriented", desc: "Every project sets measurable KPIs. We don't make promises we can't quantify." },
      { num: "03", title: "Validate First", desc: "We use lightweight prototypes to validate core assumptions, reducing enterprise risk." },
      { num: "04", title: "Deep Synergy", desc: "We collaborate closely with internal teams and external vendors." },
    ],
    teamTitle: "Core Strengths",
    teamSub: "Why industry leaders choose us",
    team: [
      { title: "Multi-Domain", desc: "Expertise across manufacturing, supply chain, and compliance." },
      { title: "Tech + Delivery", desc: "We know the boundaries of AI, data, and automation — and the realities of engineering delivery." },
      { title: "Supplier Network", desc: "Stable relationships with quality dev teams to mobilize quickly." },
      { title: "Local & Global", desc: "Based in Suzhou, serving local leaders and enabling global expansion." },
    ],
    ctaTitle: "Ready to talk?",
    ctaDesc: "If you're evaluating digital intelligence for your business or facing implementation bottlenecks, reach out.",
    ctaBtn: "Start Conversation",
    teamImageAlt: "GENEXIS team",
  },
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata("about", locale);
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale: Locale = locale === "zh" || locale === "en" ? locale : "zh";
  const c = aboutContent[currentLocale];
  const currentPath = `/${currentLocale}`;

  return (
    <div className="page-about-editorial">
      <section className="edit-hero">
        <div className="edit-hero-inner">
          <Reveal eager delay={0.05}>
            <span className="edit-label">{c.pageTitle}</span>
          </Reveal>
          <Reveal eager delay={0.12}>
            <h1 className="edit-hero-title">
              <span className="edit-title-light">{c.heroTitle}</span>
              <br />
              <span className="edit-title-bold">{c.heroHighlight}</span>
            </h1>
          </Reveal>
          <Reveal eager delay={0.2}>
            <p className="edit-hero-sub">{c.heroSub}</p>
          </Reveal>
        </div>
      </section>

      <section className="edit-stats-bar">
        <Reveal delay={0.05} className="edit-container">
          <div className="edit-stats-row">
            {c.heroStat.map((stat) => (
              <div key={stat.label} className="edit-stat">
                <div className="edit-stat-value">{stat.value}</div>
                <div className="edit-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="edit-section">
        <div className="edit-container">
          <Reveal delay={0.06}>
            <div className="edit-section-header">
              <span className="edit-label">{c.valuesTitle}</span>
            </div>
          </Reveal>
          <div className="edit-values-list">
            {c.values.map((v, i) => (
              <Reveal key={v.num} delay={0.06 + i * 0.07} className="edit-value-item">
                <div className="edit-value-num">{v.num}</div>
                <div className="edit-value-body">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="edit-section edit-section-dark">
        <div className="edit-container">
          <Reveal delay={0.06}>
            <div className="edit-section-header">
              <span className="edit-label">{c.teamTitle}</span>
              <p className="edit-section-sub">{c.teamSub}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="edit-team-grid">
            <div className="edit-team-photo">
              <div className="edit-team-image-wrap">
                <Image
                  src="/images/team.jpg"
                  alt={c.teamImageAlt}
                  fill
                  className="edit-team-img"
                  sizes="(max-width: 900px) 100vw, 380px"
                />
              </div>
            </div>
            <div className="edit-team-features">
              {c.team.map((t) => (
                <div key={t.title} className="edit-feature-item">
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="edit-section">
        <div className="edit-container">
          <Reveal delay={0.1} className="edit-cta">
            <h2>{c.ctaTitle}</h2>
            <p>{c.ctaDesc}</p>
            <Link href={`${currentPath}/contact`} className="btn-primary">
              {c.ctaBtn}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
