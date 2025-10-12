"use client";

export default function EventCard({
  title,
  date,
  location,
  excerpt,
}: {
  title: string;
  date: string;
  location: string;
  excerpt: string;
}) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-deep-navy">{title}</h3>
      <div className="mt-2 text-sm text-gray-600">
        {date} • {location}
      </div>
      <p className="mt-3 text-gray-700 text-sm">{excerpt}</p>
      <div className="mt-4 flex items-center justify-between">
        <a href="#" className="text-royal-blue font-medium">
          Learn more
        </a>
        <a href="#" className="bg-royal-blue text-white px-4 py-2 rounded-md">
          Register
        </a>
      </div>
    </article>
  );
}
