import Button from "./Button"
import Rating from "./Rating"
import {useContext} from "react"
import Context from "../Contexts/Context"
import EditFeedback from "./EditFeedback"


const AddFeedback = () =>{
    const {handleSubmit,editFeedback,formData,handleChange,setSelected,selected} = useContext(Context)
    
    const isdisabled = formData.feedback.length <=10 
    
    
    return(
        <div className="addFeedback">
        
        {!editFeedback.edit ? <form className="card form-card" onSubmit={(e)=>handleSubmit(e,formData)}>
          <div className="review">
            <h3> How do you rate your service with us </h3>
            <Rating selected={selected} setSelected={setSelected} handleChange={handleChange}/>
            
            <div className="review-container">  
                <div><input type="text" placeholder="write a review" onChange={handleChange}  value={formData.feedback} name="feedback" id="feedback" required /></div>

                <Button color="black" backgroundColor="rgb(236, 221, 221)" width="55px" selected={selected} isdisabled={isdisabled}>
                submit
            
            </Button>
            </div>
           </div>
        </form>
        :
       
           <EditFeedback />
       }
       
        </div>
    )
}

export default AddFeedback