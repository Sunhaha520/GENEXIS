import Image from "next/image";
import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/page-metadata";

type Locale = "zh" | "en";

const contactContent: Record<Locale, {
  pageTitle: string;
  heroTitle: string;
  heroSub: string;
  email: string;
  phone: string;
  wechat: string;
  location: string;
  locationDetail: string;
  responseTime: string;
  stepTitle: string;
  steps: { title: string; desc: string }[];
  ctaText: string;
  ctaSub: string;
}> = {
  zh: {
    pageTitle: "联系我们",
    heroTitle: "开启数智化落地之旅",
    heroSub: "从一次对话开始，探索数智化如何为你的业务带来真正的改变。",
    email: "contact@genexis.tech",
    phone: "152 5123 9262",
    wechat: "GENEXIS_AI",
    location: "苏州",
    locationDetail: "江苏省苏州市",
    responseTime: "24 小时内回复",
    stepTitle: "合作流程",
    steps: [
      { title: "需求对接", desc: "深入了解业务流程与核心痛点" },
      { title: "可行性评估", desc: "评估技术可行性与潜在投资回报" },
      { title: "原型验证", desc: "快速搭建原型，验证核心假设" },
      { title: "落地交付", desc: "协同团队完成系统上线与持续优化" },
    ],
    ctaText: "准备好开启对话了吗？",
    ctaSub: "期待与你一起探索数智化落地的无限可能",
  },
  en: {
    pageTitle: "Contact Us",
    heroTitle: "Start Your Digital Intelligence Journey",
    heroSub: "Begin with a conversation and discover how digital intelligence can bring real change to your business.",
    email: "hello@genexis.ai",
    phone: "+86 181 1266 8787",
    wechat: "GENEXIS_AI",
    location: "Suzhou, China",
    locationDetail: "Jiangsu Province",
    responseTime: "Response within 24h",
    stepTitle: "How We Work",
    steps: [
      { title: "Scope the Workflow", desc: "Understand your business processes and pain points" },
      { title: "Feasibility Assessment", desc: "Evaluate technical feasibility and ROI" },
      { title: "Prototype Validation", desc: "Build a rapid prototype to validate assumptions" },
      { title: "Deliver & Iterate", desc: "Deploy the system and optimize results" },
    ],
    ctaText: "Ready to Start the Conversation?",
    ctaSub: "We look forward to exploring the possibilities of digital intelligence with you",
  },
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata("contact", locale);
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale: Locale = locale === "zh" || locale === "en" ? locale : "zh";
  const c = contactContent[currentLocale];

  return (
    <div className="page-sub">
      <section className="page-hero-simple">
        <div className="container-moon">
          <Reveal eager delay={0.05}>
            <span className="contact-label">
              <Mail size={14} />
              {c.pageTitle}
            </span>
          </Reveal>
          <Reveal eager delay={0.12}>
            <h1 className="page-hero-title">{c.heroTitle}</h1>
          </Reveal>
          <Reveal eager delay={0.2}>
            <p className="page-hero-sub">{c.heroSub}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-moon section-contact-main">
        <div className="container-moon">
          <div className="contact-main-grid">
            <div className="contact-left-col">
              <Reveal delay={0.08} className="contact-info-card">
                <div className="contact-info-card-header">
                  <span className="contact-info-card-title">
                    {currentLocale === "zh" ? "联系方式" : "Contact Info"}
                  </span>
                  <div className="contact-info-card-line" />
                </div>

                <div className="contact-info-list">
                  <div className="contact-info-row">
                    <div className="contact-info-icon-wrap">
                      <Mail size={20} />
                    </div>
                    <div className="contact-info-content">
                      <span className="contact-info-label">
                        {currentLocale === "zh" ? "邮箱" : "Email"}
                      </span>
                      <a href={`mailto:${c.email}`} className="contact-info-value contact-email">
                        {c.email}
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-row">
                    <div className="contact-info-icon-wrap">
                      <Phone size={20} />
                    </div>
                    <div className="contact-info-content">
                      <span className="contact-info-label">
                        {currentLocale === "zh" ? "电话" : "Phone"}
                      </span>
                      <a href={`tel:${c.phone}`} className="contact-info-value">
                        {c.phone}
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-row">
                    <div className="contact-info-icon-wrap">
                      <MessageCircle size={20} />
                    </div>
                    <div className="contact-info-content">
                      <span className="contact-info-label">WeChat</span>
                      <span className="contact-info-value">{c.wechat}</span>
                    </div>
                  </div>

                  <div className="contact-info-row">
                    <div className="contact-info-icon-wrap">
                      <MapPin size={20} />
                    </div>
                    <div className="contact-info-content">
                      <span className="contact-info-label">
                        {currentLocale === "zh" ? "所在地" : "Location"}
                      </span>
                      <span className="contact-info-value">{c.location}</span>
                      <span className="contact-info-sub">{c.locationDetail}</span>
                    </div>
                  </div>
                </div>

                <div className="contact-response-badge">
                  <Clock size={14} />
                  <span>{c.responseTime}</span>
                </div>
              </Reveal>

              <Reveal delay={0.16} className="contact-map-card">
                <div className="contact-map-inner">
                  <div className="cyber-map-overlay" />
                  <div className="cyber-map-radar" />
                  <Image
                    src="/images/map-bg.png"
                    alt="Genexis Location Map"
                    fill
                    className="cyber-map-bg"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 540px"
                  />
                  <div className="cyber-map-marker">
                    <div className="marker-dot" />
                    <div className="marker-pulse" />
                    <div className="marker-label">
                      {currentLocale === "zh" ? "极创数生苏州" : "GENEXIS SUZHOU"}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="contact-right-col">
              <Reveal delay={0.12} className="contact-steps-card">
                <div className="contact-steps-header">
                  <span className="contact-steps-title">{c.stepTitle}</span>
                </div>
                <div className="contact-steps-grid">
                  {c.steps.map((step, i) => (
                    <div key={step.title} className={`contact-step-item contact-step-${i + 1}`}>
                      <div className="contact-step-number">0{i + 1}</div>
                      <div className="contact-step-body">
                        <h3 className="contact-step-title">{step.title}</h3>
                        <p className="contact-step-desc">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-moon">
        <Reveal delay={0.1} className="container-moon contact-cta-inner">
          <h2 className="section-title">{c.ctaText}</h2>
          <p className="section-desc">{c.ctaSub}</p>
        </Reveal>
      </section>
    </div>
  );
}
