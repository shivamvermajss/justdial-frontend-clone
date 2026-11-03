import HeroSectionComp from "@/Components/Home/HeroSectionComp";
import CategorySectionComp from "@/Components/Home/CategorySectionComp";
import TrendingSectionComp from "@/Components/Home/TrendingSectionComp";
import PopularServicesComp from "@/Components/Home/PopularServicesComp";
import PopularPlacesComp from "@/Components/Home/PopularPlacesComp";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10 sm:space-y-12">
        <HeroSectionComp />
        <CategorySectionComp />
        <TrendingSectionComp />
        <PopularServicesComp />
        <PopularPlacesComp />
      </div>
    </div>
  );
}
