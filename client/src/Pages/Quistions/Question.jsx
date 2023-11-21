import React from 'react';
import '../../App.css';
import LeftSidebar from '../../components/Leftsidebar/LeftSidebar';
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar';
import RightSidebar from '../../components/RightSidebar/Rightbar';



const Quistions = () => {
    return (
        <div className='home-container-1'>
          <LeftSidebar/>
          <div className='home-container-2'>
            <HomeMainbar/>
            <RightSidebar/>
          </div>
        </div>
      );
}

export default Quistions