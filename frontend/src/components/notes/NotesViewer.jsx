export default function NotesViewer({

    notes

}){

    return(

        <div

        className="

        bg-white

        rounded-3xl

        shadow

        p-8

        "

        >

            <h2 className="text-2xl font-bold mb-6">

                Generated Notes

            </h2>

            <div

            className="

            whitespace-pre-wrap

            leading-8

            text-gray-700

            "

            >

                {

                    notes ||

                    "Generated notes will appear here."

                }

            </div>

        </div>

    );

}