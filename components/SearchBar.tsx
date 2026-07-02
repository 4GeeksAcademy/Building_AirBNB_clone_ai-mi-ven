"use client";

interface SearchBarProps {
  destination: string;
  checkInDate: string;
  checkOutDate: string;
  guestsCount: number;
  onDestinationChange: (value: string) => void;
  onGuestsChange: (value: number) => void;
  onSearchSubmit: () => void;
}

export const SearchBar = ({
  destination,
  checkInDate,
  checkOutDate,
  guestsCount,
  onDestinationChange,
  onGuestsChange,
  onSearchSubmit,
}: SearchBarProps) => {
  return (
    <form
      className="mx-auto mt-5 flex w-full max-w-[720px] items-center rounded-full border border-zinc-200 bg-white px-2 py-2 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        onSearchSubmit();
      }}
    >
      <label className="flex min-w-0 flex-1 flex-col rounded-full px-6 py-1 text-xs font-semibold text-zinc-900">
        Where
        <input
          className="mt-1 w-full bg-transparent text-base font-medium text-zinc-700 outline-none placeholder:text-zinc-500"
          placeholder="Search destination"
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
        />
      </label>
      <div className="h-8 w-px bg-zinc-200" aria-hidden />
      <label className="hidden flex-1 flex-col rounded-full px-6 py-1 text-xs font-semibold text-zinc-900 sm:flex">
        When
        <input
          className="mt-1 w-full bg-transparent text-base font-medium text-zinc-700 outline-none"
          value={`${checkInDate} - ${checkOutDate}`}
          readOnly
        />
      </label>
      <div className="hidden h-8 w-px bg-zinc-200 sm:block" aria-hidden />
      <div className="flex min-w-[180px] items-center justify-between gap-3 rounded-full px-4 py-1 sm:flex-1 sm:px-6">
        <div>
          <p className="text-xs font-semibold text-zinc-900">Who</p>
          <p className="text-base font-medium text-zinc-600">{guestsCount} guests</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="grid h-7 w-7 place-items-center rounded-full border border-zinc-300 text-sm text-zinc-700"
            onClick={() => onGuestsChange(Math.max(1, guestsCount - 1))}
            aria-label="Decrease guests"
          >
            -
          </button>
          <button
            type="button"
            className="grid h-7 w-7 place-items-center rounded-full border border-zinc-300 text-sm text-zinc-700"
            onClick={() => onGuestsChange(guestsCount + 1)}
            aria-label="Increase guests"
          >
            +
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-rose-500 text-white hover:bg-rose-600"
        aria-label="Search listings"
      >
        ⌕
      </button>
    </form>
  );
};
