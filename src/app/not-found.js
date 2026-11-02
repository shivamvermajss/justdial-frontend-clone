import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 w-full bg-[#fbfbfb] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-xs space-y-5">
        <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-[#0076D7] flex items-center justify-center font-black text-2xl">
          404
        </div>

        <div className="space-y-1.5">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Listing or Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            The page, category, or business you requested could not be found or does not exist in our directory.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto text-xs sm:text-sm font-semibold bg-[#0076D7] hover:bg-[#005bb5] text-white px-5 py-2.5 rounded-lg transition-colors"
          >
            Back to Homepage
          </Link>
          <Link
            href="/search"
            className="w-full sm:w-auto text-xs sm:text-sm font-semibold border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-lg transition-colors"
          >
            Browse Businesses
          </Link>
        </div>
      </div>
    </div>
  );
}

