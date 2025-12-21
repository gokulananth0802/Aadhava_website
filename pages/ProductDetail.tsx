import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import AnimatedDiv from '../components/AnimatedDiv';
import SEO from '../components/SEO';
import { ProductSchema } from '../components/StructuredData';
import { Leaf, Clock } from 'lucide-react';

const ProductDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();


    const product = PRODUCTS.find(p => p.slug === slug);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8E9C9] px-4">
                <h1 className="text-4xl font-serif font-bold text-[#7A0F12] mb-4">Product Not Found</h1>
                <p className="text-[#0F5A2A] mb-8">The product you're looking for doesn't exist.</p>
                <Link to="/" className="px-6 py-3 bg-[#7A0F12] text-white rounded-lg hover:bg-[#5e1a1d] transition-colors">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8E9C9]">
            <SEO
                title={`${product.name} | Buy Authentic ${product.name} Online - Aadhava Attan`}
                description={product.description}
                image={product.image}
                canonicalUrl={`/product/${product.slug}`}
                type="product"
            />
            <ProductSchema
                name={product.name}
                description={product.description}
                image={product.image}
                ingredients={product.ingredients}
                nutrition={product.nutrition}
            />


            {/* Main Product Card */}
            <div className="max-w-5xl mx-auto px-4 py-8">
                <AnimatedDiv>
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#7A0F12]">
                        <div className="flex flex-col lg:flex-row">
                            {/* Left: Product Image */}
                            <div className="lg:w-2/5 p-8 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative">
                                {/* VEG Badge */}
                                <div className="absolute top-6 left-6 bg-[#0F5A2A] text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg z-10">
                                    <Leaf className="w-4 h-4" />
                                    VEG
                                </div>

                                <div className="relative">
                                    <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-[#D7A846]">
                                        <img
                                            src={product.image}
                                            alt={product.imageAlt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right: Product Details */}
                            <div className="lg:w-3/5 p-8 lg:p-10 bg-white">
                                {/* Header Row */}
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#7A0F12] uppercase tracking-wide">
                                            {product.name}
                                        </h1>
                                        <p className="text-lg text-[#D7A846] font-medium mt-2">
                                            {product.translations.tamil} | {product.translations.hindi} | {product.translations.chinese}
                                        </p>
                                    </div>

                                    {/* Weight Badge */}
                                    <div className="px-6 py-3 border-3 border-[#7A0F12] rounded-lg bg-white shadow-md">
                                        <span className="text-2xl font-bold text-[#7A0F12]">{product.weight}</span>
                                    </div>
                                </div>

                                {/* Tagline Quote */}
                                <div className="bg-[#FDF8ED] border-l-4 border-[#D7A846] p-5 rounded-r-lg mb-6 shadow-sm">
                                    <p className="text-[#333] italic text-lg leading-relaxed">
                                        "{product.tagline}"
                                    </p>
                                </div>

                                {/* Ingredients Section */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-6 h-6 bg-[#7A0F12] rounded flex items-center justify-center">
                                            <span className="text-white text-xs">📋</span>
                                        </div>
                                        <h2 className="text-lg font-bold text-[#333] uppercase tracking-wide">Ingredients</h2>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        {product.ingredients.join(', ')}.
                                    </p>
                                </div>

                                {/* Nutrition Section */}
                                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-6 h-6 bg-[#D7A846] rounded-full flex items-center justify-center">
                                            <Clock className="w-4 h-4 text-white" />
                                        </div>
                                        <h2 className="text-lg font-bold text-[#333] uppercase tracking-wide">Nutrition (Per 100G)</h2>
                                    </div>

                                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                                        <div className="bg-white rounded-lg p-3 text-center border border-[#7A0F12]/20 shadow-sm">
                                            <p className="text-xs text-gray-500 font-medium uppercase mb-1">Energy</p>
                                            <p className="text-base font-bold text-[#7A0F12]">{product.nutrition.energy.replace(/[a-zA-Z]+/, '')}</p>
                                            <p className="text-xs text-gray-400">kcal</p>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                                            <p className="text-xs text-gray-500 font-medium uppercase mb-1">Protein</p>
                                            <p className="text-base font-bold text-[#0F5A2A]">{product.nutrition.protein.replace(/[a-zA-Z]+/, '')}</p>
                                            <p className="text-xs text-gray-400">g</p>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                                            <p className="text-xs text-gray-500 font-medium uppercase mb-1">Fat</p>
                                            <p className="text-base font-bold text-[#0F5A2A]">{product.nutrition.fat.replace(/[a-zA-Z]+/, '')}</p>
                                            <p className="text-xs text-gray-400">g</p>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                                            <p className="text-xs text-gray-500 font-medium uppercase mb-1">Carbs</p>
                                            <p className="text-base font-bold text-[#0F5A2A]">{product.nutrition.carbs.replace(/[a-zA-Z]+/, '')}</p>
                                            <p className="text-xs text-gray-400">g</p>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                                            <p className="text-xs text-gray-500 font-medium uppercase mb-1">Sugar</p>
                                            <p className="text-base font-bold text-[#0F5A2A]">{product.nutrition.sugar.replace(/[a-zA-Z]+/, '')}</p>
                                            <p className="text-xs text-gray-400">g</p>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
                                            <p className="text-xs text-gray-500 font-medium uppercase mb-1">Sodium</p>
                                            <p className="text-base font-bold text-[#0F5A2A]">{product.nutrition.sodium.replace(/[a-zA-Z]+/, '')}</p>
                                            <p className="text-xs text-gray-400">mg</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="mt-8">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#7A0F12] text-white text-lg font-bold rounded-xl hover:bg-[#5e1a1d] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        📧 Order Now via Email
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedDiv>

                {/* Footer Note */}
                <AnimatedDiv delay={0.2}>
                    <div className="mt-8 text-center">
                        <p className="text-sm text-[#7A0F12] font-medium">
                            ⚠️ Allergy: Contains peanuts. Store in a dry and cool place. | FSSAI Lic: 12423989001762
                        </p>
                    </div>
                </AnimatedDiv>
            </div>
        </div>
    );
};

export default ProductDetail;
