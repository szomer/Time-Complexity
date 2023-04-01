import './snippet.css';

function Snippet(props) {

    return (<div className='Snippet'>
        <div className='code-snippet'>
            <h2 className='title'>{props.title} - {props.o}</h2>

            <p>
                {props.code}
            </p>

        </div>
    </div>)
}

export default Snippet;