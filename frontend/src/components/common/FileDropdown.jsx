import { useEffect, useState } from "react";

import { getUploadedFiles } from "../../services/uploadApi";

export default function FileDropdown({

    value,

    onChange

}){

    const [files,setFiles]=useState([]);

    useEffect(() => {

        async function loadFiles(){

            try{

                const data = await getUploadedFiles();

                setFiles(data);

                // Auto-select last uploaded file if available
                if(!value && localStorage.getItem("lastUploadedFile")){

                    onChange(localStorage.getItem("lastUploadedFile"));

                }

            }

            catch(err){

                console.log(err);

            }

        }

        loadFiles();

    },[]);

    return(

        <select

            value={value}

            onChange={(e)=>onChange(e.target.value)}

            className="

            w-full

            p-3

            rounded-xl

            border

            border-gray-300

            bg-white

            "

        >

            <option value="">

                Select Document

            </option>

            {

                files.map(file=>(

                    <option

                        key={file}

                        value={file}

                    >

                        {file}

                    </option>

                ))

            }

        </select>

    );

}