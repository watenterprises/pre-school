import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    title?: string;
    subtitle?: string;
    background?: "white" | "muted" | "primary" | "secondary" | "accent" | "success" | "warning";
    containerSize?: "sm" | "md" | "lg" | "xl";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, title, subtitle, background = "white", containerSize = "lg", children, ...props }, ref) => {
        const internalRef = React.useRef(null);
        const isInView = useInView(internalRef, { once: true, margin: "-100px" });

        const backgrounds = {
            white: "bg-white",
            muted: "bg-gray-50",
            primary: "bg-primary/5",
            secondary: "bg-secondary/10",
            accent: "bg-accent",
            success: "bg-success/20",
            warning: "bg-warning/10",
        };

        const containers = {
            sm: "max-w-3xl",
            md: "max-w-5xl",
            lg: "max-w-7xl",
            xl: "max-w-[1400px]",
        };

        return (
            <section
                ref={ref || internalRef}
                className={cn("py-16 md:py-24 overflow-hidden", backgrounds[background], className)}
                {...props}
            >
                <div className={cn("container mx-auto px-4", containers[containerSize])}>
                    {(title || subtitle) && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            {subtitle && (
                                <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">
                                    {subtitle}
                                </span>
                            )}
                            {title && (
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                    {title}
                                </h2>
                            )}
                        </motion.div>
                    )}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {children}
                    </motion.div>
                </div>
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
