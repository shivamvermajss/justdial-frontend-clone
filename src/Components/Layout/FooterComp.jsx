import Link from "next/link";

const POPULAR_CATEGORIES = [
  { name: "Restaurants", href: "/search?category=restaurants" },
  { name: "Hotels", href: "/search?category=hotels" },
  { name: "Doctors & Clinics", href: "/search?category=doctors" },
  { name: "Hospitals", href: "/search?category=hospitals" },
  { name: "Beauty & Spa", href: "/search?category=beauty-spa" },
  { name: "Home Services", href: "/search?category=home-services" },
  { name: "Education & Coaching", href: "/search?category=education" },
  { name: "Real Estate Agents", href: "/search?category=real-estate" },
];

const QUICK_LINKS = [
  { name: "About Us", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Advertise With Us", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Help & Support", href: "#" },
];

export default function FooterComp() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-auto text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand & About */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="text-2xl font-black text-[#0076D7] tracking-tight">
                Just<span className="text-[#FF6600]">dial</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              India&apos;s leading local search engine providing fast, reliable, and comprehensive information on local businesses, products, and services across major cities.
            </p>
            <div className="text-xs text-gray-400">
              Frontend learning project reproducing core directory features.
            </div>
          </div>

          {/* Column 2: Popular Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-3">
              Popular Categories
            </h3>
            <ul className="space-y-2">
              {POPULAR_CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="text-gray-600 hover:text-[#0076D7] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#0076D7] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <p>© 2026 Justdial Clone. All rights reserved.</p>
          <p>Designed with Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
