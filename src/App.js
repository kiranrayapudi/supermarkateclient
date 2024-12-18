
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css';
  
import Header from './Components/Header/Header';
import Routing from './Routing';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div >
     <Header/>
     <Routing/>
     <Footer/>
      
      
    </div>
  );
}

export default App;
