import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('dark mode has been enabled', 'success')

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled', 'success')
    }

  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Navbar title="Navbar" about="AboutUs" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* <TextForm heading="Enter text to analyze"/> */}
        {/* <About /> */}
        <Alert alert ={alert}/>
      </div>
    </>
  );
}

export default App;
