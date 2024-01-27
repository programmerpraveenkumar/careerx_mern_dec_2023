import { useRef, useState } from "react";
import "./Login.css";//import the css

export default function Login2(){
    const[email,setEmail] = useState();
    const[pwd,setPwd] = useState();
    //function declaration
    const btnClick=()=>{
        // let val = emailTxt.current.value;//reading value from textbox
        // let pwd = pwdtxt.current.value;
        // if(val==""){
        //     // alert("please enter in Name");
        //     h1Txt.current.innerHTML = "please enter the email";
        // }else if(pwd == ""){
        //     h1Txt.current.innerHTML = "please enter the Password";
        // }else{
        //     h1Txt.current.innerHTML = "everything is fine";
        // }
        // console.log(val,pwd);
        // alert("ths is frm react");
    }

    return(
        <>
                <div>
                    <input  onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email"/>
                </div>
                <div>
                    <input onChange={(e)=>setPwd(e.target.value)} type="password" placeholder="Enter pasword"/>
                </div>
                <div>
                    <input onClick={()=>{btnClick()}} type="button"  value="Click me"/>
                </div>
                <h1></h1>
        </>
    )
}