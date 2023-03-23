import ListSnippet from './list-snippet/ListSnippet';
import './list.css';

function List() {
    return (
        <div className='List'>

            <div className='snippets-list'>
                <h2 className='title'>List Snippets</h2>
                <ListSnippet title={"CountToAndBack"} />
                <ListSnippet title={"SumOfFactorial"} />
                <ListSnippet title={"Print"} />
            </div>
        </div>
    )
}

export default List;