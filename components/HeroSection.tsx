"use client";

import Link from 'next/link';
import MuxPlayer from '@mux/mux-player-react';
import placeholderThumbnail from "@/public/thumbnail/placeholder_thumbnail.jpg";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Your Project Title Here</span>{' '}
                <span className="block text-blue-500 xl:inline">with a Catchy Subtitle</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A brief description of the project's key features or mission statement goes here.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/example-page"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                  >
                    Example Link 1
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/another-page"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Example Link 2
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mux Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <MuxPlayer
          style={{
            width: "100%",
            objectFit: "cover", // Ensures the video fills the container
          }}
          className=""
          streamType="on-demand"
          playbackId="your-playback-id"
          metadataVideoTitle="Your Video Title"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          autoPlay="any"
          poster={placeholderThumbnail.src}
          loop={true}
        />
      </div>
    </div>
  );
};

export default HeroSection;
