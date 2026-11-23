import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
export const metadata: Metadata = {
 title: { default: "EVS Fitness Studio | Tindivanam", template: "%s | EVS Fitness Studio" },
 description: "Train with intent at EVS Fitness Studio, Tindivanam. Explore strength training, personal fitness and membership enquiries.",
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><StoreProvider><Header/><main>{children}</main><Footer/><FloatingWhatsApp/></StoreProvider></body></html>}