import React from "react";

const Profile = ({ data, setData }) => {
  const { name, email, age } = data;


  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="form-container">
      <div>
        <label>
          <span>Name </span>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
            handleChange(e);
            }}
          />
        </label>
      </div>

      <div>
        <label>
          <span>Email </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          <span>age </span>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
        </label>
      </div>
    </div>
  );
};

export default Profile;
