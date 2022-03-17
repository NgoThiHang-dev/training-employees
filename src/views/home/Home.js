import React, { useContext, useState } from "react";
import { Table, Space, Modal, Dialog } from "antd";
import axios from "axios";
import DialogAdd from "./DialogAdd";
import DialogDetail from "./DialogDetail";
import DialogUpdate from "./DialogUpdate";
import Swal from "sweetalert2";
// import { StoreContext } from "../../layouts/header/Header";

import { ThemeContext } from "../../views/theme/ThemeContext";

import { layoutAction } from "../../context/actions/layout/layoutAction";
import { GlobalContext } from "../../context/Provider";

const baseURL = "https://training.morethanteam.tech/training/employees/";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  const [employees, setEmployees] = React.useState([]);
  const [isDialogAdd, setIsDialogAdd] = useState(false);
  const [isDialogDetail, setIsDialogDetail] = useState(false);
  const [isDialogUpdate, setIsDialogUpdate] = useState(false);
  const [idForView, setIdForView] = useState(0);

  // const { theme } = React.useContext(StoreContext);

  const handleClickViewButton = (id) => {
    // console.log(id);
    return async function (event) {
      await setIdForView(id);
      await setIsDialogDetail(true);
    };
  };

  const handleClickUpdateButton = (id) => {
    return async function (event) {
      await setIdForView(id);
      await setIsDialogUpdate(true);
    };
  };

  const {
    layoutState: {
      layout: { theme },
    },
    layoutDispatch,
  } = useContext(GlobalContext);

  const writeGlobal = () => {
    layoutAction.setThemeForLayout("aba")(layoutDispatch);
  };

  React.useEffect(() => {
    getEmployees();

    setIsDialogDetail(false);
    // console.log(theme)
  }, []);

  //get all

  const getEmployees = async () => {
    await axios.get(baseURL).then((response) => {
      setEmployees(response.data.result);
    });
  };

  //button add start
  const openDialogAdd = () => {
    setIsDialogAdd(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 200,
    },
    {
      title: "Birthday",
      dataIndex: "day_of_birth",
      width: 180,
    },
    {
      title: "Address",
      dataIndex: "address",
      width: 350,
    },

    {
      title: "Action",
      key: "action",
      render: (data) => {
        // console.log(data.id);
        return (
          <Space size="middle">
            <div>
              <button
                className="btn btn-outline-warning glo-button-margin"
                onClick={handleClickViewButton(data.id)}
              >
                View
              </button>
              <button
                className="btn btn-outline-primary glo-button-margin"
                onClick={handleClickUpdateButton(data.id)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger glo-button-margin"
                onClick={() => handleClickDeleteButton(data.id)}
              >
                Delete
              </button>
            </div>
          </Space>
        );
      },
    },
  ];

  function handleClickDeleteButton(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "User will have Admin Privileges",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
      dangerMode: true,
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        axios
          .delete(`https://training.morethanteam.tech/training/employees/${id}`)
          .then(() => {
            getEmployees();
          });
      }
    });
  }

  // const deleteEmployees{

  // }

  return (
    <>
      <div className="home-page">
        <div className="glo-button">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={openDialogAdd}
          >
            Add New
          </button>
        </div>

        <div className="glo-table">
          <Table
            columns={columns}
            key={employees.id}
            dataSource={employees}
            // pagination={{ pageSize: 20 }}
            scroll={{ y: 280 }}
          />
        </div>
        <DialogAdd
          open={isDialogAdd}
          setOpen={setIsDialogAdd}
          getEmployees={getEmployees}
        />
        <DialogDetail
          openDetail={isDialogDetail}
          setOpenDetail={setIsDialogDetail}
          id={idForView}
        />
        <DialogUpdate
          openUpdate={isDialogUpdate}
          setOpenUpdate={setIsDialogUpdate}
          getEmployees={getEmployees}
          id={idForView}
        />
      </div>
    </>
  );
};

export default Home;
