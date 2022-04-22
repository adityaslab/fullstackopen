import Country from "./Country";
import '../App.css'

const Content = ({search, setSearch}) => {
    if(search.length === 1){
        const lang = JSON.stringify(search[0].languages)
        const langarr = lang.split(',')
        console.log(langarr)
        return(
            <div>
                <h2>{search[0].name.common}</h2>
                <br />
                capital {search[0].capital[0]}
                <br />
                area {search[0].area}
                <br />
                <b>languages:</b>
                <ul>
                    {langarr.map((lang,i)=> <li key={i}>{lang}</li>
                    )}
                </ul>
                <br />
                <div className="emoji">{search[0].flag}</div>
            </div>
        )
    }
    else{
        return(
        <ul>
            <Country search={search} setSearch={setSearch} />
        </ul>
        )
    }
}
export default Content