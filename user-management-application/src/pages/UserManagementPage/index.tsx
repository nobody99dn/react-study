import React from "react";
var faker = require("faker");

export default function UserManagementPage() {
  return <div>{faker.name.findName()}</div>;
}
