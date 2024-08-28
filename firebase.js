// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq7wyg8akZT-vB_iIgP6AqHZ0cxOl2M3Q",
  authDomain: "flashcardsaas-52f43.firebaseapp.com",
  projectId: "flashcardsaas-52f43",
  storageBucket: "flashcardsaas-52f43.appspot.com",
  messagingSenderId: "114583786991",
  appId: "1:114583786991:web:b15996fce7ff79582fd21a",
  measurementId: "G-Z0LMH35KF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
      if (supported) {
          const analytics = getAnalytics();
      } else {
          console.log("Firebase Analytics is not supported in this environment.");
      }
  });
}
const db = getFirestore(app)

export {db}