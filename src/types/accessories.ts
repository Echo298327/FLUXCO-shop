export interface Accessory {
  name: string;
  price: string;
  image: string; // Main image (used in cards)
  images?: string[]; // Additional images for gallery
  category: string;
}