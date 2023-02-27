import React, { useState } from "react";
import { AiFillStar } from 'react-icons/ai';

const data = [
  { id: 1, name: "John Doe", date: "2022-12-01",position:"project",rating: 1,status:"done",phone:"111111111",profile:"Sales" },
  { id: 2, name: "Jane Doe", date: "2022-11-20",position:"sales",rating:2,status:"in Progress",phone:"111111111",profile:"Sales"},
  { id: 3, name: "Bob Smith", date: "2022-10-15",position:"sales",rating:3,status:"done",phone:"111111111",profile:"Sales"},
  { id: 4, name: "Alice Johnson", date: "2022-09-01" ,position:"sales",status:"done",rating:4,phone:"111111111",profile:"Sales"},
];

const Table = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [sortType, setSortType] = useState("asc");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [sortOrder, setSortOrder] = useState("desc");

  const handleSortClick = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  const sortedItems = filteredData.slice().sort((a, b) => {
    if (sortOrder === "desc") {
      return b.rating - a.rating;
    } else {
      return a.rating - b.rating;
    }
  });
  // Filter data by date range
  const handleFilter = () => {
    const filteredData = data.filter(
      (item) => item.date >= startDate && item.date <= endDate
    );
    setFilteredData(filteredData);
  };
  const getColor = (workStatus) => { 
    let color
    switch (workStatus) {
    case 'done':
      color = 'rgb(186,255,201)'
      break
    case 'in Progress':
      color = 'rgb(255,223,186)'
      break
    case 'stuck':
      color = 'rgb(186,225,285)'
      break
    }
    return color
    }
  // Sort data by name
  const handleSort = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (a.name < b.name) {
        return sortType === "asc" ? -1 : 1;
      }
      if (a.name > b.name) {
        return sortType === "asc" ? 1 : -1;
      }
      return 0;
    });
    setFilteredData(sortedData);
    setSortType(sortType === "asc" ? "desc" : "asc");
  };
  
  return (


    <div style={{display:"flex",marginLeft:"7%",width:"100%",position:"relative",zIndex:"0"}}>
      <div style={{width:"10%",display:"block",margin:"%"}}>
        <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        </div>
        <div>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        </div>
        <div>
        <button onClick={handleFilter} style={{width:"80px",height:"30px",marginTop:"20px"}}>Filter</button>
        </div>
      </div>
      <div style={{width:"80%"}}>
      <div style={{width:"100%"}}>
        <thead>
          <tr>
            <th onClick={handleSort} className="head">Name</th>
            <th className="head">Date</th>
           
           
            <th className="headsource"><button onClick={handleSortClick}>
        {sortOrder === "desc" ? "↑" : "↓"}
      </button>Rating</th>
       <th className="head">Profile</th>
        <th className="head">Contact No.</th>
            <th className="head">Remark</th>
         
          </tr>
        </thead>
        <div style={{width:"100%"}}>
         
          {sortedItems.map((item) => (
          
          
            <div className='tuple'>
              <div className="container">{item.name}</div>
              <div className="container">{item.date}</div>
              <div className="container">
              <div className="star-container">
<AiFillStar className="star-icon" style={{color : item.rating >= 1 ? 'rgb(253,253,150)' : 'rgb(221,221,221)'}}/>
<AiFillStar className="star-icon" style={{color : item.rating >= 2 ? 'rgb(253,253,150)' : 'rgb(221,221,221)'}}/>
<AiFillStar className="star-icon" style={{color : item.rating >= 3 ? 'rgb(253,253,150)' : 'rgb(221,221,221)'}}/>
<AiFillStar className="star-icon" style={{color : item.rating >= 4 ? 'rgb(253,253,150)' : 'rgb(221,221,221)'}}/>
<AiFillStar className="star-icon" style={{color : item.rating >= 5 ? 'rgb(253,253,150)' : 'rgb(221,221,221)'}}/>

</div></div>
<div className="container">{item.profile}</div>
<div className="container">{item.phone}</div>
<div  className="container"><div className="status-display" style={{ backgroundColor: getColor(item.status)}}>
      <h3>{item.status}</h3>
    </div></div>
    </div>
           
           
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Table;
