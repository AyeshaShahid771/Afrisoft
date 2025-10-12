"use client";

import EventCard from "./EventCard";

export default function EventList() {
  const events = [
    {
      title: "UET Session: AI in Civil Engineering",
      date: "September 30, 2025",
      location: "Peshawar",
      excerpt: `Peshawar, September 30, 2025 — The University of Engineering and Technology (UET) hosted an insightful session with experienced civil engineers from the C&W Department, focusing on the transformative role of Artificial Intelligence (AI) in civil engineering practices.

The discussion explored how AI can revolutionize the sector, from smarter design processes and predictive maintenance to enhanced infrastructure management and long-term sustainability. Participants highlighted the opportunities for data-driven decision-making, reduced costs, and improved public safety through the integration of emerging technologies into traditional engineering workflows.

The session underscored the openness of civil engineers to embrace innovation, signaling a strong willingness to bridge the gap between conventional practices and modern AI-driven approaches. Moving forward, the collaboration aims to identify pilot projects, conduct specialized workshops, and explore practical pathways to embed AI within civil engineering processes in Pakistan.`,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6">
      {events.map((e) => (
        <EventCard
          key={e.title}
          title={e.title}
          date={e.date}
          location={e.location}
          excerpt={e.excerpt}
        />
      ))}
    </div>
  );
}
