import React, {useState} from 'react';

function App() {

  const [click, setClick] = useState(0);

  

  return (  
    <div className="App">
        <h1> Click on this </h1>
        <div className = "buttonDiv">
        <button onClick={()=>{setClick(click + 1)} } className = "buttonFirst">+</button> 
        <button onClick={() => {setClick(0)}} className = "buttonFirst">Reset</button>
        <button onClick={() => {setClick(click - 1)}} className = "buttonFirst">-</button>   
        </div>
        <h1> You clicked {click} times </h1>
    </div>
  );
}

export default App;
