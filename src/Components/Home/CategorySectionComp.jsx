import Link from "next/link";
import { CATEGORY_CONST } from "@/Data/Constant/categoryConst";

function CategoryIcon({ iconName }) {
  switch (iconName) {
    case "restaurants":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 8a6 6 0 01-6 6M6 4v7a3 3 0 003 3v6M4 4h4M6 4v4M18 4v16" />
        </svg>
      );
    case "hotels":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v2m4-2v2m4-2v2" />
        </svg>
      );
    case "doctors":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "hospitals":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m7-11h4m-2-2v4" />
        </svg>
      );
    case "beauty-spa":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case "education":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
        </svg>
      );
    case "automobiles":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zM3 13h1m16 0h1m-2-4l-2-4H7L5 9m-2 4v4h2m14-4v4h2" />
        </svg>
      );
    case "real-estate":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case "home-services":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "travel":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      );
    case "shopping":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    case "fitness":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h2v8H4zm14 0h2v8h-2zM6 11h12v2H6zM2 9h2v6H2zm18 0h2v6h-2z" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
  }
}

// Styling map for distinctive soft backgrounds matching each category
const CATEGORY_COLOR_MAP = {
  restaurants: "bg-orange-50 text-orange-600 group-hover:bg-orange-100",
  hotels: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
  doctors: "bg-teal-50 text-teal-600 group-hover:bg-teal-100",
  hospitals: "bg-red-50 text-red-600 group-hover:bg-red-100",
  "beauty-spa": "bg-pink-50 text-pink-600 group-hover:bg-pink-100",
  education: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100",
  automobiles: "bg-slate-100 text-slate-700 group-hover:bg-slate-200",
  "real-estate": "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
  "home-services": "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
  travel: "bg-sky-50 text-sky-600 group-hover:bg-sky-100",
  shopping: "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
  fitness: "bg-green-50 text-green-700 group-hover:bg-green-100",
};

export default function CategorySectionComp() {
  return (
    <section id="categories" className="w-full scroll-mt-24 space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 pb-1">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Popular Categories
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Find verified businesses and trusted local services across India
          </p>
        </div>
      </div>

      {/* Responsive Grid: 6 cols desktop, 4 cols tablet, 3 cols mobile */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
        {CATEGORY_CONST.map((category) => {
          const colorClass = CATEGORY_COLOR_MAP[category.slug] || "bg-blue-50 text-[#0076D7]";
          return (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group bg-white border border-gray-200 hover:border-[#0076D7] rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-2 sm:mb-2.5 transition-transform group-hover:scale-105 shrink-0 ${colorClass}`}
              >
                <CategoryIcon iconName={category.icon} />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#0076D7] transition-colors leading-tight line-clamp-1">
                {category.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

