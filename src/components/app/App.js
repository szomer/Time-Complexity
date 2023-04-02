
import { useState } from 'react';
import Graph from '../graph/Graph';
import Input from '../input/Input';
import List from '../list/List';
import Snippet from '../snippet/Snippet';
import './App.css';
import icon from './icon.png'
import { oddEvenNumber, sumUp, twoDimensionalArray, fibonacci, factorial } from './snippetFunctions.js';

const snippets = [
  {
    title: "Odd or Even",
    code: <code>function <b>oddEvenNumber</b> (n) &#123;<br />
      &nbsp;<b>if</b> (n % 2 === 0) &#123;<br />
      &nbsp;&nbsp;console.log('Even number.');<br />
      &nbsp;&#125; <b>else</b> &#123; <br />
      &nbsp;&nbsp;console.log('Odd number.');<br />
      &nbsp;&#125;<br />
      &#125;</code>,
    o: "O(1)",
    func: oddEvenNumber
  },
  {
    title: "Sum Up",
    code: <code>function <b>sumUp</b> (n) &#123;<br />
      &nbsp;var sum;<br />
      &nbsp;<b>for</b> (let i = 0; i &#60; n; i++) &#123;<br />
      &nbsp;&nbsp;sum += i;<br />
      &nbsp;&#125;<br />
      &nbsp;console.log(sum);<br />
      &#125;</code>,
    o: "O(n)",
    func: sumUp
  },
  {
    title: "Two Dimensional",
    code: <code>function <b>twoDimensional</b> (n) &#123;<br />
      &nbsp;var arr = [];<br />
      &nbsp;<b>for</b> (let i = 0; i &#60; n; i++) &#123;<br />
      &nbsp;&nbsp;<b>for</b> (let i = 0; i &#60; n; i++) &#123;<br />
      &nbsp;&nbsp;&nbsp;arr.push([i, j]);<br />
      &nbsp;&#125;&#125;<br />
      &nbsp;console.log(arr);<br />
      &#125;</code>,
    o: "O(n^2)",
    func: twoDimensionalArray
  },
  {
    title: "Fibonacci",
    code: <code>function <b>fibonacci</b> (n) &#123;<br />
      &nbsp;var arr = [];<br />
      &nbsp;let n1 = 0, n2 = 1, nextTerm;<br />
      &nbsp;<b>for</b> (let i = 0; i &#60; n; i++) &#123;<br />
      &nbsp;&nbsp;arr.push(n1);<br />
      &nbsp;&nbsp;nextTerm = n1 + n2;<br />
      &nbsp;&nbsp;n1 = n2;<br />
      &nbsp;&nbsp;n2 = nextTerm;<br />
      &nbsp;&#125;&#125;</code>,
    o: "O(2^n)",
    func: fibonacci
  },
  {
    title: "Factorial",
    code: <code>function <b>factorial</b> (n) &#123;<br />
      &nbsp;<b>for</b> (let i = 0; i &#60; n; i++) &#123;<br />
      &nbsp;&nbsp;factorial(n - 1);<br />
      &nbsp;&#125;<br />
      &#125;</code>,
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
  const [runTime, setRunTime] = useState("");

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
    setRunTime("");
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
    setRunTime(result);
    insertData(inputSize, result);
  }


  return (
    <div className="App">

      <div id="app-title"><img src={icon}></img><h2>Code Performance</h2></div>

      <div className='app-container'>

        <div className='list-container'>
          <List snippets={snippets} selectCodeSnippet={selectCodeSnippet} />
        </div>

        <div className='current-container'>
          <div className='current-upper'>

            <div className='input-container'>
              <Input runTime={runTime} setInputSize={setInputSize} />
            </div>
            <div className='snippet-container'>
              <Snippet o={snippets[currentSnippet].o} title={snippets[currentSnippet].title} code={snippets[currentSnippet].code} />
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
