function Books(props){
    console.log(props.author)
    return (
        <div>
            <div className="card">
                <h2><b className="items">Title:</b> {props.name}</h2>
                <p><b className="items">Author:</b> {props.author}</p>
                <p><b className="items">Ratings:</b> {props.rating}</p>
            </div>
        </div>
    )
}

export default Books