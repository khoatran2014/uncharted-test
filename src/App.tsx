import { useState } from "react";
import "./App.css";
import AddUserForm from "./components/addUserForm";
import { IUser } from "./components/types";
import UserTable from "./components/userTable";

function App() {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const onAddUser = (newUser: IUser) => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
  };
  const onDeleteUser = (currentUser: IUser) => {
    setUsers(users.filter((i) => i.id !== currentUser.id));
  };
  return (
    <div className="App">
      <div className="user-flex-wrapper">
        <AddUserForm onAddUser={onAddUser} />
        <UserTable users={users} onDelete={onDeleteUser} />
      </div>
    </div>
  );
}

export default App;
