import { useState,useRef, useEffect } from "react";
import './styles.css';

const OTP_DIGIT_COUNT = 5;

const OTP = () => {
    const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));
    const refArr  = useRef([]);

    useEffect(()=>{
        refArr.current[0]?.focus();
    },[]);


    const handleInputChange = (value,index)=>{

        if(isNaN(value)) return;
        const newValue= value.trim();

        const newArr = [...inputArr];
        newArr[index]  = newValue.slice(-1);
        setInputArr(newArr);
        newValue && refArr.current[index+1]?.focus();
    }

    const handleOnKeyDown=(e,index)=>{
        if(!e.target.value && e.key==='Backspace'){
            refArr.current[index-1]?.focus(); 
        }
    }

  
    return (
    <div>
      <h1>OTP Validation</h1>
      {inputArr.map((ele, index) => {
        return <input 
        className="otp-input"
        type="text" 
        key={index}
        value={inputArr[index]}
        ref = {(ele)=>(refArr.current[index]= ele)}
        onChange={(e)=>handleInputChange(e.target.value,index)}
        onKeyDown={(e)=>handleOnKeyDown(e,index)}

        >

        </input>;
      })}
    </div>
  );
};

export default OTP;
