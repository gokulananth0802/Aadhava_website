export interface Product {
  id: string;
  name: string;
  imageAlt: string;
  iconType: 'mix' | 'spiral' | 'chip' | 'nut' | 'stick';
  image: string;
}

export interface NutritionInfo {
  energy: string;      // e.g., "529.3kcal"
  protein: string;     // e.g., "16.1g"
  fat: string;         // e.g., "28.5g"
  carbs: string;       // e.g., "52.1g"
  sugar: string;       // e.g., "2.1g"
  sodium: string;      // e.g., "729.3mg"
}

export interface ProductTranslations {
  tamil: string;
  hindi: string;
  chinese: string;
}

export interface ProductDetails extends Product {
  slug: string;
  weight: string;
  description: string;
  tagline: string;
  ingredients: string[];
  nutrition: NutritionInfo;
  translations: ProductTranslations;
  category: 'traditional-savouries' | 'specialty-snacks';
}

export interface NavItem {
  label: string;
  path: string;
}

export interface GlobalLocation {
  country: string;
  flagCode: string;
  description: string;
  cities: string[];
}