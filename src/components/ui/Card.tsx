import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-playful bg-white p-6 shadow-soft border border-gray-100 transition-all duration-300",
                hoverEffect && "hover:shadow-lg hover:-translate-y-1",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";

export { Card };
