import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
  GraduationCap,
  Award,
  Trophy,
  BrainCircuit,
  Code2,
  Database,
  Wrench,
  ScanText,
  CheckCircle2,
  FileText,
  LayoutGrid,
  Send,
  ExternalLink,

} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TypeLine } from "@/components/TypeLine";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shiwangi | AI/ML Engineer & Python Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Shiwangi, B.Tech CSE student and AI/ML engineer building machine learning, NLP and computer vision products in Python.",
      },
      { property: "og:title", content: "Shiwangi | AI/ML Engineer & Python Developer" },
      {
        property: "og:description",
        content:
          "AI/ML portfolio featuring ResearchRAG, MediSense AI and a YOLOv8 plant disease detection system.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const STATS = [
  ["8.82", "Current CGPA", "B.Tech CSE · 2023–2027"],
  ["3+", "AI/ML Projects", "Built & deployed end-to-end"],
  ["3", "Certifications", "IBM, NASSCOM & more"],
  ["2", "Hackathon Finals", "GNA 4.0 · Hack-N-Win"],
];

const FOCUS = [
  "Generative AI & RAG",
  "Applied Machine Learning",
  "Natural Language Processing",
  "Computer Vision (YOLOv8)",
  "OCR & Document Parsing",
  "Data Pipelines & EDA",
  "Model Deployment (Streamlit/Flask)",
  "Generative AI & RAG",
];

const SKILLS = [
  {
    icon: Code2,
    title: "Programming",
    tag: "PRIMARY",
    items: [
      ["Python", "Expert"],
      ["Data Structures", "Strong"],
      ["REST APIs", "Fluent"],
      ["Object-Oriented Design", "Solid"],
    ],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    items: [
      ["Regression & Classification", "Advanced"],
      ["Decision Trees / Random Forest", "Advanced"],
      ["KNN & Clustering (DBSCAN)", "Proficient"],
      ["Model Evaluation", "Strong"],
    ],
  },
  {
    icon: Database,
    title: "Libraries & Frameworks",
    items: [
      ["Pandas & NumPy", "Expert"],
      ["Scikit-learn", "Advanced"],
      ["Streamlit / Flask / FastAPI", "Advanced"],
      ["Matplotlib & Seaborn", "Fluent"],
    ],
  },
  {
    icon: ScanText,
    title: "AI Tools & Workflow",
    items: [
      ["OpenCV & YOLOv8", "Proficient"],
      ["Google Gemini & LLM APIs", "Proficient"],
      ["Qdrant & Vector Search", "Proficient"],
      ["RAG & Embeddings", "Proficient"],
    ],
  },
];

const GITHUB = "https://github.com/shiwangiedulearn-jpg";
const LINKEDIN = "https://www.linkedin.com/in/shiwangi-aiml/";
const EMAIL = "shiwangi.edulearn@gmail.com";

const PROJECTS = [
  {
    title: "ResearchRAG",
    subtitle: "Document-Based Retrieval-Augmented Generation System",
    tagKey: "genai",
    tag: "Generative AI",
    points: [
      "Built an end-to-end RAG application for asking questions across uploaded TXT, PDF and DOCX research documents.",
      "Implemented document extraction, chunking, Gemini embeddings, semantic retrieval with Qdrant and LLM-powered answer generation.",
      "Built a FastAPI backend and React frontend with document upload, duplicate detection, document management and question answering.",
      "Deployed the frontend on Vercel and backend on Render with production environment configuration and CORS support.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "React",
      "Google Gemini",
      "Qdrant",
      "RAG",
      "Embeddings",
      "Vercel",
      "Render",
    ],
    repo: "https://github.com/shiwangiedulearn-jpg/ResearchRAG",
    live: "https://researchrag-ai.vercel.app/",
  },

  {
    title: "MediSense AI",
    subtitle: "AI-Powered Healthcare Diagnosis Assistant",
    tagKey: "ml",
    tag: "Machine Learning",
    points: [
      "Full-stack AI healthcare platform predicting risk across Heart, Diabetes, Liver, Kidney, Lipid Profile and a Symptom Checker.",
      "Medical report extraction via OCR, ML predictions, BMI insights and Groq-powered health guidance.",
      "Deployed with Vercel (frontend) and Render + Docker (backend).",
    ],
    tech: [
      "Python",
      "React",
      "FastAPI",
      "Scikit-learn",
      "Groq API",
      "PyMuPDF",
      "pdfplumber",
      "pytesseract",
    ],
    repo: "https://github.com/shiwangiedulearn-jpg/MediSense-AI",
    live: "https://medi-sense-ai-eight-nu.vercel.app/",
  },

  {
    title: "AgriTech",
    subtitle: "Plant Disease Detection",
    tagKey: "cv",
    tag: "Computer Vision",
    points: [
      "YOLOv8-based computer vision model detecting plant disease across multiple crop classes.",
      "End-to-end pipeline covering preprocessing, training and evaluation at ~85% accuracy.",
    ],
    tech: ["Python", "YOLOv8", "OpenCV"],
    repo: "https://github.com/shiwangiedulearn-jpg/smart-agriculture-ai",
    live: "https://plantsd.onrender.com/",
  },
];

