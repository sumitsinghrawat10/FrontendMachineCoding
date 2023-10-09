import React, { useEffect, useState } from 'react'


const ProgressBar = () => {
    const[progress,setProgress]= useState(0); 
    const [bg, setBg] = useState('green'); 

    useEffect(() => { 
        if (progress < 100)  {
           setTimeout(() => {
               setBg()
               setProgress(progress + 10)
           }, 1000);
        }
       
    }, [progress])

    useEffect(()=>{
if(progress <=30){
    setBg("red")
}
else if (progress <= 70){
    setBg("orange") 
}
else {
    setBg("green")
}
    }, [progress])


  return (
    <div>ProgressBar

        <div className='progress'>
              <div className='progress_bar' style={{ width: `${progress}%`, backgroundColor: `${bg}` }} >
 <span>{progress}% </span>
            </div>
            

        </div>
          <button onClick={()=> progress <100? setProgress(progress+10): null} > Increase </button>
          <button onClick={()=>setProgress(0)} > Reset</button>
    </div>
  )
}

export default ProgressBar