export interface IBook {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  image: string;
  publishedDate: string;
  description?: string;
  category?: string;
  publisher?: string;
  pages?: number;
  language?: string;
  rating?: number;
  price?: number;
}
