import React, { useEffect, useMemo, useReducer, useState } from 'react'

function reducer(state, action) {
    switch(action.type) {
        case "test":
            return {text: "test"};
        case "hello":
            return {text: "hello"};
        default:
            return state;        
    }
}

function drawTest(text) {
    console.log("drawTest");
    return text;
}

const UseState = () => {
    const [test, setTest] = useState(0);
    const drawT = useMemo(()=> drawTest(test), [test]);

    useEffect(() => {   
        console.log("init");
    }, []);

    useEffect(() => {
        console.log("test Change");
    }, [test])

    useEffect(() => {
        return () => {
            console.log("test Change2")
        }
    }, [test])

    const handleClink = () => {
        setTest(test + 1);
    }

    const [state, dispatch] = useReducer(reducer, {text: "tttt"})

    return (
        <div>
            <span onClick={handleClink}>
                {test}
            </span>
            {state.text}
            
            <button onClick={() => {dispatch({type: "test"})}}>test</button>
            <button onClick={() => {dispatch({type: "hello"})}}>hello</button>
            <br />
            {drawT}
        </div>
    );
}

export {
    UseState
}