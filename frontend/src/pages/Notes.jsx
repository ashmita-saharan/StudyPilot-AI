import { useState } from "react";

import NotesInput from "../components/notes/NotesInput";
import NotesViewer from "../components/notes/NotesViewer";
import ActionButtons from "../components/notes/ActionButtons";

import { generateNotes } from "../services/notesApi";

export default function Notes(){

    const [loading,setLoading]=useState(false);

    const [notes,setNotes]=useState("");

    async function handleGenerate(filename){

        setLoading(true);

        setNotes("");

        try{

            const response=await generateNotes(filename);

            let generatedNotes="";

            if(Array.isArray(response.notes)){

                generatedNotes=response.notes

                    .map(item=>item.text)

                    .join("\n\n");

            }

            else{

                generatedNotes=response.notes;

            }

            setNotes(generatedNotes);

        }

        catch(error){

            if(error.response){

                setNotes(error.response.data.detail);

            }

            else{

                setNotes("Something went wrong.");

            }

        }

        finally{

            setLoading(false);

        }

    }

    return(

        <div className="space-y-8">

            <NotesInput

                onGenerate={handleGenerate}

                loading={loading}

            />

            <ActionButtons

                notes={notes}

            />

            <NotesViewer

                notes={notes}

            />

        </div>

    );

}