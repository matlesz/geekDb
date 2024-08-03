import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "geekDb",
  description: "geekDb is an Open Movie DB wrapper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}

          {/* SearchBox */}

          {children}
        </Providers>
        
      </body>
    </html>
  );
}
