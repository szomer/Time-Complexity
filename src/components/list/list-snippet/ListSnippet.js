import './listsnippet.css';

function ListSnippet(props) {

    function onSnippetClick(e) {
        var elems = document.querySelectorAll(".active");
        [].forEach.call(elems, function (el) {
            el.classList.remove("active");
        });

        e.target.classList.add('active');
        props.selectCodeSnippet(props.id);

    }


    return (<div className='ListSnippet'>
        <div onClick={(e) => { onSnippetClick(e) }} className='snippet'>
            {props.title}
        </div>
    </div>)
}

export default ListSnippet;