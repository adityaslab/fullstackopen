const Content = ({search}) => {
    if(search.length === 1){
        const lang = JSON.stringify(search[0].languages)
        const langarr = lang.split(',')
        console.log(langarr)
        return(
            <div>
                <h2>{search[0].name.common}</h2>
                <br />
                capital {search[0].capital[0]}
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
            {search.map((country)=><li>{country.name.common}</li>)}
        </ul>
        )
    }
}
export default Content