const suggestions=[

"Explain Deadlocks",

"What is Paging?",

"Difference between Process and Thread",

"Explain Binary Search",

"What is DBMS?"

];

export default function SuggestedQuestions({

    onSelect

}){

    return(

        <div

        className="

        flex

        flex-wrap

        gap-4

        mt-8

        "

        >

            {

                suggestions.map((item,index)=>(

                    <button

                    key={index}

                    onClick={()=>onSelect(item)}

                    className="

                    px-5

                    py-3

                    rounded-full

                    bg-white

                    shadow

                    hover:bg-[#6F95A3]

                    hover:text-white

                    transition

                    "

                    >

                        {item}

                    </button>

                ))

            }

        </div>

    );

}