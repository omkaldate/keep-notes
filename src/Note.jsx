import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";

const Note = (props) => {

    const dele = (ele)=>{
        props.deleteItem(props.id);
    }

    return (
        <>
            <div className="note">
                <h3> {props.title}</h3>
                <br />
                <p>{props.note}</p>
                <Button className="btn" onClick={dele}>
                    <DeleteIcon className="deleteIcon" />
                </Button>
            </div>
        </>
    )
}

export default Note;