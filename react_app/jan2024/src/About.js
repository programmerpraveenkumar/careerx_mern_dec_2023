export default function About(){
    let pageName = "About Page";
    let cityDetails = [
        {"name":"test1","pincode":5858,peopleCount:102},
        {"name":"test2","pincode":4858,peopleCount:105},
        {"name":"test4","pincode":6858,peopleCount:92}
    ];
    return(
        <div>
            <h1>About component</h1>
            <h2>{pageName}</h2>
            {
                cityDetails.map((obj,index)=>{
                    // if peopleCount  more than 100 add red color or blue color
                    return <div  key={index} className={obj.peopleCount>100?"red":"blue"}>{obj.name} {obj.pincode} {obj.peopleCount}</div>
                })
            }
        </div>
    )
}