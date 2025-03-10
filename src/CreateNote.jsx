import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const CreateNote = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text" placeholder="Title" />
                    <textarea rows="" column="" placeholder="Write a note ..." />
                    <Button>
                        <AddIcon className="plusSymbol"/>
                    </Button>
                </form>

            </div>
        </>
    )
}

export default CreateNote;