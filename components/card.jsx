export default function Card(props){
    return (
        <div className="card--container">
                <h1 className="card--title">{props.name}</h1>
                <p className="card--codigo">{props.codigo}</p>
                <p className="price">{props.preco}</p>
                <p></p>
        </div>
    )
}