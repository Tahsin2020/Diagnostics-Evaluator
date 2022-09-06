import { useState } from 'react'
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import app  from './Firebase/firebase'
import SubmitForm from "./SubmitForm/SubmitForm";
import Navbar from "./Navbar/Navbar";
import Data_Table from "./Data_Table/Data_Table";

import './App.css';

const analytics = getAnalytics(app);

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    signInWithPopup(auth, new GoogleAuthProvider())
  }
});

const db = getFirestore(app);

function App() {

  const [data,setData]= useState([])
  const [view,setView]= useState(true);
  const [uid,setUid]= useState(undefined);

  return (
    !uid ?
    <div className='Consent' >
      <p className='Form'> 
        Daily Wellbeing Tracker - Leaning more about yourself
        <br/>
        Log in through Google in the Pop up that appears. If you have pop-ups disabled, please allow them for this website. Then Click the button below.
        <br/><br/>
        Have fun logging your condition as you work!
      </p>
      <button  onClick={()=>{if(auth.currentUser!==undefined)setUid(auth.currentUser.uid)}}>
        After you sign in, Press this button.
      </button>
    </div>
      :
    <>
      <Navbar db={db} setData={setData} setView ={setView} uid={uid}/>
      {
      view ?
      <SubmitForm db={db} uid={uid}/>
      :
      <Data_Table data={data}/>
      }
      <br/>
    </>
  );
}
export default App;