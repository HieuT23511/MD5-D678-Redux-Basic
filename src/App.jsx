import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {getData} from "./store.jsx";

function App() {
    const dispatch = useDispatch()
    const displayInfo = useSelector(state => {
        return state;
    })
    console.log(displayInfo)
    return (
        <>
            {displayInfo.length>0 && displayInfo.map((item,key)=>(
                <h3 key={key}>{item.name} : {item.description}</h3>
            ))}
            <br/>
            <button onClick={() => {
                dispatch(getData())
            }
            }>Test
            </button>
        </>
    )
}
export default App
