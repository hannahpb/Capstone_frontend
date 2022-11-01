import './css/Announcement.css';
import {IconButton} from "@mui/material";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';


function Announcement() {

        
  return (
<>

<div className='header-announcement'>
  <Link to="/dashboard">
  <IconButton sx= {{ color: 'white', marginLeft: 5, marginTop: 5}}>
        <Icon icon="eva:arrow-ios-back-fill" />
    </IconButton>
  </Link>
  
    <div className='announcement-header-title'>
        <text>Announcement</text>
    </div>    
</div>

<div>
    <div className='box'>
      <img src ="./announce.png" alt="logo" className='announce' width={80} height={80}/>
</div>

<div className='announcement'>
  <img src ="./announcement.png" alt="logo" width={430} height={430}/>
</div>

</div>


    </>

  );
  }


export default Announcement;