import { Copy, Download } from "lucide-react";
import Button from "../common/Button";

export default function ActionButtons({

    notes

}){

    if(!notes) return null;

    function copyNotes(){

        navigator.clipboard.writeText(notes);

    }

    function downloadNotes(){

        const blob=new Blob(

            [notes],

            {

                type:"text/plain"

            }

        );

        const url=URL.createObjectURL(blob);

        const link=document.createElement("a");

        link.href=url;

        link.download="StudyPilot_Notes.txt";

        link.click();

        URL.revokeObjectURL(url);

    }

    return(

        <div className="flex gap-4">

            <Button onClick={copyNotes}>

                <Copy size={18}/>

            </Button>

            <Button onClick={downloadNotes}>

                <Download size={18}/>

            </Button>

        </div>

    );

}