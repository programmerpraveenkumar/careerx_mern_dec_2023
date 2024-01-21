import "./Login.css";//import the css

export default function Login(){

    //function declaration
    const btnClick=()=>{
        alert("ths is frm react");
    }

    return(
        <>
                <div>
                    <input type="text" placeholder="Enter Email"/>
                </div>
                <div>
                    <input type="password" placeholder="Enter pasword"/>
                </div>
                <div>
                    <input onClick={btnClick()} type="button"  value="Click me"/>
                </div>
        </>
    )
}