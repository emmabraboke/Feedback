import {useContext} from "react"
import Context from "../Contexts/Context"
import Rating from "./Rating"


function EditFeedback() {
    const {editFeedback,handleEditChange,handleCancel} = useContext(Context)
    console.log(editFeedback)
  return (
        <div className="card edit-container">
           <div className="edit-rating">
                <Rating selected={(editFeedback["item"].radio).toString()} handleChange={handleEditChange}/>
           </div>
           
           <div className="textarea-container">
                <textarea id="edit" value={editFeedback["item"].feedback} name="feedback" onChange={handleEditChange}/>
                <button onClick={()=>handleCancel(editFeedback["item"].id)}>submit</button>
            </div>
            
            

        </div>
  )
}

export default EditFeedback;
