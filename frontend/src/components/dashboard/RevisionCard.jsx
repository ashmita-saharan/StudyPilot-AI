import Card from "../common/Card";
import Button from "../common/Button";

export default function RevisionCard({ topic }) {

    return (

        <Card className="flex flex-col justify-between">

            <div>

                <h2 className="text-2xl font-bold">

                    Today's Revision

                </h2>

                <p className="mt-4 text-gray-600">

                    We recommend revising:

                </p>

                <h1 className="mt-3 text-3xl font-bold text-[#6F95A3]">

                    {topic}

                </h1>

            </div>

            <div className="mt-8">

                <Button className="w-full">

                    Start Revision

                </Button>

            </div>

        </Card>

    );

}