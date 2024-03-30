import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from 'axios';

function DeleteExample() {

  const [status, setStatus] = useState("");

  useEffect(() => {
    // DELETE request using axios inside useEffect React hook
    const article = { title: 'React Hooks PUT Request Example' };
    axios.delete('https://reqres.in/api/posts/1')
      .then(response => {

        setStatus('Delete successful')
        console.log("Delete successful");
      })
      .catch(error => {
        setErrorMessage(error.message);
        console.error('There was an error!', error);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);


  return "Delete example";
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Hello from React!</h2>
        <DeleteExample />
      </div>
    </>
  )
}

export default App
