import { useState } from "react";

import UploadCard from "../components/upload/UploadCard";
import UploadBox from "../components/upload/UploadBox";
import RecentUploads from "../components/upload/RecentUploads";

import {

uploadDocument

} from "../services/uploadApi";

export default function Upload(){

    const[uploads,setUploads]=useState([]);

    const[file,setFile]=useState(null);

    const[loading,setLoading]=useState(false);

    const[uploaded,setUploaded]=useState(false);

    async function handleUpload(){

        if(!file)return;

        setLoading(true);

        setUploaded(false);

        try{

            await uploadDocument(file);

            setUploads(prev=>[

                file.name,

                ...prev

            ]);

            setUploaded(true);

            setFile(null);

        }

        catch(e){

            alert("Upload Failed");

        }

        finally{

            setLoading(false);

        }

    }

    return(

        <div

        className="space-y-8"

        >

            <UploadCard>

                <UploadBox

                file={file}

                uploaded={uploaded}

                loading={loading}

                onUpload={handleUpload}

                onChange={(e)=>setFile(e.target.files[0])}

                />

            </UploadCard>

            <RecentUploads

            uploads={uploads}

            />

        </div>

    );

}