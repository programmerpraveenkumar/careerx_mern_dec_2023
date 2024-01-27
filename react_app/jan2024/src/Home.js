export default function Home(){
    let pageName = "HomePage";
    let firstName = "Person name";
    let peopleDetails =[
        {name:"test1","age":15},
        {name:"test2","age":45},
        {name:"test3","age":55},
            ]
            let status = true;
            let red = false;
    return(
        <div>
            <h2 className={(red)?"red":"blue"}>{firstName}</h2>
            <h1>this is home component.</h1>
            {
                peopleDetails.map((obj,index)=>{
                         return<> <div key={index}>{obj.name}</div> <div>{obj.age}</div></>
                })
            }

            {
                (status)?<h1>This is true statement</h1>:<h1>This is false</h1>
            }


        </div>
    )
}