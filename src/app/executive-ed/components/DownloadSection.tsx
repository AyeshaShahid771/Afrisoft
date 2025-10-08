"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function DownloadSection() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState('');
  const downloadInProgress = useRef(false);

  const handleDownload = async () => {
    // Prevent multiple simultaneous downloads
    if (downloadInProgress.current || isDownloading) {
      console.log('Download already in progress, ignoring click');
      return;
    }

  const fileName = 'AI Executive Education.pdf';

    try {
      downloadInProgress.current = true;
      setIsDownloading(true);
      setDownloadError('');

      console.log('Starting download...');

      const response = await fetch(`/api/download`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || 'Failed to download the file.');
      }

      const blob = await response.blob();
      if (!blob || blob.size === 0) {
        throw new Error('Downloaded file is empty');
      }

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);

      console.log('Download completed successfully');
    } catch (error) {
      console.error('Download error:', error);
      setDownloadError('There was an error downloading the file. Please try again later.');
    } finally {
      setIsDownloading(false);
      // Reset the ref after a short delay to prevent accidental double-clicks
      setTimeout(() => {
        downloadInProgress.current = false;
      }, 1000);
    }
  };

  return (
    <section className="relative py-12 md:py-24 px-4 overflow-hidden">
      {/* subtle dim overlay (lighter on desktop) */}
      <div className="absolute inset-0 z-10 bg-[#012a4a]/30 md:bg-[#012a4a]/20"></div>
      <Image 
        src="/h3.jpg" 
        alt="Background"
        fill
        className="object-cover blur-none md:blur-[1px] z-0 md:opacity-100 opacity-60"
        sizes="100vw"
      />
      <div className="container mx-auto max-w-4xl relative z-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mt-6">
            Ready to Transform Your Leadership with AI?
          </h2>
          <div className="h-0.5 w-24 bg-white mx-auto mb-6"></div>
          <p className="text-base md:text-xl mb-8 md:mb-10 text-white max-w-2xl mx-auto font-bold">
            Download our comprehensive Executive Education course modules to learn more about our programs and outcomes.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button 
              onClick={handleDownload}
              className="bg-[#012a4a] text-white hover:bg-[#013a5a] hover:text-white px-6 md:px-10 py-3 md:py-6 text-base md:text-lg rounded-full"
              disabled={isDownloading}
              type="button"
            >
              <div className="flex items-center gap-3">
                {isDownloading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Downloading...
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M9 2a1 1 0 011 1v8.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586V3a1 1 0 011-1z" />
                      <path d="M3 16a1 1 0 011-1h12a1 1 0 011 1v1a2 2 0 01-2 2H4a2 2 0 01-2-2v-1z" />
                    </svg>
                    Download course modules
                  </>
                )}
              </div>
            </Button>

            {downloadError && (
              <div className="text-sm text-red-400">{downloadError}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
