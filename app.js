document.getElementById("myBtn").addEventListener("click", checkThePassword);

console.log("jk");

function checkThePassword() {
  const password = 958371249;
  const submittedPassword = document.getElementById("password").value;

  if (password == submittedPassword) {
    alert("You saved the world");
  } else {
    alert("Humanity lost the world");
  }
}
