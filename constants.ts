
import mixture from './images/mixture.jpg';
import mullu_murukku from './images/mullu_murukku.jpg';
import chinna_thatta_murukku from './images/chinna_thatta_murukku.jpg';
import chinna_murukku from './images/chinna_murukku.png';
import ottu_pakoda from './images/ottu_pakoda.jpg';
import masala_peanuts from './images/masala-peanuts.jpg';

import { ProductDetails, GlobalLocation } from './types';

export const COLORS = {
  maroon: '#7A0F12',
  cream: '#F8E9C9',
  forest: '#0F5A2A',
  gold: '#D7A846',
};

export const PRODUCTS: ProductDetails[] = [
  {
    id: '1',
    name: 'Mixture',
    slug: 'mixture',
    imageAlt: 'Authentic South Indian Mixture - Handmade Madras Mix with No Palm Oil',
    iconType: 'mix',
    image: mixture,
    weight: '200G',
    tagline: "ATTAN's range of products carry a full trust of authentic taste and freshness. They are the most freshly packed, crispy, crunchy & tasty snack.",
    description: "Premium South Indian Madras Mixture - handcrafted with authentic spices for the perfect crunch. Freshly packed with no preservatives, delivering genuine homemade flavor in every bite. Ideal for tea-time snacking or gifting.",
    category: 'traditional-savouries',
    translations: {
      tamil: 'மிக்ஸ்சர்',
      hindi: 'मिक्सचर',
      chinese: '混合物'
    },
    ingredients: ['Rice', 'Gram Flour', 'Black Gram', 'Wheat Flour', 'Oil', 'Carrom Seeds', 'Cumin Seeds', 'Black Sesame', 'Salt'],
    nutrition: {
      energy: '529.3kcal',
      protein: '16.1g',
      fat: '28.5g',
      carbs: '52.1g',
      sugar: '2.1g',
      sodium: '729.3mg'
    }
  },
  {
    id: '2',
    name: 'Mullu Murukku',
    slug: 'mullu-murukku',
    imageAlt: 'Crunchy Spiked Mullu Murukku - Traditional Handmade South Indian Snack',
    iconType: 'spiral',
    image: mullu_murukku,
    weight: '200G',
    tagline: "Selected precisely from the best lot of raw materials, this snack is processed in a hygienic condition & seasoned with great spices.",
    description: "Traditional Spiked Murukku made from select rice flour and aromatic spices. Hygienically processed using grandmother's authentic recipe. Crispy, crunchy, and addictively delicious - a South Indian favorite.",
    category: 'traditional-savouries',
    translations: {
      tamil: 'முள்ளு முறுக்கு',
      hindi: 'मुल्लू मुरुक्कू',
      chinese: '穆鲁库'
    },
    ingredients: ['Rice', 'Gram Flour', 'Black Gram', 'Wheat Flour', 'Oil', 'Carrom Seeds', 'Cumin Seeds', 'Black Sesame', 'Salt'],
    nutrition: {
      energy: '497.6kcal',
      protein: '17.1g',
      fat: '23.2g',
      carbs: '55.1g',
      sugar: '2.1g',
      sodium: '622.5mg'
    }
  },
  {
    id: '3',
    name: 'Chinna Thatta Murukku',
    slug: 'chinna-thatta-murukku',
    imageAlt: 'Traditional Crispy Rice Disc Thattai Murukku - Handmade Preservative-Free Snack',
    iconType: 'chip',
    image: chinna_thatta_murukku,
    weight: '200G',
    tagline: "Crispy, crunchy & tasty snack. Seasoned with great spices & condiments to give you the most exotic taste anywhere.",
    description: "Authentic Rice Disc Murukku - thin, crispy circles of pure flavor. Expertly seasoned with cumin and sesame, these handmade thattai deliver exotic South Indian taste wherever you are.",
    category: 'traditional-savouries',
    translations: {
      tamil: 'சின்ன தட்டு முறுக்கு',
      hindi: 'चिन्न तट्टा मुरुक्कू',
      chinese: '小圆饼穆鲁库'
    },
    ingredients: ['Rice', 'Gram Flour', 'Black Gram', 'Wheat Flour', 'Oil', 'Carrom Seeds', 'Cumin Seeds', 'Black Sesame', 'Salt'],
    nutrition: {
      energy: '507.6kcal',
      protein: '17.2g',
      fat: '24.4g',
      carbs: '54.8g',
      sugar: '2.1g',
      sodium: '629.3mg'
    }
  },
  {
    id: '4',
    name: 'Chinna Murukku',
    slug: 'chinna-murukku',
    imageAlt: 'Traditional Butter Murukku - Authentic Grandmother Style Pure Ghee Snack',
    iconType: 'spiral',
    image: chinna_murukku,
    weight: '200G',
    tagline: "Authentic taste and freshness. Freshly packed, giving you an exotic taste anytime, anywhere.",
    description: "Butter-soft Ring Murukku crafted with pure ghee for authentic grandmother-style taste. Light, crispy, and packed fresh - experience the heritage of Tamil Nadu in every bite.",
    category: 'specialty-snacks',
    translations: {
      tamil: 'சின்ன முறுக்கு',
      hindi: 'चिन्न मुरुक्कू',
      chinese: '粉矩'
    },
    ingredients: ['Rice Powder', 'Gram Flour', 'Clarified Butter', 'Oil', 'Salt', 'Spices'],
    nutrition: {
      energy: '522.5kcal',
      protein: '16.3g',
      fat: '26.5g',
      carbs: '54.1g',
      sugar: '2.1g',
      sodium: '621.3mg'
    }
  },
  {
    id: '5',
    name: 'Ottu Pakoda',
    slug: 'ottu-pakoda',
    imageAlt: 'Handmade Savory Ribbon Pakoda Crisps - No Preservatives South Indian Snack',
    iconType: 'stick',
    image: ottu_pakoda,
    weight: '200G',
    tagline: "Processed in hygienic conditions. The perfect blend of spices creates a crunchy texture and authentic flavor.",
    description: "Handmade Ribbon Pakoda with a signature crunchy texture. Crafted with premium gram flour and traditional spices for an authentic South Indian savory experience. No palm oil, no preservatives.",
    category: 'specialty-snacks',
    translations: {
      tamil: 'ஒட்டு பக்கோடா',
      hindi: 'ओट्टू पकोड़ा',
      chinese: '奥图帕科达'
    },
    ingredients: ['Rice Powder', 'Gram Flour', 'Clarified Butter', 'Oil', 'Salt', 'Spices'],
    nutrition: {
      energy: '501.8kcal',
      protein: '16.7g',
      fat: '23.4g',
      carbs: '56.1g',
      sugar: '2.1g',
      sodium: '642.3mg'
    }
  },
  {
    id: '6',
    name: 'Masala Peanut',
    slug: 'masala-peanut',
    imageAlt: 'Spicy Masala Coated Peanuts - No Palm Oil, No Preservatives, Handmade',
    iconType: 'nut',
    image: masala_peanuts,
    weight: '200G',
    tagline: "The most freshly packed, crispy, crunchy & tasty peanut snack seasoned with ginger, garlic and chilly.",
    description: "Spicy Masala Coated Peanuts roasted to golden perfection. Seasoned with ginger, garlic, and red chili for a bold kick. Perfect protein-rich snack for health-conscious food lovers.",
    category: 'specialty-snacks',
    translations: {
      tamil: 'மசாலா வேர்க்கடலை',
      hindi: 'मसाला मूंगफली',
      chinese: '香料花生'
    },
    ingredients: ['Peanut', 'Ginger', 'Garlic', 'Chilly Powder', 'Salt', 'Gram Flour', 'Rice Flour', 'Sesame'],
    nutrition: {
      energy: '529.3kcal',
      protein: '16.1g',
      fat: '28.5g',
      carbs: '52.1g',
      sugar: '2.1g',
      sodium: '729.3mg'
    }
  },
];

