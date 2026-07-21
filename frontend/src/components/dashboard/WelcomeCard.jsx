import Card from "../common/Card";
import Button from "../common/Button";
import welcomeImg from "../../assets/welcome.png";

export default function WelcomeCard() {

    return (

        <Card className="flex items-center justify-between min-h-[220px]">

            {/* Left Section */}

            <div className="max-w-lg">

                <p className="text-gray-500 text-lg">

                    Welcome Back....

                </p>

                <h1 className="text-5xl font-bold text-slate-800 mt-3">

                    Continue Your Learning Journey
                </h1>

                <p className="text-gray-500 mt-5 leading-7">

                    Upload notes, chat with your AI tutor,
                    generate quizzes and track your progress
                    in one place.

                </p>

                <div className="mt-8">

                    <Button>

                        Start Learning

                    </Button>

                </div>

            </div>

            {/* Right Section */}

            <div
                className="hidden lg:flex items-center justify-center w-72 h-72 rounded-3xl bg-[#EAF7F9]"
            >

                <img 
                    src={welcomeImg} 
                    alt="Learning Illustration" 
                    className="max-w-full max-h-full object-contain"
                />

            </div>

        </Card>

    );

}