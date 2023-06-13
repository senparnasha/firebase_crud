import "./App.css";
import React,{useState} from "react";

function App() {
const [weight,setWeight]=useState(0)
const [height,setHeight]=useState(0)
const [bmi,setBmi]=useState("")
const [message,setMessage]=useState("")

function calcBmi(e){

  console.log('hi')
e.preventDefault()
if(weight===0 && height ===0){
  alert('Please enter your valid weight and height')
}
else{
let bmi=(weight/(height*height)* 703)
setBmi(bmi.toFixed(1))

if (bmi<25){
  setMessage('You are under weight')
}
else if(bmi >= 25 && bmi < 30){
  setMessage('You are Healthy')
}
else{
  setMessage('You are Overweight')
}
}
}
 function reload(){
  window.location.reload()
 }


  return (
    <div className="App">
      <div className="container">
        <h2 className="heading">BMI CALCULATOR</h2>
        <form >
          <div>
            <label className="title">Weight(ibs)</label>
            <input className="input-style1"
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e)=>setWeight(e.target.value)}
            />
          </div>
          <div>
            <label className="title">Height(in)</label>
            <input className="input-style2"
              type="text"
              placeholder="Enter Your Height"
              value={height}
              onChange={(e)=>setHeight(e.target.value)}
            />
          </div>
          
          <div className="center">
            <h3 className="bmi-title">Your BMI is : {bmi} </h3>
            <p style= {{fontSize:"18px", color:"rgb(138, 139, 141)"}}>{message}</p>
          </div>
          <div className="btn-container">
            <div onClick={calcBmi}
            className="btn-submit" type="submit">
              Submit
            </div>
            <div className="btn-reload btn-outline" type="submit" onClick={reload}>
              Reload
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
