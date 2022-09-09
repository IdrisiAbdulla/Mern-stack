import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UpdateUser from "./UpdateUser";

const UserManager = () => {
  const [userList, setuserList] = useState([]);
  const [showForm, setshowForm] = useState(false);
  const [userFormData, setuserFormData] = useState([])

  const getDataFromBackend = async () => {
    //default request method :GET
    const response = await fetch("http://localhost:5000/user/getall");
    const data = await response.json();
    console.log(data);

    //store data in state
    setuserList(data);
    console.log("request sent");
  };
  useEffect(() => {
    getDataFromBackend();
  }, []);

  const deleteUser = async (id) => {
    // console.log(id);
    const response = await fetch("http://localhost:5000/user/delete/" + id, {
      method: "DELETE",
    });
    console.log(response.status);
    getDataFromBackend();
    toast.success("user deleted😎");
  };
  const editUser = (userdata) => {
    console.log(userdata);
    setuserFormData(userdata);
    setshowForm(true);
  };

  const showUsers = () => {
    return (
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Age</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr>
              <td>{user._id}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    editUser(user);
                  }}
                >
                  <i className="fas fa-pencil-alt"></i>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container">
      <h1 className="text-center">userManager</h1>
      <button onClick={getDataFromBackend}>Refresh</button>
      <div className="row">
        <div className="col-md">{showUsers()}</div>
        {
          showForm?
          <div className="col-md">
            <UpdateUser userFormData={userFormData}/>
          </div>
          :
          ""
        }
      </div>
    </div>
  );
};

export default UserManager;
