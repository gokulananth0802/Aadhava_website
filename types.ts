export interface Product {
  id: string;
  name: string;
  imageAlt: string;
  iconType: 'mix' | 'spiral' | 'chip' | 'nut' | 'stick';
  image: string;
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