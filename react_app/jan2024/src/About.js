export default function About(){
    let pageName = "About Page";
    let cityDetails = [
        {"name":"test1","pincode":5858},
        {"name":"test2","pincode":4858},
        {"name":"test4","pincode":6858}
    ];
    return(
        <div>
            <h1>About component</h1>
            <h2>{pageName}</h2>
            {
                cityDetails.map((obj,index)=>{
                    return <div key={index}>{obj.name} {obj.pincode}</div>
                })
            }
        </div>
    )
}