import './TenButtons.css'

function OnClick(value,setParameter){
    setParameter(value)
}


function TenButtons({title,parameter,setParameter}) {
    const elements = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="App">    
    <h1>{title} {parameter}</h1>
    {elements.map((value, index) => {
      return <button 
        id={index}
        className="Buttons" 
        key={index}
        onClick={()=>OnClick(value,setParameter)}>{value}</button>
    })}
    </div>
  );
}

export default TenButtons;
