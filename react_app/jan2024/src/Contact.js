export default function Contact(){
    let pageName = "Contact Page";
    let person = {"name":"twt","age":45,"mobile":"4585858"}
    return(
        <div>
            <h1>Contact component</h1>
            <h2>{pageName}</h2>
            {person.name} {person.mobile}
        </div>
    )
}