import { useState } from "react";

import ChatInput from "../components/tutor/ChatInput";
import ChatWindow from "../components/tutor/ChatWindow";
import SuggestedQuestions from "../components/tutor/SuggestedQuestions";

import { askTutor } from "../services/tutorApi";

export default function Tutor(){
    const [messages, setMessages] = useState([
        {
            sender: "ai",
            message: "👋 Hello! I'm StudyPilot AI.\nAsk me anything from your uploaded study material."
        }
    ]);

    const [loading, setLoading] = useState(false);

    async function send(question){
        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                message: question
            }
        ]);
        setLoading(true);
        try {
            const response = await askTutor(question);
            const aiMessage =
                response.answer
                    ?.map(item => item.text)
                    .join("\n\n")
                ||
                "No response received.";

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    message: aiMessage
                }
            ]);
        }
        catch(error) {
            console.log(error);
            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    message: "⚠️ Something went wrong while generating the response."
                }
            ]);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col h-[calc(100vh-110px)] justify-between pb-2">
            
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-8 scrollbar-thin">
                <div>
                    <h1 className="text-4xl font-bold">
                        AI Tutor
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Learn faster with StudyPilot AI.
                    </p>
                </div>

                <SuggestedQuestions
                    onSelect={send}
                />

                <ChatWindow
                    messages={messages}
                    loading={loading}
                />
            </div>

            {/* Pinned Input Area */}
            <div className="pt-4 bg-transparent mt-4 shrink-0">
                <ChatInput
                    onSend={send}
                    loading={loading}
                />
            </div>

        </div>
    );
}