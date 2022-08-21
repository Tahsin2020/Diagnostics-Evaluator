import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import TenButtons from './TenButtons/TenButtons';

async function Submit(title,motivation,focus,joy,note,db){
    try {
      const date = new Date();
  
      const pst = date.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
      });
  
      const docRef = await addDoc(collection(db, "Diagnostics"), {
        title: title,
        motivation: motivation,
        focus: focus,
        joy: joy,
        note: note,
        time: pst
      });
      alert("You completed an Entry!");
    } catch (e) {
      alert("Error adding an Entry...");
    }
  }  

function SubmitForm({db}){
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
    return  (  
    <div className="App">     
        <h1>Title</h1>
        <select>
          <option value="project">Project</option>
          <option value="reading">Reading</option>
          <option value="reflection">Reflection</option>
        </select>
        <input type="text" name="Title" value={text} onChange={handleChange} />
        <TenButtons     
            title='motivation'
            parameter={motivation}
            setParameter ={SetMotivation}
        />
        <TenButtons
            title='focus'
            parameter={focus}
            setParameter ={SetFocus}
        />
        <TenButtons
            title='joy'
            parameter={joy}
            setParameter ={SetJoy}
        />
        <input type="text" name="Note" value={note} onChange={handleChange2} />
        <button onClick={()=>{Submit(text,motivation,focus,joy,note,db)}}>Submit</button>
    </div>)
}

export default SubmitForm;