import React from "react";
import { FormInfoUser } from "../../components/FormInfoUser";
import { TabBar } from "../../components/TabBar";
import { UserTable } from "../../components/UserTable";
import { getUsersStorage, setUsersStorage, User } from "../../storage/storage";
import classes from "./index.module.css";

export enum TabUserPageName {
  Show = "Show Users",
  Add = "Add User",
  Update = "Update User",
}

export default function UserManagementPage() {
  const [users, setUsers] = React.useState<User[]>(getUsersStorage());
  const [tabIndex, setTabIndex] = React.useState(TabUserPageName.Show);
  const [userSelected, setUserSelected] = React.useState<User>();

  React.useEffect(() => {
    if (tabIndex !== TabUserPageName.Update) setUserSelected(undefined);
  }, [tabIndex]);

  const switchPageUser = (value: string) => {
    setTabIndex(value as TabUserPageName);
  };

  const handleUserIndex = (user: User) => {
    setUserSelected(user);
    setTabIndex(TabUserPageName.Update);
  };

  const handleAddUser = (newUser: User) => {
    setUsers([...users, newUser]);
    setTabIndex(TabUserPageName.Show);
    setUsersStorage([...users, newUser]);
  };

  const handleDeleteUser = (userId: string) => {
    const newUserList = users.filter((user, index) => user.id !== userId);
    setUsers(newUserList);
    setUsersStorage(newUserList);
  };

  const handleUpdateUser = (updatedUser: User) => {
    users[users.findIndex((user) => user.id === updatedUser.id)] = updatedUser;
    setUsers(users);
    setTabIndex(TabUserPageName.Show);
    setUsersStorage(users);
  };

  return (
    <div className={classes["table-scroll"]}>
      <TabBar
        listHeading={Object.values(TabUserPageName)}
        onClick={switchPageUser}
        tabIndex={tabIndex}
      />
      <div className={classes["user-page__components-wrapper"]}>
        {tabIndex === TabUserPageName.Show && (
          <UserTable
            users={users}
            onRowClick={handleUserIndex}
            handleDeleteUser={handleDeleteUser}
          />
        )}
        {tabIndex === TabUserPageName.Add && (
          <FormInfoUser
            listUsers={users}
            addNewUser={handleAddUser}
            titleBtn={"Invite User"}
          />
        )}
        {tabIndex === TabUserPageName.Update &&
          (userSelected ? (
            <FormInfoUser
              user={userSelected}
              listUsers={users}
              updateUser={handleUpdateUser}
              titleBtn={"Update User"}
            />
          ) : (
            "Please Choose a User"
          ))}
      </div>
    </div>
  );
}
