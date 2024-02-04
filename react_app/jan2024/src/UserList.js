export default function UserList (props){

    return(
        <>
        <h1>{props.pageTitle}</h1>
        {props.detail.map((o,i)=>{                
            return <> <img src={o.avatar}/> <h1 key={i}>{o.first_name}</h1></>
         })
        }
        </>
    )
}