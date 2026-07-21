import Card from "../common/Card";
import { FileText } from "lucide-react";

export default function RecentUploads({

    uploads

}) {

    return (

        <Card>

            <h2 className="text-2xl font-bold mb-6">

                Recent Uploads

            </h2>

            {

                uploads.length === 0 ?

                    (

                        <div className="text-gray-500">

                            No files uploaded yet.

                        </div>

                    )

                    :

                    (

                        <div className="space-y-4">

                            {

                                uploads.map((file, index) => (

                                    <div

                                        key={index}

                                        className="
                                        flex
                                        items-center
                                        justify-between
                                        bg-[#F8FBFC]
                                        rounded-xl
                                        px-5
                                        py-4
                                        hover:shadow-md
                                        transition
                                        "

                                    >

                                        <div className="flex items-center gap-4">

                                            <FileText
                                                className="text-[#6F95A3]"
                                            />

                                            <span>

                                                {file}

                                            </span>

                                        </div>

                                        <span
                                            className="
                                            text-sm
                                            text-green-600
                                            "
                                        >

                                            Uploaded

                                        </span>

                                    </div>

                                ))

                            }

                        </div>

                    )

            }

        </Card>

    );

}