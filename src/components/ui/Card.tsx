import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "glass" | "glass-solid"
    hoverEffect?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "glass", hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-squircle overflow-hidden transition-all duration-500",
                    variant === "glass" && "glass-panel",
                    variant === "glass-solid" && "bg-surface-dark border border-white/10",
                    hoverEffect && "hover:border-primary/40 hover:shadow-[0_0_40px_rgba(43,124,238,0.15)] hover:-translate-y-1",
                    className
                )}
                {...props}
            />
        )
    }
)
Card.displayName = "Card"

export { Card }
