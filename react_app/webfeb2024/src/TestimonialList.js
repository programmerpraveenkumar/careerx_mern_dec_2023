import { useContext, useEffect } from "react"
import { DateContext } from "./ContextConfig";

export default function TestimonialList(props){
    const [name,setName]  = useContext(DateContext);
    const updateName=()=>{
            setName("value is updated in testimonial context");
    }

    return(
        
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h6 className="text-primary text-uppercase">// Testimonial component//</h6>
                <h1 className="mb-5">Our Clients Say! and date is {name}</h1>
            </div>
            <button onClick={()=>{updateName()}}>Click me to update context</button>
            <div className="owl-carousel testimonial-carousel position-relative">
                {
                    props.userList.map((obj,index)=>{
                            return(
                                <div key={index} className="testimonial-item text-center">
                                <img className="bg-light rounded-circle p-2 mx-auto mb-3" src={obj.img} />
                                <h5 className="mb-0">{obj.name}</h5>
                                <p>Profession</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">{obj.descripton}</p>
                                </div>
                            </div>
                            )
                    })
                }
               
              
               
            </div>
        </div>
    </div>
   
    )
}