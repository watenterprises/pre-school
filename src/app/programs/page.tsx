"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Clock, Users, Target, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProgramsPage() {
    return (
        <>
            <Section background="secondary" className="pt-32">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Our Educational Programs</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Tailored learning experiences designed for every stage of your child&apos;s early development.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="space-y-24">
                    {siteConfig.programs.map((program, index) => (
                        <div
                            key={program.name}
                            id={program.name.toLowerCase()}
                            className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1 space-y-8">
                                <div>
                                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">Ages {program.age}</span>
                                    <h2 className="text-4xl font-bold font-heading mb-4">{program.name}</h2>
                                    <p className="text-xl text-gray-600 leading-relaxed">{program.description}</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4 items-center">
                                        <div className="bg-primary/10 p-3 rounded-xl text-primary"><Clock size={20} /></div>
                                        <div>
                                            <p className="font-bold text-sm">Timings</p>
                                            <p className="text-gray-500 text-sm">8:30 AM - 12:30 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <div className="bg-accent/10 p-3 rounded-xl text-accent"><Users size={20} /></div>
                                        <div>
                                            <p className="font-bold text-sm">Class Size</p>
                                            <p className="text-gray-500 text-sm">15-20 Kids max</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-bold font-heading flex items-center gap-2"><Target className="text-warning" size={20} /> Learning Goals</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {["Language Development", "Social Interaction", "Emotional Intelligence", "Motor Skills"].map((goal) => (
                                            <li key={goal} className="flex items-center gap-2 text-gray-600 text-sm">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                                {goal}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link href="/admissions">
                                    <Button className="mt-4">Inquire Now <ArrowRight className="ml-2" size={18} /></Button>
                                </Link>
                            </div>

                            <div className="flex-1 w-full relative">
                                <div className={`absolute -inset-4 rounded-3xl opacity-10 ${index % 2 === 0 ? 'bg-primary rotate-3' : 'bg-accent -rotate-3'}`} />
                                <Image
                                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1489714733131-47045c7adcb7' : '1502101872923-d48509bff386'}?auto=format&fit=crop&q=80&w=1000`}
                                    alt={program.name}
                                    width={1000}
                                    height={800}
                                    className="rounded-3xl shadow-xl relative z-10 w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
