
import { useState } from 'react';
import Graph from '../graph/Graph';
import Input from '../input/Input';
import List from '../list/List';
import Snippet from '../snippet/Snippet';
import './App.css';
import { oddEvenNumber, sumUp, twoDimensionalArray, fibonacci, factorial } from './snippetFunctions.js';

const snippets = [
  {
    title: "Odd or Even",
    code: <code>function oddEvenNumber (n) &#123;<br />&ensp;if (n % 2 === 0) &#123;<br />&emsp;console.log('The input is an even number.');<br />&ensp;&#125; else &#123; <br />&emsp;console.log('The input is an odd number.');<br />&#125;&#125;</code>,
    o: "O(1)",
    func: oddEvenNumber
  },
  {
    title: "Sum up",
    code: <code>function sumUp (n) &#123;<br />&ensp;let sum;<br />&ensp;for (let i = 0; i &#60; n; i++) &#123;<br />&emsp;sum += i;<br />&ensp;&#125;<br />&ensp;console.log(sum);<br />&#125;</code>,
    o: "O(n)",
    func: sumUp
  },
  {
    title: "Two dimensional",
    code: <code>function twoDimensional (n) &#123;<br />&ensp;var arr = [];<br />&ensp;for (let i = 0; i &#60; n; i++) &#123;<br />&ensp;for (let i = 0; i &#60; n; i++) &#123;<br />&emsp;arr.push([i, j]);<br />&ensp;&#125;&#125;<br />&ensp;console.log(arr);<br />&#125;</code>,
    o: "O(n^2)",
    func: twoDimensionalArray
  },
  {
    title: "Fibonacci",
    code: <code>function fibonacci (n) &#123;<br />&ensp;var arr = [];<br />&ensp;for (let i = 0; i &#60; n; i++) &#123;<br />&ensp;for (let i = 0; i &#60; n; i++) &#123;<br />&emsp;arr.push([i, j]);<br />&ensp;&#125;&#125;<br />&ensp;console.log(arr);<br />&#125;</code>,
    o: "O(2^n)",
    func: fibonacci
  },
  {
    title: "Factorial",
    code: <code>function factorial (n) &#123;<br />&ensp;var arr = [];<br />&ensp;for (let i = 0; i &#60; n; i++) &#123;<br />&ensp;for (let i = 0; i &#60; n; i++) &#123;<br />&emsp;arr.push([i, j]);<br />&ensp;&#125;&#125;<br />&ensp;console.log(arr);<br />&#125;</code>,
    o: "O(n!)",
    func: factorial
  },
]

function App() {
  const [data, setData] = useState([
    {
      loop: 0,
      runtime: 0,
    }
  ]);
  const [currentSnippet, setCurrentSnippet] = useState(0);


  function insertData(newLoop, newRuntime) {
    setData((old) => {
      return [
        ...old,
        {
          loop: newLoop,
          runtime: newRuntime,
        },
      ]
    })
  }

  function clearData() {
    setData([
      {
        loop: 0,
        runtime: 0,
      }
    ]);
  }

  function selectCodeSnippet(id) {
    clearData();
    setCurrentSnippet(id);
  }

  function setInputSize(inputSize) {
    const result = snippets[currentSnippet].func(inputSize);
    insertData(inputSize, result);
  }


  return (
    <div className="App">

      <h2 id="app-title">Performance Test</h2>

      <div className='app-container'>

        <div className='list-container'>
          <List snippets={snippets} selectCodeSnippet={selectCodeSnippet} />
        </div>

        <div className='current-container'>
          <div>
            <div className='current-upper'>

              <div className='input-container'>
                <Input setInputSize={setInputSize} />
              </div>
              <div className='snippet-container'>
                <Snippet o={snippets[currentSnippet].o} title={snippets[currentSnippet].title} code={snippets[currentSnippet].code} />
              </div>
            </div>
          </div>

          <div className='graph-container'>
            <Graph clearData={clearData} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
