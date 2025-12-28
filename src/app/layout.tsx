import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code, Noto_Sans } from "next/font/google"; // Assuming Noto Sans usage based on other pages, or just Space Grotesk
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });
const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-noto-sans" });

export const metadata: Metadata = {
  title: "Engineer Portfolio",
  description: "Senior Engineer Portfolio - Architecting Scalable Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        spaceGrotesk.variable,
        firaCode.variable,
        notoSans.variable,
        "bg-background-dark min-h-screen text-white font-display overflow-x-hidden relative"
      )}>
        {/* Global Ambient Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse duration-[10000ms]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-800/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
          <div className="absolute top-[30%] right-[20%] w-[20vw] h-[20vw] bg-blue-600/10 rounded-full blur-[80px] opacity-30"></div>
          <div className="absolute inset-0 bg-[url('https://placeholder.pics/svg/300')] opacity-[0.03] bg-repeat bg-[length:60px_60px]" style={{ maskImage: "linear-gradient(to bottom, black, transparent)" }}></div>
        </div>
        {children}
      </body>
    </html>
  );
}
