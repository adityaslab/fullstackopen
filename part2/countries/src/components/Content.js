import Country from "./Country";
import Info from "./Info";
import '../App.css'

const Content = ({search, setSearch}) => {

    if(search.length === 1){
        return(
            <Info search={search[0]}/>
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