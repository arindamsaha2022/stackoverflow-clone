import React from 'react'
import Widget from "./Widget";
import WedgetTags from "./WedgetTags ";
import "./RightSideBar.css";


const Rightbar = () => {
  return (
    <div className='right-sidebar'>
      <Widget/>
      <WedgetTags/>
    </div>
  )
}

export default Rightbar