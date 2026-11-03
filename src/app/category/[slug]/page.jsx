import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getBusinessesByCategory } from "@/lib/businesses";
import BusinessCard from "@/components/common/BusinessCard";
import Breadcrumb from "@/components/common/Breadcrumb";

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function CategoryPage({ params }) {
  const resolvedParams = params ? await params : {};
  const { slug } = resolvedParams;

  if (!slug) {
    notFound();
  }

  const normalizedSlug = String(slug).toLowerCase().trim();
  const category = categories.find((cat) => cat.slug.toLowerCase() === normalizedSlug);

  if (!category) {
    notFound();
  }

  const categoryBusinesses = getBusinessesByCategory(normalizedSlug);

  return (
    <div className="w-full bg-[#fbfbfb] min-h-[calc(100vh-140px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: "Categories", href: "/#categories" },
            { label: category.name },
          ]}
        />

        {/* Category Header Banner */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-7 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0076D7] bg-blue-50 px-2.5 py-0.5 rounded-md mb-2">
                <span>Verified Category</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                {category.name} in Top Cities
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="shrink-0 text-left sm:text-right">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                Available Listings
              </span>
              <span className="text-xl sm:text-2xl font-black text-gray-900">
                {categoryBusinesses.length} {categoryBusinesses.length === 1 ? "Business" : "Businesses"}
              </span>
            </div>
          </div>
        </div>

        {/* Business Listings */}
        {categoryBusinesses.length > 0 ? (
          <div className="space-y-4">
            {categoryBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl p-10 text-center space-y-4 max-w-xl mx-auto shadow-2xs">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              No listings currently in this category
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              We are constantly expanding our directory. Check out other popular categories or browse all listings.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Link
                href="/#categories"
                className="text-xs sm:text-sm font-semibold bg-[#0076D7] text-white px-5 py-2.5 rounded-lg hover:bg-[#005bb5] transition-colors"
              >
                Explore Other Categories
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

