import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "glass" | "ghost"
    size?: "sm" | "md" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {

        const variants = {
            primary: "bg-primary/90 hover:bg-primary text-white shadow-[0_0_20px_rgba(43,124,238,0.4)] backdrop-blur-sm border border-primary/50",
            secondary: "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]",
            glass: "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md",
            ghost: "text-gray-300 hover:text-white hover:bg-white/10",
        }

        const sizes = {
            sm: "px-3 py-1.5 text-xs",
            md: "px-5 py-2 text-sm",
            lg: "px-6 py-3 text-base",
            icon: "p-2 size-10 flex items-center justify-center",
        }

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
