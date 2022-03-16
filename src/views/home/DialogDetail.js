import React, { useState } from "react";
import { Table, Space, Modal } from "antd";
import "../../assets/css/content.css";
import axios from "axios";

const DialogDetail = ({ openDetail, setOpenDetail, id }) => {
  const [name, setName] = useState("");
  const [day_of_birth, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [employee, setEmployee] = useState(null);

  React.useEffect(() => {
    console.log("111111111111");
    console.log(id);
    console.log(name);
    axios
      .get(`https://training.morethanteam.tech/training/employees/${id}`)
      .then((response) => {
        setEmployee(response.data);
        setName("");
        setBirthday("");
        setAddress("");
      });
  }, []);

  const handleOk = () => {
    setOpenDetail(true);
  };

  const handleCancel = () => {
    setOpenDetail(false);
  };
  return (
    <form>
      <Modal
        title="View"
        visible={openDetail}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{id}</p>
        <p>Name: {name}</p>
        <p>{day_of_birth}</p>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" id="name" defaultValue={name} />
        </div>
        <div className="form-group padding-top">
          <label>Day of birth</label>
          <input
            type="date"
            className="form-control"
            id="day_of_birth"
            //   value={employees.birthday}
          />
        </div>
        <div className="form-group padding-top">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            //   value={employees.address}
          />
        </div>
      </Modal>
    </form>
  );
};

export default DialogDetail;
