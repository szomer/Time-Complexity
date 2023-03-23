
import Graph from '../graph/Graph';
import Input from '../input/Input';
import List from '../list/List';
import Snippet from '../snippet/Snippet';
import './App.css';

function App() {
  return (
    <div className="App">

      <h2 id="app-title">Performance Test</h2>

      <div className='app-container'>

        <div className='list-container'>
          <List />
        </div>

        <div className='current-container'>
          <div>
            <div className='current-upper'>

              <div className='input-container'>
                <Input />
              </div>
              <div className='snippet-container'>
                <Snippet />
              </div>
            </div>
          </div>

          <div className='graph-container'>
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
