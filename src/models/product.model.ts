export default interface Product {
  id?: number;
  title?: string;
  brandId?: number;
  categoryId?: number;
  galleryId?: number;
  price: number;
  discount?: number;
  imageUrl?: string;
  description?: string;
  isAvailable?: boolean;
}
