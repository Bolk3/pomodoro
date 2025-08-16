import { useState } from 'react'
import './App.css'

// TODO: faire arreter le compteur a 0
// compartimentaliser le code pour faire le switch entre phase travail et repos

function Timer() {
  const [time, setTime] = useState(0);
  return (
    <>
      <div className='timer'>
        <div className="minutesteen">
          <button onClick={() => {setTime(time + 600)}}>+</button>
          <p>{Math.floor(time/600)}</p>
          <button onClick={() => {setTime(time - 600)}}>-</button>
        </div>
        <div className="minutesdigit">
          <button onClick={() => {setTime(time + 60)}}>+</button>
          <p>{Math.floor((time/60)%10)}</p>
          <button onClick={() => {setTime(time - 60)}}>-</button>
        </div>
        <div className="secondsteen">
          <button onClick={() => {setTime(time + 10)}}>+</button>
          <p>{Math.floor((time%60)/10)}</p>
          <button onClick={() => {setTime(time - 10)}}>-</button>
        </div>
        <div className="secondsdigit">
          <button onClick={() => {setTime(time + 1)}}>+</button>
          <p>{Math.floor(time%10)}</p>
          <button onClick={() => {setTime(time - 1)}}>-</button>
        </div>
        <div className="buttons">
          <button onClick={() => {setTime(0)}}>reset</button>
          <button>start</button>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Timer/>
    </>
  )
}

export default App
