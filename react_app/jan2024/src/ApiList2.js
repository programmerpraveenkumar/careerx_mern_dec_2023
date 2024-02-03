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
            let response = await fetch("https://reqres.in/api/users?page="+pageNo,{"method":"GET","headers":{"content-type":"application/json"}});
            let res = await response.json();
            console.log(res);

            //below is update state variable in order to display in ui
            setUserList(res['data']);//array of objects from server response
    }
    const selectPageNo=(pageNo)=>{
            // console.log(pageNo);
            getApiUserList(pageNo)
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