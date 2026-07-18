import OptionButton from "./OptionButton";

export default function QuizCard({

    question,

    options,

    selected,

    onSelect

}){

    return(

        <div

        className="

        bg-white

        rounded-3xl

        shadow

        p-8

        "

        >

            <h2

            className="

            text-2xl

            font-bold

            mb-6

            "

            >

                {question}

            </h2>

            {

                options.map((option,index)=>(

                    <OptionButton

                        key={index}

                        option={option}

                        selected={selected===option}

                        onClick={()=>onSelect(option)}

                    />

                ))

            }

        </div>

    );

}