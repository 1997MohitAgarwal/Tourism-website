import React from "react"
import Item from "./Item"
import {useState,useEffect} from "react"
export default function Highlights(props){
  const [data,setData]=useState([])
  async function fetch_data(){
    let data= await fetch("https://web-dev.dev.kimo.ai/v1/highlights")
    let parsedData=await data.json()
    setData(parsedData)
  }
  useEffect(()=>{
    fetch_data()
  },[])
  return(
    <div>
      <h5 className="wow2">{props.heading}</h5>
      <div className="container">
        <div className="row">
         {
          data.map((ele,i)=>{
            return(
              <div key={ele.title} className="col-md-4">
              <Item image={ele.image} title={ele.title} description={ele.description} url={i===0?"https://www.surfertoday.com/surfing/the-best-hawaiian-surf-spots":i===1?"https://traveltriangle.com/blog/hawaiian-festivals/":"https://bigislandguide.com/volcanoes-national-park-lava-viewing"}/>
          </div>
            )
          })
         }
      </div>
     </div>
    </div>
  )
}