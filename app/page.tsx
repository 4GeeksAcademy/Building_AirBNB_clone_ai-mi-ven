"use client";

import { useEffect, useMemo, useState } from "react";
import { CategoryFilterRow } from "@/components/CategoryFilterRow";
import { ContentSection } from "@/components/ContentSection";
import { PageHeader } from "@/components/PageHeader";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyCarousel } from "@/components/PropertyCarousel";
import { listings } from "@/lib/mock-data";
import type { Listing, ListingCategory } from "@/types/listing";

const HomePage = () => {
  const [destination, setDestination] = useState("");
  const [activeCategory, setActiveCategory] = useState<ListingCategory | "all">("all");
  const [guestsCount, setGuestsCount] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleListings, setVisibleListings] = useState<Listing[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleListings(listings);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredListings = useMemo(() => {
    return visibleListings.filter((listing) => {
      const matchesDestination =
        listing.location.toLowerCase().includes(destination.toLowerCase()) ||
        listing.title.toLowerCase().includes(destination.toLowerCase());
      const matchesCategory = activeCategory === "all" || listing.category === activeCategory;

      return matchesDestination && matchesCategory;
    });
  }, [activeCategory, destination, visibleListings]);

  const spotlightListings = useMemo(() => listings.slice(0, 4), []);

  return (
    <div className="min-h-screen bg-zinc-50">
      <PageHeader
        fixed
        destination={destination}
        checkInDate="Aug 04"
        checkOutDate="Aug 09"
        guestsCount={guestsCount}
        onDestinationChange={setDestination}
        onGuestsChange={setGuestsCount}
        onSearchSubmit={() => undefined}
      />

      <CategoryFilterRow activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <main className="mx-auto mt-6 w-full max-w-[1560px] px-4 pb-10 sm:px-6 lg:px-8">
        {isLoading ? (
          <p className="rounded-xl border border-zinc-200 bg-white px-4 py-6 text-sm text-zinc-600">
            Loading stays...
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {filteredListings.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </main>

      <ContentSection
        sectionTitle="Popular homes this week"
        hasSubtitle
        subtitleText="Quick inspiration based on your recent search behavior"
      >
        <PropertyCarousel items={spotlightListings} enableNavigationArrows />
      </ContentSection>
    </div>
  );
};

export default HomePage;
