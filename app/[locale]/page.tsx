import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, ChevronRight, Sparkles, Globe, Table, Search, ArrowUp } from "lucide-react";
import { PixelCard } from "@/components/pixel-card";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/page-metadata";

type Locale = "zh" | "en";

type Content = {
  [K in Locale]: {
    promptPlaceholder: string;
    agentTitle: string;
    agentDesc: string;
    agentBtn: string;
    agentCards: { title: string; desc: string; icon: string }[];
    gridTitle: string;
    gridSub: string;
    gridItems: { date: string; title: string; desc: string }[];
    heroKicker: string;
    heroTitle: string;
    heroSub: string;
    heroCta: string;
    heroCtaSec: string;
    stats: { value: string; label: string }[];
    aboutTitle: string;
    aboutDesc: string;
    aboutDesc2: string;
    aboutCta: string;
    marqueeTitle: string;
    marqueeItems: { name: string; logo: string }[];
    enterpriseTitle: string;
    enterpriseItems: { name: string; logo: string }[];
    serviceTitle: string;
    serviceDesc: string;
    services: { title: string; desc: string }[];
    serviceCta: string;
    imageAlt: string;
    imageHint: string;
  };
};

const content: Content = {
  zh: {
    promptPlaceholder: "输入您的业务需求，例如：帮我梳理供应链优化方案...",
    agentTitle: "企业数智化落地赋能",
    agentDesc: "不讲空泛的概念，只做真实的落地。\n我们深入您的业务现场，从痛点梳理到可行性验证，再到原型开发与最终交付，为您量身定制真正创造价值的数智化解决方案。",
    agentBtn: "了解落地服务",
    agentCards: [
      { title: "需求梳理与咨询", desc: "深入业务现场，精准定位痛点与 ROI", icon: "Search" },
      { title: "可行性验证", desc: "极速搭建 PoC，避免盲目投入与试错", icon: "Table" },
      { title: "开发与落地协同", desc: "打通上下游，确保系统平稳上线运行", icon: "Globe" }
    ],
    gridTitle: "一念之间，万象落地",
    gridSub: "营销、研发、供应链... 每一个场景的重塑都是愉悦的惊喜。一键打开企业数智化转型的多重宇宙。",
    gridItems: [
      { date: "CASE 01", title: "Agent赋能方案", desc: "推荐替代包装、提供谈判策略、分析价格走势，年省采购成本超 20 万。" },
      { date: "CASE 02", title: "智能硬件", desc: "按企业标准读取分析实验数据，实现提取、推理、渲染自动化，效率提升 25-40 倍。" },
      { date: "CASE 03", title: "数字孪生", desc: "赋予大模型 3D 点云感知能力，理解施工现场，支持智能管理与规划（论文待发表）。" }
    ],
    heroKicker: "企业数智化落地咨询",
    heroTitle: "跃出纸面，在业务脉络中生根",
    heroSub: "拒绝纸上谈兵，深耕实际业务，一站式完成需求梳理、验证、原型开发与数智化落地。",
    heroCta: "立即咨询",
    heroCtaSec: "查看案例",
    stats: [
      { value: "30-60x", label: "排产效率提升" },
      { value: "20万+", label: "年均成本节省" },
      { value: "95%+", label: "客服响应准确率" },
      { value: "1 周", label: "验证到部署" },
    ],
    aboutTitle: "关于 极创数生 (GENEXIS)",
    aboutDesc: "极创数生 (GENEXIS) 是一家技术驱动的专业咨询公司，核心团队来自多元产业背景。我们深入理解业务、准确把握需求，将要求转化为可落地的数智化解决方案。",
    aboutDesc2: "我们不仅具备独立开发能力，还拥有优质下游供应商网络。在合作前进行严格可行性评估——如果项目不可行，我们帮助企业提前规避不必要成本；如果可行，我们提供全程落地支持。",
    aboutCta: "了解更多",
    marqueeTitle: "团队成员与专家顾问来自",
    marqueeItems: [
      { name: "香港大学", logo: "/images/logos/hku.svg" },
      { name: "香港城市大学", logo: "/images/logos/hkcu.svg" },
      { name: "澳门大学", logo: "/images/logos/um.svg" },
      { name: "南京大学", logo: "/images/logos/njdx.svg" },
      { name: "清华大学", logo: "/images/logos/qh.svg" },
      { name: "北京外国语大学", logo: "/images/logos/logo.png" },
    ],
    enterpriseTitle: "深度合作与落地企业",
    enterpriseItems: [
      { name: "MANN+HUMMEL", logo: "/images/logos/mh.png" },
      { name: "中国石化", logo: "/images/logos/sh.png" },
      { name: "th", logo: "/images/logos/th.png" },
      { name: "jw", logo: "/images/logos/jw.png" },
      { name: "COSO", logo: "/images/logos/coso.png" },
      { name: "ml", logo: "/images/logos/ml.png" }
    ],
    serviceTitle: "从验证到落地，打通企业数智化最后一公里",
    serviceDesc: "我们不是只做 PPT 的咨询公司。从数据、流程到系统协同，我们帮助企业对接优质供应商、开发团队与业务部门，让数智化真正跑起来。",
    serviceCta: "预约咨询",
    services: [
      { title: "可行性评估", desc: "在项目启动前评估数据、流程、ROI 与执行难点，帮助企业识别哪些场景值得做，哪些应该及时止损。" },
      { title: "原型与 PoC", desc: "围绕具体业务流程快速搭建可试用原型，验证模型接入、自动化链路与核心指标，缩短决策周期。" },
      { title: "落地协同", desc: "如果方案成立，我们继续推进交付落地，并协助对接优质供应商、开发团队与业务部门完成实施。" }
    ],
    imageAlt: "GENEXIS 团队工作场景",
    imageHint: "图片区域 — 替换 public/images/about-team.jpg",
  },
  en: {
    promptPlaceholder: "Describe your business needs, e.g., Supply chain optimization...",
    agentTitle: "Enterprise Digital Intelligence Empowerment",
    agentDesc: "No empty concepts, only real execution.\nWe dive into your frontline business — from pain point analysis and feasibility verification to prototype development and digital intelligence delivery.",
    agentBtn: "Explore Services",
    agentCards: [
      { title: "Needs Analysis", desc: "Identify pain points and ROI accurately", icon: "Search" },
      { title: "Feasibility Validation", desc: "Rapid PoC to avoid blind investments", icon: "Table" },
      { title: "Delivery Synergy", desc: "Ensure smooth deployment and operations", icon: "Globe" }
    ],
    gridTitle: "In a single thought, infinite transformation",
    gridSub: "Marketing, R&D, supply chain... Every reimagined scenario is a delightful surprise. Unlock the multiverse of enterprise digital intelligence transformation.",
    gridItems: [
      { date: "CASE 01", title: "Agent Empowerment Solution", desc: "Recommends alternative packaging, analyzes price trends, reducing annual costs by over 200,000." },
      { date: "CASE 02", title: "Smart Hardware", desc: "Reads and analyzes experimental data to auto-generate reports, boosting efficiency by 25-40x." },
      { date: "CASE 03", title: "Digital Twin", desc: "Enables LLM to perceive 3D point clouds for intelligent construction management (paper pending)." }
    ],
    heroKicker: "Enterprise Digital Intelligence Delivery",
    heroTitle: "Beyond the slides, rooted in your business",
    heroSub: "No empty talks, only practical business solutions. One-stop support for demand analysis, verification, prototyping and digital intelligent deployment.",
    heroCta: "Consult Now",
    heroCtaSec: "View Cases",
    stats: [
      { value: "30-60x", label: "Scheduling efficiency" },
      { value: "200K+", label: "Annual savings" },
      { value: "95%+", label: "CS accuracy" },
      { value: "1 Week", label: "To deployment" },
    ],
    aboutTitle: "About GENEXIS",
    aboutDesc: "GENEXIS is a technology-focused professional consulting firm. Our core team comes from diverse industries, enabling us to deeply engage with your business and turn requirements into practical digital intelligence solutions.",
    aboutDesc2: "We have independent development capabilities and an extensive network of high-quality downstream suppliers. We conduct rigorous feasibility assessments before cooperation — if not viable, we help you avoid unnecessary costs; if feasible, we provide full implementation support.",
    aboutCta: "Learn More",
    marqueeTitle: "Our Team & Advisors are from",
    marqueeItems: [
      { name: "香港大学", logo: "/images/logos/hku.svg" },
      { name: "香港城市大学", logo: "/images/logos/hkcu.svg" },
      { name: "澳门大学", logo: "/images/logos/um.svg" },
      { name: "南京大学", logo: "/images/logos/njdx.svg" },
      { name: "清华大学", logo: "/images/logos/qh.svg" },
      { name: "北京外国语大学", logo: "/images/logos/logo.png" },
    ],
    enterpriseTitle: "Trusted by Industry Leaders",
    enterpriseItems: [
      { name: "MANN+HUMMEL", logo: "/images/logos/mh.png" },
      { name: "中国石化", logo: "/images/logos/sh.png" },
      { name: "th", logo: "/images/logos/th.png" },
      { name: "jw", logo: "/images/logos/jw.png" },
      { name: "COSO", logo: "/images/logos/coso.png" },
      { name: "ml", logo: "/images/logos/ml.png" }
    ],
    serviceTitle: "From Validation to Delivery, Bridging the Last Mile of Digital Intelligence",
    serviceDesc: "We are more than a strategy-deck consulting firm. From data and workflows to system rollout, we connect you with the right suppliers, dev teams, and business units to make digital intelligence work.",
    serviceCta: "Book Consultation",
    services: [
      { title: "Feasibility Assessment", desc: "Evaluate data, workflows, ROI, and execution challenges before kickoff. Identify viable scenarios and avoid sunk costs." },
      { title: "Prototype & PoC", desc: "Rapidly build usable prototypes around specific workflows to verify model integration, automation pipelines, and core metrics." },
      { title: "Implementation Synergy", desc: "If viable, we drive delivery and assist in coordinating with high-quality suppliers, dev teams, and business units." }
    ],
    imageAlt: "GENEXIS team at work",
    imageHint: "Image area — replace with public/images/about-team.jpg",
  },
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata("home", locale);
}

