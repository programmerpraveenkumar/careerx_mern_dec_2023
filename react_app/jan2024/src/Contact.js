import { useState } from "react";

export default function Contact(){
    let pageName = "Contact Page";
    let person = {"name":"twt","age":45,"mobile":"4585858"}
    //for updting the value for the variable need to use state hook.
   const[name,setName] = useState("some value");//state hook
   const[age,setAge] = useState(0);
   const updateName=()=>{     
       // pageName ="update value" ;
        setName("sdkfhksdhfkldj");//set the value for the variable
   }
    return(
        <div>
           <h1>{name}</h1>
           <button onClick={()=>updateName()}>Click me </button>
            <h1>Contact component</h1>
            <h2>{pageName}</h2>
            {person.name} {person.mobile}
        </div>
    )
}