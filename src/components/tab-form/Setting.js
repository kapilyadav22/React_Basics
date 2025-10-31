
const Setting = ({data, setData}) => {
    
    const {theme} = data;

    const handleOnChange=(e)=>{
        setData((prev)=>({
            ...prev,
            theme: e.target.name
        }));
    }

  return (
    <div>
      <div>
        <label>
        <input
        type="radio"
        name="dark"
        onChange={handleOnChange}
        checked={theme==='dark'}
        />
        Dark Mode   
        </label>
      </div>
       <label>
         <input
        type="radio"
        name="light"
        onChange={handleOnChange}
        checked={theme==='light'}
        />
            Light Mode  
       </label>
      <div>
      </div>
    </div>
  )
}

export default Setting;
