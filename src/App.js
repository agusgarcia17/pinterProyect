import React, {useState} from 'react';
import Navbar from './components/Navbar'
import List from './components/List'

function App() {

  const [term, setTerm] = useState('');
  
  function handleSearch(term){
      setTerm(term)
      // console.log(term)
  }



  return (
    <div className="App"> 
      <Navbar handleSearch={handleSearch} />
      <List filter={term}/>
    </div>
  );
}

export default App;
