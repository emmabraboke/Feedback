import { createContext } from "react";

const   AddFeedbackContext = createContext()

export const AddFeedbackContextProvider = ({children}) => {
    const handleChange = (e)=> {
        setFormData({
            ...formData,[e.target.name]: (e.target.name==="radio")?parseInt(e.target.value): e.target.value,
        })
        
        e.target.name==="radio" && setSelected(e.target.value)
    }
    return <AddFeedbackContext.Provider value={{handleChange}}>

    </AddFeedbackContext.Provider>
}

export default AddFeedbackContext