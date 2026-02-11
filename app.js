import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/data")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>MERN Task 1</h1>
      {data.map((item, index) => (
        <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{item.name}</h3>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
