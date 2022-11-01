import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import swal from "sweetalert";

function MedCert() {
  const [loading, setLoading] = useState(true);
  const [Med, setMed] = useState([]);


  useEffect(() => {
    axios.get(`/api/medcert`).then((res) => {
      if (res.status === 200) {
        setMed(res.data.reqmed);
        setLoading(false);
      }
    });
  }, []);

  const deleteMedCert = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios.delete(`/api/delete-medcert/${id}`).then((res) => {
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
    return <h4>Loading Med Cert Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = Med.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.verdict}</td>
          <td>{item.uid}</td>
          <td>
            <Link
              to={"/editmed"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td>
          <td>
            <button
              type="button"
              onClick={(e) => deleteMedCert(e, item.id)}
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
        <h4>
          Verify Medical Certificates
          <Link to={"/dashboard"} className="btn btn-danger btn-sm float-end">
            {" "}
            BACK
          </Link>
          <br></br>
          <br></br>
        </h4>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Verdict</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
    </>
  );
}

export default MedCert;
