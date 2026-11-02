import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0060b0] to-[#0076D7] text-white rounded-2xl shadow-sm border border-blue-600/30">
        
        {/* Subtle Background Pattern Elements */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-400/10 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          
          {/* Left Column: Heading, Description & CTA */}
          <div className="w-full md:w-3/5 space-y-4 sm:space-y-5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-medium text-blue-50 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Verified Local Directory
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight sm:leading-snug">
              Discover the Best Businesses Near You
            </h1>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
              Find trusted local services, doctors, restaurants, verified customer ratings, and direct contact details across thousands of neighborhoods.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Link
                href="#categories"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0076D7] hover:bg-blue-50 font-bold px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all text-sm sm:text-base group cursor-pointer"
              >
                <span>Explore Services</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <div className="hidden sm:flex items-center gap-2 text-xs text-blue-100 pl-2">
                <span className="text-[#FFB800] text-sm">★★★★★</span>
                <span>Trusted by millions daily</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Local Service Discovery Showcase Card */}
          <div className="w-full md:w-2/5 max-w-md mx-auto md:mx-0">
            <div className="relative bg-white rounded-xl p-5 sm:p-6 text-gray-800 shadow-md border border-gray-100">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Instant Connect
                  </span>
                </div>
                <span className="inline-flex items-center text-xs font-bold bg-blue-50 text-[#0076D7] px-2 py-0.5 rounded-md">
                  ✓ Justdial Verified
                </span>
              </div>

              {/* Sample Business Highlight */}
              <div className="py-4 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                      City Top-Rated Hub
                    </h3>
                    <p className="text-xs text-gray-500">
                      Multi-Service &amp; Professional Experts
                    </p>
                  </div>
                  <div className="bg-emerald-600 text-white font-bold text-xs px-2 py-1 rounded-md flex items-center gap-1 shadow-2xs">
                    <span>4.9</span>
                    <span>★</span>
                  </div>
                </div>

                {/* Badges / Highlights */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[11px] bg-gray-100 text-gray-700 font-medium px-2 py-0.5 rounded">
                    ⚡ Quick Response
                  </span>
                  <span className="text-[11px] bg-gray-100 text-gray-700 font-medium px-2 py-0.5 rounded">
                    🛡️ Verified Badge
                  </span>
                  <span className="text-[11px] bg-gray-100 text-gray-700 font-medium px-2 py-0.5 rounded">
                    📍 Nearby Services
                  </span>
                </div>
              </div>

              {/* Card Footer / Quick Action Preview */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <svg className="w-4 h-4 text-[#0076D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Open 24/7 Support</span>
                </div>
                <span className="text-[#0076D7] font-semibold text-xs">
                  50,000+ Listings
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

