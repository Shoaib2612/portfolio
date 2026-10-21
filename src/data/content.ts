/**
 * All site copy lives here. Edit this file to change what the site says;
 * components only read from it.
 *
 * Headings: wrap ONE word in *asterisks* to set it in the italic serif accent.
 */

export type Site = {
  url: string;
  name: string;
  /** The hero name, one entry per line. */
  nameLines: string[];
  jobTitle: string;
  role: string;
  description: string;
  seoDescription: string;
  /** Hero status line (with the accent dot). Delete this line to remove it. */
  status?: string;
  /** Optional extra status label, e.g. "Open to opportunities". Delete or leave out to hide. */
  availability?: string;
  /**
   * E-order platform revenue. Delete this line to remove the stat and every
   * mention of the revenue figure.
   */
  revenue?: string;
  cv: string;
};

export const site: Site = {
  url: "https://shoaibabduljabbar.com",
  name: "Shoaib Abdul Jabbar",
  nameLines: ["Shoaib", "Abdul Jabbar"],
  jobTitle: "Senior Software Developer Engineer",
  role: "Senior Software Engineer",
  description:
    "I build full-stack applications, enterprise integrations, and AI-powered tools with Nest.js, React, and SAP.",
  seoDescription:
    "Shoaib Abdul Jabbar is a Senior Software Engineer in Dubai, UAE, building full-stack applications, enterprise integrations, and AI-powered tools with Nest.js, React, and SAP.",
  status: "Dubai, UAE",
  revenue: "AED 1.5M+",
  cv: "/Shoaib_Abdul_Jabbar_CV.pdf",
};

/** "AED 1.5M+" → "more than AED 1.5M", for use in sentences. */
const revenueInWords = site.revenue ? `more than ${site.revenue.replace(/\+$/, "")}` : "";
const revenueClause = site.revenue ? `, generating ${revenueInWords} in revenue to date` : "";

export const hero = {
  /**
   * Transparent-background portrait (PNG). When this file exists in /public the
   * hero shows it over a bold accent circle; otherwise it falls back to `image`.
   */
  cutout: {
    src: "/images/hero-cutout.png",
    alt: "Portrait of Shoaib Abdul Jabbar",
  },
  /** Regular photo, shown in the rectangular frame when there is no cutout. */
  image: {
    src: "/images/hero.jpg",
    alt: "Portrait of Shoaib Abdul Jabbar",
    /** CSS object-position: adjust to fix the framing of any photo, e.g. "50% 10%". */
    position: "50% 15%",
  },
  /**
   * Mobile/tablet only: the circular photo beside the name. `position` is the
   * point to zoom into (your face) and `zoom` how far to zoom in.
   */
  avatar: { position: "50% 20%", zoom: 2.2 },
  /** Small mono caption under the image. */
  caption: "Shoaib Abdul Jabbar, Dubai",
  /** Shown in large type when neither image exists. */
  initials: "SAJ",
};

export type SocialLink = { label: "LinkedIn" | "GitHub"; href: string };

export type Contact = {
  label: string;
  heading: string;
  accentWord: string;
  blurb: string;
  email: string;
  phone?: string;
  location?: string;
  links: { linkedin: string; github: string };
  cvPath: string;
  labels: {
    email: string;
    phone: string;
    location: string;
    copy: string;
    copied: string;
    linkedin: string;
    github: string;
    cv: string;
  };
};

export const contact: Contact = {
  /** Numbered label at the left of the section ("05 CONTACT"). */
  label: "Contact",
  /** Big heading, line 1 (bold display type). */
  heading: "Let's build",
  /** Big heading, line 2 (italic serif in the accent color, followed by an accent period). */
  accentWord: "something",
  blurb: "Hiring, building something, or just comparing notes? My inbox is open.",
  email: "shoaibshoaib2612@gmail.com",
  /** Shown in the details row under the email. Delete this line to remove it. */
  phone: "+971-507099378",
  /** Shown in the details row under the email. Delete this line to remove it. */
  location: "Dubai, UAE",
  // TODO: replace the GitHub URL with your real profile. Links that still
  // contain "your-handle" are treated as placeholders and hidden on the site.
  links: {
    linkedin: "https://www.linkedin.com/in/shoaib-abdul-jabbar-460a1a213",
    github: "https://github.com/your-handle",
  },
  cvPath: site.cv,
  labels: {
    email: "Email",
    phone: "Phone",
    location: "Based in",
    copy: "Copy",
    copied: "Copied",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Download CV",
  },
};

