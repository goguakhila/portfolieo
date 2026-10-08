import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gogu Akhila | Data Science & AI Portfolio",
  description:
    "Portfolio of Gogu Akhila — Computer Science graduate focused on Data Science, Generative AI, Agentic AI, Python, and SQL.",
  keywords: [
    "Gogu Akhila",
    "Data Science",
    "Generative AI",
    "Agentic AI",
    "Python",
    "SQL",
    "MySQL",
    "FastAPI",
    "Streamlit",
    "Machine Learning",
    "RAG",
    "LangChain",
    "Prompt Engineering",
    "Hyderabad",
    "AI Engineer Portfolio",
  ],
  authors: [{ name: "Gogu Akhila", url: "https://github.com/goguakhila" }],
  creator: "Gogu Akhila",
  openGraph: {
    title: "Gogu Akhila | Data Science & AI Portfolio",
    description:
      "Explore practical AI applications, data engineering workflows, and machine learning models built by Gogu Akhila.",
    url: "https://github.com/goguakhila",
    siteName: "Gogu Akhila Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gogu Akhila | Data Science & AI Portfolio",
    description:
      "Explore practical AI applications, data engineering workflows, and machine learning models built by Gogu Akhila.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
