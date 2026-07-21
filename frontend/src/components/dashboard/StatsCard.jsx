import Card from "../common/Card";

export default function StatsCard({

    title,

    value,

    color

}) {

    return (

        <Card>

            <div className="flex flex-col gap-2">

                <p

                    className="text-gray-600"

                >

                    {title}

                </p>

                <h2

                    className={`

                        text-4xl

                        font-bold

                        ${color}

                    `}

                >

                    {value}

                </h2>

            </div>

        </Card>

    );

}