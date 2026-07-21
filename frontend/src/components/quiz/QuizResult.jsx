export default function QuizResult({

    score,

    total

}){

    const percentage=Math.round(

        (score/total)*100

    );

    return(

        <div

        className="

        bg-white

        rounded-3xl

        shadow

        p-10

        text-center

        "

        >

            <h1

            className="

            text-4xl

            font-bold

            "

            >

                Quiz Completed 🎉

            </h1>

            <div

            className="

            text-7xl

            font-bold

            text-[#6F95A3]

            my-8

            "

            >

                {percentage}%

            </div>

            <p

            className="

            text-xl

            "

            >

                {score} / {total}

            </p>

        </div>

    );

}