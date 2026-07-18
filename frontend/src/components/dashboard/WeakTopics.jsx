import Card from "../common/Card";

export default function WeakTopics({ topics }) {

    return (

        <Card>

            <h2 className="text-2xl font-bold mb-6">

                Weak Topics

            </h2>

            {

                topics.length === 0 ? (

                    <p className="text-gray-500">

                        Great! No weak topics found.

                    </p>

                ) : (

                    <div className="flex flex-wrap gap-4">

                        {

                            topics.map((topic) => (

                                <div

                                    key={topic.id}

                                    className="bg-white rounded-xl px-5 py-4 shadow-sm"

                                >

                                    <h3 className="font-semibold">

                                        {topic.topic}

                                    </h3>

                                    <p className="text-sm text-gray-500">

                                        Confidence: {topic.confidence}%

                                    </p>

                                    <p className="text-sm text-red-500">

                                        {topic.revision_status}

                                    </p>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </Card>

    );

}