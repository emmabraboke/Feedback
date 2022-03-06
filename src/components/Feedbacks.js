import Feedback from "./Feedback"
import FeedbackNumbers from "./FeedbackNumbers"
import Rating from "./Rating"
import {FaQuestion} from "react-icons/fa"
import {Link} from "react-router-dom"
import {useContext} from "react"
import Context from "../Contexts/Context"
import Spinner from "./Spinner"

function Feedbacks() {
    const {data,loading}= useContext(Context)
    return (
        <>
        {loading ? <Spinner /> : <div className="feedback-container">
      <FeedbackNumbers /> {data.length===0 && <div className="noFeedback">No feedback to display</div>}
        
        <div className="container">
            {data.map((item,index)=><Feedback key={item.id} item={item} />)}
        </div>
        <div className="question">
            <Link to="/About" className="link" > <FaQuestion /> </Link>
        </div>
        </div>}
        </>
       
    )
}

export default Feedbacks
