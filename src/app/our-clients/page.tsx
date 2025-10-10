import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OurClients from "./components/OurClients";

export const metadata = {
  title: "Our Clients | Afrisoft AI Consultants",
  description: "Clients, partners and approach for Afrisoft AI Consultants",
};

export default function OurClientsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white text-gray-900">
        <section className="container mx-auto max-w-6xl px-4 py-12">
          <OurClients />
        </section>
      </main>
      <Footer />
    </div>
  );
}
