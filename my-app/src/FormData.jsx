import React, {useState} from "react";
const FormData=()=>{
    const [data ,setData]=useState({
        name:'',
        email:'',
        phone:''
    })
    const [showdata,setShowData]=useState([])
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const handleName=(e)=>{
        setData((prevData)=>{
            return {...prevData,name:e.target.value}
        })
    }
     const handleEmail=(e)=>{ 
        setData((PrevData)=>{
            return {...PrevData,email:e.target.value}
        })
    }
     const handlePhone=(e)=>{
        setData((PrevData)=>{
            return {...PrevData,phone:e.target.value}
        })
    }
    const saveData=(e)=>{
        e.preventDefault()
        setShowData([...showdata,data])
        console.log(data)
        setData({
            name:'',
            email:'',
            phone:''
        })
    }
    return(
        <>
        <div>
            <form onSubmit={saveData}      >
                Name: <input type="text" name="Name" onChange={handleName}/>
                <br/>
                Email: <input type="email" name="Email" onChange={handleEmail}/>
                <br/>
                Phone: <input type="tel" name="Phone" onChange={handlePhone}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
        {showdata && showdata.map((item,index)=>{
            return <ul key={index}>
                <li >{item.name}</li>
                <li>{item.email}</li>
                <li>{item.phone}</li>
            </ul>
        })}
        </>
    )
}
export default FormData