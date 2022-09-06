import { useState,useEffect } from 'react'
import { collection, addDoc } from "firebase/firestore";
import TenButtons from './TenButtons/TenButtons';

async function Submit(title,motivation,focus,joy,note,db,uid){
    try {
      const date = new Date();
  
      const pst = date.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
      });
  
      const docRef = await addDoc(collection(db, "Consistency"), {
        title: title,
        motivation: motivation,
        focus: focus,
        joy: joy,
        note: note,
        time: pst,
        uid:uid,
      });
      alert("You completed an Entry!");
    } catch (e) {
      alert("Error adding an Entry...");
    }
  }  

function SubmitForm({db,uid}){
    const [text,SetText] = useState('');
    const [motivation,SetMotivation] = useState(0);
    const [focus,SetFocus] = useState(0);
    const [joy,SetJoy] = useState(0);
    const [note,SetNote] = useState('');
  
    const handleChange = event => {
      SetText(event.target.value);
    };
  
    const handleChange2 = event => {
      SetNote(event.target.value);
    };

    let colors =["#FFCCCB","red","orange","#F08080","yellow","#90EE90","green","#E0FFFF","#ADD8E6","purple"]
  
    useEffect(()=>{
      let ButtonList = document.getElementsByClassName("Buttons");
      for (let i = 0; i < ButtonList.length; i++) {
          ButtonList[i].style.backgroundColor=colors[i%10]
      }})

    return  (  
    <div className="App">     
        <h1>What are you doing right now?</h1>
        <input type="text" name="Title" value={text} onChange={handleChange} />
        <TenButtons     
            title='Motivation'
            parameter={motivation}
            setParameter ={SetMotivation}
        />
        <TenButtons
            title='Focus'
            parameter={focus}
            setParameter ={SetFocus}
        />
        <TenButtons
            title='Joy'
            parameter={joy}
            setParameter ={SetJoy}
        />
        <h2>How are you feeling right now</h2>
        <input type="text" name="Note" value={note} onChange={handleChange2} />
        <button onClick={()=>{Submit(text,motivation,focus,joy,note,db,uid)}}>Submit</button>
    </div>)
}

export default SubmitForm;