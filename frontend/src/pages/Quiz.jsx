import { useState } from "react";

import QuizInput from "../components/quiz/QuizInput";
import QuizCard from "../components/quiz/QuizCard";
import QuizResult from "../components/quiz/QuizResult";

import { generateQuiz } from "../services/quizApi";
import { submitQuizWorkflow } from "../services/workflowApi";

import parseQuiz from "../utils/parseQuiz";

export default function Quiz() {

    const [loading, setLoading] = useState(false);

    const [questions, setQuestions] = useState([]);

    const [current, setCurrent] = useState(0);

    const [answers, setAnswers] = useState({});

    const [finished, setFinished] = useState(false);

    const [rawQuiz, setRawQuiz] = useState("");

    const [selectedFile, setSelectedFile] = useState("");

    const [selectedTopic, setSelectedTopic] = useState("");

    const [evaluation, setEvaluation] = useState(null);

    const [dashboard, setDashboard] = useState(null);

    const [recommendation, setRecommendation] = useState(null);


    async function handleGenerate(data) {

        setLoading(true);

        setFinished(false);

        setQuestions([]);

        setAnswers({});

        setCurrent(0);

        setEvaluation(null);

        setDashboard(null);

        setRecommendation(null);

        setSelectedFile(data.filename);

        setSelectedTopic(data.topic);

        try {

            const response = await generateQuiz(data.filename);

            console.log("Quiz Response");
            console.log(response);

            const quizText =
                Array.isArray(response.quiz)
                    ? response.quiz[0]?.text || ""
                    : response.quiz || "";

            setRawQuiz(quizText);

            const parsed = parseQuiz(quizText);

            console.log(parsed);

            setQuestions(parsed);

        }

        catch (error) {

            console.error(error);

            alert("Unable to generate quiz.");

        }

        finally {

            setLoading(false);

        }

    }


    function selectOption(option) {

        setAnswers(prev => ({

            ...prev,

            [current]: option

        }));

    }


    function nextQuestion() {

        if (current < questions.length - 1) {

            setCurrent(current + 1);

        }

    }


    function previousQuestion() {

        if (current > 0) {

            setCurrent(current - 1);

        }

    }


    async function submitQuiz() {

        try {

            const studentAnswers = questions.map((question, index) => {

                return `
Question ${index + 1}

${question.question}

Student Answer:
${answers[index] || "Not Answered"}
`;

            }).join("\n");

            const result = await submitQuizWorkflow({

                filename: selectedFile,

                topic: selectedTopic,

                quiz_text: rawQuiz,

                student_answers: studentAnswers

            });

            console.log(result);

            setEvaluation(result.evaluation);

            setDashboard(result.dashboard);

            setRecommendation(result.recommendation);

            setFinished(true);

        }

        catch (error) {

            console.error(error);

            alert("Unable to evaluate quiz.");

        }

    }


    return (

        <div className="space-y-8">

            <QuizInput

                loading={loading}

                onGenerate={handleGenerate}

            />

            {

                questions.length > 0 && !finished && (

                    <>

                        <div className="flex justify-between items-center">

                            <h2 className="text-2xl font-bold">

                                Question {current + 1} / {questions.length}

                            </h2>

                            <div className="text-gray-500">

                                {Math.round(((current + 1) / questions.length) * 100)}%

                            </div>

                        </div>

                        <QuizCard

                            question={questions[current].question}

                            options={questions[current].options}

                            selected={answers[current]}

                            onSelect={selectOption}

                        />

                        <div className="flex justify-between">

                            <button

                                onClick={previousQuestion}

                                disabled={current === 0}

                                className="px-6 py-3 rounded-xl bg-gray-200"

                            >

                                Previous

                            </button>

                            {

                                current === questions.length - 1 ?

                                    (

                                        <button

                                            onClick={submitQuiz}

                                            className="px-6 py-3 rounded-xl bg-[#6F95A3] text-white"

                                        >

                                            Submit Quiz

                                        </button>

                                    )

                                    :

                                    (

                                        <button

                                            onClick={nextQuestion}

                                            className="px-6 py-3 rounded-xl bg-[#6F95A3] text-white"

                                        >

                                            Next

                                        </button>

                                    )

                            }

                        </div>

                    </>

                )

            }

            {

                finished &&

                <QuizResult

                    evaluation={evaluation}

                    dashboard={dashboard}

                    recommendation={recommendation}

                />

            }

        </div>

    );

}
