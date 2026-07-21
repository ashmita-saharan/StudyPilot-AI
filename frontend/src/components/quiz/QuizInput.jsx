import { useState } from "react";

import Button from "../common/Button";
import FileDropdown from "../common/FileDropdown";

export default function QuizInput({

    loading,

    onGenerate

}){

    const [filename,setFilename]=useState(

        localStorage.getItem("lastUploadedFile") || ""

    );

    function submit(){

        if(!filename) return;

        onGenerate(filename);

    }

    return(

        <div className="bg-white rounded-3xl shadow p-8">

            <h1 className="text-3xl font-bold">

                Generate Quiz

            </h1>

            <p className="text-gray-500 mt-2">

                Select an uploaded document.

            </p>

            <div className="mt-6">

                <FileDropdown

                    value={filename}

                    onChange={setFilename}

                />

            </div>

            <Button

                className="mt-6"

                onClick={submit}

                disabled={loading || !filename}

            >

                {

                    loading

                    ?

                    "Generating..."

                    :

                    "Generate Quiz"

                }

            </Button>

        </div>

    );

}