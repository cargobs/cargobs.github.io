
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  document.getElementById("insert").onclick = function () {
    signIn();
    alert("SignIn in progress");
  }
}
  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));
  }


  //signOut

  function signOut(){
    auth.signOut();
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      var email = user.email;
      alert("Active user " + email);
      window.location.href="./dash.html"

    }
  })
