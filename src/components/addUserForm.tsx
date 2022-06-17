import React, { useState } from "react";
import { IUser } from "./types";

interface IProps {
  onAddUser: (user: IUser) => void;
}
const initUser = { name: "", id: 0 };
const AddUserForm: React.FunctionComponent<IProps> = (props) => {
  const [formValue, setFormValue] = useState(initUser);
  const [errors, setErrors] = useState("");
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValue.name.trim().length > 0) {
      props.onAddUser(formValue);
      setFormValue(initUser);
      setErrors("");
      return false;
    }
    setErrors("User should not empty");
    return false;
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="user-form">
      <h1>add users</h1>
      <form className="form" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label>Name</label>
          <input
            type="text"
            placeholder="please input name"
            name="name"
            value={formValue.name}
            onChange={onInputChange}
          />
          {errors.length > 0 && <div className="form-error">{errors}</div>}
        </div>
        <div className="form-row">
          <button>Add new user</button>
        </div>
      </form>
    </div>
  );
};
export default AddUserForm;
