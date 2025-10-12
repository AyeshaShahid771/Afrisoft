import Hero from "./components/Hero";
import EventList from "./components/EventList";

export const metadata = {
  title: "Events — Afrisoft",
  description: "Conferences, seminars and workshops",
};

export default function EventsPage() {
  return (
    <main>
      <Hero />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6">Upcoming Events</h2>
        <EventList />
      </section>
    </main>
  );
}
