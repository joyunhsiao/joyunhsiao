import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { MainWrapper, TwIndicator } from "@/components/main";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jo Yun Hsiao | Portfolio",
    template: "%s | Portfolio",
  },
  generator: "Jo Yun Hsiao",
  applicationName: "Jo Yun Hsiao | Portfolio",
  description: "Jo Yun Hsiao is a self taught Frontend developer based in Miaoli, Taiwan.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Jo Yun Hsiao",
    "Jo Yun",
    "Frontend Engineer",
    "Frontend Developer",
    "Frontend",
    "Taiwan",
    "Miaoli",
    "Portfolio",
    "React",
    "React.js",
    "Next.js",
    "Typescript",
    "Tailwind",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body
        style={{
          WebkitTapHighlightColor: "transparent"
        }}
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
      `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          <MainWrapper>
            {children}
            <Toaster position="top-center" />
            <TwIndicator />
          </MainWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
