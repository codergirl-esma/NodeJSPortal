import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Giris from './Giris';
import Kayit from './Kayit';
import Anasayfa from './Anasayfa';
import BasvuruFormu from './component/BasvuruFormu';
import BasvuruGoruntule from './component/BasvuruGoruntule';
import SifreDegistirme from './component/SifreDegistirme';
import BasvuruGoruntulemeveGuncelleme from './component/BasvuruGoruntulemeveGuncelleme';
import Iletisim from './component/Iletisim';
import BasvuruGuncelle from './component/BasvuruGuncelle';

function App() {


  
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Giris />}/>
      <Route path='/kayit' element={<Kayit />}/>
      <Route path='/anasayfa' element={<Anasayfa />}/>
      <Route path='/anasayfa/BasvuruFormu' element={<BasvuruFormu />}/>
      <Route path='/anasayfa/BasvuruDetay' element={<BasvuruGoruntulemeveGuncelleme />}/>
      <Route path='/anasayfa/SifreDegistirme' element = {<SifreDegistirme/>} />
      <Route path='/anasayfa/Iletisim' element = {<Iletisim/>} />
      <Route path='/anasayfa/BasvuruGoster' element ={< BasvuruGoruntule/>}/>
      <Route path='/anasayfa/BasvuruGuncelle' element ={<BasvuruGuncelle/>}/>
    </Routes>
   </Router>
  );
}

export default App;
