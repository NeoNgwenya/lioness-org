import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/dm-sans";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lioness.Org | Girls’ dignity matters",
  description:
    "Lioness.Org supports menstrual health and dignity for girls and young women in Southern Africa. Explore the work and find out how to get involved.",
  icons: { icon: "/images/lioness-logo.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}
