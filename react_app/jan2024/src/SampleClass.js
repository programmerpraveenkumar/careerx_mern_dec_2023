import React from "react";
export default class SampleClass extends React.Component{
    constructor(){
        super();//parent class constructor
        //declare state variable
        //state variable
        this.state={
            "name":"react cls page",
            "age":"", 
            status:false,           
            "personList":[{"name":"tst1"},{"name":"tst2"},{"name":"tst3"}],
            "userList":[]
            };
            this.getApiUserList();

    }

     async getApiUserList(){
        let response = await fetch("https://reqres.in/api/users?page=2",{"method":"GET"});
        let json = await response.json();
        console.log(json);
        this.setState({"userList":json['data']});
        //below is update state variable in order to display in ui
    //    setUserList(json['data']);//array of objects
    }
    toggleStatus(){
        if(this.state.status){
            this.setState({"status":false});//updates state variable
        }else{
            this.setState({"status":true});//updates state variable
        }
    }
    
    
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <h1>this class Component</h1>
                <input type="text"/>
                {
                    this.state.personList.map((obj,index)=>{
                        return<h1 key={index}>{obj.name}</h1>
                    })
                }
                {
                    this.state.status?<h1>H1 showing</h1>:false
                }
                <button onClick={()=>this.toggleStatus()} >Show and hide</button>
                {this.state.userList && this.state.userList.map((o,i)=>{                
                    return <> <img src={o.avatar}/> <h1 key={i}>{o.first_name}</h1></>
                 })
                }
            </div>
        )
    }

}

