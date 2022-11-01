import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Navbar from "./Navbar";
import Chart2 from '../Chart2';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const data2 = [25,10,15,20,25,30,35,40]
  const w = 900;
  const h = 500;

  const history = useNavigate();
  function logout()
  {
    localStorage.clear();
    history("/login")
  }

  let user = JSON.parse(localStorage.getItem('user-info'))

  useEffect(() => {
    axios.get(`/api/students`).then((res) => {
      if (res.status === 200) {
        setStudents(res.data.students);
        setLoading(false);
      }
    });
    axios.get(`/api/doctors`).then((res) => {
      if (res.status === 200) {
        setDoctors(res.data.doctors);
        setLoading(false);
      }
    });
  }, []);

  const deleteStudent = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios.delete(`/api/delete-student/${id}`).then((res) => {
      if (res.data.status === 200) {
        swal("Deleted!", res.data.message, "success");
        thisClicked.closest("tr").remove();
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        thisClicked.innerText = "Delete";
      }
    });
  };

  if (loading) {
    return <h4>Loading Student Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = students.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.bday}</td>
          <td>{item.sex}</td>
          <td>{item.phone}</td>
          <td>{item.address}</td>
          <td>{item.religion}</td>
          <td>{item.cvs}</td>
          <td>
            <Link
              to={"/edit"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td>
          <td>
            <button
              type="button"
              onClick={(e) => deleteStudent(e, item.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  const deleteDoctor = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios.delete(`/api/delete-doctor/${id}`).then((res) => {
      if (res.data.status === 200) {
        swal("Deleted!", res.data.message, "success");
        thisClicked.closest("tr").remove();
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        thisClicked.innerText = "Delete";
      }
    });
  };

  if (loading) {
    return <h4>Loading Doctor Data...</h4>;
  } else {
    var doctor_TABLE = "";

    doctor_TABLE = doctors.map((doctor, index) => {
      return (
        <tr key={index}>
          <td>{doctor.id}</td>
          <td>{doctor.docname}</td>
          <td>{doctor.docposition}</td>
          <td>
            <Link
              to={"/edit-doctor"}
              state={doctor}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td>
          <td>
            <button
              type="button"
              onClick={(e) => deleteDoctor(e, doctor.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <Navbar />
      <div>
        <div style={{ marginLeft: 20 }}>
          <Link to='/userprofile'>
            <h5>{user.name}</h5>
          </Link>
          <h6>{user.email}</h6>
          <button onClick={logout} >Log Out</button>
        </div>
        <br></br>
        <Chart2 data={data2} w={w} h={h} color="green" />
        <hr></hr>
        <br></br>
        <h4 style={{ marginLeft: 50 }}>
          Students Data
          <Link
            to={"/add-students"}
            className="btn btn-primary btn-sm float-end"
          >
            {" "}
            Add Student
          </Link>
        </h4>
      </div>
      <div className="col-sm-6 offset-sm-3">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birthdate</th>
              <th>Sex</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Religion</th>
              <th>Civil Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div>
        <h4 style={{ marginLeft: 50 }}>
          Doctor Data
          <Link
            to={"/add-doctors"}
            className="btn btn-primary btn-sm float-end"
          >
            {" "}
            Add Doctor
          </Link>
        </h4>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Doctor Name</th>
              <th>Doctor Position</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{doctor_TABLE}</tbody>
        </table>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div style={{ marginLeft: 50 }}>
        <h4>Announcements</h4>
      </div>
    </>
  );
}

export default Dashboard;
