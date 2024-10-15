import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [fullName, setFullName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(fname +" "+ lname);
    setIsClicked(true);
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>
          First Name:
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </label>
        <br />
        <button>Submit</button>
        {isClicked && <p>Full Name: {fullName}</p>}
      </form>
    </div>
  );
}

export default App;
