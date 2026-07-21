export default function QuizResult({
    evaluation,
    dashboard,
    recommendation

}){

    if(!evaluation){

        return null;

    }

    return(

        <div

        className="

        bg-white

        rounded-3xl

        shadow

        p-10

        space-y-8

        "

        >

            <div className="text-center">

                <h1 className="text-4xl font-bold">

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

                    {evaluation.percentage}%

                </div>

                <p className="text-xl">

                    {evaluation.score}

                    /

                    {evaluation.total_questions}

                </p>

            </div>

            <div>

                <h2 className="text-2xl font-bold mb-3">

                    Overall Feedback

                </h2>

                <p>

                    {evaluation.overall_feedback}

                </p>

            </div>

            <div>

                <h2 className="text-2xl font-bold mb-3">

                    Weak Topics

                </h2>

                {

                    evaluation.weak_topics.length===0 ?

                    (

                        <p>

                            None 🎉

                        </p>

                    )

                    :

                    (

                        <ul className="list-disc ml-6">

                            {

                                evaluation.weak_topics.map(topic=>(

                                    <li key={topic}>

                                        {topic}

                                    </li>

                                ))

                            }

                        </ul>

                    )

                }

            </div>

            <div>

                <h2 className="text-2xl font-bold mb-3">

                    Updated Progress

                </h2>

                <p>

                    Overall Progress :

                    {" "}

                    {dashboard.overall_progress}%

                </p>

                <h2>StudyPilot Recommendation</h2>

                <p>{recommendation.message}</p>

                {recommendation.actions.map(action=>(
                    <button>{action}</button>
                ))}

            </div>

        </div>

    );

}