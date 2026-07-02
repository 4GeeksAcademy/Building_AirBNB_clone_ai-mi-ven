import { PropertyCard } from "@/components/PropertyCard";
import type { Listing } from "@/types/listing";

interface PropertyCarouselProps {
  items: Listing[];
  enableNavigationArrows: boolean;
}

export const PropertyCarousel = ({
  items,
  enableNavigationArrows,
}: PropertyCarouselProps) => {
  return (
    <div>
      {enableNavigationArrows && (
        <div className="mb-3 flex justify-end gap-2">
          <button className="rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-700">
            Prev
          </button>
          <button className="rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-700">
            Next
          </button>
        </div>
      )}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[82%] shrink-0 sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[calc((100%-6rem)/7)]"
          >
            <PropertyCard listing={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
