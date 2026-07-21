import { useRef } from "react";
import {
    UploadCloud,
    FileText,
    CheckCircle2
} from "lucide-react";

import Button from "../common/Button";

export default function UploadBox({

    file,
    uploaded,
    loading,
    onUpload,
    onChange

}){

    const inputRef=useRef();

    return(

        <div

        onDragOver={(e)=>e.preventDefault()}

        onDrop={(e)=>{

            e.preventDefault();

            onChange({

                target:{

                    files:e.dataTransfer.files

                }

            });

        }}

        className="

        border-2

        border-dashed

        border-[#A9C8D8]

        rounded-3xl

        p-14

        bg-[#F7FBFC]

        hover:border-[#6F95A3]

        transition

        "

        >

            <UploadCloud

            size={75}

            className="mx-auto text-[#6F95A3]"

            />

            <h1

            className="

            text-4xl

            font-bold

            mt-5

            "

            >

                Upload Study Material

            </h1>

            <p

            className="

            mt-3

            text-gray-500

            "

            >

                Drag & Drop your files here

            </p>

            <p

            className="

            text-gray-400

            my-4

            "

            >

                OR

            </p>

            <Button

            onClick={()=>inputRef.current.click()}

            >

                Browse Files

            </Button>

            <input

            hidden

            ref={inputRef}

            type="file"

            accept=".pdf,.ppt,.pptx,.txt"

            onChange={onChange}

            />

            {

                file&&(

                    <div

                    className="

                    mt-8

                    bg-white

                    rounded-xl

                    p-4

                    flex

                    items-center

                    gap-3

                    "

                    >

                        <FileText/>

                        {file.name}

                    </div>

                )

            }

            {

                loading&&

                <div

                className="

                mt-8

                "

                >

                    Uploading...

                </div>

            }

            {

                uploaded&&

                <div

                className="

                flex

                items-center

                justify-center

                gap-2

                mt-8

                text-green-600

                "

                >

                    <CheckCircle2/>

                    Uploaded Successfully

                </div>

            }

            {

                file&&

                !loading&&

                <Button

                className="mt-8"

                onClick={onUpload}

                >

                    Upload Now

                </Button>

            }

        </div>

    );

}