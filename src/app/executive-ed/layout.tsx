import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Education | Afrisoft AI Consultants",
  description:
    "Executive education programs for leaders and decision-makers to thrive in the age of artificial intelligence.",
};

export default function ExecutiveEdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
