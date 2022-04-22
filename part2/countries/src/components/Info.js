import { useState, useEffect } from "react"
import axios from "axios"

const Info = ({search}) => {
    const [w, setW] = useState([])
    const apikey = process.env.REACT_APP_API_KEY
    const capital = search.capital
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apikey}`)
        .then(response => {
            setW(response.data)
        })
    },[])
    const lang = JSON.stringify(search.languages)
    const langarr = lang.split(',')
    if(Object.keys(w).length !== 0){
        return(
            <div>
                <h2>{search.name.common}</h2>
                <br />
                capital {search.capital}
                <br />
                area {search.area}
                <br />
                <b>languages:</b>
                <ul>
                    {langarr.map((lang,i)=> <li key={i}>{lang}</li>
                    )}
                </ul>
                <br />
                <div className="emoji">{search.flag}</div>
                <h3>Weather in {search.capital}</h3>
                <p>temperature - {w.main.temp} kelvin</p>
                <img src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} />
                <p>{w.weather[0].main}</p>
            </div>
        )
    }
    return(
        <div>
            <h2>{search.name.common}</h2>
            <br />
            capital {search.capital}
            <br />
            area {search.area}
            <br />
            <b>languages:</b>
            <ul>
                {langarr.map((lang,i)=> <li key={i}>{lang}</li>
                )}
            </ul>
            <br />
            <div className="emoji">{search.flag}</div>
        </div>
    )
}
export default Info;