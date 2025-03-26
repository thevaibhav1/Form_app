import React, { use, useEffect, useState } from "react";
const FetchUserData=()=>{
    const [userdata,setUserData]=useState(null);
     const li=<p>name</p>
    useEffect(()=>{
        const fetchData=async()=>{
            const response =await fetch("https://xcountries-backend.azurewebsites.net/all");
            if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
            const data=await response.json();
            data.map((user)=>{ return console.log(user.name)
            })
        }
        fetchData();
    })
    return(
        <div>
            <h2>{li}</h2>
            <h2>Fetch user data</h2>
        </div>
    )
}

export default FetchUserData;