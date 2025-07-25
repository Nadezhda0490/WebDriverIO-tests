export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function generateUniqueUser(): UserData {
  const timestamp = Date.now();
  const email = `nadja${timestamp}@test.com`;

  return {
    firstName: "Nadja",
    lastName: "User",
    email,
    password: "Test123@@@",
    confirmPassword: "Test123@@@",
  };
}

export function getRegisteredUser(): UserData {
  return {
    firstName: "nadja",
    lastName: "test",
    email: "testerNadja@gmail.com",
    password: "Password1@",
    confirmPassword: "Password1@",
  };
}
