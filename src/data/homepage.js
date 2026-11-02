/**
 * Homepage Data
 * Static datasets for Trending Searches, Popular Services, and Popular Cities
 */

export const trendingSearches = [
  {
    id: 1,
    title: "Restaurants",
    description: "Top-rated cafes, fine dining & popular eateries",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    route: "/search?q=Restaurants",
    tag: "Trending",
  },
  {
    id: 2,
    title: "Best Hotels",
    description: "Boutique stays, resorts & budget rooms",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    route: "/search?q=Best+Hotels",
    tag: "Popular",
  },
  {
    id: 3,
    title: "Hospitals",
    description: "24x7 emergency medical centers & clinics",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80",
    route: "/search?q=Hospitals",
    tag: "Essential",
  },
  {
    id: 4,
    title: "Beauty Parlours",
    description: "Salons, bridal makeup & grooming experts",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    route: "/search?q=Beauty+Parlours",
    tag: "Trending",
  },
  {
    id: 5,
    title: "Interior Designers",
    description: "Architects, modular kitchen & home décor",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    route: "/search?q=Interior+Designers",
    tag: "Top Rated",
  },
  {
    id: 6,
    title: "Packers and Movers",
    description: "Safe house shifting & intercity relocation",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80",
    route: "/search?q=Packers+and+Movers",
    tag: "Verified",
  },
];

export const popularServices = [
  {
    id: 1,
    name: "AC Repair",
    description: "Gas refilling, maintenance & quick diagnostics",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
    route: "/search?q=AC+Repair",
    badge: "Fast Service",
  },
  {
    id: 2,
    name: "Plumbers",
    description: "Pipe fitting, leakage fixes & bathroom installations",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80",
    route: "/search?q=Plumbers",
    badge: "Verified Pros",
  },
  {
    id: 3,
    name: "Electricians",
    description: "Wiring repairs, appliance setup & fuse boxes",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
    route: "/search?q=Electricians",
    badge: "Available 24x7",
  },
  {
    id: 4,
    name: "Home Cleaning",
    description: "Deep house sanitization, kitchen & sofa care",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    route: "/search?q=Home+Cleaning",
    badge: "Best Rated",
  },
  {
    id: 5,
    name: "Pest Control",
    description: "Termite treatment, bed bug & mosquito control",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&w=600&q=80",
    route: "/search?q=Pest+Control",
    badge: "Certified",
  },
  {
    id: 6,
    name: "Car Repair",
    description: "Engine servicing, denting, painting & wheel care",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80",
    route: "/search?q=Car+Repair",
    badge: "Doorstep",
  },
];

export const popularPlaces = [
  {
    id: 1,
    name: "Varanasi",
    image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=600&q=80",
    route: "/search?city=Varanasi",
    listingCount: "Explore Listings",
  },
  {
    id: 2,
    name: "Delhi",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
    route: "/search?city=Delhi",
    listingCount: "Explore Listings",
  },
  {
    id: 3,
    name: "Mumbai",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80",
    route: "/search?city=Mumbai",
    listingCount: "Explore Listings",
  },
  {
    id: 4,
    name: "Bangalore",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
    route: "/search?city=Bangalore",
    listingCount: "Explore Listings",
  },
  {
    id: 5,
    name: "Lucknow",
    // Historic Bara Imambara heritage architecture
    image: "https://images.unsplash.com/photo-1655747543289-74baefbfa184?auto=format&fit=crop&w=600&q=80",
    route: "/search?city=Lucknow",
    listingCount: "Explore Listings",
  },
  {
    id: 6,
    name: "Pune",
    // Historic Shaniwar Wada fortification architecture
    image: "https://plus.unsplash.com/premium_photo-1692102550620-35f8716814b4?auto=format&fit=crop&w=600&q=80",
    route: "/search?city=Pune",
    listingCount: "Explore Listings",
  },
];
