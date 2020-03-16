import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {
  const [data, setData] = useState({ users: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
          'http://localhost:8083/user', { headers: { "Authorization": "Bearer " + localStorage.getItem("react-token") } }
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
      <div className="App">
        {console.log(data)}
        <header className="App-header">
          <h1>Secure React App</h1>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>

            <h2>Response from Quarkus API: /user </h2>

            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>

          </div>
        </header>
      </div>
  );
}

export default App;