export const GLOBAL_LOCATIONS: GlobalLocation[] = [
  {
    country: 'India',
    flagCode: 'IN',
    description: 'Serving our home market with daily fresh stock across major metropolitan hubs.',
    cities: ['Chennai', 'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad']
  },
  {
    country: 'Singapore',
    flagCode: 'SG',
    description: 'Bringing the taste of home to the vibrant Indian diaspora in Southeast Asia.',
    cities: ['Little India', 'Jurong East', 'Tampines']
  },
  {
    country: 'Canada',
    flagCode: 'CA',
    description: 'Exporting authentic flavors to the growing South Asian communities in North America.',
    cities: ['Toronto', 'Vancouver', 'Brampton', 'Mississauga']
  }
];

export const EMAIL_TEMPLATE = {
  to: 'aadhavaattan@gmail.com',
  subject: 'New Snack Order from [Customer Name]',
  body: `Hello Aadhava Team,

I would like to place an order for your authentic snacks.

Customer Details:
Name: 
Phone Number: 
Delivery Address: 
Preferred Delivery Date: 

Order Selection:
- Mixture (Qty): 
- Mullu Muruku (Qty): 
- Chinna Thatta Muruku (Qty): 
- Chinna Murukku (Qty):
- Ottu Pakoda (Qty):
- Masala Peanut (Qty):

Special Instructions:

Thank you!`
};
