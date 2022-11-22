import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s1 = {
        "name":"Vedant",
        "class":"$b"
    }

    const [state,setState] = useState(s1);

    const update=()=>{
        setTimeout(() => {
            setState({
                "name":"Harry",
                "class":"100"
            })
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;