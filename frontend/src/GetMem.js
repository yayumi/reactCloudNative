import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function GetMem () {
  const [memInfo, setMemInfo] = useState([]);
  const getmemUrl = process.env.REACT_APP_GETMEM_URL || 'http://localhost:3001/api/getmem';

  const fetchMemInfo = async () => {
    const res = await axios.get(getmemUrl);
    setMemInfo(res.data);
  };

  useEffect(() => {
    fetchMemInfo();
  }, []);

  const renderMemInfo = Object.values(memInfo).map((mem, i) => {
    console.log(mem);
    return (
      <div  
        className="card"
        style={{ width: '30%', marginBottom: '20px'}}
        key={i}
      >
        <div className='card-body'>
          <h3>{mem / 1024 /1024 /1024} GB</h3>
        </div>
      </div>
    );
  });

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderMemInfo}
    </div>
  )

}