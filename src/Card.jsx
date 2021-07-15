import "./Card.css"


export default function Card(props){
    return(
<div className="dayWeather">
<div>{props.day}</div>
<img src={props.imageUrl} alt="pic" />
<div>{props.temp}</div>
</div>
    )
}