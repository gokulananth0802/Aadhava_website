import React from 'react';
import { Helmet } from 'react-helmet-async';

// Organization Schema - Use site-wide
export const OrganizationSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Aadhava Attan",
        "alternateName": "Aadhava Food Products",
        "url": "https://www.aadhavaattan.com",
        "logo": "https://www.aadhavaattan.com/images/Aadhava_logo2.jpg",
        "description": "Authentic South Indian snacks and traditional sweets made with pure ingredients. No palm oil, no preservatives - handmade with grandmother's recipes.",
        "foundingDate": "2023",
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "aadhavaattan@gmail.com",
            "contactType": "customer service",
            "areaServed": ["IN", "SG", "CA"],
            "availableLanguage": ["English", "Tamil"]
        },
        "sameAs": []
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

// Product Schema - Use on product pages/cards
interface ProductSchemaProps {
    name: string;
    description: string;
    image: string;
    price?: string;
    currency?: string;
    ingredients?: string[];
    nutrition?: {
        energy: string;
        protein: string;
        fat: string;
        carbs: string;
        sugar: string;
        sodium: string;
    };
}

export const ProductSchema: React.FC<ProductSchemaProps> = ({
    name,
    description,
    image,
    price = "0",
    currency = "INR",
    ingredients,
    nutrition
}) => {
    const schema: Record<string, unknown> = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": name,
        "image": image.startsWith('http') ? image : `https://www.aadhavaattan.com${image}`,
        "description": `${description}. Authentic handmade Indian snack with no palm oil and no preservatives.`,
        "brand": {
            "@type": "Brand",
            "name": "Aadhava Attan"
        },
        "category": "Food & Beverages > Snacks",
        "offers": {
            "@type": "Offer",
            "priceCurrency": currency,
            "price": price,
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "Aadhava Attan"
            },
            "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingDestination": [
                    { "@type": "DefinedRegion", "addressCountry": "IN" },
                    { "@type": "DefinedRegion", "addressCountry": "SG" },
                    { "@type": "DefinedRegion", "addressCountry": "CA" }
                ]
            }
        }
    };

    // Add nutrition info if provided
    if (nutrition) {
        schema.nutrition = {
            "@type": "NutritionInformation",
            "calories": nutrition.energy,
            "proteinContent": nutrition.protein,
            "fatContent": nutrition.fat,
            "carbohydrateContent": nutrition.carbs,
            "sugarContent": nutrition.sugar,
            "sodiumContent": nutrition.sodium,
            "servingSize": "100g"
        };
    }

    // Add ingredients if provided
    if (ingredients && ingredients.length > 0) {
        schema.ingredients = ingredients.join(', ');
    }

    // Add dietary info
    schema.suitableForDiet = "https://schema.org/VegetarianDiet";

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

// LocalBusiness Schema - Use on Contact page
export const LocalBusinessSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Aadhava Food Products",
        "image": "https://www.aadhavaattan.com/images/Aadhava_logo2.jpg",
        "description": "Authentic South Indian snacks manufacturer and exporter. Handmade traditional sweets and savory snacks.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Aadhava Food Products",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600001",
            "addressCountry": "IN"
        },
        "email": "aadhavaattan@gmail.com",
        "url": "https://www.aadhavaattan.com",
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
        },
        "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "Country", "name": "Singapore" },
            { "@type": "Country", "name": "Canada" }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

// WebSite Schema - Use on Home page for sitelinks search
export const WebSiteSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Aadhava Attan",
        "url": "https://www.aadhavaattan.com",
        "description": "Buy authentic South Indian snacks online. Traditional Murukku, Mixture, and handmade sweets with no palm oil.",
        "publisher": {
            "@type": "Organization",
            "name": "Aadhava Food Products"
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};
