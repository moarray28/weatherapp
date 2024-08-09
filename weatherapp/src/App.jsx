import { useState ,useEffect} from 'react'
import './App.css'
import Loading from './components/Loading';
import Getdata from './components/Getdata';
import Navbar from './components/Navbar';


function App() {
   
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
   
  return (
    <>
      

   {/***  <Getdata/>*/} 
    <div className="">
      {loading ? (
        <Loading />
      ) : (  
        <div className=''> 
        <Navbar/>
        <Getdata/>
        
        </div>
         
      )}
    </div>

 
    
     
    </>

  )
}

export default App
