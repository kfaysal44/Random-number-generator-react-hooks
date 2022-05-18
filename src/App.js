import { useState, useEffect } from "react";
import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [again, setAgain] = useState(false);
 
  const[color, setColor]= useState("")
  const[colors,setColors] =useState([])


  
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const num = randomNumberInRange(1, 900);
      if (num % 2 === 0) {
        setAgain(!again);
      } else {
        setNum(num)
        if(num > 0 && num < 300){
          setColor("success")
          
        }
        else if(num > 300 && num < 600){
          
          setColor("danger")

        }
        else if(num > 600 && num < 900){
          
          setColor("primary")

        }
      };
    }, delay);
    setDelay(delay + 50);
    return () => {
      clearInterval(interval);
    };
  }, [again]);

  

  const handleAdd =()=>{
    setColors([color, ...colors])
    randomNumberInRange(1,900)
  }

  return (
    <div className="Buttonn">
      <h2>number is: {num}</h2>
      <Button variant={color} onClick={()=>handleAdd()}>Color</Button>
      <br />
      {colors.map(clr=><Button variant={clr}>Color</Button>)}
      
    </div>
  );
};
export default App;
