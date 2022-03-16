import React, { useState } from "react";
import { Table, Space, Modal } from "antd";
import "../../assets/css/content.css";
import axios from "axios";

const DialogDetail = ({ openDetail, setOpenDetail, id}) => {

    console.log("5555555555")

    console.log(id)
  const [name, setName] = useState("");
  const [day_of_birth, setBirthday] = useState("");
  const [address, setAddress] = useState("");

  const [data, setData] = useState(null);

  React.useEffect(() => {
    const data = { name, day_of_birth, address };
    axios
      .get(
        `https://training.morethanteam.tech/training/employees/${id}`
      )
      .then((response) => {
        setData(response.data);
        setName("");
        setBirthday("");
        setAddress("");
      });
  }, []);

  console.log("44444444444")
  console.log(data);

  const handleOk = () => {
    setOpenDetail(true);
  };

  const handleCancel = () => {
    setOpenDetail(false);
  }
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
              placeholder="Enter name"
            //   value={employees.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group padding-top">
            <label>Day of birth</label>
            <input
              type="date"
              className="form-control"
              id="day_of_birth"
            //   value={employees.birthday}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </Modal>
      </form>
  );
};

export default DialogDetail;
