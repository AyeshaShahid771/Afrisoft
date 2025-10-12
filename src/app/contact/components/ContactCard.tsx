"use client";

import Link from "next/link";
// Inline external link icon (keeps bundle smaller and avoids new dependencies)
function ExternalLinkIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-90"
    >
      <path
        d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 3h6v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14L21 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import { useState } from "react";

export default function ContactCard({
  title,
  subtitle,
  href,
  children,
  external = false,
  accent = "from-[#0b57a6] to-[#071a4b]",
  ariaLabel,
  icon,
}: {
  title: string;
  subtitle?: string;
  href: string;
  children: React.ReactNode;
  external?: boolean;
  accent?: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const isMailto = href?.startsWith?.("mailto:");

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    try {
      const email = href.replace("mailto:", "");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // fallback
        const ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // try fallback copy anyway
      try {
        const email = href.replace("mailto:", "");
        const ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        // final fallback: still set copied so UI updates
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  }
  return (
    <div
      className={`rounded-3xl shadow-2xl overflow-hidden ring-1 ring-black/5`}
    >
      <div className={`px-4 py-4 md:p-6 bg-gradient-to-r ${accent} text-white`}>
        <h3 className="text-lg sm:text-xl font-extrabold">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-xs sm:text-sm opacity-90">{subtitle}</p>
        )}
      </div>

      <div className="px-4 py-3 md:p-6 bg-white">
        {/* Use native anchor for mailto and external links to ensure correct behavior */}
        <div className="flex items-start md:items-center justify-between">
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={ariaLabel}
            className="flex items-center gap-3 text-deep-navy hover:text-royal-blue"
          >
            {icon && (
              <span className="shrink-0 w-6 h-6 md:w-8 md:h-8">{icon}</span>
            )}
            <span className="font-medium">
              <span className="text-xs sm:text-sm md:text-base break-words">
                {children}
              </span>
            </span>
          </a>

          <div className="ml-4 flex items-center">
            {isMailto ? (
              <>
                <button
                  type="button"
                  onClick={handleCopy}
                  disabled={copied}
                  className={`min-w-[40px] md:min-w-auto px-2 py-1 rounded-md text-xs sm:text-sm font-medium shadow-sm transition-all ${
                    copied
                      ? "bg-royal-blue text-white border-0"
                      : "bg-white border text-deep-navy hover:bg-gray-50"
                  }`}
                  aria-label="Copy email"
                >
                  {copied ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Copied
                    </span>
                  ) : (
                    "Copy"
                  )}
                </button>
                <span className="sr-only" aria-live="polite">
                  {copied ? "Email copied to clipboard" : ""}
                </span>
              </>
            ) : external ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} in new tab`}
                className="min-w-[48px] md:min-w-auto inline-flex items-center justify-center px-2 py-1 rounded-md text-sm font-medium border bg-white text-deep-navy hover:bg-gray-50"
              >
                <ExternalLinkIcon size={16} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
