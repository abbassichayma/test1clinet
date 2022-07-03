import { ChakraProvider, tokenToCSSVar } from '@chakra-ui/react'
import logo from './logo.svg';
import './App.css';
import CustumNavbar from './components/CustumNavbar/CustumNavbar'
import Actualités from './components/Profiles/user/Actualités/Actualités';
import ActualitésDetails from './components/Profiles/user/Actualités/ActualitésDetails'
import Politique from './components/Profiles/user/Politique/Politique';
import PolitiqueDetails from './components/Profiles/user/Politique/PolitiqueDetails';
import Economie from './components/Profiles/user/Economie/Economie';
import EconomieDetails from './components/Profiles/user/Economie/EconomieDetails';
import CultureDetails from './components/Profiles/user/Culture/CultureDetails';
import Culture from './components/Profiles/user/Culture/culture';
import Sport from './components/Profiles/user/Sport/Sport';
import SportDetails from './components/Profiles/user/Sport/SportDetails';
import Art from './components/Profiles/user/Art/Art';
import ArtDetails from './components/Profiles/user/Art/ArtDetails';
import {Routes,Route, useNavigate} from 'react-router-dom';
import Login from './components/Login/Login';
import Publication from './components/Profiles/user/Publication/Publication';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from './components/redux/Action';
import AdminPage from './components/Profiles/admin/AdminPage';
import GestionnairePgae from './components/Profiles/gestionnaire/GestionnairePage';

function App() {
  const navigate = useNavigate()
 const dispatch=useDispatch()
 const token = localStorage.getItem('token')
 useEffect(() => {
  dispatch(currentUser(token,navigate)) 

 }, [])
 
  return (
    <ChakraProvider>
    <div className="App">
      <br></br>
     <CustumNavbar/>
     {/* {token && <Publication/>} */}
     <br></br>
     <Routes>
      <Route index element={<Actualités/>}/>
      <Route path='/:id' element={<ActualitésDetails/>}/>
      <Route path='/Politique' element={<Politique/>}/>
      <Route path='/Politique/:id' element={<PolitiqueDetails/>}/>
      <Route path='/Economie' element={<Economie/>}/>
      <Route path='/Economie/:id' element={<EconomieDetails/>}/>
      <Route path='/Culture' element={<Culture/>}/>
      <Route path='/Culture/:id' element={<CultureDetails/>}/>
      <Route path='/Sport' element={<Sport/>}/>
      <Route path='/Sport/:id' element={<SportDetails/>}/>
      <Route path='/Art' element={<Art/>}/>
      <Route path='/Art/:id' element={<ArtDetails/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/gestionnaire' element={<GestionnairePgae/>}/>
      <Route path='/publication' element={<Publication/>}/>
     
     </Routes>
    </div>
    </ChakraProvider>
  );
}

export default App;

