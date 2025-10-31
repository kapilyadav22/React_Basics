import React, { useEffect, useState } from 'react'
import './styles.css'

const Progress = ({progress}) =>{
    const [progressColor, setProgressColor] = useState('');
    const [animatedProgress, setAnimatedProgress] = useState(0);
  
    useEffect(()=>{
        setTimeout(() => {
            setAnimatedProgress(progress);
        }, 300);
        fillColor();
    },[progress]);

    const fillColor = () =>{
        if(progress>=70){
            setProgressColor('green');
        } else if(progress>=40){
            setProgressColor('orange');
        } else setProgressColor('red');
    }

    return (<div className='outer'>
        <div className='inner' 
        style={{
            // width: `${progress}%`,
            transform: `translateX(${animatedProgress-100}%)`,
            backgroundColor: progressColor,
            color: animatedProgress>8?'white':'black'
        }}
        role="progressbar"
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow={progress}
        >
            {progress}%
        </div>
    </div>)
}

const ProgressBar = () => {

  return (
    <div className='App'>
      <Progress progress={80}/>
    </div>
  )
}

export default ProgressBar
