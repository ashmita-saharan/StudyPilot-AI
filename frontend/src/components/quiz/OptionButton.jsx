export default function OptionButton({

    option,

    selected,

    onClick

}){

    return(

        <button

            onClick={onClick}

            className={`

            w-full

            text-left

            p-4

            rounded-xl

            border

            transition

            mb-3

            ${

                selected

                ?

                "bg-[#6F95A3] text-white"

                :

                "bg-white hover:bg-[#EEF6F8]"

            }

            `}

        >

            {option}

        </button>

    );

}