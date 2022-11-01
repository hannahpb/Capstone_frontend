import './css/Policy.css';
import {IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';


function Policy() {

        
  return (
<>

<div className='header-policy'>
    <Link to="/userprofile">
     <IconButton sx= {{ color: 'white', marginLeft: 5, marginTop: 5}}>
        <Icon icon="eva:arrow-ios-back-fill" />
        </IconButton>  
    </Link>


    <div className='policy-header-title'>
        <text>Policy</text>
    </div>    
</div>


<div>
    <p className='definition'>The following information summarizes some of the key policies that govern the University Clinic and nursing care functions. The University Clinic's primary responsibilities are as follows:</p>

    <ul>
        <li>
          <p className='def1'> Students and faculties who are ill or injured should be given first aid or emergency care.</p>
        </li>
        <li>
          <p className='def1'>Students and faculties should be evaluated to detect early signs and symptoms of health issues that may interfere with their learning and teaching.</p>
        </li>
        <li>
          <p className='def1'>Administer nursing care in accordance with the students' and employees' identified nursing needs.</p>
        </li>
        <li className='def1'>Plan, implement, and assess a health education program for students and faculties.</li>
    </ul>
</div>

<div>
    <div>
        <p className='subject'>Policy on Accident and Emergencies</p>
    <ul>
        <li>
            <p className='def1'>In the event of an accident or an emergency, the University Nurse or other school personnel must notify the parents or guardians. Please ensure that all contact information is up to date with the university so that we can reach you in an emergency. </p> 
        </li>
          
        <li>
            <p className='def1'>Before transferring sick or injured students to an emergency care institution, the University Nurses should ensure that their parents or guardians have authorized the administration of emergency medical treatment.</p>
        </li>
    </ul>
    
    </div>
      <div>
            <p className='subject'>Confidentiality Policy</p>
        <ul>
          <li>
            <p className='def1'>Except with written permission from the parents or guardians, information in the student's and faculties University Health Record will not be released to third parties.</p>
          </li>
        </ul>
      </div>
    
</div>

    </>

  );
  }


export default Policy;