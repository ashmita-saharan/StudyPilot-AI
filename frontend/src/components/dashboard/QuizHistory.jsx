import Card from "../common/Card";

export default function QuizHistory({ history }) {

    return (

        <Card>

            <h2 className="text-2xl font-bold mb-6">

                Recent Quiz History

            </h2>

            {

                history.length === 0 ? (

                    <p className="text-gray-500">

                        No quizzes attempted yet.

                    </p>

                ) : (

                    <div className="space-y-4">

                        {

                            history.map((quiz) => (

                                <div

                                    key={quiz.id}

                                    className="bg-white rounded-xl p-5 flex justify-between items-center"

                                >

                                    <div>

                                        <h3 className="font-semibold">

                                            {quiz.topic}

                                        </h3>

                                        <p className="text-gray-500 text-sm">

                                            {quiz.score}/{quiz.total_questions} Marks

                                        </p>

                                    </div>

                                    <div className="text-right">

                                        <h2 className="text-2xl font-bold text-[#6F95A3]">

                                            {quiz.percentage}%

                                        </h2>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </Card>

    );

}