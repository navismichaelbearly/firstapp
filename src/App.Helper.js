import React, { useState, useCallback } from 'react';
import List from './List.js';

// React Functional Component Lifecycle Hooks Explained | useEffect Hooks - Lifecycle methods in React
// https://www.youtube.com/watch?v=HakJyDGDPuc

// React Hooks Course - All React Hooks Explained
// https://www.youtube.com/watch?v=LlvBzyy-558

// React Shopping Cart Ecommerce Beginner Website - Build & Deploy A React Beginner Project
// https://www.youtube.com/watch?v=tEMrD9t85v4

// MERN Recipe App with Authentication - Build & Deploy A React Intermediate Project
// https://www.youtube.com/watch?v=P43DW3HUUH8

// Full Stack Web Development Course - ReactJS, NodeJS, Express, MySQL
// https://www.youtube.com/playlist?list=PLpPqplz6dKxUaZ630TY1BFIo5nP-_x-nL

// Use call back web dev simplified
// https://www.youtube.com/watch?v=_AyFP5s69N4

// To do list project
// https://www.youtube.com/watch?v=Rh3tobg7hEo

// React Hooks
// https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h

// Freelancing
// https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8Bhr4_zYMFHAPxyAEDgQG7

// React Many topics
// https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK

// Full Stack Web Development Course
// https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM

// Queried to get more info
// https://www.youtube.com/@PedroTechnologies/search?query=build
// https://www.youtube.com/results?search_query=build+and+deploy+%2B+react

//Build A Currency Converter In React
// https://www.youtube.com/watch?v=XN5elYWiSuw

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