"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function TestimonialsPage() {
    const testimonials = [
        { name: "Sarah Johnson", child: "Emma (4 years)", text: "Choosing {siteConfig.name} was the best decision we made for Emma. She loves going to school every day and her confidence has blossomed.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
        { name: "David Wilson", child: "Leo (3 years)", text: "The teachers are so warm and welcoming. Leo has learned so much in just six months - his social skills have improved tremendously.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
        { name: "Priya Mehta", child: "Ayaan (5 years)", text: "A perfect balance of academics and fun. The curriculum is very well thought out and the staff is incredibly supportive.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
        { name: "Michael Chen", child: "Sophie (2 years)", text: "The safety standards at {siteConfig.name} give me total peace of mind. Sophie enjoys the play-based learning approach immensely.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
        { name: "Emily Davis", child: "Noah (4 years)", text: "We love the monthly themes! Noah is always excited to tell us about what he discovered in nature or art class.", avatar: "https://images.unsplash.com/photo-1544717297-fa154daaf761" },
        { name: "Robert Taylor", child: "Lily (6 years)", text: "The preparation for primary school here is excellent. My daughter is more than ready for the next step thanks to LKG/UKG classes.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" }
    ];

    return (
        <>
            <Section background="accent" className="pt-32 text-white">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Parent Stories</h1>
                    <p className="text-xl opacity-90 leading-relaxed">
                        Real experiences from our {siteConfig.name} family members. Your child&apos;s happiness is our greatest achievement.
                    </p>
                </div>
            </Section>

            <Section title="What Parents Say" subtitle="Testimonials">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-white p-8 relative flex flex-col h-full border-gray-100 italic transition-all hover:scale-[1.02]">
                            <Quote className="text-primary opacity-20 absolute top-4 right-4" size={48} />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-warning fill-warning" />)}
                            </div>
                            <p className="text-gray-600 mb-8 flex-grow leading-loose">&quot;{t.text.replace("{siteConfig.name}", siteConfig.name)}&quot;</p>
                            <div className="flex items-center gap-4">
                                <Image
                                    src={`${t.avatar}?auto=format&fit=crop&q=80&w=100`}
                                    alt={t.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full shadow-sm"
                                />
                                <div>
                                    <h4 className="font-bold text-foreground not-italic">{t.name}</h4>
                                    <p className="text-xs text-gray-500 not-italic uppercase tracking-wider">{t.child}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </>
    );
}

import { siteConfig } from "@/config/site";
