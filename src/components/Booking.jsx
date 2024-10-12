import React,{useState,useEffect} from "react"
import Footer from "./Footer"
export default function(){
  const [current,setCurrent]= useState(0)
  const [alert,setAlert] =useState(false)
  const [name,setName]= useState("")
  const [mail,setMail]= useState("")
  const [phone,setPhone]= useState("")
  const [age,setAge]= useState("")
  useEffect(()=>{
    let interval=setInterval(()=>{
      current===5?setCurrent(0):setCurrent(current+1)
    },3000)
    return()=>{
      clearInterval(interval)
    }
  },[current])
  function handle_click(){
    if(name=="" || age=="" || mail=="" || phone.length!==10){
      setAlert(false)
    }
    else{
      setAlert(true)
    }
    setTimeout(()=>{
      setAlert(false)
    },2000)
  }
  function handleChange1(e){
    setName(e.target.value)
  }
  function handleChange2(e){
    setMail(e.target.value)
  }
  function handleChange3(e){
    setPhone(e.target.value)
  }
  function handleChange4(e){
    setAge(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
  }
  let image=[
    "/assets/images/pic1.png",
    "/assets/images/pic2.png",
    "/assets/images/pic3.png",
    "/assets/images/pic4.png",
    "/assets/images/pic6.png",
    "/assets/images/pic7.png"
  ]
  return(
    <div style={{paddingBottom:"50px"}}>
      <h2 className="text-info text-center edit">Welcome to <span className="text-danger">Hawaii</span></h2>
      <h4 className="text-info text-center edit">Turn your <span className="text-danger">dream</span> holiday into a <span className="text-danger">reality</span> !</h4>
       <div>
      {image.map((ele,i)=>{
        return(
          current===i && <img key={i} className="image-set" src={ele} alt="Hawaii"></img>
        )
      })}
    </div>
      <div className="height">
       {alert && <div className="alert alert-success" role="alert">
   Success! your data has been received, we will contact you soon.
</div>}
        </div>
      <div className="trip">
        <h5 className="edit1">Want to go for a memorable holiday?</h5>
        <p className="edit1">Provide Your details to know best deals</p>
        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
          <label> Enter Name</label>
        <input type="text" value={name} onChange={handleChange1} placeholder="Enter name" required></input>
          <label>Phone number</label>
        <input type="text" id="date" value={phone} onChange={handleChange3} placeholder="Enter contact no" pattern="[0-9]{10}" required></input>
          <label>Age</label>
        <input type="text" id="age" value={age} onChange={handleChange4}  placeholder="Enter age"></input>
          <label>Mail</label>
        <input type="mail" id="mail" value={mail} onChange={handleChange2} placeholder="Enter mail" required></input>
        <button onClick={handle_click} className="btn5">Submit</button>
          </form>
      </div>
    </div>
  )
}