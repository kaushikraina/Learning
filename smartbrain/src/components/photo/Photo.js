import React from 'react';
//import './LinkForm.css'
import 'tachyons'



const Photo=({imgLink})=>{

    return (
     <div className="center">
      <img alt='Image' src={imgLink} />
     </div>
    );
  }
    

export default Photo;
