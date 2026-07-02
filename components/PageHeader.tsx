import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";

type HeaderCategory = "all" | "homes" | "experiences" | "services";

interface PageHeaderProps {
  fixed: boolean;
  destination: string;
  checkInDate: string;
  checkOutDate: string;
  guestsCount: number;
  activeCategory?: HeaderCategory;
  onCategoryChange?: (category: HeaderCategory) => void;
  onDestinationChange: (value: string) => void;
  onGuestsChange: (value: number) => void;
  onSearchSubmit: () => void;
}

const headerTabs: Array<{ label: string; icon: string; value: HeaderCategory }> = [
  { label: "All", icon: "🧭", value: "all" },
  { label: "Homes", icon: "🏠", value: "homes" },
  { label: "Experiences", icon: "🎈", value: "experiences" },
  { label: "Services", icon: "🛎", value: "services" },
];

export const PageHeader = ({
  fixed,
  destination,
  checkInDate,
  checkOutDate,
  guestsCount,
  activeCategory = "all",
  onCategoryChange,
  onDestinationChange,
  onGuestsChange,
  onSearchSubmit,
}: PageHeaderProps) => {
  return (
    <header
      className={`${
        fixed ? "sticky top-0 z-20" : "relative"
      } w-full border-b border-zinc-200 bg-zinc-100/95 backdrop-blur`}
    >
      <div className="mx-auto w-full max-w-[1560px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="text-[34px] font-semibold leading-none tracking-tight text-rose-500">
            StayScape
          </Link>

          <nav className="order-3 flex w-full items-end justify-center gap-8 border-b border-zinc-200 pb-2 pt-1 text-sm font-semibold text-zinc-600 md:order-2 md:w-auto md:border-b-0 md:pb-0">
            {headerTabs.map((tab) => {
              const selected = tab.value === activeCategory;

              return (
                <button
                  key={tab.value}
                  className={`inline-flex items-center gap-2 border-b-2 pb-2 transition ${
                    selected
                      ? "border-zinc-900 text-zinc-900"
                      : "border-transparent text-zinc-500 hover:text-zinc-800"
                  }`}
                  onClick={() => onCategoryChange?.(tab.value)}
                  type="button"
                >
                  <span aria-hidden>{tab.icon}</span>
                  {tab.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 text-zinc-600">
            <p className="hidden text-sm font-semibold text-zinc-700 md:block">List your place</p>
            <button className="grid h-9 w-9 place-items-center rounded-full bg-zinc-200 text-sm">
              ◍
            </button>
            <button
              className="grid h-9 w-9 place-items-center rounded-full bg-zinc-200 text-sm"
              aria-label="Open account menu"
            >
              ≡
            </button>
            <Link href="/catalog" className="rounded-full border border-zinc-300 px-3 py-1.5 text-sm">
              Catalog
            </Link>
          </div>
        </div>

        <SearchBar
          destination={destination}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          guestsCount={guestsCount}
          onDestinationChange={onDestinationChange}
          onGuestsChange={onGuestsChange}
          onSearchSubmit={onSearchSubmit}
        />
      </div>
    </header>
  );
};
