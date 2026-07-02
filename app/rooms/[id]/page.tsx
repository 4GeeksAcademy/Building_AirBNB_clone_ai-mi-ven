"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { roomIds, roomsById } from "@/lib/mock-data";

const RoomPage = () => {
  const params = useParams<{ id: string }>();
  const room = roomsById[params.id];
  const [photoIndex, setPhotoIndex] = useState(0);

  const fallbackId = useMemo(() => roomIds[0], []);
  const safeRoom = room ?? roomsById[fallbackId];

  const totalBeforeTaxes =
    safeRoom.pricePerNight * 3 + safeRoom.cleaningFee + safeRoom.serviceFee;

  const currentPhoto = safeRoom.photos[photoIndex % safeRoom.photos.length];

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-lg font-bold text-zinc-900">
            AirScape
          </Link>
          <nav className="flex items-center gap-4 text-sm font-medium text-zinc-600">
            <Link href="/">Home</Link>
            <Link href="/catalog">Catalog</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
        <section className="rounded-2xl border border-zinc-200 bg-white p-4">
          <div className="relative h-64 rounded-xl bg-gradient-to-br from-amber-100 via-lime-100 to-emerald-200 p-5 sm:h-96">
            <p className="inline-flex rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-zinc-700">
              {currentPhoto}
            </p>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                className="rounded-full border border-zinc-300 bg-white px-3 py-2 text-sm"
                onClick={() =>
                  setPhotoIndex((prev) =>
                    prev === 0 ? safeRoom.photos.length - 1 : prev - 1,
                  )
                }
              >
                Prev
              </button>
              <button
                className="rounded-full border border-zinc-300 bg-white px-3 py-2 text-sm"
                onClick={() => setPhotoIndex((prev) => (prev + 1) % safeRoom.photos.length)}
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <section className="mt-6 flex flex-col gap-6 lg:flex-row">
          <div className="flex-1 space-y-6">
            <article className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h1 className="text-2xl font-semibold text-zinc-900">{safeRoom.title}</h1>
              <p className="mt-2 text-sm text-zinc-600">
                {safeRoom.location} • ★ {safeRoom.rating} ({safeRoom.reviewsCount} reviews)
              </p>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-zinc-900">Hosted by {safeRoom.hostName}</h2>
              <p className="mt-1 text-sm text-zinc-600">
                Host since {safeRoom.hostSince} • {safeRoom.guestCapacity} guests • {safeRoom.bedrooms}
                bedrooms • {safeRoom.beds} beds • {safeRoom.baths} baths
              </p>
              <p className="mt-4 text-sm leading-6 text-zinc-700">{safeRoom.description}</p>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-zinc-900">Amenities</h2>
              <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-zinc-700 sm:grid-cols-2">
                {safeRoom.amenities.map((amenity) => (
                  <li key={amenity} className="rounded-lg border border-zinc-200 px-3 py-2">
                    {amenity}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <aside className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-20 lg:h-fit lg:w-[340px]">
            <h2 className="text-lg font-semibold text-zinc-900">Booking</h2>
            <p className="mt-3 text-sm text-zinc-700">${safeRoom.pricePerNight} x 3 nights</p>
            <p className="mt-1 text-sm text-zinc-700">Cleaning fee: ${safeRoom.cleaningFee}</p>
            <p className="mt-1 text-sm text-zinc-700">Service fee: ${safeRoom.serviceFee}</p>
            <p className="mt-4 border-t border-zinc-200 pt-3 text-sm font-semibold text-zinc-900">
              Total before taxes: ${totalBeforeTaxes}
            </p>
            <button className="mt-4 w-full rounded-xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white hover:bg-rose-600">
              Reserve
            </button>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default RoomPage;
