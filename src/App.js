import React, {useState,useEffect} from "react";
import { onSnapshot, collection, addDoc, serverTimestamp, orderBy, query  } from '@firebase/firestore'
import db from "./firebase/firebase";
import Display from './Display'
import { HexColorPicker } from "react-colorful";

function App() {

  const [message, setMessage] = useState('');
  const [display, setDisplay] = useState([]);
  const [color, setColor] = useState('#aabbcc');
  useEffect(() => {
    const collectionRef = collection(db, 'messages');
    const q = query(collectionRef, orderBy('timestamp', 'desc'));

    const unsub= onSnapshot(q, (snapshot) => {
      setDisplay(snapshot.docs.map((doc) => doc.data()));
    } )
    return unsub;
  }, []);

  const handleSearch = (e) => {
    setMessage(e.target.value)
  }

  const  getContrastYIQ =(hexcolor) => {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const collectionRef = collection(db, 'messages');
    const payload = { value: message , color:color,  timestamp:serverTimestamp() };
    await addDoc(collectionRef, payload,);
  }
  return <div className="App">
    <nav className='p-5 bg-black text-white'>
      <p className='text-2xl'>Message Wall</p>
      <p className='text-sm'>by <a href="https://github.com/giamnesia" className='text-indigo-400'>giamnesia</a> </p>
    </nav>
    
    <form onSubmit={handleSubmit} className='flex flex-col flex-wrap items-center justify-center mt-3'>
      <div className='flex flex-row flex-wrap justify-center items-center '>
      <textarea type="text" rows='8' cols='30'
        className=' p-2 m-2 rounded-md border-2'
        required maxlength='150' placeholder='Place your message here (200 characters)'
        style={{resize:'none', backgroundColor:`${color}`, color:`${getContrastYIQ(color)}`}}
        onChange={handleSearch}
          value={message} />
      <HexColorPicker  color={color} onChange={setColor} />
       </div>
      <button className='p-2 m-2 w-60 rounded-md text-white bg-indigo-600' type='submit'>Submit</button>
    </form>

    <div className='flex flex-row flex-wrap items-center justify-center'>
      {display.map((item) => (
      <>
          <Display value={item.value} color={item.color}  />
        </>
      ))}
      </div>
      
  </div>;
}

export default App;
