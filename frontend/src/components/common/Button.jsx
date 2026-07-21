export default function Button({

    children,

    onClick,

    className="",

    type="button"

}){

    return(

        <button

            type={type}

            onClick={onClick}

            className={`

            bg-[#1F2937]

            text-white

            px-6

            py-3

            rounded-2xl

            hover:scale-105

            hover:bg-black

            transition-all

            duration-300

            shadow-lg

            cursor-pointer

            ${className}

            `}

        >

            {children}

        </button>

    );

}