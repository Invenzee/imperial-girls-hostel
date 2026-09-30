import type { Metadata } from "next";
import { Barlow_Condensed, Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Girls Hostel in PECHS, Karachi | Imperial Girls Hostel",
  description:
    "Looking for a girls hostel near you? Imperial Girls Hostel in PECHS, Karachi offers safe private and shared rooms near Shahrah-e-Faisal and Tariq Road.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${workSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
      <meta name="google-site-verification" content="ZRTX8uxbcy_1bl8HZIOSMf2WsyD49lBbVGqcLFIWCDI" />
        </head>
      <body className="min-h-full flex flex-col bg-white text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
