import React, { useState } from "react";
import Profile from "./Profile";
import Setting from "./Setting";
import Interests from "./Interests";
import "./styles.css";



const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    theme: "light",
    interests: ["cooking", "coding", "poetry"],
  });
  const errorForm = {
    name: "",
    email: "",
    age: "",
  };
  const [error, setError] = useState(errorForm);

  const tabs = [
  {
    name: "Profile",
    element: Profile,
    validate: ()=>{
      setError(errorForm);
      if(data?.name?.length<3){
        setError((prev)=>({
          ...prev,
          name: "Enter the name with greater than 2 chars"
        }));
        return false;
      }
      if(data?.age<18){
        setError((prev)=>({
          ...prev,
          age: "Age should be > 18"
        }));
        return false;
      }
      return true;
      //  if(!validateEmail()){
      //   //return;
      // }
  }
  },
  {
    name: "Interests",
    element: Interests,
  },
  {
    name: "Settings",
    element: Setting,
  },
];

  const handleActiveTab = (index) => {
    setActiveTab(index);
  };

  const handleNext = ()=>{
    if(tabs[activeTab].validate()){
      setActiveTab((prev)=>(prev+1));
    }
  }

  const handlePrevious = ()=>{
      setActiveTab((prev)=>(prev-1));
  }

  const ActiveTabComponent = tabs[activeTab].element;
  
  const handleSubmit = ()=>{
  
   

    console.log("Data Submitted is :", data);
  }
  return (
    <div>
      <div className="tab-outer">
        {tabs.map((tab, index) => {
          return (
            <div
              className="tab-inner"
              key={index}
              onClick={() => handleActiveTab(index)}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="body">
        {
          <div>
            <ActiveTabComponent data={data} setData={setData} />
          </div>
        }
      </div>
       {error.name && <label
                    style={{
                        color: 'red',
                        marginTop: '15px',
                        padding: '10px'
                    }}>
                    {error.name}
        </label>}
         {error.email && <label
                    style={{
                        color: 'red',
                        marginTop: '15px'
                    }}>
                    {error.email}
        </label>}
       {error.age && <label
                    style={{
                        color: 'red',
                        marginTop: '15px'
                    }}>
                    {error.age}
        </label>}

      <div className="buttons">
      {activeTab>0 && (
        <div>
          <button
          onClick={handlePrevious}
          >Prev</button>
        </div>
      )}

       {activeTab == tabs.length-1 && (
        <div>
          <button
          onClick={handleSubmit}
          >Submit</button>
        </div>
      )}

       {activeTab< tabs.length-1 && (
        <div>
          <button
          onClick={handleNext}
          >Next</button>
        </div>
      )}
  </div>
    </div>
  );
};

export default TabForm;
