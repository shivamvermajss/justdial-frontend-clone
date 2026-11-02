import { notFound } from "next/navigation";
import Link from "next/link";
import { businesses } from "@/data/businesses";
import { getBusinessBySlug } from "@/lib/businesses";
import Breadcrumb from "@/components/common/Breadcrumb";
import ImageWithFallback from "@/components/common/ImageWithFallback";

export function generateStaticParams() {
  return businesses.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BusinessDetailsPage({ params }) {
  const resolvedParams = params ? await params : {};
  const { slug } = resolvedParams;

  if (!slug) {
    notFound();
  }

  const business = getBusinessBySlug(slug);

  if (!business) {
    notFound();
  }

  return (
    <div className="w-full bg-[#fbfbfb] min-h-[calc(100vh-140px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: business.category, href: `/category/${business.categorySlug}` },
            { label: business.name },
          ]}
        />

        {/* Business Header Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-2xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/category/${business.categorySlug}`}
                  className="text-xs font-semibold text-[#0076D7] bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded transition-colors"
                >
                  {business.category}
                </Link>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  📍 {business.city}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  ✓ Verified Listing
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                {business.name}
              </h1>

              {/* Rating & Review Counter */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-emerald-600 text-white font-bold text-sm px-2.5 py-1 rounded-md shadow-2xs">
                  <span>{business.rating}</span>
                  <span>★</span>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {business.reviewCount} Ratings &amp; Reviews
                </span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 lg:pt-0">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now: {business.phone}</span>
              </a>

              <Link
                href="/search"
                className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg transition-colors"
              >
                ← Back to Search
              </Link>
            </div>

          </div>
        </div>

        {/* Detailed Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Column: Image, Description, Features */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Business Image Showcase */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
              <div className="relative aspect-16/9 w-full bg-gray-100 overflow-hidden">
                <ImageWithFallback
                  src={business.image}
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* About Business */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-7 shadow-2xs space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                About {business.name}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {business.description}
              </p>

              {/* Highlights & Features */}
              <div className="pt-3">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
                  Business Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Verified Customer Ratings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Instant Direct Contact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Standard Health &amp; Safety Compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Multiple Payment Modes Accepted</span>
                  </div>
                </div>
              </div>

              {/* Fictional Disclaimer */}
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
                <span className="font-semibold">Notice:</span> This is a fictional demo business profile created for the Justdial learning clone assignment.
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Location Quick Info Sidebar */}
          <div className="space-y-6">
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-2xs space-y-5">
              <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">
                Contact &amp; Timings
              </h2>

              {/* Address */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                  Address
                </span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#0076D7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{business.address}</span>
                </p>
              </div>

              {/* Opening Hours */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                  Operating Hours
                </span>
                <p className="text-xs sm:text-sm text-gray-700 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#0076D7] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{business.openingHours}</span>
                </p>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                  Phone Number
                </span>
                <a
                  href={`tel:${business.phone}`}
                  className="text-xs sm:text-sm font-semibold text-[#0076D7] hover:underline flex items-center gap-2"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{business.phone}</span>
                </a>
              </div>

              {/* Call CTA Button */}
              <div className="pt-2">
                <a
                  href={`tel:${business.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-2.5 rounded-lg transition-colors shadow-2xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Business</span>
                </a>
              </div>

            </div>

            {/* Browse More in Category */}
            <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-5 text-center space-y-2">
              <h3 className="text-sm font-bold text-gray-900">
                Looking for more in {business.category}?
              </h3>
              <p className="text-xs text-gray-500">
                Browse our complete list of verified {business.category.toLowerCase()} across India.
              </p>
              <div className="pt-1">
                <Link
                  href={`/category/${business.categorySlug}`}
                  className="text-xs font-semibold text-[#0076D7] hover:underline"
                >
                  View all {business.category} →
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
