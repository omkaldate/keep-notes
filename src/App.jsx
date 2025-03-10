import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateNote from "./CreateNote.jsx";
import Note from "./Note.jsx";

const App = () =>{

    const [addItem, setAddItem] = useState([]);

    const addNote = (note)=>{
        setAddItem((prev) =>{
           return  [...prev, note];
        })
    }

    const onDelete = (id) => {
        setAddItem((prev) => prev.filter((curData, idx) => idx !== id));
    };
    

    return(
        <>
            <Header/>
            <CreateNote 
                passNote = {addNote}
            />
                {addItem.map((val, ind)=>{
                    return <Note
                        key = {ind}
                        id = {ind}
                        title={val.title}
                        note = {val.note}
                        deleteItem = {onDelete}
                    />
                })}
            <Footer/>
        </>
    )
}

export default App;