export default interface Product {
  id?: number;
  title_fa?: string;
  images?: Images;
  title_en?: string;
  rating?: Rating;
  colors?: Color[];
  category?: Category;
  last_questions?: Question[];
  last_comments?: Comment[];
  review?: Review[];
  suggestion?: Suggestion;
  breadcrumb?: Breadcrumb[];
  specifications?: Specifications[];
  price: number;
  discount?: number;
  isAvailable?: boolean;
}

export interface Images {
  main?: string;
  list?: string[];
}

export interface Rating {
  rate?: number;
  count?: number;
}

export interface Color {
  id?: number;
  title?: string;
  hex_code?: string;
}

export interface Category {
  id?: number;
  title_fa?: string;
  title_en?: string;
  code?: string;
  content_description?: string;
}

export interface Question {
  id?: number;
  text?: string;
  answer_count?: number;
  sender?: string;
  created_at?: string;
}

export interface Comment {
  id?: number;
  title?: string;
  is_buyer?: boolean;
  body?: number;
  created_at?: string;
  rate?: number;
  reactions?: { dislikes?: number; like?: number };
}

export interface Review {
  description?: string;
  attributes?: { title?: string; values?: string };
}

export interface Suggestion {
  count?: number;
  percentage?: number;
}

export interface Breadcrumb {
  title: number;
  url: { base?: string; uri: string };
}

export interface Specifications {
  title?: string;
  values?: string[];
}
