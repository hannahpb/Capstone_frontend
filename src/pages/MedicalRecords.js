import './css/Medicalrecords.css';
import {IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import {Link} from 'react-router-dom'


function MedicalRecords() {
  return (
    <div className='full-body'>
        <Link to="/userprofile">
             <IconButton sx= {{ color: 'white', ml:10, mt:5}}>
              <Icon icon="eva:arrow-ios-back-fill" />
              </IconButton>
        </Link>
        <div  className='record-text'>
            <text>Medical Records</text>
        </div>  

        <div class="medical-image">
         <img src="/electronic.png" alt="bg" width={1000} height={600}></img>
        </div> 

        

    </div>















  );
}


export default MedicalRecords;
