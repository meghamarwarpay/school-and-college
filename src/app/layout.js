import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar2 from "@/Components/Header/Navbar";
import Footer from "@/Components/Footer/footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
