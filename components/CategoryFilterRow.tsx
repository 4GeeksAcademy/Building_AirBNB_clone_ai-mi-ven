import type { ListingCategory } from "@/types/listing";

interface CategoryFilterRowProps {
  activeCategory: ListingCategory | "all";
  onCategoryChange: (category: ListingCategory | "all") => void;
}

const categories: Array<{ label: string; value: ListingCategory | "all"; icon: string }> = [
  { label: "All", value: "all", icon: "◎" },
  { label: "Beach", value: "beach", icon: "⛱" },
  { label: "Mansions", value: "mansion", icon: "⌂" },
  { label: "Trending", value: "trending", icon: "↗" },
  { label: "Cabins", value: "cabin", icon: "▲" },
];

export const CategoryFilterRow = ({
  activeCategory,
  onCategoryChange,
}: CategoryFilterRowProps) => {
  return (
    <div className="mx-auto mt-4 flex w-full max-w-6xl gap-2 overflow-x-auto px-4 pb-1 sm:px-6">
      {categories.map((category) => {
        const selected = activeCategory === category.value;

        return (
          <button
            key={category.value}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
              selected
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500"
            }`}
            onClick={() => onCategoryChange(category.value)}
          >
            <span aria-hidden>{category.icon}</span>
            {category.label}
          </button>
        );
      })}
    </div>
  );
};
