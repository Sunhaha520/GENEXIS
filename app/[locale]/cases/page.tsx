import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/page-metadata";

type Locale = "zh" | "en";

type CaseItem = {
  tag: string;
  title: string;
  challenge: string;
  outcome: string;
  metric: string;
  metricLabel: string;
  image: string;
};

const casesContent: Record<Locale, {
  pageTitle: string;
  heroTitle: string;
  heroSub: string;
  cases: CaseItem[];
  ongoingTitle: string;
  ongoing: string[];
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
}> = {
  zh: {
    pageTitle: "案例",
    heroTitle: "项目案例",
    heroSub: "从真实业务场景出发，验证可行性，搭建原型，完成交付。每个案例都追求可量化的业务结果。",
    cases: [
      { tag: "智能体方案", title: "AI 智能排期方案", challenge: "将员工技能、日历与任务限制纳入排班决策，减少人工排产耗时与沟通成本。", outcome: "在二周内完成可行性验证与Demo交付，整体排期效率提升 30 至 60 倍。", metric: "30-60x", metricLabel: "效率提升", image: "/images/case-01.webp" },
      { tag: "智能体方案", title: "包装 Agent 方案", challenge: "根据采购需求推荐替代包装、提供议价建议并分析价格趋势，降低包装采购成本。", outcome: "包装替代与市场行情分析智能体方案，助力企业低成本完成效果验证，每年可节约成本超 20 万元。", metric: "20万+", metricLabel: "年节省成本", image: "/images/case-02.webp" },
      { tag: "智能体方案", title: "实验报告 Agent 方案", challenge: "读取实验数据并按企业标准自动完成抽取、分析、配置生成与报告渲染。", outcome: "创新推出自动化报告 Agent 撰写方案，支持定制化公司模板，将整体产出效率提升 25 至 40 倍。", metric: "25-40x", metricLabel: "效率提升", image: "/images/case-03.webp" },
      { tag: "智能体方案", title: "合规校验 Agent", challenge: "自动识别单据类型与字段，调用官方信息源完成校验比对，降低人工审核负担。", outcome: "面向靖维科技搭建智能化工人证件审核体系，单人次校验耗时降至 5 秒左右。", metric: "5秒", metricLabel: "单次校验时间", image: "/images/case-04.webp" },
      { tag: "数字孪生方案", title: "LLM 3D 空间感知方案", challenge: "让大模型理解点云与施工现场信息，辅助建筑可视化、智能规划与精细化管理。", outcome: "搭建点云分割与 LLM 语义理解能力，赋能建筑可视化、智能规划与精细化管理。", metric: "3D", metricLabel: "点云感知", image: "/images/case-05.webp" },
      { tag: "智能体方案", title: "AI 客服系统", challenge: "建立产品与服务知识库，整合电商平台，实现大模型驱动的自动问答。", outcome: "依托大语言模型结合行业知识库，可精准应答客户咨询，问答准确率超 95%。", metric: "95%+", metricLabel: "响应准确率", image: "/images/case-06.webp" },
    ],
    ongoingTitle: "正在推进的合作",
    ongoing: [
      "携手知名外企开展合作，落地数字办公、数字实验室及智慧工厂各类数字化应用场景。",
      "为某外企印度分部落地自动化报告生成方案，全面支撑全球 AA 部门业务开展。",
      "携手靖维科技，面向化工生产企业打造安全管理智能 Agent 解决方案。",
      "为某外企提供人力资源数智化转型支持，规划并设计人才选拔智能 Agent 体系。",
    ],
    ctaTitle: "想让你的业务场景也这样提升效率？",
    ctaDesc: "联系我们，告诉我们你的业务流程，我们来评估数智化落地的可行性和潜在价值。",
    ctaBtn: "发起沟通",
  },
  en: {
    pageTitle: "Cases",
    heroTitle: "Project Cases",
    heroSub: "Starting from real business scenarios — we validate feasibility, build prototypes, and deliver results. Every case targets measurable business outcomes.",
    cases: [
      { tag: "Agent", title: "AI Intelligent Scheduling", challenge: "Integrate employee expertise, calendars, and task constraints into an automated LLM-assisted scheduling workflow.", outcome: "Feasibility check & demo delivered in two weeks; scheduling efficiency up 30–60x.", metric: "30-60x", metricLabel: "efficiency gain", image: "/images/case-01.webp" },
      { tag: "Agent", title: "Packaging Agent Solution", challenge: "Recommend alternative packaging, provide negotiation strategies, and analyze price trends to reduce procurement cost.", outcome: "Agent Solution for Packaging Substitution & Market Analysis | Low-cost effect verification, annual cost savings exceeding 200,000 yuan.", metric: "200K+", metricLabel: "annual savings", image: "/images/case-02.webp" },
      { tag: "Agent", title: "Lab Report Agent", challenge: "Read experiment data, extract key findings, and generate reports automatically according to company standards.", outcome: "Innovative Automated Report Agent Writing Solution | Efficiency increased by 25–40 times", metric: "25-40x", metricLabel: "efficiency gain", image: "/images/case-03.webp" },
      { tag: "Agent", title: "Compliance Verification Agent", challenge: "Identify document types and fields automatically, fetch official information, and verify compliance at scale.", outcome: "Intelligent Employee Document Review Solution for Jingwei Technology | Average verification time: around 5 seconds.", metric: "5s", metricLabel: "per verification", image: "/images/case-04.webp" },
      { tag: "Digital Twin", title: "LLM 3D Spatial Perception", challenge: "Enable large models to understand point clouds and construction site context for visualization and intelligent planning.", outcome: "Develop point cloud segmentation and LLM understanding capabilities to enable building 3D visualization, intelligent planning and refined management.", metric: "3D", metricLabel: "point cloud perception", image: "/images/case-05.webp" },
      { tag: "Agent", title: "AI Customer Service System", challenge: "Build a knowledge base with product and service records, integrate e-commerce, and enable LLM-powered auto responses.", outcome: "Leveraging LLM and industry knowledge base, the system achieves a response accuracy rate of more than 95% for customer consultations.", metric: "95%+", metricLabel: "response accuracy", image: "/images/case-06.webp" },
    ],
    ongoingTitle: "Active Engagements",
    ongoing: [
      "Partnered on digital transformation, advancing digital office, digital laboratory and smart factory.",
      "Delivered automated report generation solution to the Indian branch of a foreign enterprise for the global AA department.",
      "Partnered with Jingwei Technology to develop an intelligent Agent solution for safety management of chemical manufacturers.",
      "Helped a foreign enterprise upgrade HR digitally and intelligently, with a dedicated talent selection Agent solution.",
    ],
    ctaTitle: "Want to improve your business the same way?",
    ctaDesc: "Contact us and tell us about your workflow. We will assess the feasibility and potential value of digital intelligence delivery.",
    ctaBtn: "Start a Conversation",
  },
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata("cases", locale);
}

