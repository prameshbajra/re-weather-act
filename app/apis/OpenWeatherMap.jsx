import axios from "axios";

const apiKey = "5166439cd0e20c4d37126f6a088eb3ea";
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/find?appid=${apiKey}&units=metric`;

export const getTemp = (locationVal) => {
    const encodeLocation = encodeURIComponent(locationVal);
    const requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

    return axios.get(requestURL)
        .then((res) => {
            if (res.data.list.length === 0) {
                throw new Error(res.data.message);
            } else {
                return res.data.list[0].main.temp;
            }
        }, (res) => {
            throw new Error(res.data.message)
        });
}
