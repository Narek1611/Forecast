import weatherInfo from "./data";
import Card from "./Card";

export default function Weather(){
    return (<div>

{weatherInfo.map((dayOfWeek) => {
    return (
    <div key={dayOfWeek.weekDay} className="week">
    <Card  day={dayOfWeek.weekDay}
    imageUrl={dayOfWeek.imgURL}
    temp={dayOfWeek.temp}
    />
    </div>)
})}


</div>
    )
}



















// export default function Weather() {
//   return (
//     <div>
//       {weatherInfo.map((day) => {
//         return (
//           <div>
//             <p>{day.weekDay}</p>
//             <img src={day.imgURL} alt="weather" />
//             <p>{day.temp}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
