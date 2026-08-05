import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: {
    default: "Sanari — сведение тату и татуажа лазером без шрамов и ожогов",
    template: "%s — Sanari",
  },
  description:
    "Медицинский лазерный центр сведения тату и перманентного макияжа. Без корочек, ожогов и рубцов. Бесплатная консультация и план сеансов уже на первой встрече.",
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('clinic-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        <ThemeProvider>
          <Header />
          <main className="flex-1 pb-[84px] lg:pb-0">{children}</main>
          <Footer />
          <StickyMobileCta />
        </ThemeProvider>
      </body>
    </html>
  );
}
