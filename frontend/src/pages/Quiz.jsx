import { useState } from "react";

import QuizInput from "../components/quiz/QuizInput";
import QuizCard from "../components/quiz/QuizCard";
import QuizResult from "../components/quiz/QuizResult";

import { generateQuiz } from "../services/quizApi";

import parseQuiz from "../utils/parseQuiz";

export default function Quiz(){

    const [loading,setLoading]=useState(false);

    const [questions,setQuestions]=useState([]);

    const [current,setCurrent]=useState(0);

    const [answers,setAnswers]=useState({});

    const [finished,setFinished]=useState(false);

    async function handleGenerate(filename){

        setLoading(true);

        setFinished(false);

        setCurrent(0);

        setAnswers({});

        try{

            const response=await generateQuiz(filename);

            const rawQuiz = response.quiz?.[0]?.text || "";

            const parsedQuiz = parseQuiz(rawQuiz);

            setQuestions(parsedQuiz);

        }

        catch(error){

            console.log(error);

            alert("Unable to generate quiz.");

        }

        finally{

            setLoading(false);

        }

    }

    function selectOption(option){

        setAnswers({

            ...answers,

            [current]:option

        });

    }

    function nextQuestion(){

        if(current<questions.length-1){

            setCurrent(current+1);

        }

    }

    function previousQuestion(){

        if(current>0){

            setCurrent(current-1);

        }

    }

    function submitQuiz(){

        setFinished(true);

    }

    function calculateScore(){

        let score=0;

        questions.forEach((q,index)=>{

            if(answers[index]===q.answer){

                score++;

            }

        });

        return score;

    }

    return(

        <div className="space-y-8">

            <QuizInput

                loading={loading}

                onGenerate={handleGenerate}

            />

            {

                questions.length>0 && !finished &&

                <>

                    <div className="flex justify-between items-center">

                        <h2 className="text-2xl font-bold">

                            Question {current+1} / {questions.length}

                        </h2>

                        <div className="text-gray-500">

                            {Math.round(((current+1)/questions.length)*100)}%

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

                            disabled={current===0}

                            className="px-6 py-3 rounded-xl bg-gray-200"

                        >

                            Previous

                        </button>

                        {

                            current===questions.length-1 ?

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

            }

            {

                finished &&

                <QuizResult

                    score={calculateScore()}

                    total={questions.length}

                />

            }

        </div>

    );

}