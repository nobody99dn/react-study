import React from 'react';
import { Button } from '../Button';
import classes from "./index.module.css";
var faker = require("faker");
var myStorage = window.localStorage;
interface User {
  id: string;
  name: string;
  role: string;
  email: string;
}
interface FormProps {
  user?: User;
}

export const FormInfoUser: React.FC<FormProps> = (
  {
    user
  }) => {
  function handleSubmit(event: any) {
    event.preventDefault();
    console.dir(myStorage);

    user = {
      id: faker.datatype.uuid(),
      name: event.target.name.value,
      role: event.target.role.value,
      email: event.target.email.value
    };
    console.log('Click!');
    console.log(user);
  };

  return (
    <div className={classes.container}>
      <div className={classes.form__content}>
        <h4 className={classes.form__title}>invite users</h4>

        <h5 className={classes.form__subtitle}>Enter the data of the users you want to invite to the project</h5>

        <form onSubmit={handleSubmit}>
          <div className={classes.form__input}>
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
