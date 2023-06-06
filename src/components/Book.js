function Books(props){
    console.log(props.author)
    return (
        <div>
            
            <div className="card">
                <h2>Title: {props.name}</h2>
                <p>Author: {props.author}</p>
                <p>Ratings: {props.rating}</p>
            </div>
        </div>
    )
}

export default Books