import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CoreOfferings from "@/components/CoreOfferings";
import WhyChooseUs from "@/components/WhyChooseUs";
import VisionSection from "@/components/VisionSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CoreOfferings />
        <WhyChooseUs />
        <VisionSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
