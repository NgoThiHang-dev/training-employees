import React, { useState } from "react";
import { Table, Space, Modal } from "antd";
import "../../assets/css/content.css";
import axios from "axios";

const DialogUpdate = ({ openUpdate, setOpenUpdate, getEmployees, id }) => {
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
  //   const [name, setName] = useState("");
  //   const [day_of_birth, setBirthday] = useState(new Date());
  //   const [address, setAddress] = useState("");
  //   const [data, setData] = useState(null);
  //   console.log("1111111111");
  //   console.log(id);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const data = { name, day_of_birth, address };
  //     axios
  //       .put(
  //         `https://training.morethanteam.tech/training/employees/${id}`,
  //         data
  //       )
  //       .then((response) => {
  //         console.log(response);
  //         setData(response.data);
  //         getEmployees();
  //       })
  //       .catch((error) => {
  //         if (error.response) {
  //           console.log(error.response);
  //           console.log("server responded");
  //         } else if (error.request) {
  //           console.log("network error");
  //         } else {
  //           console.log(error);
  //         }
  //       });
  //   };

  //   const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  //   React.useEffect(() => {
  //     setName(name);
  //     setAddress(address);
  //     setBirthday(new Date(day_of_birth));
  //   }, [id]);

  const handleOk = () => {
    setOpenUpdate(true);
  };

  const handleCancel = () => {
    setOpenUpdate(false);
  };
  return (
    // onSubmit={handleSubmit}
    <form>
      <Modal
        title="Update"
        visible={openUpdate}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* <p>Name{name}</p> */}
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" id="name" value={employee.name} />
          {/* <input type="text" className="form-control" id="name" value={name}
              onChange={(e) => setName(e.target.value)} /> */}
        </div>
        <div className="form-group padding-top">
          <label>Day of birth</label>
          <input type="datetime" className="form-control" id="day_of_birth" value={employee.day_of_birth} />
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

export default DialogUpdate;
