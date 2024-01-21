export default function Home(){
    let pageName = "HomePage";
    let firstName = "Person name";
    let peopleDetails =[
        {name:"test1","age":15},
        {name:"test2","age":45},
        {name:"test3","age":55},
            ]
    return(
        <div>
            <h2>{firstName}</h2>
            <h1>this is home component.</h1>
            {
                peopleDetails.map((obj,index)=>{
                         return<> <div>{obj.name}</div> <div>{obj.age}</div></>
                })
            }
        </div>
    )
}