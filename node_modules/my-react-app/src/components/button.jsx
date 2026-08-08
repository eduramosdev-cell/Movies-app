export const Button = ({className = "", size = "default", children, ...props}) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight bg-highlight/95 text-card hover:bg-highlight/90 shadow-lg shadow-highlight/25 transition-all duration-300 cursor-pointer";
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    return (
        <a className={`relative flex items-center justify-center gap-2 ${classes}`} {...props}>
            {children}
        </a>
    )
}