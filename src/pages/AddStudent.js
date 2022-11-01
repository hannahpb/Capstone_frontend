import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Navbar from "./Navbar";

function AddStudent() {
  const history = useNavigate();
  const [studentInput, setStudent] = useState({
    fname: "",
    lname: "",
    bday: "",
    sex: "",
    phone: "",
    address: "",
    religion: "",
    cvs: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setStudent({ ...studentInput, [e.target.name]: e.target.value });
  };

  const saveStudent = (e) => {
    e.preventDefault();

    const data = {
      fname: studentInput.fname,
      lname: studentInput.lname,
      bday: studentInput.bday,
      sex: studentInput.sex,
      phone: studentInput.phone,
      address: studentInput.address,
      religion: studentInput.religion,
      cvs: studentInput.cvs,
    };

    axios.post(`/api/add-student`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Success!", res.data.message, "success");
        setStudent({
          fname: "",
          lname: "",
          bday: "",
          sex: "",
          phone: "",
          address: "",
          religion: "",
          cvs: "",
          error_list: [],
        });
        history("/dashboard");
      } else if (res.data.status === 422) {
        setStudent({ ...studentInput, error_list: res.data.validate_err });
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="col-sm-6 offset-sm-3">
        <h4>
          Add Students
          <Link to={"/dashboard"} className="btn btn-danger btn-sm float-end">
            {" "}
            BACK
          </Link>
        </h4>
      </div>
      <div className="col-sm-6 offset-sm-3">
        <form onSubmit={saveStudent}>
          <div className="form-group mb-3">
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              style={{ height: 50 }}
              onChange={handleInput}
              value={studentInput.fname}
              className="form-control"
            />
            <span className="text-danger">{studentInput.error_list.fname}</span>
          </div>
          <div className="form-group mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              style={{ height: 50 }}
              onChange={handleInput}
              value={studentInput.lname}
              className="form-control"
            />
            <span className="text-danger">{studentInput.error_list.lname}</span>
          </div>
          <div className="form-group mb-3">
            <label>Birthdate</label>
            <input
              type="date"
              name="bday"
              style={{ height: 50 }}
              onChange={handleInput}
              value={studentInput.bday}
              className="form-control"
            />
            <span className="text-danger">{studentInput.error_list.bday}</span>
          </div>
          <div className="form-group mb-3">
            <label>Sex</label>
            <select type="text" name="sex" onChange={handleInput} value={studentInput.sex} className="form-control">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              style={{ height: 50 }}
              onChange={handleInput}
              value={studentInput.phone}
              className="form-control"
            />
            <span className="text-danger">{studentInput.error_list.phone}</span>
          </div>
          <div className="form-group mb-3">
            <label>Address</label>
            <input
              type="text"
              name="address"
              style={{ height: 50 }}
              onChange={handleInput}
              value={studentInput.address}
              className="form-control"
            />
            <span className="text-danger">
              {studentInput.error_list.address}
            </span>
          </div>
          <div className="form-group mb-3">
            <label>Religion</label>
            <select
              type="text"
              name="religion"
              onChange={handleInput}
              value={studentInput.religion}
              className="form-control"
            >
              <option value="RomanCatholic">Roman Catholic</option>
              <option value="Iglesia">Iglesia</option>
              <option value="BornAgain">Born Again</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            <span className="text-danger">
              {studentInput.error_list.cvs}
            </span>
          </div>
          <div className="form-group mb-3">
            <label>Civil Status</label>
            <select type="text"  name="cvs" onChange={handleInput}  value={studentInput.cvs} className="form-control">
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Seperated">Seperated</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            <span className="text-danger">{studentInput.error_list.cvs}</span>
          </div>
          <div className="form-group mb-3">
            <button type="submit" className="btn btn-primary">
              Save Student
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddStudent;
