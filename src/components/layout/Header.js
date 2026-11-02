"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "All Categories", href: "/search?category=all" },
  { name: "Restaurants", href: "/search?category=restaurants" },
  { name: "Hotels", href: "/search?category=hotels" },
  { name: "Doctors", href: "/search?category=doctors" },
  { name: "Beauty & Spa", href: "/search?category=beauty-spa" },
  { name: "Education", href: "/search?category=education" },
  { name: "Home Services", href: "/search?category=home-services" },
];

const cities = [
  "All India",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Lucknow",
  "Varanasi",
];

export default function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All India");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    const cityParam =
      selectedCity && selectedCity !== "All India"
        ? `&city=${encodeURIComponent(selectedCity)}`
        : "";

    router.push(`/search?q=${encodeURIComponent(query)}${cityParam}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-xs">
      {/* Top Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3 sm:gap-4">
          {/* Left: Brand Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="inline-flex items-center gap-1 group">
              <span className="text-2xl sm:text-3xl font-black text-[#0076D7] tracking-tight">
                Just<span className="text-[#FF6600]">dial</span>
              </span>
            </Link>
          </div>

          {/* Center: Search Bar (Desktop & Tablet) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-2">
            <form
              onSubmit={handleSearch}
              className="flex w-full items-center border border-gray-300 rounded-lg overflow-hidden bg-white hover:border-gray-400 focus-within:border-[#0076D7] focus-within:ring-1 focus-within:ring-[#0076D7] transition-all shadow-xs"
            >
              {/* Location Selector */}
              <div className="flex items-center pl-3 pr-2 py-2 bg-gray-50 border-r border-gray-300 shrink-0">
                <svg
                  className="w-4 h-4 text-[#0076D7] mr-1.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <select
                  aria-label="Select City"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-medium text-gray-700 focus:outline-hidden cursor-pointer"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Query Input */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for restaurants, doctors, hotels, services..."
                className="flex-1 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden min-w-0"
              />

              {/* Search Button */}
              <button
                type="submit"
                aria-label="Search"
                className="bg-[#0076D7] hover:bg-[#005bb5] text-white px-5 py-2.5 flex items-center justify-center gap-1.5 text-sm font-medium transition-colors shrink-0 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span>Search</span>
              </button>
            </form>
          </div>

          {/* Right: User Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              href="/login"
              className="text-sm font-semibold text-gray-700 hover:text-[#0076D7] px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold text-white bg-[#0076D7] hover:bg-[#005bb5] px-4 py-1.5 rounded-md shadow-xs transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Right: Hamburger Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#0076D7] hover:bg-gray-100 focus:outline-hidden cursor-pointer"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Row */}
        <div className="md:hidden pb-3">
          <form
            onSubmit={handleSearch}
            className="flex w-full items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-xs focus-within:border-[#0076D7]"
          >
            <div className="flex items-center pl-2.5 pr-1.5 py-2 bg-gray-50 border-r border-gray-300 shrink-0">
              <svg
                className="w-3.5 h-3.5 text-[#0076D7] mr-1 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <select
                aria-label="Select City"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent text-xs font-medium text-gray-700 focus:outline-hidden"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for restaurants, doctors, hotels, services..."
              className="flex-1 px-2.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-hidden min-w-0"
            />
            <button
              type="submit"
              aria-label="Search"
              className="bg-[#0076D7] hover:bg-[#005bb5] text-white p-2.5 flex items-center justify-center shrink-0 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Secondary Navigation Row (Desktop) */}
      <div className="hidden md:block border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 overflow-x-auto py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-gray-600 hover:text-[#0076D7] px-3 py-1.5 rounded-md hover:bg-blue-50/60 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-md">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2">
            Categories & Services
          </div>
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-[#0076D7] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 text-center text-sm font-semibold text-gray-700 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 text-center text-sm font-semibold text-white bg-[#0076D7] hover:bg-[#005bb5] py-2 rounded-md transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