const FILTERS = [
  { key: "all", label: "All Projects (3)" },
  { key: "genai", label: "Generative AI (1)" },
  { key: "ml", label: "Machine Learning (1)" },
  { key: "cv", label: "Computer Vision (1)" },
];

const EDUCATION = [
  {
    degree: "B.Tech, Computer Science Engineering",
    org: "I.K.G.P.T.U. Kapurthala",
    note: "CGPA 8.82 · Focus on AI & Machine Learning",
    years: "2023 – 2027",
  },
];

const CERTS = [
  "AICTE | IBM SkillsBuild — AI Automation & Intelligent Solutions Internship (BharatCares), June 2026",
  "Exploratory Data Analysis — FutureSkills Prime (NASSCOM IT-ITeS SSC), July 2026",
  "Python with Artificial Intelligence — Future Finders",
];

const ACHIEVEMENTS = [
  "Finalist — GNA Hackathon 4.0",
  "Finalist — Hack-N-Win Hackathon, CGC Jhanjeri",
  "Coordinated and performed in several university events",
];


function Home() {
  const [active, setActive] = useState("home");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["home", ...NAV.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const visible = PROJECTS.filter((p) => filter === "all" || p.tagKey === filter);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-display text-sm font-semibold">
            <span className="text-gradient text-base font-bold">S</span>
            <span className="tracking-wide">Shiwangi</span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    active === n.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero-aura relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <Reveal>
                <p className="chip">Available for AI/ML internships & entry-level roles</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-4xl font-semibold leading-[1.08] md:text-6xl">
                  <span className="whitespace-nowrap">
                    Hi, I am <span className="text-shimmer">Shiwangi</span>


                  </span>
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-4 min-h-[1.6em] text-xl text-primary md:text-2xl">
                  <TypeLine
                    phrases={[
                      "AI Engineer",
                      "Machine Learning Engineer",
                      "LLM & RAG Engineer",
                      "AI Agent Developer",
                      "Computer Vision & NLP",
                    ]}
                  />
                </p>

              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 max-w-xl text-muted-foreground">
                  AI engineer and Computer Science undergraduate building machine learning,
                  natural language processing and computer vision systems — turning raw data into
                  reliable, deployable products.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Explore Projects <ArrowRight className="size-4" />
                  </a>
                  <a
                    href="#resume"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    View Resume <FileText className="size-4" />
                  </a>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-9 flex items-center gap-4 text-muted-foreground">
                  <span className="text-xs uppercase tracking-[0.25em]">Find me on:</span>
                  <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github className="size-4 transition-colors hover:text-primary" />
                  </a>
                  <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin className="size-4 transition-colors hover:text-primary" />
                  </a>
                  <a href={`mailto:${EMAIL}`} aria-label="Email">
                    <Mail className="size-4 transition-colors hover:text-primary" />
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={220}>
              <div className="surface-card glow-frame relative p-8">
                <div className="flex items-start justify-between">
                  <span className="icon-tile font-display text-lg font-semibold">S</span>
                  <span className="chip">B.Tech CSE · 2027</span>
                </div>
                <h2 className="mt-8 text-2xl font-semibold">Shiwangi</h2>
                <p className="mt-1 text-sm text-primary">AI / ML Engineer · Python Developer</p>
                <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
                  {["Artificial Intelligence", "Retrieval-Augmented Generation", "Computer Vision", "NLP & AI Agents"].map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-secondary/50 px-3 py-2 text-center text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-7 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary" /> Punjab, India · Open to relocation
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" eyebrow="Professional Summary" title="Building intelligent systems, carefully">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-5 text-muted-foreground">
                <p>
                  I'm <strong className="text-foreground">Shiwangi</strong>, an AI/ML enthusiast
                  and Python developer pursuing a B.Tech in Computer Science Engineering at
                  I.K.G.P.T.U. Kapurthala with a CGPA of 8.82.
                </p>
                <p>
                  My work centres on applied machine learning: designing clean data pipelines,
                  training dependable models and shipping them as usable applications. I have built
                  healthcare diagnosis assistants, computer-vision classifiers for agriculture and
                  geospatial risk-prediction APIs.
                </p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {FOCUS.map((f) => (
                    <p key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="size-4 shrink-0 text-primary" /> {f}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {STATS.map(([v, l, s], i) => (
                <Reveal key={l} delay={i * 70}>
                  <div className="surface-card h-full p-6">
                    <p className="text-gradient font-display text-3xl font-semibold">{v}</p>
                    <p className="mt-2 font-medium">{l}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" eyebrow="Technical Expertise" title="Engineered for real-world ML delivery">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="surface-card h-full p-6">
                  <s.icon className="icon-tile size-12 p-3" />
                  <h3 className="mt-5 flex items-center gap-2 text-base font-semibold">
                    {s.title}
                    {s.tag && (
                      <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold tracking-wider text-primary-foreground">
                        {s.tag}
                      </span>
                    )}
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm">
                    {s.items.map(([name, level]) => (
                      <li key={name} className="flex items-baseline justify-between gap-3">
                        <span className="text-muted-foreground">{name}</span>
                        <span className="shrink-0 text-xs text-primary">{level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          eyebrow="Demonstrated Work"
          title="Project Portfolio"
          intro="Machine learning, computer vision and API projects taken from raw datasets to deployed, usable applications."
        >
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                  filter === f.key
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <LayoutGrid className="mr-2 inline size-3.5" />
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="surface-card flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <BrainCircuit className="icon-tile size-12 p-3" />
                    <span className="chip">{p.tag}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-primary">{p.subtitle}</p>
                  <ul className="mt-4 flex-1 space-y-2.5 text-sm text-muted-foreground">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-sweep inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Github className="size-4" /> GitHub
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-sweep inline-flex items-center gap-1.5 text-sm text-primary"
                      >
                        <ExternalLink className="size-4" /> Live Demo{" "}
                        <ArrowRight className="size-3.5" />
                      </a>
                    )}
                  </div>

                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* RESUME */}
        <Section id="resume" eyebrow="Background" title="Resume Overview">
          <Reveal>
            <div className="surface-card space-y-10 p-8 md:p-10">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <GraduationCap className="size-5 text-primary" /> Education
                </h3>
                <div className="mt-6 space-y-6">
                  {EDUCATION.map((e) => (
                    <div key={e.degree} className="border-l-2 border-primary/40 pl-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-medium">{e.degree}</p>
                        <p className="text-xs text-muted-foreground">{e.years}</p>
                      </div>
                      <p className="mt-1 text-sm text-primary">{e.org}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{e.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <Award className="size-5 text-primary" /> Certifications & Trainings
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                    {CERTS.map((c) => (
                      <li key={c} className="flex gap-2.5">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <Trophy className="size-5 text-primary" /> Achievements
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                    {ACHIEVEMENTS.map((a) => (
                      <li key={a} className="flex gap-2.5">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          eyebrow="Get In Touch"
          title="Let's Build Something Great"
          intro="Have a role, internship or project in mind? Drop me a message and I'll respond within a day."
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="mt-3 text-muted-foreground">
                  Feel free to reach out through any of these channels — I'm always open to
                  discussing AI/ML roles, data science projects and collaborations.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 88377 49198",
                      href: "tel:+918837749198",
                    },
                    { icon: Linkedin, label: "LinkedIn", value: "shiwangi-rana", href: LINKEDIN },
                    { icon: Github, label: "GitHub", value: "shiwangiedulearn", href: GITHUB },
                  ].map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="surface-card flex items-center gap-4 p-4"
                    >
                      <c.icon className="icon-tile size-11 p-3" />
                      <span>
                        <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                          {c.label}
                        </span>
                        <span className="break-all text-sm">{c.value}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form onSubmit={handleSubmit} className="surface-card space-y-4 p-7">
                <h3 className="text-xl font-semibold">Send Me a Message</h3>
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground">
                    Your Name
                  </label>
                  <input id="name" name="name" required className="field mt-2" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="field mt-2"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="field mt-2 resize-none"
                    placeholder="Tell me about the role or project…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Send Message <Send className="size-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Shiwangi · AI/ML Engineer</p>
          <p>Punjab, India</p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{title}</h2>
            {intro && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
            <span className="section-rule" />
          </div>
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
