
import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/newnav';
import Maincomponent from './components/home/Maincomponent';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_sign/Sign_in';
import SignUp from './components/signup_sign/SignUp';
import { Routes,Route } from 'react-router-dom';





function App() {
  return (
    <>
    <Navbaar/>
    <Newnav/>
    <Routes>
      <Route path='/' element={<Maincomponent/>} />
      <Route path='/login' element={<Sign_in/>} />
      <Route path='/registered' element={<SignUp/>} />
    </Routes>
    
    <Footer/>
    
  

    </>
  );
}

export default App;
