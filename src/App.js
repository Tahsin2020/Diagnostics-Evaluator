import { useState,useEffect } from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import SubmitForm from "./SubmitForm/SubmitForm";
import Navbar from "./Navbar/Navbar";
import Data_Table from "./Data_Table/Data_Table";

import './App.css';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYIZUWotMiaPxuzG3t1iHIVFHak7eOPgc",
  authDomain: "consistency-81cb2.firebaseapp.com",
  projectId: "consistency-81cb2",
  storageBucket: "consistency-81cb2.appspot.com",
  messagingSenderId: "325992491740",
  appId: "1:325992491740:web:7b473237b6a16ccda8e219",
  measurementId: "G-GWNQFG2GEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) signInWithPopup(auth, new GoogleAuthProvider())
  console.log(auth.currentUser.accessToken)
});

const db = getFirestore(app);

function App() {

  let colors =["#FFCCCB","red","orange","#F08080","yellow","#90EE90","green","#E0FFFF","#ADD8E6","purple"]
  
  useEffect(()=>{
    let ButtonList = document.getElementsByClassName("Buttons");
    for (let i = 0; i < ButtonList.length; i++) {
        ButtonList[i].style.backgroundColor=colors[i%10]
    }}, [])

  const [data,setData]= useState([])
  const [view,setView]= useState(true)

  return (<>
    <Navbar db={db} setData={setData} setView ={setView}/>
    {view ?
    <SubmitForm db={db}/>
    :
    <Data_Table data={data}/>}
    </>
  );
}

export default App;