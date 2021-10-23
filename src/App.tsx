import React, { useState } from 'react';
import "./App.css"
import List from './components/List';

interface ISatet {
people:{
  name:string
  age: number
  url: string
  note?:string
}[],
}


function App() {
  const [number, setNumber] = useState<number>(10)
  const [people, setPeople] = useState<ISatet["people"]>([{
    name:'milad',
    age:30,
    url:"dasf"
  }])
   
  return (
    <div className="App">
      <h1>People Invited in my party!</h1>
      <List people={people} number={number}/>

    </div>
  );
}

export default App;
