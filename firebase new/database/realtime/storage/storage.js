  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
  import { getFirestore,getStorage,ref, uploadBytes } from  "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyC_lRDlK0pgQ3P2OxIzBoM3bohc6Ju9O0U",
    authDomain: "olx-website-15abe.firebaseapp.com",
    databaseURL: "https://olx-website-15abe-default-rtdb.firebaseio.com",
    projectId: "olx-website-15abe",
    storageBucket: "olx-website-15abe.appspot.com",
    messagingSenderId: "902363439997",
    appId: "1:902363439997:web:6fda902226f1df69df6214",
    measurementId: "G-2KGPVKGK7R"
  };

  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const storage = getStorage(app);
  const db = getFirestore(app);
  console.log("pak");
  
     document.getElementById("btns").addEventListener("click", function(){
   var file = document.getElementById("inp").files[0];
    const storage = getStorage();
const storageRef = ref(storage, 'Adds');

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});

  })