export default async function HomePage({
  params,}: PageProps) {
  const { locale } = await params;
  const currentLocale: Locale = locale === "zh" || locale === "en" ? locale : "zh";
  const c = content[currentLocale];
  const currentPath = `/${currentLocale}`;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe": return <Globe size={18} />;
      case "Table": return <Table size={18} />;
      case "Search": return <Search size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  return (
    <div className="page-home">
      <section className="hero-moon">
        <div className="hero-moon-inner">
          {/* 背景像素网格已移除，只保留文字的 LED 像素感 */}
          <div className="hero-moon-orb-wrap">
            <div className="hero-moon-orb" />
          </div>

          <div className="hero-moon-content">
            <span className="hero-moon-kicker">
              <Sparkles size={14} />
              {c.heroKicker}
            </span>
            <h1 className="hero-moon-title led-matrix-text" data-text={c.heroTitle}>
              {c.heroTitle}
            </h1>
            <p className="hero-moon-sub">{c.heroSub}</p>

            <div className="hero-moon-actions" style={{ justifyContent: 'center' }}>
              <Link href={`${currentPath}/contact`} className="btn-moonshot">
                {c.heroCta}
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="agent-section section-moon">
        <Reveal delay={0.06} className="agent-text-col">
          <h2 className="agent-title">{c.agentTitle}</h2>
          <p className="agent-desc">
            {c.agentDesc.split("\n").map((line, i) => (
              <span key={i}>{line}<br/></span>
            ))}
          </p>
          <Link href={`${currentPath}/cases`} className="btn-moonshot">
            {c.agentBtn}
          </Link>
        </Reveal>
        <div className="agent-cards-col">
          {c.agentCards.map((card, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1} className={`agent-card agent-card-${i + 1}`}>
              <div className="agent-card-header">
                {getIcon(card.icon)}
                <span>{card.title}</span>
              </div>
              <div className="agent-card-body">
                <p>{card.desc}</p>
                <div className="agent-skeleton">
                  <div className="sk-line" style={{ width: '80%' }}></div>
                  <div className="sk-line" style={{ width: '60%' }}></div>
                  <div className="sk-line" style={{ width: '90%' }}></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid-section section-moon">
        <Reveal delay={0.06} className="grid-header">
          <h2>{c.gridTitle}</h2>
          <p>{c.gridSub}</p>
        </Reveal>
        <div className="moonshot-grid">
          {c.gridItems.map((item, i) => (
            <Reveal key={i} delay={0.08 + i * 0.1} className="moonshot-card">
              <div className="moonshot-card-img" style={{ position: "relative", overflow: "hidden" }}>
                <Image
                  src={`/images/case-${i + 1}.webp`}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="moonshot-card-content">
                <div className="moonshot-card-date">{item.date}</div>
                <h3 className="moonshot-card-title">{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-moon marquee-section" style={{ paddingTop: '80px' }}>
        <div className="container-moon">
          <div className="marquee-label">{c.marqueeTitle}</div>
        </div>
        <div className="marquee-container">
          <div className="marquee-content marquee-scroll">
            {c.marqueeItems.map((item: { name: string; logo: string }, i: number) => (
              <div key={`m1-${i}`} className="marquee-item">
                <Image src={item.logo} alt={item.name} width={160} height={60} className="marquee-logo" />
              </div>
            ))}
            {c.marqueeItems.map((item: { name: string; logo: string }, i: number) => (
              <div key={`m2-${i}`} className="marquee-item">
                <Image src={item.logo} alt={item.name} width={160} height={60} className="marquee-logo" />
              </div>
            ))}
          </div>
        </div>

        <div className="container-moon" style={{ marginTop: '56px' }}>
          <div className="marquee-label">{c.enterpriseTitle}</div>
        </div>
        <div className="marquee-container" style={{ marginTop: '20px' }}>
          <div className="marquee-content marquee-scroll reverse">
            {c.enterpriseItems.map((item: { name: string; logo: string }, i: number) => (
              <div key={`e1-${i}`} className="marquee-item enterprise-item">
                <Image src={item.logo} alt={item.name} width={160} height={60} className="marquee-logo" />
              </div>
            ))}
            {c.enterpriseItems.map((item: { name: string; logo: string }, i: number) => (
              <div key={`e2-${i}`} className="marquee-item enterprise-item">
                <Image src={item.logo} alt={item.name} width={160} height={60} className="marquee-logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
