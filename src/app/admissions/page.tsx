"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FileText, ClipboardCheck, Calendar, UserCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AdmissionsPage() {
    return (
        <>
            <Section background="accent" className="pt-32 text-white">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Join Our Family</h1>
                    <p className="text-xl opacity-90 leading-relaxed">
                        Begin your child&apos;s educational journey with us. We make our admission process simple and transparent.
                    </p>
                </div>
            </Section>

            <Section title="Admission Process" subtitle="Easy Steps To Enroll">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/10 -z-10 hidden lg:block" />
                    {[
                        { title: "Inquiry", desc: "Fill out the online form or visit the school in person.", icon: <FileText size={24} /> },
                        { title: "School Visit", desc: "Tour our campus and meet our dedicated educators.", icon: <Calendar size={24} /> },
                        { title: "Interaction", desc: "A brief friendly session with the child and parents.", icon: <UserCheck size={24} /> },
                        { title: "Enrollment", desc: "Submit documents and finalize the registration.", icon: <ClipboardCheck size={24} /> }
                    ].map((step, i) => (
                        <div key={i} className="bg-white p-8 rounded-playful shadow-soft border border-gray-100 text-center relative">
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold font-heading shadow-md">
                                {i + 1}
                            </div>
                            <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="muted" title="Required Documents" subtitle="Be Prepared">
                <div className="max-w-4xl mx-auto">
                    <Card className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 md:p-12">
                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold font-heading text-primary">Baseline Documents</h4>
                            <ul className="space-y-4">
                                {["Child&apos;s Birth Certificate", "4 Passport size photographs", "Immunization Record", "Parent&apos;s ID proof (Aadhar/Passport)"].map((doc) => (
                                    <li key={doc} className="flex items-center gap-3 text-gray-600">
                                        <div className="w-2 h-2 bg-accent rounded-full" />
                                        {doc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-dashed border-gray-300 flex flex-col justify-center text-center">
                            <p className="text-gray-500 mb-6 italic">"We ensure all data is handled with strict confidentiality and care."</p>
                            <Button>Download Brochure</Button>
                        </div>
                    </Card>
                </div>
            </Section>

            <Section>
                <div className="max-w-xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
                    <h2 className="text-3xl font-bold font-heading mb-8 text-center text-foreground">Inquiry Form</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Parent Name" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-primary transition-colors font-body" />
                            <input type="email" placeholder="Email Address" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-primary transition-colors font-body" />
                        </div>
                        <input type="tel" placeholder="Phone Number" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-primary transition-colors font-body" />
                        <select className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-primary transition-colors font-body appearance-none">
                            <option>Select Program</option>
                            <option>Playgroup</option>
                            <option>Nursery</option>
                            <option>LKG</option>
                            <option>UKG</option>
                        </select>
                        <textarea placeholder="Tell us about your child..." rows={4} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-primary transition-colors font-body resize-none" />
                        <Button className="w-full py-4 text-lg">Submit My Inquiry</Button>
                    </form>
                </div>
            </Section>
        </>
    );
}
