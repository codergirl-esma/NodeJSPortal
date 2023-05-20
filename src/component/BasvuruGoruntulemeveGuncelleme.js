import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import BasvuruGoruntule from './BasvuruGoruntule';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function BasvuruGoruntulemeveGuncelleme() {


    const [bilgiAl , setBilgiAl] = useState('');
    const [error, setError] = useState('');

  const navigate = useNavigate();
    

 
  return (
    <div className='row'>
      <div className='col-3'>
      <Sidebar 
       detay_active="active"
       detay_disable="disabled"
       form_to ="/anasayfa/BasvuruFormu"
       sifre_to = "/anasayfa/SifreDegistirme"
       iletisim_to = "/anasayfa/Iletisim"
        />
      </div>
      {/* session bilgileri alıp okuyacak */}
      
 
        <div className='col-1'></div>
        <div className='col-8'>
            <i></i>
            <h3 style={{color : '#A01C00' , margin : '45px', paddingTop : '25px'}}>Yaptığınız başvuruyu <b>görüntülemek</b> istiyorsanız</h3>
          <Link to='/anasayfa/BasvuruGoster'><button  className='btn btn-secondary' style={{ width : "100px", height : '40px', marginLeft : '180px'}}>Görüntüle</button></Link>


            <h3 style={{color : '#A01C00' , margin : '45px', paddingTop : '25px'}}>Yaptığınız başvuruyu <b>güncellemek</b> istiyorsanız</h3>
           <Link to='/anasayfa/BasvuruGuncelle'><button  className='btn btn-danger' style={{ width : "100px", height : '40px', marginLeft : '180px'}}>Güncelle</button></Link> 
        </div>


    
    </div>

           
   
   
  )

}
export default BasvuruGoruntulemeveGuncelleme;