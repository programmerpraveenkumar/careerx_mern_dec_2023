import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function UserDetail(){   
    const [searchParams] = useSearchParams();//get the query param from the url
    const[userDetail,setUserDetail]=  useState();
    
  
    const loadDetail=()=>{
        // Get a specific query parameter
        const userId = searchParams.get('userId');//from the url.        
        getApiUserDetail(userId);//api csll for get the detail        
    }



    const getApiUserDetail =async (userId)=>{
        let response = await fetch("https://reqres.in/api/users/"+userId,{"method":"GET","headers":{"content-type":"application/json"}});
        let json = await response.json();
        // console.log(json);

        //below is update state variable in order to display in ui
        setUserDetail(json['data']);// objects from server
    }
    return(
        <div>
            <h1>UserDetail</h1>
            <button onClick={()=>loadDetail()}>Load Detail</button>

            <div>
            <div>Name is {userDetail && userDetail['first_name']}</div>
            <div>Email is {userDetail && userDetail['email']}</div>
            <div>Id is  {userDetail && userDetail['id']}</div>
            <img src={userDetail &&  userDetail['avatar']}/>
            </div>
        </div>
    )
}