"use client";

import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { PropertyCard } from "@/components/PropertyCard";
import { listings } from "@/lib/mock-data";
import type { Listing } from "@/types/listing";

type SortOrder = "asc" | "desc";

const CatalogPage = () => {
  const [destination, setDestination] = useState("");
  const [guestsCount, setGuestsCount] = useState(1);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [catalogListings, setCatalogListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCatalogListings(listings);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const sortedListings = useMemo(() => {
    const copied = [...catalogListings];

    copied.sort((a, b) =>
      sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight,
    );

    if (!destination) {
      return copied;
    }

    return copied.filter(
      (listing) =>
        listing.location.toLowerCase().includes(destination.toLowerCase()) ||
        listing.title.toLowerCase().includes(destination.toLowerCase()),
    );
  }, [catalogListings, destination, sortOrder]);

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

      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white p-4">
          <p className="text-sm text-zinc-700">{sortedListings.length} stays found</p>
          <label className="flex items-center gap-2 text-sm text-zinc-700">
            Sort by price
            <select
              className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as SortOrder)}
            >
              <option value="asc">Low to high</option>
              <option value="desc">High to low</option>
            </select>
          </label>
        </div>

        {isLoading ? (
          <p className="rounded-xl border border-zinc-200 bg-white px-4 py-6 text-sm text-zinc-600">
            Loading catalog...
          </p>
        ) : (
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
              {sortedListings.map((listing) => (
                <PropertyCard key={listing.id} listing={listing} />
              ))}
            </div>
            <aside className="h-56 rounded-2xl border border-zinc-300 bg-zinc-200 p-4 text-lg font-semibold text-zinc-700 lg:h-auto lg:w-[320px]">
              Map
            </aside>
          </div>
        )}
      </main>
    </div>
  );
};

export default CatalogPage;
