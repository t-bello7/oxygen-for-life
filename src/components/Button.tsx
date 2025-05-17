import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

export const Button = (props: {
    variant: 'primary' | 'secondary' | 'text';
    iconAfter?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className, children, variant, iconAfter, ...rest} = props;

    return (
        <button 
        className={twMerge(" h-11 px-6 rounded-xl border inline-flex items-center uppercase transition duration-500 relative group/button", 
            variant === "primary" && "bg-red-orange-500  text-white border-red-orange-500 inline-flex items-center",
            variant === "secondary" && "gap-4 border-red-orange-500 hover:bg-red-orange-500 hover:text-white",
            variant === "text" && "h-auto px-0 border-transparent after:content-[''] after:h-1 after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full after:transition-all after:duration-500",
            className
        )} {...rest}>
            <span> {children} </span>
            {iconAfter && <span> {iconAfter} </span>}
        </button>
    )
}