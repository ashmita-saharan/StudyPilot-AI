import { useState } from "react";
import { Send } from "lucide-react";

export default function ChatInput({ loading, onSend }) {
    const [question, setQuestion] = useState("");

    function submit() {
        if (!question.trim() || loading) return;
        onSend(question);
        setQuestion("");
    }

    // Allows pressing 'Enter' to send the message
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            submit();
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2 flex items-center gap-3 w-full">
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything from your uploaded study material..."
                className="flex-1 p-3 outline-none text-gray-700 bg-transparent placeholder-gray-400"
            />
            <button
                onClick={submit}
                disabled={loading || !question.trim()}
                className="p-3 bg-[#6F95A3] hover:bg-[#5F8795] text-white rounded-xl transition-all disabled:opacity-50 flex items-center justify-center shrink-0"
            >
                <Send size={18} className={loading ? "animate-pulse" : ""} />
            </button>
        </div>
    );
}