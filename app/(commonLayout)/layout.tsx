import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/home-3/Footer";

export const metadata: Metadata = {
  title: "Veay Games - Unleash Game Innovation.",
  description: "veay games - Innovative game studio: mobile games, web3 assets & iGaming thrills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
