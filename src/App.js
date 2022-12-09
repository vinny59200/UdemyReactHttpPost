import JsonData from './data.json'
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [bar, setBar] = useState([]);
  const foo = JsonData;

  function doHttpFetchCall(fooBody) {
    fetch('https://httpbin.org/post',
      {
        method: 'POST',
        body: JSON.stringify(fooBody),
        headers: { 'Content-Type': 'application/json' }
      }).then(response =>
        response.json()).then(data => {
          setBar(foo);
        });
  }


  useEffect(() => {
    doHttpFetchCall(foo)
  }, [foo]
  )

  return (
    <div className="App">
      <header className="App-header">
        {bar.map((baz, index) => {
          return (
            <h1 key={index}>{baz.name} in {baz.year}</h1>
          );
        })}
      </header>
    </div>
  );
}

export default App;
