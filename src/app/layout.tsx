import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/my-ui/theme-toggle";

// Applique le thème stocké AVANT le premier paint pour éviter tout flash.
const themeScript = `(function(){try{var t=localStorage.getItem('vite-ui-theme')||'dark';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.add(d?'dark':'light');}catch(e){document.documentElement.classList.add('dark');}})();`;

export const metadata: Metadata = {
  title: "Yannis Nzue Essono — Full-Stack Developer",
  description:
    "Portfolio of Yannis Nzue Essono — full-stack developer, entrepreneur and 42 student. Selected projects, services and an AI assistant.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
