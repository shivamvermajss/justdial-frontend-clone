import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import TrendingSection from "@/components/home/TrendingSection";
import PopularServices from "@/components/home/PopularServices";
import PopularPlaces from "@/components/home/PopularPlaces";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10 sm:space-y-12">
        <HeroSection />
        <CategorySection />
        <TrendingSection />
        <PopularServices />
        <PopularPlaces />
      </div>
    </div>
  );
}
