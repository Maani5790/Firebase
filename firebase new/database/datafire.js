   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
  import { getFirestore,doc, setDoc,collection, addDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
  
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
  const db = getFirestore(app);

  const docRef = doc(db, "Information", "LA");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  
  

  await setDoc(doc(db, "cities", "LA"), {
    name: "Rehman",
    state: "Sindh",
    country: "Pakistan"
  });
  console.log("pakistan")

// const docRef = await addDoc(collection(db, "cities"), {
//     name: "Tokyo",
//     country: "Japan"
//   });
//   console.log("Document written with ID: ", docRef.id);

  