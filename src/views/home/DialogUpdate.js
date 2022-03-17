import React, { useState } from "react";
import { Table, Space, Modal } from "antd";
import "../../assets/css/content.css";
import axios from "axios";

const DialogUpdate = ({ openUpdate, setOpenUpdate, id, getEmployees }) => {
  const [name, setName] = useState("");
  const [day_of_birth, setBirthday] = useState(new Date());
  const [address, setAddress] = useState("");

  React.useEffect(() => {
    console.log(id);
    axios
      .get(`https://training.morethanteam.tech/training/employees/${id}`)
      .then((response) => {
        setName(response.data.result.name);
        setBirthday(response.data.result.day_of_birth);
        setAddress(response.data.result.address);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, day_of_birth, address };
    axios
      .put(`https://training.morethanteam.tech/training/employees/${id}`, data)
      .then((response) => {
        console.log(response);
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
    setOpenUpdate(false);
  };

  const handleCancel = () => {
    setOpenUpdate(false);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Modal
        title="Update"
        visible={openUpdate}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group padding-top">
          <label>Day of birth</label>
          <input
            type="datetime"
            className="form-control"
            id="day_of_birth"
            value={day_of_birth}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <div className="form-group padding-top">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </Modal>
    </form>
  );
};

export default DialogUpdate;
