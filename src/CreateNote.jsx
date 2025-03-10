import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const CreateNote = (props) => {

    const year = new Date().getFullYear();

    const [note, setNote] = useState({
        title : "",
        note : ""
    });


    const inputFun = (event)=>{
        const {name, value} = event.target;

        setNote((pre) =>{
            return {
                ...pre,
                [name] : value
             }
        })
    };

    const clicked = ()=>{
        props.passNote(note);

        setNote({
            title : "",
            note : ""
        }); 
    }

    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text" value = {note.title} name="title" onChange={inputFun} placeholder="Title" />
                    <textarea rows="" value={note.note} name="note" onChange={inputFun} column="" placeholder="Write a note ..." />
                    <Button onClick={clicked}>
                        <AddIcon className="plusSymbol"/>
                    </Button>
                </form>

            </div>
        </>
    )
}

export default CreateNote;