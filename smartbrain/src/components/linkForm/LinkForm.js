import React from 'react';
//import './LinkForm.css'
import 'tachyons'



const LinkForm =({onInputChange,onInputSubmit})=>{

    return (
     <div className="pa2-l">
    
      <div className="cf">
        <label className="clip" htmlFor="email-address">Image Link</label>
        <input onChange={onInputChange} className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Enter Image Link" type="text" name="image-form"/>
        <button onClick={onInputSubmit} className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns">Submit</button>
      </div>
  </div>
    );
  }
    

export default LinkForm;
