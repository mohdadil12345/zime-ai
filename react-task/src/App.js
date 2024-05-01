
import './App.css';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div >
      <Navbar/>
      <AllRoutes/>

         <Footer/>
         <Toaster/>
   



    </div>
  );
}

export default App;
