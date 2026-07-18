import {
    RadialBarChart,
    RadialBar,
    ResponsiveContainer
} from "recharts";

import Card from "../common/Card";

export default function ProgressChart({
    progress
}) {

    const data = [
        {
            name: "Progress",
            value: progress,
            fill: "#6F95A3"
        }
    ];

    return (

        <Card className="flex flex-col items-center">

            <h2 className="text-2xl font-bold mb-6">

                Overall Progress

            </h2>

            <div className="w-full h-80">

                <ResponsiveContainer>

                    <RadialBarChart

                        innerRadius="70%"

                        outerRadius="100%"

                        data={data}

                        startAngle={180}

                        endAngle={0}

                    >

                        <RadialBar

                            dataKey="value"

                            cornerRadius={30}

                            background

                        />

                    </RadialBarChart>

                </ResponsiveContainer>

            </div>

            <h1 className="text-6xl font-bold text-[#6F95A3]">

                {progress}%

            </h1>

            <p className="text-gray-500 mt-2">

                Learning Progress

            </p>

        </Card>

    );

}