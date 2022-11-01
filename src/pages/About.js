import './css/About.css';
import {IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';


function About() {

        
  return (
<>

<div className='header-about'>
  <Link to="/userprofile">
  <IconButton sx= {{ color: 'white', marginLeft: 5, marginTop: 5}}>
        <Icon icon="eva:arrow-ios-back-fill" />
    </IconButton>
  </Link>
  
    <div className='about-header-title'>
        <text>About</text>
    </div>    
</div>

<div>
    <div className='container'>
     <img src ="./logo1.png" alt="logo" className='logo' />
    </div>
    <div className='container'>
      <p className='title'> ---------- Hippo Campus ----------</p>
    </div>
    <div className='box'>
        <p className='subtitle'>
        Hippo - Campus is a mobile and web based system 
        that is ideal for student, faculty and clinic personnel
        and the software and mobile application enables to 
        work on a various platforms and locations.
        </p>
        <p className='subtitle'>
          Hippo - Campus innovative system provides health 
          record management of the students of the students 
          and faculties. 
        </p>
    </div>
</div>

<div className='members'>
    <p>Developers</p>
        <img src ="./jc.jpg" alt="logo" className='member-one' />
        <img src ="./hannah.jpg" alt="logo" className='member-two' />
        <img src ="./maverick.jpg" alt="logo" className='member-three' />
    <div className='ending'>
     <p>ⓒ All rights reserve 2023</p>
    </div>
    
</div>


    </>

  );
  }


export default About;