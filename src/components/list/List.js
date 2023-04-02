import ListSnippet from './list-snippet/ListSnippet';
import './list.css';

function List(props) {

    var snippets = props.snippets;

    return (
        <div className='List'>

            <div className='snippets-list'>
                <h2 className='title'>Code Snippets</h2>
                <div className='snippets-list-content'>
                    {snippets.map((item, index) => {
                        return <ListSnippet key={index} id={index} selectCodeSnippet={props.selectCodeSnippet} title={item.title} />
                    })}
                </div>

            </div>
        </div>
    )
}

export default List;