export default async function CasesPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale: Locale = locale === "zh" || locale === "en" ? locale : "zh";
  const c = casesContent[currentLocale];
  const currentPath = `/${currentLocale}`;

  const [heroCase, ...gridCases] = c.cases;

  return (
    <div className="page-sub">
      <section className="page-hero-simple">
        <div className="container-moon">
          <Reveal eager delay={0.05}>
            <span className="page-label">{c.pageTitle}</span>
          </Reveal>
          <Reveal eager delay={0.12}>
            <h1 className="page-hero-title">{c.heroTitle}</h1>
          </Reveal>
          <Reveal eager delay={0.2}>
            <p className="page-hero-sub">{c.heroSub}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-moon section-cases-main">
        <div className="container-moon">
          <Reveal delay={0.08}>
            <div className="cases-hero-card">
            <div className="cases-hero-image">
              <Image
                src={heroCase.image}
                alt={heroCase.title}
                fill
                className="cases-hero-img"
                sizes="(max-width: 1100px) 100vw, 1100px"
                priority
              />
              <div className="cases-hero-overlay" />
              <div className="cases-hero-content">
                <div className="cases-hero-meta">
                  <span className="cases-tag-pill">{heroCase.tag}</span>
                  <span className="cases-hero-num">01</span>
                </div>
                <div className="cases-hero-bottom">
                  <h2 className="cases-hero-title">{heroCase.title}</h2>
                  <div className="cases-hero-stats">
                    <div className="cases-stat">
                      <div className="cases-stat-value">{heroCase.metric}</div>
                      <div className="cases-stat-label">{heroCase.metricLabel}</div>
                    </div>
                    <div className="cases-hero-divider" />
                    <div className="cases-hero-challenge">
                      <p>{heroCase.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Reveal>

          <div className="cases-bento-grid">
            {gridCases.map((item, i) => (
              <Reveal key={item.title} delay={0.05 + i * 0.07}>
                <article className={`cases-bento-card cases-bento-${i + 2}`}>
                  <div className="bento-image-wrap">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="bento-img"
                      sizes="(max-width: 768px) 100vw, 540px"
                    />
                    <div className="bento-overlay" />
                    <span className="cases-tag-pill bento-tag">{item.tag}</span>
                  </div>
                  <div className="bento-content">
                    <div className="bento-header">
                      <span className="bento-num">0{i + 2}</span>
                      <h3 className="bento-title">{item.title}</h3>
                    </div>
                    <p className="bento-outcome">{item.outcome}</p>
                    <div className="bento-metric">
                      <span className="bento-metric-value">{item.metric}</span>
                      <span className="bento-metric-label">{item.metricLabel}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-moon section-dark">
        <Reveal delay={0.08} className="container-moon">
          <div className="section-label">{c.ongoingTitle}</div>
          <div className="ongoing-list">
            {c.ongoing.map((item, i) => (
              <div key={i} className="ongoing-item">
                <span className="ongoing-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-moon">
        <Reveal delay={0.1} className="container-moon">
          <h2 className="section-title">{c.ctaTitle}</h2>
          <p className="section-desc">{c.ctaDesc}</p>
          <div className="cta-actions">
            <Link href={`${currentPath}/contact`} className="btn-primary">
              {c.ctaBtn}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
