export default function Card({
    children,
    className = ""
}){
    return(
        <div
            className={`
            bg-gradient-to-br
            from-white/70
            to-white/70
            backdrop-blur-md
            border
            border-white/40
            rounded-[28px]
            shadow-sm
            hover:-translate-y-1
            hover:shadow-md
            transition-all
            duration-300
            p-6
            ${className}
            `}
        >
            {children}
        </div>
    );
}