import React, { useState, useMemo, useEffect } from "react";

// useMemo you tube video
//https://www.youtube.com/watch?v=THL1OPn72vo
export default function App(){
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // Use case 1: slow function

    const doubleNumber = useMemo(() => { 
        return slowFunction(number)
    },[number]);


    // Use case 2: Referencial equality

    // const themeStyles = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black'
    // }

    const themeStyles = useMemo(()=> {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    useEffect(()=>{
        console.log('themeStyle changed')
    },[themeStyles])

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Change Theme
            </button>
            <div style={themeStyles}>
                {doubleNumber}
            </div>
        </>
    );
}

function slowFunction(num) {
    console.log('Calling a slow function');
    for(let i=0; i <= 1000000000; i++) {}
    return num * 2;
}