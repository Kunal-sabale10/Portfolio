import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Anti-Tweet - Microblogging Platform",
    des: "A modern, full-stack microblogging and messaging platform with real-time direct messaging, notification center, and rich media feeds.",
    img: "/anti-tweet.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/git.svg"],
    link: "https://github.com/Kunal-sabale10/anti-tweet",
    sourceCode: "https://github.com/Kunal-sabale10/anti-tweet",
  },
  {
    id: 2,
    title: "Urban Bites - QR Dining Experience crm",
    des: "Premium restaurant QR ordering and table landing web application with animated interactive menus and table-specific dining badges.",
    img: "/urban-bites.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://github.com/Kunal-sabale10/urban-bites",
    sourceCode: "https://github.com/Kunal-sabale10/urban-bites",
  },
  {
    id: 3,
    title: "GenChat - E2EE Messaging Platform",
    des: "High-security end-to-end encrypted messaging system engineered with Go microservices, Rust cryptographic primitives, and Envoy proxy.",
    img: "/genchat.jpg",
    iconLists: ["/dock.svg", "/git.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/Kunal-sabale10/genchat",
    sourceCode: "https://github.com/Kunal-sabale10/genchat",
  },
  {
    id: 4,
    title: "Anagh Consultancy - Financial Services Platform",
    des: "AI-powered financial solutions platform featuring insurance quotes, mutual funds advisory, personalized loan calculators, and credit score analysis.",
    img: "/anagh-consultancy.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://kunal-sabale10.github.io/consultancy/",
    sourceCode: "https://github.com/Kunal-sabale10/consultancy",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern - Elevance Skills",
    desc: "Assisted in the development of responsive web applications using React.js, enhancing performance and user interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Developer",
    desc: "Designed and developed cross-platform mobile interfaces for iOS and Android platforms using React Native and modern APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Full-Stack Developer",
    desc: "Led end-to-end development of custom web and mobile solutions for clients, from architectural planning to production deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Architected and maintained performance-critical, user-facing applications utilizing Next.js, TypeScript, and Tailwind CSS.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Kunal-sabale10",
  },
  
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/feed/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
