//Nested File and Folders
//Add/Remove Files and Folders
//File and Folder Icons
//File and Folder Actions (Rename, Delete, Move, Copy)

import React, { useState } from 'react';
import dataJson from './data.json';
import './styles.css';

const List = ({list}) => {
    const [isExpanded, setIsExpanded] = useState({});

   const handleExpandCollapse = (itemname)=>{
        setIsExpanded((prev)=>({
            ...prev,
            [itemname] : !prev[itemname]
        }));
    }

    return (
        <div className='container'>
            {list.map((item, index) => (
                <div key={item.name + index}>
                     {item?.isFolder && <span 
                     onClick={()=>{handleExpandCollapse(item?.name) }}>
                         {isExpanded?.[item.name]? " - ": " + " }</span>}
                    {item?.isFolder ? '📁' : '📄'} {item.name}
                    {isExpanded?.[item.name] && item?.isFolder && item?.children && <List list={item.children} />}
                </div>
            ))}
        </div>
    );
}

const FileExplorer = () => {
    const [data, setData] = React.useState(dataJson);


  return (
    <div className='Parent'>
      <h1>File/Folder Explorer</h1>
      <List list = {data}/>
    </div>
  )
}

export default FileExplorer
