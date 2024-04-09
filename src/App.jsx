import { useState } from 'react'
import './App.css';


function App() {
  const [height , setheight] = useState("");
  const [weight, setweight] = useState("");
  const [bmi, setbmi] = useState(null);
  const [bmiStatus, setbmiStatus] = useState("");
  const [error, seterror] = useState("");

  const clearAll =()=>{
       setbmi(null);
       setbmiStatus("");
      setheight('');
      setweight('');
  }

  const calculateBmi=()=>{
     const isValidHeight = /^\d+$/.test(height);
     const isValidWeight = /^\d+$/.test(weight);

      if(isValidWeight && isValidHeight) {
          const heightInMeters = height / 100;
          const bmiValue = weight / (heightInMeters * heightInMeters);
          setbmi(bmiValue.toFixed(2));
          if(bmiValue< 18.5){
            setbmiStatus("under weight");
          } else if (bmiValue >= 18.5 && bmiValue< 24.9){
             setbmiStatus("Normal weight");
          } else if (bmiValue >= 25 && bmiValue< 29.9){
             setbmiStatus("over  weight");
          } else {
            setbmiStatus(" obsese");
          }
          seterror('')
      } else{
        setbmi(null);
        setbmiStatus("");
        seterror('please enter a valid numbers')
      }
  }


  return (
    <>
      <div className='bmi-calculator'>
          <div className='box'></div>
            <div className='data'>
                 <h1 className='heading'>BMI Calculator</h1>
                 {error && <p className='error'>{error}</p>}
                 
                  <div className='input-container'>
                       <label htmlFor='height'>Height (cm):</label>
                       <input type='text' name='height' value={height} onChange={(e)=>setheight(e.target.value)}/>
                    </div> 
                    <div className='input-container'>
                       <label htmlFor='weigth'>Weight (kg):</label>
                       <input type='text' name='weight' value={weight} onChange={(e)=>setweight(e.target.value)} />
                    </div> 

                    <button onClick={calculateBmi}>calculate BMI</button>
                    <button onClick={clearAll}>reset</button>

                    {
                      bmi !== null && (
                    <div className='input-result'>
                      <p>yor bmi is :{bmi}
                      </p>
                      <p>status:{bmiStatus}</p>
                    </div>
                      )
                    }
              </div> 
         
      </div>
       
    </>
  )
}

export default App
