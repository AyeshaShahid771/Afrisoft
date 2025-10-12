type Props = {
  title: string;
  body: string;
};

export default function ClientCard({ title, body }: Props) {
  return (
    <div className="bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-200 rounded-lg p-4">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-royal-blue/10 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-royal-blue"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2"
            />
            <path
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-base font-semibold text-deep-navy">{title}</h4>
          <p className="mt-1 text-sm text-gray-600">{body}</p>
        </div>
      </div>
    </div>
  );
}
