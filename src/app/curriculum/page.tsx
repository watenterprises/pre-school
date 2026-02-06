"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Palette, Music, BookOpen, Sun, Activity, Calculator } from "lucide-react";

export default function CurriculumPage() {
    const activities = [
        { title: "Art & Craft", icon: <Palette size={32} />, color: "bg-pink-500", text: "Exploring colors, textures, and creativity through painting and clay work." },
        { title: "Music & Dance", icon: <Music size={32} />, color: "bg-purple-500", text: "Rhythm, expression, and joy through songs and creative movement." },
        { title: "Storytelling", icon: <BookOpen size={32} />, color: "bg-blue-500", text: "Developing vocabulary and imagination through magical tales." },
        { title: "Outdoor Play", icon: <Sun size={32} />, color: "bg-yellow-500", text: "Physical growth and social skills in our safe playground environment." },
        { title: "Phonics & Literacy", icon: <Activity size={32} />, color: "bg-green-500", text: "Building strong foundations in reading and communication." },
        { title: "Early Math", icon: <Calculator size={32} />, color: "bg-orange-500", text: "Conceptual learning of numbers and logic through fun games." }
    ];

    return (
        <>
            <Section background="success" className="pt-32">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Learning & Play</h1>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        A balanced curriculum designed to foster curiosity and develop essential skills through hands-on experiences.
                    </p>
                </div>
            </Section>

            <Section title="Our Core Activities" subtitle="How We Learn">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((item, i) => (
                        <Card key={i} className="group overflow-hidden border-none shadow-soft hover:shadow-xl transition-all">
                            <div className={`${item.color} p-6 text-white flex justify-center group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <div className="p-8 text-center bg-white">
                                <h3 className="text-2xl font-bold font-heading mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.text}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section background="muted" title="Weekly Theme" subtitle="Focused Learning">
                <div className="max-w-4xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="bg-primary/10 w-32 h-32 rounded-3xl flex items-center justify-center shrink-0">
                            <span className="text-5xl font-bold text-primary">01</span>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold font-heading mb-4">Magic of Nature</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every month, our curriculum revolves around a specific theme. This month's theme, 'Magic of Nature', introduces children to plants, animals, and the environment through interactive gardening and nature walks.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
