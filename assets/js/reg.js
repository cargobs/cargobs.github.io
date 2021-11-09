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
window.onload = function () {
  document.getElementById("regauth").onclick = function () {
    signUp();
    alert("SignUp Successfully");
  }
}
  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e => alert(e.message));
  }
  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      var email = user.email;
      alert("The Active user is: " + email);
      window.location.href="./dash.html"

    }
  })
