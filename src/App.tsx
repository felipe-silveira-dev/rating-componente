import { useState } from "react";
import Rating from "./components/Rating";
import Acknowledgment from "./components/Acknowledgment";

function App() {
  const [state, setState] = useState({
     rate: 0,
     submited: false,
  });
  
  function submit(rate: number) {
    setState({
      rate: rate,
      submited: true
    })
  }

  function edit() {
    setState(oldState => ({
      rate: oldState.rate,
      submited: false
    }))
  }

  function setNewColor() {
    //crie  random de cores com hsl cor aleatoria
    let color = Math.floor(Math.random() * 360);  
    document.documentElement.style.setProperty('--primary', `${color} 90% 50%`);
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen m-auto bg-[#121417] text-secondary shadow-2xl">
       {!state.submited && <Rating handleSubmit={submit} rate={state.rate} />}
       {state.submited && <Acknowledgment rate={state.rate} edit={edit} />}
      </div>
      <a onClick={() => setNewColor()}>
        New color!
      </a>
    </>
  );
}

export default App;
