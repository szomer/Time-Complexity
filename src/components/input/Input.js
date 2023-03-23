import './input.css';

function Input() {
    return (<div className='Input'>
        <div className='input'>
            <h2 className='title'>Enter the input size (n)</h2>
            <p>Be careful with the inputsize, too high can crash the browser window!</p>
            <form className='form-control'>
                <input className='form-control' placeholder='n=100'></input>
                <button className='form-control btn btn-light btn-sm my-2'>Submit</button>
            </form>
        </div>
    </div>)
}

export default Input;