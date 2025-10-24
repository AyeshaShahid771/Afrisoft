"use client";

import React, { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
}

export default function ContactFormEmbed({ src }: Props) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const loadCountRef = useRef(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onLoad = () => {
      // Many cross-origin iframes emit 'load' on initial load and again
      // after a form submission when the 'thank you' or redirect runs. We
      // use a simple heuristic: the second load likely indicates submission.
      loadCountRef.current += 1;
      if (loadCountRef.current >= 2) {
        setSubmitted(true);
      }
    };

    iframe.addEventListener("load", onLoad);
    return () => iframe.removeEventListener("load", onLoad);
  }, []);

  return (
    <section className="mx-auto px-4 py-6 flex justify-center bg-white">
      <div
        className="iframe-crop w-full flex justify-center"
        style={{ height: submitted ? "300px" : "3200px" }}
      >
        <iframe
          ref={iframeRef}
          src={src}
          title="Contact / Inquiry Form"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="contact-form-iframe"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
}