export const footer = {
  /** Center column (hidden on mobile). Delete the value ("") to hide it everywhere. */
  location: "Dubai, UAE",
  backToTop: "Back to top",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroButtons = {
  cv: "View CV",
  work: "See my work",
  contact: "Get in touch",
};

export type Stat = {
  value: string;
  caption: string;
  /** Count up from zero when scrolled into view (numeric values only). */
  count?: boolean;
};

export const stats: Stat[] = [
  { value: "4+", caption: "Years of professional experience, Aug 2022 to present", count: true },
  ...(site.revenue
    ? [{ value: site.revenue, caption: "Revenue generated by the e-order platform to date", count: true }]
    : []),
  { value: "10 min → instant", caption: "Insurance PDF generation, down from 10–15 minutes" },
  { value: "3", caption: "Enterprise integrations: SAP, Microsoft Teams, Oracle", count: true },
];

/** Technologies in the slow scrolling ticker under the stats. */
export const ticker: string[] = [
  "Nest.js",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "TypeScript",
  "SAP HANA",
  "PostgreSQL",
  "OpenAI",
  "Docker",
  "Linux",
  "AWS",
];

export type SectionCopy = { label: string; heading: string };

export const sections = {
  about: { label: "About", heading: "Systems that *talk*" },
  experience: { label: "Experience", heading: "Roles, *in order*" },
  projects: { label: "Projects", heading: "Things I've *shipped*" },
  skills: { label: "Skills", heading: "What I *work with*" },
} satisfies Record<string, SectionCopy>;

export const about = {
  statement:
    "I build web and mobile applications and connect them to the systems a business already runs on: SAP, Oracle, Microsoft Teams, and LLM APIs.",
  paragraphs: [
    "I'm a full-stack engineer working across React, Next.js, Nest.js and React Native. At New East General Trading in Dubai I coordinate an e-order platform with direct SAP integration and an internal intranet that ties together Microsoft Teams, Oracle and an AI policy assistant.",
    "More of my work now sits where product meets AI: integrating LLM APIs such as OpenAI, building interfaces that show AI-generated output in real time, and building agentic bots that call tools and APIs to run multi-step workflows. I also handle delivery with Docker and Linux, and design SAP HANA schemas and SQL procedures.",
  ],
};

export type Role = {
  company: string;
  location: string;
  title: string;
  period: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "New East General Trading FZCO",
    location: "Dubai, UAE",
    title: "Senior Software Developer Engineer",
    period: "Apr 2025 – Present",
    highlights: [
      `Coordinated development of web and mobile applications using React, Next.js, Nest.js and React Native, including an e-order platform with direct SAP integration, used by customers for over a year${revenueClause}.`,
      "Coordinated an internal intranet application integrating the Microsoft Teams API for scheduling meetings, Oracle APIs for organizational hierarchy and role-based task management, and an AI-powered policy assistant chatbot, with approvals and internal announcements.",
      "Built user interfaces for AI-powered tools, integrated LLM APIs (including OpenAI), and visualized AI-generated outputs in real time. Built agentic bots that call tools and APIs to run multi-step workflows.",
      "Applied DevOps practices using Linux servers and Docker.",
      "Managed and developed SAP HANA databases, including schema design and optimized SQL procedures for business operations and reporting.",
    ],
  },
  {
    company: "Zuno General Insurance Company Limited",
    location: "Mumbai, India",
    title: "Software Developer Engineer",
    period: "Aug 2022 – Apr 2025",
    highlights: [
      "Built an Admin Dashboard in React.js (Next.js) with a user-role table for admin, customer and agent roles.",
      "Designed user interfaces for the renewal dashboard project.",
      "Developed real-time PDF generation REST APIs with Node.js (Express.js) and EJS templating for insurance purchases and renewals, cutting processing time from 10–15 minutes to instant delivery.",
      "Developed secure login and dashboard REST APIs with JWT authentication and role-based access control.",
      "Managed PostgreSQL databases, optimizing data retrieval and user validation.",
    ],
  },
  {
    company: "WorkWise",
    location: "Remote",
    title: "Web Developer (Freelance)",
    period: "Freelance",
    highlights: [
      "Built a Technical Evaluation feature in React.js to streamline RFQ and product evaluation, with REST APIs in Node.js and Express.js.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  /** Small uppercase label under the title. */
  role: string;
  description: string;
  /** Panel fields: each is hidden while empty ("" or []). */
  problem: string;
  built: string[];
  tech: string[];
  result: string;
  /** Optional external link, shown as "LABEL ↗" in the row's right-hand column. */
  link?: { label: string; href: string };
  /** Only projects with `published: true` are shown on the site. */
  published: boolean;
};

export const projects: Project[] = [
  {
    slug: "e-order-platform",
    title: "E-Order Platform with SAP Integration",
    role: "Senior Software Engineer",
    description: `Customer-facing ordering platform integrated directly with SAP, used by customers for over a year${
      site.revenue ? ` and generating ${revenueInWords} in revenue to date` : ""
    }.`,
    problem:
      "Customers needed a digital way to place orders, and those orders had to flow into SAP, the company's existing business system.",
    built: [
      "Coordinated development of the e-order platform across web and mobile with React, Next.js, Nest.js and React Native.",
      "Integrated the platform directly with SAP.",
    ],
    tech: ["React", "Next.js", "Nest.js", "SAP", "SAP HANA"],
    result: `Used by customers for over a year${revenueClause}.`,
    published: true,
  },
  {
    slug: "intranet",
    title: "Company Intranet with AI Policy Assistant",
    role: "Full Stack Developer",
    description:
      "Internal portal with Microsoft Teams meeting scheduling, Oracle-based organizational hierarchy and role-based tasks, approvals, announcements, and an AI chatbot that helps employees find company policies.",
    problem:
      "Meetings, role-based tasks, approvals, announcements and policy questions needed a single internal home that worked with the organization's existing systems.",
    built: [
      "Integrated the Microsoft Teams API for scheduling meetings.",
      "Integrated Oracle APIs for organizational hierarchy and role-based task management.",
      "Added approvals, internal announcements and an AI-powered policy assistant chatbot.",
    ],
    tech: ["React", "Next.js", "Nest.js", "Microsoft Teams API", "Oracle APIs", "OpenAI"],
    result:
      "One internal portal for meeting scheduling, role-based tasks, approvals, announcements and policy questions.",
    published: true,
  },
  {
    slug: "insurance-pdf-api",
    title: "Real-time Insurance PDF API",
    role: "Backend Developer",
    description:
      "REST APIs that generate insurance purchase and renewal PDFs instantly, cutting processing time from 10–15 minutes to instant delivery.",
    problem: "Producing the PDF documents for insurance purchases and renewals took 10–15 minutes.",
    built: [
      "Developed real-time PDF generation REST APIs with Node.js and Express.",
      "Used EJS templating to render the documents for both purchases and renewals.",
    ],
    tech: ["Node.js", "Express", "EJS", "PostgreSQL"],
    result: "Processing time went from 10–15 minutes to instant delivery.",
    published: false, // hidden from the site; set to true to show again
  },
  {
    slug: "admin-dashboard",
    title: "Role-based Admin Dashboard",
    role: "Frontend Developer",
    description:
      "Admin dashboard with a user-role table managing admin, customer, and agent access, plus the renewal dashboard UI.",
    problem:
      "Admins needed one place to manage access across three roles: admin, customer and agent.",
    built: [
      "Built the admin dashboard in Next.js with a user-role table for admin, customer and agent roles.",
      "Designed the user interfaces for the renewal dashboard.",
      "Secured login and dashboard APIs with JWT authentication and role-based access control.",
    ],
    tech: ["Next.js", "React", "JWT"],
    result:
      "Role-based access management for admin, customer and agent users, alongside the renewal dashboard UI.",
    published: false, // hidden from the site; set to true to show again
  },
  {
    slug: "rfq-evaluation",
    title: "RFQ Technical Evaluation",
    role: "Freelance Web Developer",
    description: "Feature that streamlines RFQ and product evaluation, with REST APIs for backend integration.",
    problem: "Technical evaluation of RFQs and products needed to be streamlined.",
    built: [
      "Built the Technical Evaluation feature in React.",
      "Developed the supporting REST APIs in Node.js and Express.",
    ],
    tech: ["React", "Node.js", "Express"],
    result: "A dedicated Technical Evaluation feature that streamlines RFQ and product evaluation.",
    published: false, // hidden from the site; set to true to show again
  },
  // Problem / What I built / Result / Tech are left empty (hidden on the site)
  // until real details are added. TODO: fill them in when ready.
  {
    slug: "isuzu-saudi-arabia",
    title: "Isuzu Saudi Arabia",
    role: "Backend & Integration",
    description: "Backend and system integration work for Isuzu's Saudi Arabia digital platform.",
    problem: "",
    built: [],
    tech: [],
    result: "",
    link: { label: "ISUZU.SA", href: "https://isuzu.sa" },
    published: true,
  },
  {
    slug: "nextar",
    title: "Nextar",
    role: "Full Stack Developer",
    description:
      "Website for a commercial truck distributor in Saudi Arabia, covering vehicles, maintenance, spare parts, and logistics.",
    problem: "",
    built: [],
    tech: [],
    result: "",
    link: { label: "NEXTAR-ME.COM", href: "https://nextar-me.com" },
    published: true,
  },
  {
    slug: "smart-project-hr-ai",
    title: "Smart Project (HR AI)",
    role: "AI Engineer",
    description: "AI platform that answers employee questions using internal HR policy documents.",
    problem: "",
    built: [],
    tech: [],
    result: "",
    published: true,
  },
];

export type SkillGroup = { name: string; items: string[] };

export const skills: SkillGroup[] = [
  { name: "Frontend", items: ["React", "Next.js", "React Native", "HTML", "CSS", "Tailwind", "Material UI"] },
  { name: "Backend", items: ["Node.js", "Nest.js", "Express", "REST APIs", "JWT / RBAC", "Flask"] },
  { name: "Languages", items: ["TypeScript / JavaScript", "Python", "SQL", "C++", "Java"] },
  { name: "Data", items: ["SAP HANA", "PostgreSQL", "MySQL", "MongoDB", "Cassandra"] },
  { name: "Cloud & DevOps", items: ["AWS EC2 / S3 / Amplify", "Docker", "Linux", "Git"] },
  { name: "AI", items: ["OpenAI / LLM APIs", "Agentic bots", "AI chat interfaces"] },
  { name: "Integrations", items: ["SAP", "Microsoft Teams API", "Oracle APIs", "Postman"] },
];

export const education = {
  label: "Education",
  degree: "B.E. Computer Science",
  school: "Jawaharlal Nehru National College of Engineering",
  location: "Shimoga, India",
  period: "2018 – 2022",
};
