import Link from "next/link";
import { Mail, Phone, MapPin, Rocket, Facebook, Instagram, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
    return (
        <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-primary p-2 rounded-full text-white">
                            <Rocket size={24} />
                        </div>
                        <span className="text-xl font-bold font-heading">
                            {siteConfig.name}
                        </span>
                    </Link>
                    <p className="text-gray-600 leading-relaxed">
                        {siteConfig.description}
                    </p>
                    <div className="flex gap-4">
                        <a href={siteConfig.social.facebook} className="text-primary hover:scale-110 transition-transform"><Facebook size={20} /></a>
                        <a href={siteConfig.social.instagram} className="text-primary hover:scale-110 transition-transform"><Instagram size={20} /></a>
                        <a href={siteConfig.social.twitter} className="text-primary hover:scale-110 transition-transform"><Twitter size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        {siteConfig.navigation.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-gray-600 hover:text-primary transition-colors">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-600">
                            <MapPin className="text-primary shrink-0" size={20} />
                            <span>{siteConfig.contact.address}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-600">
                            <Phone className="text-primary shrink-0" size={20} />
                            <span>{siteConfig.contact.phone}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-600">
                            <Mail className="text-primary shrink-0" size={20} />
                            <span>{siteConfig.contact.email}</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold text-lg mb-6">Opening Hours</h4>
                    <p className="text-gray-600">{siteConfig.contact.hours}</p>
                    <div className="mt-8 bg-white p-4 rounded-playful shadow-sm border border-gray-100">
                        <p className="font-bold text-sm text-center text-primary uppercase tracking-wider mb-2">Ready to Join?</p>
                        <Link href="/admissions" className="block text-center bg-accent text-white py-2 rounded-xl text-sm font-bold hover:bg-accent/90 transition-colors">
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Created with ❤️ for early learners.</p>
            </div>
        </footer>
    );
}
