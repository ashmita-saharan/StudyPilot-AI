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
            "

        >

            {

                messages.map((msg, index) => (

                    <ChatBubble

                        key={index}

                        sender={msg.sender}

                        message={msg.message}

                    />

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