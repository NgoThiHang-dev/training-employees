import React, { useState } from "react";
import { Table, Space, Modal } from "antd";
import "../../assets/css/content.css";
import axios from "axios";

const DialogAdd = ({ open, setOpen, getEmployees }) => {
  const baseURL = "https://training.morethanteam.tech/training/employees/";

  const [name, setName] = useState("");
  const [day_of_birth, setBirthday] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, day_of_birth, address };

    axios
      .post("https://training.morethanteam.tech/training/employees/", data)
      .then((response) => {
        setOpen(false);
        getEmployees();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });

      handleOk();
      setName("");
      setBirthday("");
      setAddress("");
  };

  const handleOk = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal
        title="Add new"
        visible={open}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-group padding-top">
          <label>Day of birth</label>
          <input
            type="date"
            className="form-control"
            id="day_of_birth"
            value={day_of_birth}
            onChange={(event) => {
              setBirthday(event.target.value);
            }}
          />
        </div>
        <div className="form-group padding-top">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>
        {/* <div>
          <button type="button" className="btn btn-outline-warning" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit}>OK</button>
        </div> */}
      </Modal>
    </form>
  );
};

export default DialogAdd;
