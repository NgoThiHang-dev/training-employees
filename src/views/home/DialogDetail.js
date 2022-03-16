import React, { useState } from "react";
import { Table, Space, Modal } from "antd";
import "../../assets/css/content.css";
import axios from "axios";

const DialogDetail = ({ openDetail, setOpenDetail, id }) => {
  const [employee, setEmployee] = useState({
    name: "",
    day_of_birth: "",
    address: "",
  });

  React.useEffect(() => {
    console.log(id);
    axios
      .get(`https://training.morethanteam.tech/training/employees/${id}`)
      .then((response) => {
        console.log(response);
        setEmployee(response.data.result);
      });
  }, [id]);

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

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={employee.name}
          />
        </div>
        <div className="form-group padding-top">
          <label>Day of birth</label>
          <input
            type="datetime"
            className="form-control"
            id="day_of_birth"
            value={employee.day_of_birth}
          />
        </div>
        <div className="form-group padding-top">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={employee.address}
          />
        </div>
      </Modal>
    </form>
  );
};

export default DialogDetail;