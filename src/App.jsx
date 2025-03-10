import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateNote from "./CreateNote.jsx";
import Note from "./Note.jsx";

const App = () =>{
    return(
        <>
            <Header/>
            <CreateNote/>
            <Note/>
            <Footer/>
        </>
    )
}

export default App;