import React from "react";
import { IUser } from "./types";

interface IProps {
  users: Array<IUser>;
  onDelete: (user: IUser) => void;
}

const UserTable: React.FunctionComponent<IProps> = (props) => {
  return (
    <div className="user-table">
      <h1>View users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((i) => (
              <tr key={i.id}>
                <td>{i["name"]}</td>
                <td>
                  <button onClick={() => props.onDelete(i)}>delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>no users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
