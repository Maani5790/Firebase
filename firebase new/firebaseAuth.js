  
  //////////////////////sign up and sign in methods are in this file //////////
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
  


  
  const firebaseConfig = {
    apiKey: "AIzaSyC_lRDlK0pgQ3P2OxIzBoM3bohc6Ju9O0U",
    authDomain: "olx-website-15abe.firebaseapp.com",
    projectId: "olx-website-15abe",
    storageBucket: "olx-website-15abe.appspot.com",
    messagingSenderId: "902363439997",
    appId: "1:902363439997:web:6fda902226f1df69df6214",
    measurementId: "G-2KGPVKGK7R"
  };

  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

  let register_btn = document.getElementById("register_btn");
  register_btn.addEventListener("click" , function(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log("user==>", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error==>" , error)
    // ..
  });

    // console.log("email")
    // console.log("password")
  })

  let login_btn = document.getElementById("login_btn");
  login_btn.addEventListener("click" , function(){
    let  login_email = document.getElementById("login_email");
    let login_password = document.getElementById("login_password");
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user==>", user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error==>", error)

  });


  })




   
   
   