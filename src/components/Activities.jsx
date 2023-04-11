import React from "react"
import {useState,useEffect} from "react"
export default function Activities(props){
  const [data,setData]=useState({})
  const [data1,setData1]= useState([])
  async function fetch_data(){
    let data= await fetch(`https://web-dev.dev.kimo.ai/v1/activities/${props.type}`)
    let parsedData=await data.json()
    setData(parsedData)
    setData1(parsedData.activities)
    }
  useEffect(()=>{
    fetch_data()
  },[])
  return(
    <div>
     <h2 style={{fontFamily:"kalam",margin:"26px 0 40px 0",fontWeight:"bold"}} 
   className="text-center text-info">{data.name} in Hawaii!</h2>
     <img className="image-set1" src={data.image} alt={data.name}></img>
      <div className="setting">
        <p className="innersetting">{data.description}</p>
      </div>
      <h4 style={{fontFamily:"kalam",margin:"26px 0 40px 0"}} className="text-center text-info">{props.activity}</h4>
      <div className="outerbox">
      <div className="box">
      {data1.map((ele,i)=>{
      return(
        <div key={i} className="innerbox">
          <ul className="text-center">
            <li className="listStyle">{ele.name}</li>
          </ul>
          </div>
      )
      })}
        </div>
      <div className="image-box">
        <img className="img-set" src={props.image} alt={data.name}></img>
    </div>
    </div>
    </div>
  )
}