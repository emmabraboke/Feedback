import {FaTimes, FaEdit} from "react-icons/fa"
import Context from "../Contexts/Context"
import {useContext} from "react"
import { Link } from "react-router-dom"

function Feedback({item}) {
    // Navigate to editing component when edit button is clicked
    const handleScroll = (e) =>{
        e.preventDefault()
        const main = document.getElementById("edit")
        window.scrollTo({
            top: main.offsetTop-100,
            left: 0,
            behavior: "smooth"
        })
    }
    const {handleClick,handleEdit} =useContext(Context)

    return (
        <>
            <div className="card">
            <div className="rating">{item.radio}</div>
            <div className="feedback"><p>{item.feedback}</p></div>
            <FaTimes className="delete" color="rgb(14, 10, 37)" onClick={()=>handleClick(item.id)}/>

            <Link to="/" onClick={handleScroll}><FaEdit className="edit" color="rgb(14, 10, 37)" onClick={()=>handleEdit(item.id)}/></Link>
            </div>
        </>
    )
}

export default Feedback
