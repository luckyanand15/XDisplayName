import React, { useState } from "react";

function App() {
  const [name,setName] = useState({
    fname:"",
    lname:""
  })
  const [fullName, setFullName] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const inputEvent = (e) => {
    const {name,value} = e.target;
    setName((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    setFullName(name.fname+" "+name.lname);
    setIsClicked(true);
  }
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>First Name:</label>
        <input
          type="text"
          name="fname"
          value={name.fname}
          onChange={inputEvent}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          value={name.lname}
          name="lname"
          onChange={inputEvent}
          required
        />
        <br />
        <button type="submit">Submit</button>
        {isClicked && <p>Full Name: {fullName}</p>}
      </form>
    </div>
  );
}

export default App;
