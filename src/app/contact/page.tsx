"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Section background="secondary" className="pt-32">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Let's Connect</h1>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Have questions? We'd love to hear from you. Visit us or reach out via phone or email.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-8">
                        <h2 className="text-3xl font-bold font-heading mb-8">Get In Touch</h2>

                        {[
                            { title: "Phone", text: siteConfig.contact.phone, icon: <Phone className="text-primary" /> },
                            { title: "WhatsApp", text: siteConfig.contact.whatsapp, icon: <MessageCircle className="text-accent" /> },
                            { title: "Email", text: siteConfig.contact.email, icon: <Mail className="text-warning" /> },
                            { title: "Our Address", text: siteConfig.contact.address, icon: <MapPin className="text-success" /> },
                            { title: "School Hours", text: siteConfig.contact.hours, icon: <Clock className="text-primary" /> }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start group">
                                <div className="bg-white p-4 rounded-2xl shadow-soft group-hover:bg-primary group-hover:text-white transition-all cursor-pointer">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">{item.title}</h4>
                                    <p className="text-lg font-bold text-foreground">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-50">
                            <h3 className="text-2xl font-bold font-heading mb-8">Send Us A Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-2">Your Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary outline-none transition-all font-body" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-2">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary outline-none transition-all font-body" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 ml-2">Subject</label>
                                    <input type="text" placeholder="Inquiry about admissions" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary outline-none transition-all font-body" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 ml-2">Message</label>
                                    <textarea rows={6} placeholder="Write your message here..." className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary outline-none transition-all font-body resize-none" />
                                </div>

                                <Button className="w-full py-5 text-xl">Submit Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <MapPin size={48} className="text-primary mx-auto mb-4 animate-bounce" />
                        <p className="text-xl font-bold font-heading text-gray-500 underline decoration-dashed underline-offset-4">Find us on Google Maps</p>
                    </div>
                </div>
            </section>
        </>
    );
}
