"use client";

import Link from "next/link";
import { POPULAR_SERVICES } from "@/Data/Constant/homepageConst";

export default function PopularServicesComp() {
  return (
    <section className="w-full space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Popular Services
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Book professional, verified home technicians and repair specialists
          </p>
        </div>
      </div>

      {/* Grid: 6 cols desktop, 3 cols tablet, 2 cols mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {POPULAR_SERVICES.map((service) => (
          <Link
            key={service.id}
            href={service.route}
            className="group flex flex-col bg-white border border-gray-200 hover:border-[#0076D7] rounded-xl overflow-hidden shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-4/3 w-full bg-gray-100 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("bg-gradient-to-br", "from-amber-100", "to-orange-100");
                }}
              />
              {service.badge && (
                <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs">
                  {service.badge}
                </span>
              )}
            </div>

            {/* Content Container */}
            <div className="p-3 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#0076D7] transition-colors line-clamp-1">
                  {service.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] font-medium text-gray-600 group-hover:text-[#0076D7]">
                <span>Book Service</span>
                <span className="text-[#0076D7]">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

