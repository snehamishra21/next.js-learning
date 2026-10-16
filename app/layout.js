import { Suspense } from "react";
import { Roboto, Roboto_Mono } from "next/font/google";
import Navigation from "./component/navigation";
import Footer from "./component/footer";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sneha — Next.js App",
  description:
    "A responsive Next.js demo app with themed branding, hover effects, and live API data.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Suspense
          fallback={
            <header className="sticky top-0 z-50 h-16 border-b border-border bg-surface/80 backdrop-blur-md" />
          }
        >
          <Navigation />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
