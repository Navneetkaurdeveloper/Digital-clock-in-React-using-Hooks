import React, { useState } from 'react';

const App =() =>{

  let time = new Date().toLocaleTimeString();

  const[ctime,setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval( UpdateTime,1000)
  return(
    <>
<div className='heading_style'> DIGITAL CLOCK USING HOOKS IN REACT</div>
<div className='clk'> {ctime}</div> 


    </>
)
} 

export default App;
