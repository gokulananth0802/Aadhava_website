import React from 'react';
import { Globe, Mail, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import { GLOBAL_LOCATIONS, EMAIL_TEMPLATE } from '../constants';
import AnimatedDiv from '../components/AnimatedDiv';

const Contact: React.FC = () => {
  const mailtoLink = `mailto:${EMAIL_TEMPLATE.to}`;

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Hero */}
      <div className="bg-[#F8E9C9] border-y-4 border-[#7A0F12] py-12 text-center mb-16 relative">
         <div className="absolute top-2 left-0 w-full h-1 bg-[#D7A846]"></div>
         <div className="absolute bottom-2 left-0 w-full h-1 bg-[#D7A846]"></div>
         <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0F5A2A] mb-4">Connect With Aadhava</h1>
         <p className="text-xl text-[#7A0F12] font-serif">We Serve the World</p>
      </div>

      {/* Global Reach Section */}
      <AnimatedDiv className="mb-20">
        <div className="flex items-center justify-center mb-12">
            <Globe className="text-[#0F5A2A] mr-3" size={32} />
            <h2 className="text-3xl font-serif font-bold text-[#7A0F12]">Our Global Reach</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GLOBAL_LOCATIONS.map((loc, index) => (
                <AnimatedDiv key={loc.country} delay={index * 0.1} className="bg-[#fff] border-4 border-[#7A0F12] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                    <div className="bg-[#7A0F12] p-4 flex justify-between items-center">
                        <h3 className="text-[#F8E9C9] font-serif font-bold text-xl">{loc.country}</h3>
                        <span className="bg-[#F8E9C9] text-[#7A0F12] font-bold px-2 py-1 rounded text-xs">{loc.flagCode}</span>
                    </div>
                    <div className="p-6 flex-grow bg-[#F8E9C9]/50">
                        <p className="text-[#0F5A2A] font-medium mb-4 italic">{loc.description}</p>
                        <div className="space-y-2">
                            <h4 className="text-[#7A0F12] font-bold text-sm uppercase border-b border-[#D7A846] inline-block mb-2">Serving Cities:</h4>
                            <ul className="grid grid-cols-2 gap-2">
                                {loc.cities.map(city => (
                                    <li key={city} className="text-sm text-[#5e0a0d] flex items-center">
                                        <MapPin size={12} className="mr-1 text-[#D7A846]" /> {city}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedDiv>
            ))}
        </div>
      </AnimatedDiv>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <AnimatedDiv className="bg-[#0F5A2A] text-[#F8E9C9] rounded-xl p-8 shadow-xl border-4 border-[#D7A846]">
              <h2 className="text-3xl font-serif font-bold mb-8 border-b border-[#D7A846] pb-4">Get In Touch</h2>
              
              <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                      <div className="bg-[#F8E9C9] p-3 rounded-full text-[#0F5A2A]">
                          <Mail size={24} />
                      </div>
                      <div>
                          <h3 className="font-bold text-lg text-[#D7A846]">Email Us</h3>
                          <a href={mailtoLink} className="text-xl underline decoration-[#D7A846] decoration-2 underline-offset-4 hover:text-[#D7A846] transition-colors">
                            aadhaavafnp@gmail.com
                          </a>
                          <p className="text-sm mt-2 opacity-80">For orders, exports, and inquiries</p>
                      </div>
                  </div>

                  <div className="flex items-start space-x-4">
                      <div className="bg-[#F8E9C9] p-3 rounded-full text-[#0F5A2A]">
                          <MessageCircle size={24} />
                      </div>
                      <div>
                          <h3 className="font-bold text-lg text-[#D7A846]">WhatsApp</h3>
                          <p className="text-lg font-medium">Chat with us for quick support</p>
                          <a 
                            href="https://wa.me/919876543210" // TODO: Replace with your WhatsApp number
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-2 inline-block bg-[#25D366] text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-[#128C7E] transition-colors"
                          >
                              Open WhatsApp
                          </a>
                      </div>
                  </div>

                  <div className="flex items-start space-x-4">
                      <div className="bg-[#F8E9C9] p-3 rounded-full text-[#0F5A2A]">
                          <MapPin size={24} />
                      </div>
                      <div>
                          <h3 className="font-bold text-lg text-[#D7A846]">Headquarters</h3>
                          <p className="leading-relaxed">
                              Aadhava Food Products,<br/>
                              Chennai, Tamil Nadu,<br/>
                              India - 600001
                          </p>
                      </div>
                  </div>
              </div>
          </AnimatedDiv>

          {/* Quality Certifications & Alternative Contact */}
          <AnimatedDiv className="space-y-8" delay={0.2}>
              {/* Certifications */}
              <div className="bg-[#F8E9C9] border-4 border-[#7A0F12] rounded-xl p-8 text-center relative">
                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#7A0F12] text-[#F8E9C9] px-6 py-2 rounded-full font-bold border-2 border-[#D7A846]">
                       Quality Assurance
                   </div>
                   <div className="mt-4 grid gap-6">
                        <div className="flex items-center justify-center space-x-3 text-[#0F5A2A] font-bold text-lg">
                            <CheckCircle className="text-[#D7A846]" />
                            <span>Committed to International Standards</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3 text-[#0F5A2A] font-bold text-lg">
                            <CheckCircle className="text-[#D7A846]" />
                            <span>Export-Ready Packaging</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3 text-[#0F5A2A] font-bold text-lg">
                            <CheckCircle className="text-[#D7A846]" />
                            <span>FSSAI Compliant</span>
                        </div>
                   </div>
              </div>

              {/* Business Inquiry Box */}
              <div className="bg-[#7A0F12] p-1 rounded-xl">
                  <div className="bg-[#F8E9C9] rounded-lg p-8 border-2 border-dashed border-[#7A0F12]">
                      <h3 className="text-2xl font-serif font-bold text-[#7A0F12] mb-4">Business Inquiries</h3>
                      <p className="text-[#5e0a0d] font-medium mb-6">
                          Interested in bulk orders, export partnerships, or distribution opportunities? We would love to partner with you.
                      </p>
                      <a href={mailtoLink} className="block w-full text-center bg-[#7A0F12] text-[#F8E9C9] py-3 rounded font-bold hover:bg-[#0F5A2A] transition-colors">
                          Send Us a Message
                      </a>
                  </div>
              </div>
          </AnimatedDiv>
      </div>

    </div>
  );
};

export default Contact;