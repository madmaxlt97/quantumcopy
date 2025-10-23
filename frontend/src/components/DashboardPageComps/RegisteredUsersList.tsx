import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/DashboardPageStyles/Dashboard.css";

interface User {
  _id: number;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
}

export default function RegisteredUsers() {
  const [userList, setUserList] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUserList(response.data);
    } catch (err) {
      console.log("failed to fetch users:", err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUserList((prev) => prev.filter((user) => user._id !== id));
    } catch (err) {
      console.log("failed to delete user:", err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="table-container">
        <h2 className="title">Registered users:</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>

              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userList.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  No registered users yet
                </td>
              </tr>
            ) : (
              userList.map((user) => (
                <tr key={user._id}>
                  <td>{user.userFirstName}</td>
                  <td>{user.userLastName}</td>
                  <td>{user.userEmail}</td>
                  <td>
                    <button className="edit">Edit</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
