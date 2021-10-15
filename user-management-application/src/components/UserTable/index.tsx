import React from "react";
import { User } from "../../pages/UserManagementPage";
import classes from "./index.module.css";
interface tableUserProps {
  users: User[];
  onRowClick: (user: User) => void;
}

export const UserTable: React.FC<tableUserProps> = ({ users, onRowClick }) => {
  const [indexRowHover, setIndexRowHover] = React.useState(-1);
  const handleHoverRow = (event: any, index: number) => {
    setIndexRowHover(index);
  };
  return (
    <table className={classes["user-table"]}>
      <thead>
        <tr className={classes["user-table__heading"]}>
          <th className={classes["user-table__heading-element"]}>ID</th>
          <th className={classes["user-table__heading-element"]}>Name</th>
          <th className={classes["user-table__heading-element"]}>Email</th>
          <th className={classes["user-table__heading-element"]}>Role</th>
          <th className={classes["user-table__heading-element"]}></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: User, index) => (
          <tr onClick={() => { onRowClick(user); }}
            onMouseOver={(event) => handleHoverRow(event, index)}
            onMouseOut={() => {
              setIndexRowHover(-1);
            }}
            className={`${classes["user-table__row"]}  ${indexRowHover === index && classes["user-table__row--active"]
              }`}
          >
            <td className={classes["user-table__row-element"]}>{user.id.slice(user.id.length - 5)}</td>
            <td className={classes["user-table__row-element"]}>{user.name}</td>
            <td className={classes["user-table__row-element"]}>{user.email}</td>
            <td className={classes["user-table__row-element"]}>{user.role}</td>
            <td className={classes["user-table__row-element"]}>delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
