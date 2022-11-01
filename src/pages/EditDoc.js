import { useLocation } from 'react-router';
import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';

const EditDoc = ({userdata}) => {
    const location = useLocation();
    const history = useNavigate();
    const [errorInput, setError] = useState([]);
    const state = location.state;
    const [doctorInput, setDoctors] = useState(state);


    const handleInput = (e) => {
        e.persist();
        setDoctors({...doctorInput, [e.target.name]: e.target.value });
    }


    const updateDoctor = (e) => {
        e.preventDefault();
        
        const doctor_id = state.id;
        const data = {
            docname: doctorInput.docname || state.docname,
            docposition: doctorInput.docposition || state.docposition,
        }
        axios.put(`/api/update-doctor/${doctor_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                history('/dashboard');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandatory","","error");
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
            <h4>Edit Doctor
                <Link to={'/dashboard'} className="btn btn-danger btn-sm float-end"> BACK</Link>
             </h4>
            <form onSubmit={(e) => updateDoctor(e)} >
                <div className="form-group mb-3">
                    <label>Doctor Name</label>
                    <input style={{ height:50 }} type="text" name="docname" onChange={(e) => handleInput(e)} value={doctorInput.docname} className="form-control" />
                    <span className="text-danger">{errorInput.docname}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Doctor Position</label>
                    <input type="text" style={{ height:50 }} name="docposition" onChange={(e) => handleInput(e)} value={doctorInput.docposition}  className="form-control" />
                    <span className="text-danger">{errorInput.docposition}</span>
                </div>

                <div className="form-group mb-3">
                    <button type="submit" id="updatebtn" className="btn btn-primary">Update Student</button>
                </div>
            </form>
        </div>
        </>
    )
}
 export default EditDoc;