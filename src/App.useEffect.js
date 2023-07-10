import './App.css';
import { useEffect, useState } from 'react';

function Items({itemInput}) {
  return (
    <ul>
      {itemInput.map((eachItem, i) => {
        return <li key={i}>{eachItem.title}</li>
      })}
    </ul>
  );
}

function App() {
  const [inputData,setInputData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(()=>{
    fetch(url)
      .then(response=> {
        if(response.ok) {
          return response.json()
        }
        throw new Error("Something went wrong");
      })
      .then(jsonData => {
        setInputData(jsonData);
      })
      .catch(error=>{
        console.log(error);
      })
  },[]);
  
  return (
    <Items itemInput={inputData} />
  )
  
}

export default App;
