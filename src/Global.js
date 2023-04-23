import React from 'react'
import { useState,useEffect } from "react";
function Global() {
  const [dataj, setDataj] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/images/new.json?limit=30')
      .then(response => response.json())
      .then(data => setDataj(data.data.children));
  }, []);
  
    return (
      <div>
        <ul>
          {dataj.map(item => (
            <div className='container card m-4' key={item.data.id}>
              <div className='row m-2'>
                <div className='col'>
                  <img style={{maxWidth:'500px'}} src={item.data.url} alt={item.data.title} title={item.data.title}/>
                </div>
                <div className='col'>
                  <h5>r/{item.data.subreddit}</h5>
                  <h1>{item.data.title}</h1>
                  <p>Upvotes: {item.data.ups}</p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }

export default Global