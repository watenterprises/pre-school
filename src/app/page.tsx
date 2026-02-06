"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Sparkles, ArrowRight, Star, Heart, GraduationCap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Legend Content */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider mb-2 border border-primary/20">
                  <Sparkles size={16} /> Welcome to {siteConfig.name}
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-8xl font-bold font-heading text-foreground leading-[1.1]"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                Where <span className="text-primary relative inline-block">
                  Learning
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M0 15 Q 25 5 50 15 T 100 15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </motion.svg>
                </span> feels like <br />
                <span className="text-accent underline decoration-warning decoration-8 underline-offset-[12px]">Playing</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                A vibrant home where your little ones discover their potential through <span className="font-bold text-foreground">magical learning paths</span> and creative exploration.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-5"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Link href="/admissions">
                  <Button size="lg" className="w-full sm:w-auto px-10 h-16 text-lg rounded-2xl shadow-xl shadow-primary/20">
                    Join Our Family <ArrowRight className="ml-2" size={24} />
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-16 text-lg rounded-2xl bg-white/50 backdrop-blur-sm">
                    Explore Programs
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center gap-6 pt-8"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm">
                      <Image
                        src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000000}?auto=format&fit=crop&q=80&w=100`}
                        alt="Parent"
                        width={48}
                        height={48}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-warning">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-bold text-gray-500">Trusted by <span className="text-foreground">500+ Happy Families</span></p>
                </div>
              </motion.div>
            </motion.div>

            {/* Immersive Image Layout */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square">
                {/* Main Image Card */}
                <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-6 scale-95" />
                <div className="absolute inset-0 bg-secondary/10 rounded-[3rem] rotate-3 scale-95" />
                <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                  <Image
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1200"
                    alt="Happy preschoolers learning"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Overlapping Mini Card */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 z-20 flex items-center gap-4 group"
                >
                  <div className="bg-success/20 p-3 rounded-2xl text-success group-hover:bg-success group-hover:text-white transition-colors">
                    <Heart fill="currentColor" size={32} />
                  </div>
                  <div>
                    <p className="text-2xl font-black font-heading leading-none">100%</p>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Safe & Sound</p>
                  </div>
                </motion.div>

                {/* Floating "Play" Element */}
                <motion.div
                  animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-12 -right-12 bg-warning p-8 rounded-full shadow-xl shadow-warning/30 z-20 hidden md:block border-4 border-white"
                >
                  <Sparkles size={40} className="text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <ShieldCheck size={32} className="text-primary" />
            <span className="font-heading font-bold uppercase tracking-widest text-sm">Certified Safe</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={32} className="text-accent" />
            <span className="font-heading font-bold uppercase tracking-widest text-sm">Child Centered</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart size={32} className="text-warning" />
            <span className="font-heading font-bold uppercase tracking-widest text-sm">Warm Environment</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap size={32} className="text-success" />
            <span className="font-heading font-bold uppercase tracking-widest text-sm">Modern Pedagogy</span>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <Section
        title="Our Magical Programs"
        subtitle="Exploring Age Groups"
        background="muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.programs.map((program, index) => (
            <Card key={program.name} className="flex flex-col h-full bg-white relative overflow-hidden group">
              <div className={cn(
                "w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-white",
                index % 4 === 0 ? "bg-primary" : index % 4 === 1 ? "bg-accent" : index % 4 === 2 ? "bg-warning" : "bg-success"
              )}>
                {index === 0 ? <Sparkles size={24} /> : index === 1 ? <Heart size={24} /> : index === 2 ? <Star size={24} /> : <GraduationCap size={24} />}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-2">{program.name}</h3>
              <p className="text-gray-400 font-bold text-sm mb-4 uppercase tracking-widest">{program.age}</p>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{program.description}</p>
              <Link href={program.href} className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-2" size={18} />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section
        title="Why Parents Trust Us"
        subtitle="The Little Stars Difference"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-3 scale-95 group-hover:rotate-0 transition-transform" />
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
              alt="Safe learning environment"
              width={800}
              height={600}
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>
          <div className="space-y-8 text-left">
            {[
              { title: "Safe & Nurturing", text: "24/7 CCTV monitoring and child-safe infrastructure designed for worry-free learning.", icon: <ShieldCheck className="text-primary" /> },
              { title: "Qualified Educators", text: "Our teachers are trained professionals who specialize in early childhood development.", icon: <Users className="text-accent" /> },
              { title: "Holistic Growth", text: "We focus on cognitive, social, emotional, and physical development through play-based learning.", icon: <Sparkles className="text-warning" /> }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="bg-white p-3 rounded-xl shadow-md shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold font-heading mb-2">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
            <Link href="/about" className="inline-block mt-4">
              <Button variant="outline">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="py-20">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-20 -mr-10 -mt-10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary opacity-20 -ml-20 -mb-20 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Ready to give your child <br /><span className="text-primary italic">the best start?</span></h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join the {siteConfig.name} family today. Limited seats available for the 2026-27 session.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admissions">
              <Button size="lg" className="w-full sm:w-auto">Start Admission Process</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">Contact Our Staff</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
