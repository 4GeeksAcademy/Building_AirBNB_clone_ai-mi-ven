export interface Room {
  id: string;
  title: string;
  location: string;
  hostName: string;
  hostSince: string;
  guestCapacity: number;
  bedrooms: number;
  beds: number;
  baths: number;
  rating: number;
  reviewsCount: number;
  description: string;
  amenities: string[];
  photos: string[];
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
}
