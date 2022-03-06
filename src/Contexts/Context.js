import { createContext,useState, useEffect } from "react";
// import Data from "../data/data";

const Context = createContext()

export const ContextProvider = ({children}) => {

    // 
    const [data, setData] = useState([])
    const [stat, setStat] = useState({number : data.length, average: 0})
    const [loading, setLoading] = useState(true) 


    useEffect(()=>{
        getData()
    },[])

    const getData = async ()=>{
        
        const res = await fetch(`https://my-json-server.typicode.com/emmabraboke/Feedback-app-api/data`) 

        const data = await res.json()
        setData(data)
        
        //set delay for the reload button
        setTimeout(()=>{
            setLoading(false)
        },900)
    }

    const handleClick = async (id)=>{
       await fetch(`https://my-json-server.typicode.com/emmabraboke/Feedback-app-api/data/${id}`,{method: "DELETE"})
       
       setData((prev)=>prev.filter(item=>item.id!==id))
      
    }

    const handleSubmit = async (e,formData) => {
        e.preventDefault()
        const res = await fetch(`https://my-json-server.typicode.com/emmabraboke/Feedback-app-api/data`,{
            method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
        
        })
        const newdata = await res.json()
        setData([newdata,...data,])
        setFormData({ radio: "",feedback:"",})
        setSelected(null)
    }
     ///
    const [formData, setFormData] = useState({
        radio: "",
        feedback:"",
    })
    
    const handleChange = (e)=> {
        setFormData({
            ...formData,[e.target.name]: (e.target.name==="radio")?parseInt(e.target.value): e.target.value,
        })
        
        e.target.name==="radio" && setSelected(e.target.value)

    }

    const [selected, setSelected] = useState(null)



    const [editFeedback, setEditFeedback] = useState({item: {}, edit: false})
    
    const handleEdit = (id) => {
        setEditFeedback({
            item:data.filter((item)=> item.id===id)[0],edit:true})
    }
    const handleEditChange = (e) => {
        setEditFeedback({...editFeedback, item:{...editFeedback.item,[e.target.name]:e.target.value}})
        
    }
    const handleCancel = async (id) =>{
    const res = await fetch(`https://my-json-server.typicode.com/emmabraboke/Feedback-app-api/data/${id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editFeedback.item)
        })

            const newdata = await res.json() 
            const update = ()=> { 
            const value= data.map( item => {
               return  id===item.id ? {...item,feedback: newdata.feedback, radio: parseInt(newdata.radio)} : item
             }
             )
             // Push edited items to the front
            //  const index = data.filter((item)=> item.id==id)[0] // get the value
            //  const indexValue = data.indexOf(index)  //get index of the value
            //  let newValue = value.splice(indexValue,1)
            //  value.unshift(newValue[0])
             return value
     }

        setEditFeedback({...editFeedback, edit: false})
        setData(update())
        
 
    }
         
    
    return (<Context.Provider value={{data,setData,stat,setStat,handleClick,handleSubmit,handleEdit,
    editFeedback,handleEditChange,handleCancel,handleChange,loading,
    formData,setFormData,selected,setSelected}}>
                {children}
            </Context.Provider>
    )
}

export default Context