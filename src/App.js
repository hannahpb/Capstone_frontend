import React from 'react';
import { Route, Routes} from 'react-router-dom';


import AddStudent from './pages/AddStudent.js';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginSignup from "./pages/LoginSignup";
import ForgotPassword from "./pages/ForgotPassword";
import Verification from "./pages/Verification";
import CreateNewPassword from "./pages/CreateNewPassword";
import Form from "./pages/Form";
import DataVisual from './pages/DataVisual';
import Appointment from './pages/Appointment';
import DentalAppointment from './pages/DentalApp'
import AptIndex from './pages/AppointmentIndex';
import Edit from './pages/Edit'
import AddDoctor from './pages/AddDoctor';
import EditDoc from './pages/EditDoc';
import Dashboard from './pages/ViewStudent.js';
import Policy from './pages/Policy.js';
import Announcement from './pages/Announcement.js';

import axios from 'axios';
import MedCert from './pages/MedCert.js';
import EditMedCert from './pages/EditMedCert.js';
import UserProfile from './pages/UserProfile.js';
import About from './pages/About.js';
import MedicalRecords from './pages/MedicalRecords.js';


function App() {
  axios.defaults.baseURL = "http://localhost:8000/";
  return (
    
    <div className="App">
          <Routes>
            <Route path="/"element={<LoginSignup/>} />
            <Route path="/home"element={<Home />} />
            <Route path="/apt"element={<Appointment/>} />
            <Route path="/login"element={<Login/>} />
            <Route path="/signup"element={<Signup/>} />
            <Route path="/forgotpassword"element={<ForgotPassword/>} />
            <Route path="/verification"element={<Verification/>} />
            <Route path="/createnewpassword"element={<CreateNewPassword/>} />
            <Route path="/form"element={<Form/>} />
            <Route path="/datavisual"element={<DataVisual/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/add-students" element={<AddStudent/>} />
            <Route path="/policy" element={<Policy/>} />
            <Route path="/announcement" element={<Announcement/>} />
            <Route path="/medicalrecords" element={<MedicalRecords/>} />

            <Route path="/dentalapp" element={<DentalAppointment/>} />
            <Route path="/appindex" element={<AptIndex/>} />
            <Route path="/edit" element={<Edit/>} />
            <Route path="/add-doctors" element={<AddDoctor/>} />
            <Route path="/med" element={<MedCert/>}/>
            <Route path="/editmed" element={<EditMedCert/>}/>
            <Route path="/userprofile" element={<UserProfile/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/edit-doctor" element={<EditDoc/>} />
          </Routes>
    </div>
  );
}

export default App;
