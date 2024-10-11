
import './App.css'
 import Shivy from  "./shivy"

 import { useState , useEffect , useRef} from 'react';
function App() {
  let [count, setcount]= useState(0);
    const val = useRef(0);

     const addValue =()=>{
       count = count +1
       setcount(count);
         console.log(count);


     }
     



     const  removeValue=()=>{

      count = count -1;
      setcount(count);
     }

  const  nullValue =()=>{

    setcount(0);

  }
  useEffect(() => {
    console.log("useEffect triggered, count:", count);
    alert("hello");
  }, [count]);
  

  return (
   <>

    <Shivy/>

    <h2>Counter Value : {count}</h2>
    <button onClick={addValue} >Add   Value </button>
    <br>

    </br>
    <br>
    </br>
   
    <button onClick={removeValue}>Decrease Value </button>
    <br>

</br>
<br>
</br>


<button onClick={nullValue} > NULL VAUE </button>



   </>


  )
}  

  

  

export default App
