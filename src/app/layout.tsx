import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutShell from "@/components/LayoutShell";
import { name, roles } from "@/data/profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Page title and description (shows in browser tab and search results)
export const metadata: Metadata = {
  title: `${name}'s Portfolio`,
  description: roles[0],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (!theme) {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className={inter.variable}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
