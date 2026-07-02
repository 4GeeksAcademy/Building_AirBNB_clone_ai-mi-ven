import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/types/listing";

interface PropertyCardProps {
  listing: Listing;
}

export const PropertyCard = ({ listing }: PropertyCardProps) => {
  const totalPrice = listing.pricePerNight * listing.stayDuration;

  return (
    <article className="w-full">
      <Link href={`/rooms/${listing.id}`} className="block">
        <div className="relative h-44 overflow-hidden rounded-2xl bg-zinc-200 sm:h-48">
          <Image
            src={listing.imageSrc}
            alt={listing.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 220px"
            className="object-cover"
          />
          {listing.isGuestFavorite && (
            <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-800">
              Guest Favorite
            </span>
          )}
          <span
            className="absolute right-3 top-3 rounded-full bg-zinc-900/35 px-2 py-1 text-sm text-white"
            aria-label={listing.isSaved ? "Saved" : "Not saved"}
          >
            ♡
          </span>
        </div>
        <div className="space-y-0.5 pt-2">
          <h3 className="truncate text-base font-semibold text-zinc-900">{listing.title}</h3>
          <p className="text-sm text-zinc-600">{listing.location}</p>
          <div className="text-sm font-medium text-zinc-600">
            ${totalPrice.toLocaleString()} for {listing.stayDuration} nights
            <span className="ml-2">• {listing.rating.toFixed(2)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};
