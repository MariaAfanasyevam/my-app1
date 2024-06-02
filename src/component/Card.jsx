

function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
               
                <h4 className="card-title">{props.universe}</h4>
                <p className="card-text">{props.alterego}</p>
                <img src={props.url} alt={props.name}/>
            </div>
            <div className="card-footer">
                <p>{props.name}</p>
                <span>{props.info}</span>
            </div>
        </div>
    );
}
export default Card;