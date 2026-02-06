"use client";

import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryPage() {
    const images = [
        { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b", alt: "Classroom fun" },
        { src: "https://images.unsplash.com/photo-1502101872923-d48509bff386", alt: "Art class" },
        { src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74", alt: "Outdoor playground" },
        { src: "https://images.unsplash.com/photo-1560410754-0722cc811f26", alt: "Music session" },
        { src: "https://images.unsplash.com/photo-1489714733131-47045c7adcb7", alt: "Group activity" },
        { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9", alt: "Happy faces" },
        { src: "https://images.unsplash.com/photo-1588072432836-e10032774350", alt: "Reading time" },
        { src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b", alt: "Creative play" },
        { src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30", alt: "Learning together" }
    ];

    return (
        <>
            <Section background="warning" className="pt-32">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Our School Gallery</h1>
                    <p className="text-xl text-gray-800 leading-relaxed">
                        Take a peek into the wonderful world of {siteConfig.name}. Moments of joy, discovery, and growth.
                    </p>
                </div>
            </Section>

            <Section title="Moments of Joy" subtitle={`Life At ${siteConfig.name}`}>
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative group rounded-3xl overflow-hidden shadow-soft cursor-pointer"
                        >
                            <Image
                                src={`${img.src}?auto=format&fit=crop&q=80&w=800`}
                                alt={img.alt}
                                width={800}
                                height={600}
                                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold font-heading text-lg">{img.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
}

import { siteConfig } from "@/config/site";
