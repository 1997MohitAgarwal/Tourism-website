import React from "react"

export default function Item(props){
  return(
    <div className="card" style={{width: '19rem',height:"20rem"}}>
  <img style={{height:"9rem"}} src={props.image} className="card-img-top" alt={props.title}/>
  <div className="card-body">
    <h5 className="card-title text-info">{props.title}</h5>
    <p className="card-text">{props.description.length<35?props.description+"Visit for more!":props.description}</p>
    <a href={props.url} target="_blank" style={{float:"right",borderRadius:"50px"}} className="btn btn-info button1"><i className="fa fa-arrow-right"></i></a>
  </div>
</div>
  )
}