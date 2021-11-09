var firebaseConfig = {
  apiKey: "AIzaSyB7TmV54nkn8H9aiMwGwAJhoZ3qnJwvBJM",
  authDomain: "cargo-auth-2c84d.firebaseapp.com",
  databaseURL: "https://cargo-auth-2c84d-default-rtdb.firebaseio.com",
  projectId: "cargo-auth-2c84d",
  storageBucket: "cargo-auth-2c84d.appspot.com",
  messagingSenderId: "213935421730",
  appId: "1:213935421730:web:e3efab824bc6db6d164d7b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var nameV, dateV, fromV, twoV, weightV, infoV;

function readFom() {
  nameV = document.getElementById("name").value;
  dateV = document.getElementById("date").value;
  fromV = document.getElementById("from").value;
  twoV = document.getElementById("two").value;
  weightV = document.getElementById("weight").value;
  infoV = document.getElementById("info").value;
  console.log(dateV, fromV, twoV, weightV, infoV);
}
window.onload = function () {
  document.getElementById("insert").onclick = function () {
    readFom();
    alert("Data Inserted");
    firebase
      .database()
      .ref("Users/"+nameV)
      .set({
        Name: nameV,
        Date: dateV,
        From: fromV,
        To: twoV,
        Weight: weightV,
        Information: infoV,
      });
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("from").value = "";
    document.getElementById("two").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("info").value = "";
  };
  document.getElementById("authbye").onclick = function () {
    auth.signOut();
    alert("SignOut succesfully");
    window.location.href="./login.html"
  }
}
