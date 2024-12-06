import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
    }
    else {
      setMode('dark');
    }

  }
  return (
    <>
      <Navbar title="Navbar" about="AboutUs" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* <TextForm heading="Enter text to analyze"/> */}
        <About />
      </div>
    </>
  );
}

export default App;
