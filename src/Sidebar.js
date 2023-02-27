import React from 'react';
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div style={{width:"6%",borderRight:"",height:"100vh",position:"fixed",boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",background:"white"}}>
       <Link to={`/Add`} style={{textDecoration: 'none'}}><div className='PvRhvb-ibnC6b' ><img src="https://i.imgur.com/u1xEU6I.png"style={{width:"20px",marginRight:"10px"}}/>Add</div></Link> 
        
       <Link to={`/Active`} style={{textDecoration: 'none'}}><div className='PvRhvb-ibnC6b'><img src="https://i.imgur.com/C43Jfhc.png"style={{width:"20px",marginRight:"10px"}}/>Active</div></Link> 
       <Link to={`/Active`} style={{textDecoration: 'none'}}><div className='PvRhvb-ibnC6b'><img src="https://i.imgur.com/dWFaACW.png"style={{width:"20px",marginRight:"10px"}}/>Archives </div></Link> 
        <div className='PvRhvb-ibnC6b'><img src="https://i.imgur.com/BYEp8RW.png"style={{width:"20px",marginRight:"10px"}}/>Trash </div>
        
    </div>
  )
}

export default Sidebar