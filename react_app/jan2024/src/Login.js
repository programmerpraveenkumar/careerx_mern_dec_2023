import { useRef } from "react";
import "./Login.css";//import the css

export default function Login(){
    let emailTxt = useRef();///react hooks
    let pwdtxt = useRef();
    let h1Txt = useRef();
    //function declaration
    const btnClick=async()=>{
        let val = emailTxt.current.value;//reading value from textbox
        let pwd = pwdtxt.current.value;
        if(val==""){
            // alert("please enter in Name");
            h1Txt.current.innerHTML = "please enter the email";
        }else if(pwd == ""){
            h1Txt.current.innerHTML = "please enter the Password";
        }else{               
            let data = {
                "email": val,
                "password": pwd
            }
            let response = await fetch("https://reqres.in/api/login",{
                "method":"POST",
                body:JSON.stringify(data),
                headers:{"content-type":"application/json"}
            });

            let json = await response.json();//to get the status code
            
            if(response.status == 200){//200 is success
                h1Txt.current.innerHTML = json['token'];
            }else{//failure status code
                h1Txt.current.innerHTML = json['error'];
            }        
        // console.log(json['error']);
        }
        // alert("ths is frm react");
    }

    return(
        <>
                <div>
                    <input  ref={emailTxt} type="text" placeholder="Enter Email"/>
                </div>
                <div>
                    <input ref={pwdtxt} type="password" placeholder="Enter pasword"/>
                </div>
                <div>
                    <input onClick={()=>{btnClick()}} type="button"  value="Click me"/>
                </div>
                <h1 ref={h1Txt}></h1>
        </>
    )
}