import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";

export default function ChatWindow({

    messages,

    loading

}) {

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [messages, loading]);

    return (

        <div

            className="
            bg-[#F7FBFC]
            rounded-3xl
            p-8
            h-[520px]
            overflow-y-auto
            space-y-4
            "

        >

            {

                messages.map((msg, index) => (

                    <div key={index}>

                        <ChatBubble

                            sender={msg.sender}

                            message={

                                typeof msg.message === "string"

                                    ? msg.message

                                    : msg.message.answer

                            }

                        />

                        {

                            msg.sender === "ai"

                            &&

                            typeof msg.message === "object"

                            &&

                            msg.message.student_profile?.weak_topics?.length > 0

                            &&

                            (

                                <div

                                    className="
                                    ml-12
                                    mt-3
                                    bg-yellow-50
                                    border
                                    border-yellow-200
                                    rounded-xl
                                    p-4
                                    text-sm
                                    "

                                >

                                    <h3 className="font-semibold">

                                        Weak Topics

                                    </h3>

                                    <ul className="list-disc ml-5 mt-2">

                                        {

                                            msg.message.student_profile.weak_topics.map(

                                                (topic, i) => (

                                                    <li key={i}>

                                                        {topic}

                                                    </li>

                                                )

                                            )

                                        }

                                    </ul>

                                </div>

                            )

                        }

                        {

                            msg.sender === "ai"

                            &&

                            typeof msg.message === "object"

                            &&

                            msg.message.recommendation

                            &&

                            (

                                <div

                                    className="
                                    ml-12
                                    mt-3
                                    bg-blue-50
                                    border
                                    border-blue-200
                                    rounded-xl
                                    p-4
                                    "

                                >

                                    <h3 className="font-semibold">

                                        StudyPilot Recommendation

                                    </h3>

                                    <p className="mt-2">

                                        {

                                            msg.message.recommendation.message

                                        }

                                    </p>

                                </div>

                            )

                        }

                    </div>

                ))

            }

            {

                loading &&

                <ChatBubble

                    sender="ai"

                    message="Thinking..."

                />

            }

            <div ref={bottomRef}/>

        </div>

    );

}