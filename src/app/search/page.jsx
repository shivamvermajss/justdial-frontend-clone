import { Suspense } from "react";
import Link from "next/link";
import { searchBusinesses, getAllBusinesses } from "@/Helper/businessHelper";
import BusinessCardSharedComp from "@/Components/Shared/BusinessCardSharedComp";
import BreadcrumbSharedComp from "@/Components/Shared/BreadcrumbSharedComp";

async function SearchResultsList({ searchParams }) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const rawCategory = resolvedSearchParams.category;
  const categoryFilter = rawCategory && rawCategory !== "all" ? rawCategory : "";
  const query = (resolvedSearchParams.q || categoryFilter || "").trim();
  const rawCity = (resolvedSearchParams.city || "").trim();
  const isAllIndia = !rawCity || rawCity.toLowerCase() === "all india" || rawCity.toLowerCase() === "all";
  const city = isAllIndia ? "" : rawCity;

  const isFiltered = Boolean(query || city);
  const matchingBusinesses = searchBusinesses(query, city);
  const popularBusinesses = getAllBusinesses().slice(0, 6);

  // If query and city are missing, display popular businesses instead of blank page
  const displayBusinesses = isFiltered ? matchingBusinesses : popularBusinesses;

  return (
    <>
      {/* Search Header Banner */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
              {query ? (
                <>
                  Search Results for <span className="text-[#0076D7]">&ldquo;{query}&rdquo;</span>
                </>
              ) : city ? (
                <>
                  Businesses in <span className="text-[#0076D7]">{city}</span>
                </>
              ) : (
                "Explore All Business Listings"
              )}
            </h1>

            <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 font-medium px-2 py-0.5 rounded">
                📍 Location: {city ? city : "All India"}
              </span>
              <span>
                Showing {displayBusinesses.length} {displayBusinesses.length === 1 ? "result" : "results"}
              </span>
              {!isFiltered && (
                <span className="text-gray-400">
                  • Showing recommended businesses across India
                </span>
              )}
            </div>
          </div>

          {isFiltered && (
            <Link
              href="/search"
              className="self-start sm:self-auto text-xs font-semibold text-[#0076D7] hover:underline"
            >
              Clear all filters
            </Link>
          )}
        </div>
      </div>

      {/* Listings Section */}
      {displayBusinesses.length > 0 ? (
        <div className="space-y-4">
          {displayBusinesses.map((business) => (
            <BusinessCardSharedComp key={business.id} business={business} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center space-y-4 max-w-xl mx-auto shadow-2xs">
          <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-[#0076D7] flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            No matching businesses found
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            We couldn&apos;t find any verified listings matching &ldquo;{query}&rdquo;
            {city ? ` in ${city}` : " across All India"}. Try searching with general keywords (e.g. &ldquo;restaurants&rdquo;, &ldquo;hotels&rdquo;, &ldquo;doctors&rdquo;) or select &ldquo;All India&rdquo; in the location selector.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/search"
              className="text-xs sm:text-sm font-semibold bg-[#0076D7] hover:bg-[#005bb5] text-white px-5 py-2.5 rounded-lg transition-colors"
            >
              Browse All Listings
            </Link>
            <Link
              href="/"
              className="text-xs sm:text-sm font-semibold border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-lg transition-colors"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default function SearchPage({ searchParams }) {
  return (
    <div className="w-full bg-[#fbfbfb] min-h-[calc(100vh-140px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Breadcrumb Navigation */}
        <BreadcrumbSharedComp items={[{ label: "Search Results" }]} />

        {/* Suspense boundary required for searchParams in Next.js 16 Partial Prefetching */}
        <Suspense
          fallback={
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-sm text-gray-500 shadow-2xs">
              Loading search results...
            </div>
          }
        >
          <SearchResultsList searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
