import React, {useState} from 'react';

function App() {

  const [click, setClick] = useState(0);

  function incr(){
    setClick( click + 1 );
  }

  return (  
    <div className="App">
        <h1> Click on this </h1>
        <button onClick={incr} className = "buttonFirst"></button> 
        <h1> You clicked {click} times </h1>
    </div>
  );
}

export default App;
