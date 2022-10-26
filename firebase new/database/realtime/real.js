  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
  import { getDatabase,ref, set,child, get  } from  "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
  
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
  const db = getDatabase(app);
  const dbRef = ref(db);
//   const database = getDatabase();
//   console.log("pak")



//    document.getElementById("sub").addEventListener("click", function writeUserData(name,age) {
    
//       name = document.getElementById("name").value;
//       age = document.getElementById("age").value;
//     set(ref(db, 'users2/newusers'), {
//       username: name,
//       age : age
//     });
//   }
//   )

  get(child(dbRef, `users2/`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  })
  
