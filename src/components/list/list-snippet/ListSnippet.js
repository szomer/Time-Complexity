import './listsnippet.css';

function ListSnippet(props) {
    return (<div className='ListSnippet'>
        <div className='snippet'>
            <div className='snippet-title'>{props.title}</div>
        </div>
    </div>)
}

export default ListSnippet;