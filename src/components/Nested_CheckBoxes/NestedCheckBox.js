import { useState } from "react";
import { fruitsData } from "./data";
import "./style.css";
const CheckBoxes = ({ data, checkedData, setCheckedData }) => {

  const handleChange = (e, item) => {

    setCheckedData((prev) => {
        const isChecked = e.target.checked;
      const newState = { ...prev, [item.id]: isChecked };

      const updateChildren = (node) => {
          node.children?.forEach((child) => {
            newState[child.id] = isChecked;
            child.children && updateChildren(child);
          });
        }
      updateChildren(item);

      const verifyChecked = (node)=>{
            if(!node.children || node.children.length===0) return newState[node.id] ?? false;

            const allChildrenChecked = node.children.every((child) => verifyChecked(child));
            newState[node.id] = allChildrenChecked;
            return allChildrenChecked;
      };

    fruitsData.forEach((node) => verifyChecked(node));

      return newState;
    });
  };

  return (
    <div>
      {data.map((ele) => {
        return (
          <div  key = {ele.id}
          className="parent">
            <input
              type="checkbox"
              checked={checkedData[ele.id] || false}
              onChange={(e) => handleChange(e, ele)}
            ></input>
            <label>{ele.label}</label>
            {ele.children && (
              <CheckBoxes
                data={ele.children}
                checkedData={checkedData}
                setCheckedData={setCheckedData}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const NestedCheckBox = () => {
  const [checkedData, setCheckedData] = useState({});
  return (
    <div>
      <div>
        <CheckBoxes
          data={fruitsData}
          checkedData={checkedData}
          setCheckedData={setCheckedData}
        />
      </div>
    </div>
  );
};

export default NestedCheckBox;
