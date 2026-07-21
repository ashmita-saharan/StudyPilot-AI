import { useEffect, useState } from "react";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCard from "../components/dashboard/StatsCard";
import ProgressChart from "../components/dashboard/ProgressChart";
import WeakTopics from "../components/dashboard/WeakTopics";
import QuizHistory from "../components/dashboard/QuizHistory";
import RevisionCard from "../components/dashboard/RevisionCard";

import { getDashboard } from "../services/memoryApi";

export default function Dashboard() {

    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {

        loadDashboard();

        const handleFocus = () => {
            loadDashboard();
        };

        window.addEventListener("focus", handleFocus);

        return () => {
            window.removeEventListener("focus", handleFocus);
        };

    }, []);

    async function loadDashboard() {

        try {

            const data = await getDashboard();

            setDashboard(data);

        } catch (error) {

            console.log(error);

        }

    }

    if (!dashboard) {

        return (

            <div className="text-3xl font-bold">

                Loading Dashboard...

            </div>

        );

    }

    const averageConfidence = dashboard.topics.length
        ? Math.round(
              dashboard.topics.reduce(
                  (sum, topic) => sum + topic.confidence,
                  0
              ) / dashboard.topics.length
          )
        : 0;

    return (

        <div className="space-y-10">

            <WelcomeCard />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <StatsCard
                    title="Overall Progress"
                    value={`${dashboard.overall_progress}%`}
                    color="text-green-600"
                />

                <StatsCard
                    title="Average Confidence"
                    value={`${averageConfidence}%`}
                    color="text-blue-600"
                />

                <StatsCard
                    title="Topics Covered"
                    value={dashboard.topics.length}
                    color="text-purple-600"
                />

                <StatsCard
                    title="Quizzes Taken"
                    value={dashboard.quiz_history.length}
                    color="text-orange-600"
                />

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                <div className="xl:col-span-2">

                    <ProgressChart
                        progress={dashboard.overall_progress}
                    />

                </div>

                <RevisionCard
                    topic={
                        dashboard.weak_topics.length
                            ? dashboard.weak_topics[0].topic
                            : "No weak topics 🎉"
                    }
                />

            </div>

            <WeakTopics
                topics={dashboard.weak_topics}
            />

            <QuizHistory
                history={dashboard.quiz_history}
            />

        </div>

    );

}