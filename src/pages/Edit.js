import { useLocation } from 'react-router';
import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';

const Edit = ({userdata}) => {
    const location = useLocation();
    const history = useNavigate();
    const [errorInput, setError] = useState([]);
    const state = location.state;
    const [studentInput, setStudent] = useState(state);
    

    const handleInput = (e) => {
        e.persist();
        setStudent({...studentInput, [e.target.name]: e.target.value });
    }


    const updateStudent = (e) => {
        e.preventDefault();
        
        const student_id = state.id;
        const data = {
            fname: studentInput.fname || state.fname,
            lname: studentInput.lname || state.lname,
            bday: studentInput.bday || state.bday,
            sex: studentInput.sex || state.sex,
            phone: studentInput.phone || state.phone,
            address: studentInput.address || state.address,
            religion: studentInput.religion || state.religion, 
            cvs: studentInput.cvs || state.cvs,
        }
        axios.put(`/api/update-student/${student_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                history('/dashboard');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandetory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history('/dashboard');
            }
        });
    }
    return(
        <>
        <Navbar />
        <div className="col-sm-6 offset-sm-3">
            <h4>Edit Students 
                <Link to={'/dashboard'} className="btn btn-danger btn-sm float-end"> BACK</Link>
             </h4>
            <form onSubmit={(e) => updateStudent(e)} >
                <div className="form-group mb-3">
                    <label>First Name</label>
                    <input style={{ height:50 }} type="text" name="fname" onChange={(e) => handleInput(e)} value={studentInput.fname} className="form-control" />
                    <span className="text-danger">{errorInput.fname}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Last Name</label>
                    <input style={{ height:50 }} type="text" name="lname" onChange={(e) => handleInput(e)} value={studentInput.lname} className="form-control" />
                    <span className="text-danger">{errorInput.lname}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Birthdate</label>
                    <input type="text" style={{ height:50 }} name="bday" onChange={(e) => handleInput(e)} value={studentInput.bday}  className="form-control" readOnly/>
                    <span className="text-danger">{errorInput.bday}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Sex</label>
                    <select type="text" name="sex" onChange={(e) => handleInput(e)} value={studentInput.sex} className="form-control">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label>Phone</label>
                    <input type="text" style={{ height:50 }} name="phone" onChange={(e) => handleInput(e)} value={studentInput.phone}  className="form-control" />
                    <span className="text-danger">{errorInput.phone}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Address</label>
                    <input type="text" style={{ height:50 }} name="address" onChange={(e) => handleInput(e)} value={studentInput.address}  className="form-control" />
                    <span className="text-danger">{errorInput.phone}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Religion</label>
                    <select type="text"  name="religion" onChange={(e) => handleInput(e)}  value={studentInput.religion} className="form-control">
                        <option value="RomanCatholic">Roman Catholic</option>
                        <option value="Iglesia">Iglesia</option>
                        <option value="BornAgain">Born Again</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                    <span className="text-danger">{errorInput.religion}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Civil Status</label>
                    <select type="text"  name="cvs" onChange={(e) => handleInput(e)}  value={studentInput.cvs} className="form-control">
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Seperated">Seperated</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <button type="submit" id="updatebtn" className="btn btn-primary">Update Student</button>
                </div>
            </form>
        </div>
        </>
    )
}
 export default Edit;