import sunny from "./weatherImages/01.svg";
import rainy from "./weatherImages/17.svg";
import storm from "./weatherImages/09.svg";

const weatherInfo = [
  {
    weekDay: "Monday",
    imgURL: sunny,
    temp: "36C",
  },
  {
    weekDay: "Tuesday",
    imgURL: storm,
    temp: "32C",
  },
  {
    weekDay: "Wednesday",
    imgURL: rainy,
    temp: "35C",
  },
  {
    weekDay: "Thursday",
    imgURL: rainy,
    temp: "45C",
  },
  {
    weekDay: "Friday",
    imgURL: sunny,
    temp: "36C",
  },
  {
    weekDay: "Saturday",
    imgURL: storm,
    temp: "37C",
  },
  {
    weekDay: "Sunday",
    imgURL: rainy,
    temp: "39C",
  },
];

export default weatherInfo;
