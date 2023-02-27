import React from 'react'

const Add = () => {
    function handleChange(event) {
    }
  return (
    <div style={{}}>
   <h6 style={{fontFamily:"poppins",marginTop:"40px",marginBottom:"40px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}></h6>
   <div style={{display:"flex"}}>
<div style={{width:"45%"}}>
<div style={{display:"flex"}}>
    
</div>
</div>


<div style={{width:"45%"}}>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Date</div>
    <div style={{width:"70%",height:"50px"}}><input name="podiumnon" onChange={handleChange} style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Status</div>
    <div style={{width:"70%",height:"50px"}}><input name="approvedbanks" onChange={handleChange} style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Rating</div>
    <div style={{width:"70%",height:"50px"}}><input name="clubhousesize" onChange={handleChange} style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Profile</div>
    <div style={{width:"70%",height:"50px"}}><input name="constructiontype" onChange={handleChange} style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Contact No.</div>
    <div style={{width:"70%",height:"50px"}}><input name="towerheights" onChange={handleChange} style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Remark</div>
    <div style={{width:"70%",height:"50px"}}><input name="liftpertower" onChange={handleChange} style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>






</div>
</div>
  

<div style={{marginLeft:"30%",marginTop:"1px"}}> <button  class="btn">Create</button></div>
  </div>
  

  
  



 

  
  
  

  )
}

export default Add