import Header from "@/components/Header";
import IntroBanner from "@/components/IntroBanner";
import ServicesSection from "@/components/ServicesSection";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <IntroBanner />
        <ServicesSection />
        <Hero />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
