import fetchActivity from './fetchActivity';
import './App.css';
import { useState } from 'react';

function App() {
  const [activity, setActivity] = useState("");


  let handleClick = async () => {
    const result = await fetchActivity();
    console.log(result.activity);
    setActivity(result.activity)

  }
  return (
    <div className="App">
      <span className="dot">
        {/* <div className="triangle">
        <span className="arrow-down">  */}
        <div className="button">
     <button onClick={handleClick}>Are you bored?</button>
     <div> {activity} </div>
     </div> 
        {/* </span>
        </div> */}
   
    
     </span>
    </div>
  );
}

export default App;
