import './App.css';
import {useState, useEffect} from 'react'
import Axios from 'axios'

function App() {
  const [displayData, setDisplayData] = useState([])
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [userName, setUserName] = useState()

  useEffect(()=>{
    Axios.get("http://localhost:3001/gp").then((response)=>{
      setDisplayData(response.data)
    })
  }, [displayData])

  const submit = ()=>{
    
    Axios.post("http://localhost:3001/cp", {name: name, age: age, username: userName,})
    if(userName){
      alert("SUBMITTED")
    }
    setName("")
    setAge("")
    setUserName("")
  }

  return (
    <div className='app'>
      
      <div className='form'>
        <h1>Input Data Here</h1>
        <input onChange={(event)=>{setName(event.target.value)}} placeholder='Name...' type='text' value={name} />
        <input onChange={(event)=>{setAge(event.target.value)}} placeholder='Age...' type='text' value={age} />
        <input onChange={(event)=>{setUserName(event.target.value)}} placeholder='UserName...' type='text' value={userName} />
        <button onClick={submit} className='btn'>Submit</button>
      </div>
      
      <div className='display'>
        <h1>Showing All Data</h1>
        <div className='cards'>
        {displayData.map((elem)=>{
          return(
            <div className='card'>
              <h2>Name: {elem.name}</h2>
              <p>Age: {elem.age}</p>
              <p>UserName: {elem.username}</p>
            </div>
          )
          })}
        </div>
      </div>

      
    </div>
  );
}

export default App;
