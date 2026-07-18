import { Bot, User, Copy } from "lucide-react";

export default function ChatBubble({

    sender,

    message

}) {

    const isUser = sender === "user";

    return (

        <div
            className={`flex mb-6 ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >

            <div className="flex gap-3 max-w-[80%]">

                {
                    !isUser &&

                    <div
                        className="
                        w-11
                        h-11
                        rounded-full
                        bg-[#6F95A3]
                        flex
                        items-center
                        justify-center
                        text-white
                        "
                    >
                        <Bot size={20}/>
                    </div>
                }

                <div
                    className={`
                    rounded-3xl
                    px-6
                    py-4
                    shadow-md
                    whitespace-pre-wrap

                    ${
                        isUser

                        ?

                        "bg-[#6F95A3] text-white"

                        :

                        "bg-white text-gray-800"
                    }

                    `}
                >

                    {message}

                    {

                        !isUser &&

                        <button

                            className="mt-4 flex items-center gap-2 text-sm text-gray-400 hover:text-black"

                            onClick={() => navigator.clipboard.writeText(message)}

                        >

                            <Copy size={15}/>

                            Copy

                        </button>

                    }

                </div>

                {

                    isUser &&

                    <div
                        className="
                        w-11
                        h-11
                        rounded-full
                        bg-gray-200
                        flex
                        items-center
                        justify-center
                        "
                    >
                        <User size={18}/>
                    </div>

                }

            </div>

        </div>

    );

}