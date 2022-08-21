import { collection, getDocs } from "firebase/firestore"; 

async function View(db,setData,setView){
    const querySnapshot = await getDocs(collection(db, "Diagnostics"));
    let array=[]
    querySnapshot.forEach((doc)=>{
        let time = doc.data().time.split(/[\s:,\/]+/)
        array.push(doc)
    })
    array.sort(function(a,b){
        return new Date(a.data().time) - new Date(b.data().time) ;
      });
    console.log(array)
    setData(array)
    setView(false)
}

function Navbar({db,setData,setView}){

    return(
        <div className="Navbar">
            <button className="Button" onClick={()=>setView(true)}>Add Entry</button>
            <button className="Button" onClick={()=>View(db,setData,setView)}>View Entries</button>
        </div>
    )
}

export default Navbar;