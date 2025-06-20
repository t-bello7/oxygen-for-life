import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

export const Button = (props: {
    variant: 'primary' | 'secondary' | 'text';
    iconAfter?: ReactNode
    iconBefore?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className, children, variant, iconBefore, iconAfter, ...rest} = props;

    return (
        <button 
        className={twMerge(" h-11 px-6 border inline-flex items-center gap-4 text-center capitalize transition duration-500 relative group/button rounded-full", 
            variant === "primary" && "bg-primary text-white border-red-orange-500 inline-flex items-center",
            variant === "secondary" && "gap-4 border-red-orange-500 hover:bg-red-orange-500 hover:text-white",
            variant === "text" && "h-auto px-0 border-transparent after:content-[''] after:h-1 after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full after:transition-all after:duration-500",
            className
        )} {...rest}>
            {iconBefore && <span> {iconBefore} </span>}
            <span> {children} </span>
            {iconAfter && <span> {iconAfter} </span>}
        </button>
    )
}