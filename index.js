

// Signup function
function signup(userName) {
  let users = ["Lakshmi", "Ravi", "Sita", "Kiran"]; // existing users

  if (users.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    users.push(userName);
    return "Signup Successful, Please Login";
  }
}
// Login function
function login(userName, password) {
  let users = ["Lakshmi", "Ravi", "Sita", "Kiran"];

  if (!users.includes(userName)) {
    return "User Not Found, Please Signup";
  } else if (password !== "Emp@123") {
    return "Wrong Password....";
  } else {
    return "Login Successful...";
  }
}

// test
console.log(signup("Anjali"));
console.log(login("Lakshmi", "Emp@123"));
console.log(login("Sita", "wrongpass"));
console.log(login("Unknown", "Emp@123"));
