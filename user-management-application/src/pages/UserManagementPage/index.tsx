import React from "react";
import { Button } from "../../components/Button";
import { FormInfoUser } from "../../components/FormInfoUser";
import { TabBar } from "../../components/TabBar";
import { UserTable } from "../../components/UserTable";
import classes from "./index.module.css"
var faker = require("faker");

export interface User {
  id: string;
  name: string;
  role: string;
  email: string;
}

export enum TabUserPageName {
  Show = "Show Users",
  Add = "Add User",
  Update = "Update User",
}

const usersFake: User[] = [];
for (let i = 0; i <= 10; i++) {
  usersFake.push({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    role: faker.name.jobTitle(),
    email: faker.internet.email(),
  });
}

export default function UserManagementPage() {
  const [users, setUsers] = React.useState<User[]>(usersFake);
  const [pageName, setPageName] = React.useState("table");
  const [tabIndex, setTabIndex] = React.useState(TabUserPageName.Add);
  const [userSelected, setUserSelected] = React.useState<User>();

  const switchPageUser = (value: string) => {
    if (value === TabUserPageName.Show) setPageName(TabUserPageName.Show);
    else if (value === TabUserPageName.Add) setPageName(TabUserPageName.Add);
    else setPageName(TabUserPageName.Update);
    setTabIndex(value as TabUserPageName);
  };

  const handleUserIndex = (user: User) => {
    setUserSelected(user);
  };

  return (
    <div className={classes["table-scroll"]}>
      <TabBar
        listHeading={Object.values(TabUserPageName)}
        onClick={switchPageUser}
        tabIndex={tabIndex}
      />
      <div className={classes["user-page__components-wrapper"]}>
        {pageName === TabUserPageName.Show && (
          <UserTable users={users} onRowClick={handleUserIndex} />
        )}
        {pageName === TabUserPageName.Add && <FormInfoUser />}
        {pageName === TabUserPageName.Update &&
          (userSelected ? (
            <FormInfoUser user={userSelected} />
          ) : (
            "Please Choose a User"
          ))}
      </div>
    </div>
  );
}
