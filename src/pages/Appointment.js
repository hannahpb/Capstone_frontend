import React, {useState, useEffect, Component} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import axios from 'axios';

class Appointment extends Component
{
    state = {
        appointment: [],
        loading: true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/appointment');
        
        if (res.data.status === 200)
        {
            this.setState({
                appointment: res.data.appointment,
                loading: false,
            });
        }
    }

    render(){

        var appointment_table = "";
        if (this.state.loading)
        {
            appointment_table = <tr><td colSpan="6"> <h2>Loading...</h2> </td></tr>;
        }
        else 
        {
            appointment_table = 
            this.state.appointment.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.aptcategory}</td>
                        <td>{item.aptdate}</td>
                        <td>{item.apttime}</td>
                        <td>{item.aptpurpose}</td>
                    </tr>
                );
            } )
        }

        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Clinic Appointments <Link to={'/appindex'} className="btn btn-danger btn-sm float-end"> BACK</Link></h4>
                            </div>
                            <div className="card-body">
                                
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Apt Category</th>
                                            <th>Apt Date</th>
                                            <th>Apt Time</th>
                                            <th>Apt Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appointment_table}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Appointment;

    