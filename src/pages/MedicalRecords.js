import './css/MedicalRecords.css';
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
         <img src="/electronic.png" alt="bg" width={900} height={500}></img>
        </div> 

        <div className='list-medical'>
          <ol style={{ listStyle: 'none'}}>
            <li className='cbc'> Complete Blood Count (CBC)</li>
            <li className='xray'> X-Ray</li>
            <li className='hepa'> Hepa B Screening</li>
            <li className='ecg'> ElectroCardiogram (ECG)</li>
            <li className='urin'> Urinalysis</li>     
          </ol>
        </div>
</div>














  );
}


export default MedicalRecords;
