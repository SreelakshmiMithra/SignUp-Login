

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

// test
console.log(signup("Lakshmi")); // User Already Registered, Please Login
console.log(signup("Anjali"));  // Signup Successful, Please Login
