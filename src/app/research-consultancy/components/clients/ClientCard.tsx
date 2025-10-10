type Props = {
  title: string;
  body: string;
  icon?: React.ReactNode;
};

export default function ClientCard({ title, body, icon }: Props) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-md bg-royal-blue/5 flex items-center justify-center">
        {icon ?? <div className="w-3 h-3 rounded-full bg-royal-blue" />}
      </div>
      <div>
        <h4 className="text-base font-semibold text-deep-navy">{title}</h4>
        <p className="mt-1 text-sm text-gray-700">{body}</p>
      </div>
    </div>
  );
}
