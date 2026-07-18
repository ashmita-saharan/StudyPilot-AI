export default function Card({

    children,

    className = ""

}){

    return(

        <div

            className={`

            bg-gradient-to-br

            from-[#D9EEF2]

            to-[#EAF7F9]

            rounded-[28px]

            shadow-md

            hover:-translate-y-1

            hover:shadow-lg

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