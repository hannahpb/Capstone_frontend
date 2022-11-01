import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Navbar from './Navbar';

function AddDoctor() {

    const history = useNavigate();
    const [doctorInput, setDoctors] = useState({
        docname: '',
        docposition: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setDoctors({...doctorInput, [e.target.name]: e.target.value })
    }

    const saveDoctor = (e) => {
        e.preventDefault();
        
        const data = {
            docname:doctorInput.docname,
            docposition:doctorInput.docposition,
        }

        axios.post(`/api/add-doctor`, data).then(res => {

            if(res.data.status === 200)
            {
                swal("Success!",res.data.message,"success");
                setDoctors({
                    docname: '',
                    docposition: '',
                    error_list: [],
                });
                history('/dashboard');
            }
            else if(res.data.status === 422)
            {
                setDoctors({...doctorInput, error_list: res.data.validate_err });
            }
        });
    }

    return (
        <>
        <Navbar />
        <div className="col-sm-6 offset-sm-3">
            <h4>Add Doctor 
                <Link to={'/dashboard'} className="btn btn-danger btn-sm float-end"> BACK</Link>
            </h4>
        </div>
        <div className="col-sm-6 offset-sm-3">
            
            <form onSubmit={saveDoctor} >
                <div className="form-group mb-3">
                    <label>Doctor Name</label>
                    <input type="text" name="docname" style={{ height:50 }} onChange={handleInput} value={doctorInput.docname} className="form-control" />
                    <span className="text-danger">{doctorInput.error_list.docname}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Doctor Position</label>
                    <input type="text" name="docposition" style={{ height:50 }} onChange={handleInput} value={doctorInput.docposition}  className="form-control" />
                    <span className="text-danger">{doctorInput.error_list.docposition}</span>
                </div>

                <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">Save Doctor</button>
                </div>
            </form>
        </div>
        </>
    );

}

export default AddDoctor;