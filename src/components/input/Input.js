import { useState } from 'react';
import './input.css';

function Input(props) {

    const [input, setInput] = useState("");
    const [disabledBtn, setDisabledBtn] = useState(false);

    function submitInput(e) {
        e.preventDefault();
        setDisabledBtn(true);

        if (Number(input)) props.setInputSize(input);

        setDisabledBtn(false);
    }

    return (<div className='Input'>
        <div className='input'>
            <h2 className='title'>Enter the input size (n)</h2>
            <p>Be careful with the inputsize, too high can crash the browser window!</p>

            <form className='form-control'>
                <input className='form-control' onChange={(e) => { setInput(e.target.value) }} placeholder='n=100' value={input}></input>
                <button disabled={disabledBtn} onClick={submitInput} className='form-control btn btn-light btn-sm my-2'>Submit</button>
            </form>

            {props.runTime && <p>Run time: <b>{props.runTime}</b> ms</p>}


        </div>
    </div>)
}

export default Input;