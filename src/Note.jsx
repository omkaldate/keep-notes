import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";

const Note = () => {

    return (
        <>
            <div className="note">
                <h3> Title</h3>
                <br />
                <p> This is the cuntent</p>
                <Button className="btn">
                    <DeleteIcon className="deleteIcon" />
                </Button>
            </div>
        </>
    )
}

export default Note;