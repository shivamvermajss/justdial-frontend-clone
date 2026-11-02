"use client";

import Link from "next/link";
import { popularPlaces } from "@/data/homepage";
import ImageWithFallback from "@/components/common/ImageWithFallback";

export default function PopularPlaces() {
  return (
    <section className="w-full space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Explore Popular Cities
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Discover verified local directories and businesses across India&apos;s major cities
          </p>
        </div>
      </div>

      {/* Grid: 6 cols desktop, 3 cols tablet, 2 cols mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {popularPlaces.map((city) => (
          <Link
            key={city.id}
            href={city.route}
            className="group relative flex flex-col bg-white border border-gray-200 hover:border-[#0076D7] rounded-xl overflow-hidden shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            {/* Image Container with subtle dark gradient overlay for text readability */}
            <div className="relative aspect-4/3 w-full bg-gray-100 overflow-hidden">
              <ImageWithFallback
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                fallbackClassName="bg-gradient-to-br from-slate-200 to-blue-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              
              {/* City Name Floating on Image */}
              <div className="absolute bottom-2 left-2 right-2 text-white pointer-events-none">
                <h3 className="text-sm font-bold tracking-tight drop-shadow-xs">
                  {city.name}
                </h3>
              </div>
            </div>

            {/* Bottom info bar */}
            <div className="p-2.5 flex items-center justify-between text-[11px] text-gray-500 bg-white">
              <span className="flex items-center gap-1 font-medium text-gray-600">
                <svg className="w-3 h-3 text-[#0076D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {city.listingCount}
              </span>
              <span className="text-[#0076D7] group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
