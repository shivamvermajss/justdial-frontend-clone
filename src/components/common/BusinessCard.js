"use client";

import Link from "next/link";
import ImageWithFallback from "@/components/common/ImageWithFallback";

export default function BusinessCard({ business }) {
  if (!business) return null;

  return (
    <div className="bg-white border border-gray-200 hover:border-[#0076D7] rounded-xl p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all flex flex-col md:flex-row gap-4 sm:gap-5 items-start">
      
      {/* Business Image */}
      <div className="relative w-full md:w-56 h-48 md:h-44 rounded-lg overflow-hidden bg-gray-100 shrink-0">
        <ImageWithFallback
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded">
          {business.city}
        </span>
      </div>

      {/* Business Details */}
      <div className="flex-1 min-w-0 space-y-2 w-full">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <Link
              href={`/business/${business.slug}`}
              className="text-base sm:text-lg font-bold text-gray-900 hover:text-[#0076D7] transition-colors line-clamp-1"
            >
              {business.name}
            </Link>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs font-semibold text-[#0076D7] bg-blue-50 px-2 py-0.5 rounded">
                {business.category}
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500">{business.openingHours}</span>
            </div>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-1.5 bg-emerald-600 text-white font-bold text-xs px-2.5 py-1 rounded-md shrink-0">
            <span>{business.rating}</span>
            <span>★</span>
            <span className="text-emerald-100 font-normal text-[11px]">
              ({business.reviewCount})
            </span>
          </div>
        </div>

        {/* Address */}
        <p className="text-xs sm:text-sm text-gray-600 flex items-start gap-1.5 line-clamp-1">
          <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="truncate">{business.address}</span>
        </p>

        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {business.description}
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
          <Link
            href={`/business/${business.slug}`}
            className="inline-flex items-center justify-center gap-1.5 bg-[#0076D7] hover:bg-[#005bb5] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-2xs"
          >
            <span>View Details</span>
            <span>→</span>
          </Link>

          <a
            href={`tel:${business.phone}`}
            className="inline-flex items-center justify-center gap-1.5 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg transition-colors"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{business.phone}</span>
          </a>
        </div>

      </div>

    </div>
  );
}
