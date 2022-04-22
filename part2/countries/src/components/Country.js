const Country = ({search, setSearch}) => {
    return(
        <div>
            {search.map((country)=><li>{country.name.common} <button onClick={()=>setSearch([country])}>show</button></li>)}
        </div>
    )
}
export default Country