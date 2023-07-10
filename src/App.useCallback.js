import React, { useState, useCallback } from 'react';
import List from './List.js';
// Use call back web dev simplified
// https://www.youtube.com/watch?v=_AyFP5s69N4
export default function App() {
    const [number, setNumber ] = useState(1);
    const [dark, setDark ] = useState(false);

    // simulating api call
    // const getItems = () => {
    //     return [number, number+1, number+2]
    // }

    const getItems = useCallback((incrementor)=> {
        return [number + incrementor, number + incrementor + 1, number + incrementor + 2];
    },[number]);

    // use call back return entire function.
    // use case: Referential equality

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <div style={theme}>
            <input type='number' value={number} 
                onChange={e => setNumber(parseInt(e.target.value))} 
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle theme
            </button>
            <List getItems={getItems} />
        </div>
    );
}