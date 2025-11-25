
import mixture from './images/mixture.jpg';
import mullu_murukku from './images/mullu_murukku.jpg';
import chinna_thatta_murukku from './images/chinna_thatta_murukku.jpg';
import chinna_murukku from './images/chinna_murukku.png';
import ottu_pakoda from './images/ottu_pakoda.jpg';
import masala_peanuts from './images/masala-peanuts.jpg';

import { Product, GlobalLocation } from './types';

export const COLORS = {
  maroon: '#7A0F12',
  cream: '#F8E9C9',
  forest: '#0F5A2A',
  gold: '#D7A846',
};

export const PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Mixture', 
    imageAlt: 'Authentic South Indian Mixture', 
    iconType: 'mix',
    image: mixture
  },
  { 
    id: '2', 
    name: 'Mullu Muruku', 
    imageAlt: 'Crunchy Spiked Murukku', 
    iconType: 'spiral',
    image: mullu_murukku
  },
  { 
    id: '3', 
    name: 'Chinna Thatta Muruku', 
    imageAlt: 'Crispy Rice Discs', 
    iconType: 'chip',
    image: chinna_thatta_murukku
  },
  { 
    id: '4', 
    name: 'Chinna Murukku', 
    imageAlt: 'Traditional Butter Murukku', 
    iconType: 'spiral',
    image: chinna_murukku
  },
  { 
    id: '5', 
    name: 'Ottu Pakoda', 
    imageAlt: 'Savory Ribbon Crisps', 
    iconType: 'stick',
    image: ottu_pakoda
  },
  { 
    id: '6', 
    name: 'Masala Peanut', 
    imageAlt: 'Spicy Coated Peanuts', 
    iconType: 'nut',
    image: masala_peanuts
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
  to: 'aadhaavafnp@gmail.com',
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
