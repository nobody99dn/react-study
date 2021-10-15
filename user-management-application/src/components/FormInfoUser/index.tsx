import React from 'react';

// import component
import { Button } from '../Button';

// import type
import { User } from "../../pages/UserManagementPage";

// import class
import classes from "./index.module.css";

// faker library
var faker = require("faker");

interface FormProps {
  user?: User;
  listUsers: User[];
  addNewUser: (user: User) => void;
  updateUser: (user: User) => void;
}

export const FormInfoUser: React.FC<FormProps> = (
  {
    user,
    listUsers,
    addNewUser,
    updateUser
  }) => {
  function handleSubmit(event: any) {
    event.preventDefault();

    user = {
      id: event.target.id.value ? event.target.id.value : faker.datatype.uuid(),
      name: event.target.name.value,
      role: event.target.role.value,
      email: event.target.email.value
    };

    if (!user.name || user.name === '') {
      console.warn('Enter correct name!');
      return;
    }

    if (!user.role || user.role === '') {
      console.warn('Enter correct role!');
      return;
    }

    if (!user.email || user.email === '') {
      console.warn('Enter correct email!');
      return;
    }

    if (listUsers.findIndex(listUser => listUser.id === user?.id) === -1) {
      if (listUsers.findIndex(listUser => listUser.email === user?.email) >= 0) {
        console.warn('Email existed!');
        return;
      }
      addNewUser(user);
    } else {
      updateUser(user);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.form__content}>
        <h4 className={classes.form__title}>invite users</h4>

        <h5 className={classes.form__subtitle}>Enter the data of the users you want to invite to the project</h5>

        <form onSubmit={handleSubmit}>
          <div className={classes.form__input}>

            <input type="text" name={'id'} defaultValue={user?.id} hidden />

            <div className={classes['input-group']}>
              <input className={`${classes.input} ${classes['input-name']}`} type="text" name={'name'} placeholder="Name" defaultValue={user?.name} />

              <input className={`${classes.input} ${classes['input-role']}`} type="text" name={'role'} placeholder="Role" defaultValue={user?.role} />

            </div>
            <div className={classes['input-group']}>
              <input className={`${classes.input} ${classes['input-email']}`} type={'email'} placeholder="Email" name={'email'} defaultValue={user?.email} />
            </div>
          </div>

          <Button children={'Invite User'} />

        </form>
      </div>
    </div>
  );
};
