import { collection, query, where, getDocs } from "firebase/firestore";

async function View(db,setData,setView,uid){
    try{
    const q = query(collection(db, "Consistency"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    let array=[]
    querySnapshot.forEach((doc)=>{
        array.push(doc)
    })
    array.sort(function(a,b){
        return new Date(a.data().time) - new Date(b.data().time) ;
      });
    setData(array)
    setView(false)}
    catch (Error){
        console.log(Error)
    }
}

function Navbar({db,setData,setView,uid}){

    return(
        <div className="Navbar">
            <button className="Button" onClick={()=>setView(true)}>Add Entry</button>
            <button className="Button" onClick={()=>View(db,setData,setView,uid)}>View Entries</button>
        </div>
    )
}

export default Navbar;