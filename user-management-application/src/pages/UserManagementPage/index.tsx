import React from "react";
import { Button } from "../../components/Button";
var faker = require("faker");

export default function UserManagementPage() {
  return (
    <div>
      {faker.name.findName()}
      <Button children={"Add New User"}></Button>
    </div>
  );
}
