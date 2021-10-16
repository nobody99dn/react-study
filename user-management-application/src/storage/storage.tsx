var faker = require("faker");

export interface User {
  id: string;
  name: string;
  role: string;
  email: string;
}

export function getUsersStorage(): User[] {
  let usersFake: User[] = [];
  if (!localStorage.getItem("users")) {
    for (let i = 0; i <= 10; i++) {
      usersFake.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        role: faker.name.jobTitle(),
        email: faker.internet.email(),
      });
    }
    localStorage.setItem("users", JSON.stringify(usersFake));
  } else {
    usersFake = JSON.parse(localStorage.getItem("users") as string);
  }
  return usersFake;
}

export function setUsersStorage(users: User[]): void {
  localStorage.setItem("users", JSON.stringify(users));
}
