export type ListingCategory = "beach" | "mansion" | "trending" | "cabin";
export type ListingSection = "homes" | "hotels";

export interface Listing {
  id: string;
  title: string;
  location: string;
  category: ListingCategory;
  section: ListingSection;
  imageUrl: string;
  imageSrc: string;
  isGuestFavorite: boolean;
  isSaved: boolean;
  pricePerNight: number;
  stayDuration: number;
  rating: number;
}
