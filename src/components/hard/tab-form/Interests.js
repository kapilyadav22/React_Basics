import React from 'react'

const Interests = ({data, setData}) => {
    const {interests} = data;

    const handleChange=(e)=>{
        const {name,checked} = e.target;
        setData((prev)=>({
            ...prev,
            interests:checked?[...prev.interests,name]:prev.interests.filter((i)=>{return i!==name}),
        }));
    }
  return (
    <div>
      <div>
        <label>
            <input
            type='checkbox'
            name="coding"
            checked={interests.includes('coding')}
            onChange={handleChange}
            >
            </input>
            Coding
        </label>
      </div>
       <div>
        <label>
            <input
            type='checkbox'
             name="cooking"
            checked={interests.includes('cooking')}
            onChange={handleChange}
            >
            </input>
            Cooking
        </label>
      </div>
       <div>
        <label>
            <input
             type='checkbox'
            name='poetry'
            checked={interests.includes('poetry')}
            onChange={handleChange}
            >
            </input>
            Poetry
        </label>
      </div>
    </div>
  )
}

export default Interests
