import React from "react";
import { Button } from "../../components/Button";
import FormInfoUser from "../../components/FormInfoUser";
import { TabBar } from "../../components/TabBar";
import { UserTable } from "../../components/UserTable";
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

  const switchPageUser = (value: string) => {
    if (value === TabUserPageName.Show) setPageName(TabUserPageName.Show);
    else setPageName(TabUserPageName.Add);
    setTabIndex(value as TabUserPageName);
  };

  return (
    <div>
      <TabBar
        listHeading={Object.values(TabUserPageName)}
        onClick={switchPageUser}
        tabIndex={tabIndex}
      />
      {pageName === "Show Users" ? (
        <UserTable users={users} />
      ) : (
        <FormInfoUser />
      )}
    </div>
  );
}
