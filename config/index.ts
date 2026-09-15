import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/Kunal-sabale10",
  ownerName: "Kunal",
  ownerEmail: "kunalsabale89@gmail.com",
} as const;

export const siteConfig: Metadata = {
  metadataBase: new URL("https://portfolio-5sjd.vercel.app"),
  title: `${links.ownerName} Sabale | Full Stack Developer Portfolio`,
  description:
    "Modern & Minimalist Next.js Developer Portfolio of Kunal Sabale showcasing full-stack projects, creative 3D animations, and web engineering.",
  keywords: [
    "kunal sabale",
    "kunal portfolio",
    "full stack developer",
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "aceternity",
    "aceternity-ui",
    "shadcn",
    "modern-portfolio",
    "3d-portfolio",
    "framer-motion",
    "three.js",
    "tailwindcss",
    "typescript",
  ],
  authors: [
    {
      name: `${links.ownerName} Sabale`,
      url: "https://github.com/Kunal-sabale10",
    },
  ],
  creator: `${links.ownerName} Sabale`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-5sjd.vercel.app",
    title: `${links.ownerName} Sabale | Full Stack Developer Portfolio`,
    description:
      "Modern & Minimalist Next.js Developer Portfolio of Kunal Sabale showcasing full-stack projects, creative 3D animations, and web engineering.",
    siteName: `${links.ownerName} Sabale Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${links.ownerName} Sabale | Full Stack Developer Portfolio`,
    description:
      "Modern & Minimalist Next.js Developer Portfolio of Kunal Sabale showcasing full-stack projects, creative 3D animations, and web engineering.",
  },
};
