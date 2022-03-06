import Context from "../Contexts/Context"
import {useContext} from "react"
function FeedbackNumbers() {
    const {data} = useContext(Context)
    const avg = ()=>{
        let num=0
        data.forEach(item=>num+=parseInt(item.radio))
        const average=(num/data.length).toFixed(1) //convert to 1 decimal
        return data.length!==0 ? average :  0
    }
    return (
        <div className="feedbacknumber-container">
             <div className="feedbacknumbers">
             <p className="average">Average rating : {avg()} </p>
             <p className="number"> {data.length} Review{data.length>1 && "s"}</p>   
        </div>
        </div>
       
    )
}

export default FeedbackNumbers
