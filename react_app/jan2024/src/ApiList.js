import { useState } from "react";

export default function ApiList(){
    const[userList,setUserList]=  useState();

    const getApiUserList =async ()=>{
            let response = await fetch("https://reqres.in/api/users?page=2",{"method":"GET"});
            let json = await response.json();
            console.log(json);

            //below is update state variable in order to display in ui
            setUserList(json['data']);//array of objects
    }

    return(
        <>
            <h1>Api List</h1>
            <button onClick={()=>getApiUserList()}>Get Api</button>
            {userList && userList.map((o,i)=>{                
                    return <> <img src={o.avatar}/> <h1 key={i}>{o.first_name}</h1></>
            })

            }
        </>
    )

}