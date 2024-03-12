import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './ApiList2.css';
/*
useRef
useState
useEffect->whenever a change happens in state variable
    useEffect(()=>{},[state_variable])
*/

export default function ApiList2(){
    const[userList,setUserList]=  useState();

    useEffect(()=>{
        console.log("update.",userList);//print the variable
    },[userList]);

    //below method will trigger during page load.oly one time
    useEffect(()=>{
        console.log("update. empty array",);//print the variable
    },[])

    const getApiUserList =async (pageNo)=>{
            let token_val = localStorage.getItem("token");
            let response = await fetch("http://localhost:8080/user",
            {"method":"GET","headers":{"content-type":"application/json","token":token_val}});
            let json = await response.json();
            console.log(json);            
    }
    const selectPageNo=(pageNo)=>{
            // console.log(pageNo);
            getApiUserList(pageNo)
    }
    //call  this method during the logout button click,
    const logout=()=>{
        //remove the token from the localstorage
        localStorage.removeItem('token');
    }
    return(
        <>
            <h1>Api List</h1>
            {/* whn we change any options onChange will be triggerd */}
            <select onChange={(e)=>selectPageNo(e.target.value)}>
                <option value="1">Page1</option>
                <option  value="2">Page2</option>
                <option  value="3">Page3</option>
                <option  value="4">Page4</option>
            </select>
            <button onClick={()=>getApiUserList()}>Get Api</button>            

            {userList && userList.length == 0?<h1>No usr found</h1>:null}

            {/* when userlist has data thn oly it will go for map iteration  */}
            {userList && userList.map((o,i)=>{                
                return <div  key={i}> <NavLink to={"/userDetail?userId="+o.id}> <img src={o.avatar}/> <h1>{o.first_name}{o.last_name}</h1></NavLink></div>
            })
            }
        </>
    )

}

// <NavLink to="userDetail"></NavLink>
//<a href="userDetail"></a>