import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code, Noto_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import AmbientBackground from "@/components/ui/AmbientBackground";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });
const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-noto-sans" });

export const metadata: Metadata = {
  title: "Aayush Mishra",
  description: "Portfolio of Aayush Mishra - Architecting Scalable Systems",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        spaceGrotesk.variable,
        firaCode.variable,
        notoSans.variable,
        "min-h-screen font-display overflow-x-hidden relative"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll />
          {/* Ambient Background - Interactive */}
          <AmbientBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
