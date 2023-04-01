import { useState } from 'react';
import './input.css';
import loadingGif from './loading.gif';

function Input(props) {

    const [input, setInput] = useState("");
    const [disabled, setDisabled] = useState(false);

    function onInputChange(e) {
        setInput(e.target.value);
    };

    async function submitInput(e) {
        e.preventDefault();
        setDisabled(true);

        await props.setInputSize(input);

        setDisabled(false);
    }

    return (<div className='Input'>
        <div className='input'>
            <h2 className='title'>Enter the input size (n)</h2>
            <p>Be careful with the inputsize, too high can crash the browser window!</p>
            <form className='form-control'>
                <input className='form-control' onChange={onInputChange} placeholder='n=100' value={input}></input>
                <button disabled={disabled} onClick={submitInput} className='form-control btn btn-light btn-sm my-2'>Submit</button>
            </form>
            {disabled &&
                <img src={loadingGif} height="50px" />
            }
        </div>
    </div>)
}

export default Input;