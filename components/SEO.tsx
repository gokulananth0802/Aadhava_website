import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    canonicalUrl?: string;
    type?: 'website' | 'article' | 'product';
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image = '/images/Aadhava_logo2.jpg',
    canonicalUrl,
    type = 'website'
}) => {
    const siteUrl = 'https://www.aadhavaattan.com';
    const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
    const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullCanonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:site_name" content="Aadhava Attan" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullCanonicalUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />

            {/* Additional SEO Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Aadhava Food Products" />
            <meta name="keywords" content="Buy Indian snacks online, Order authentic South Indian sweets, Murukku delivery, Manapparai Murukku, Madras Mixture, No Palm Oil, Preservative-free, Handmade snacks" />
        </Helmet>
    );
};

export default SEO;
