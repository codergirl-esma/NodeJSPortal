import React from 'react'
import Sidebar from './Sidebar'
import iletisim from '../img/iletisim.jpg'
import { Footer } from '../Footer'
import { useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function Iletisim() {

    const navigate = useNavigate();

    useEffect(() =>{
        var isLogin = sessionStorage.getItem("isLogin");
        if(isLogin == "false"){
          navigate("/");
        }
      })


  return (
    <>
    <div className='row'>
    <div className='col-3'>
        <Sidebar 
        iletisim_active="active"
        iletisim_disable = "disabled"
        detay_to = '/anasayfa/BasvuruDetay'
        form_to = "/anasayfa/BasvuruFormu"
        sifre_to ="/anasayfa/SifreDegistirme"
        
        />
    </div>

    <div className='col-9'>

    <div className=''>
        <h2 style={{padding : '25px', backgroundColor : '#0c036b', color:'white'}}>İLETİŞİM</h2>
    </div>

        <div className='row'>
        <div className='col-6'>
        <div className="adress">
            <div className="centered">
            <div className="dt ad">
                <i className="fa-solid fa-location-dot p-3" style={{color: '#0c036b'}}></i> </div>
                <h6 style={{paddingLeft :'30px'}}>Cibali Mah. Kadir Has Cad. 34083 Fatih, İstanbul</h6> 
                <div className="dt ph p-3"><i className="fa-solid fa-phone" style={{color: '#0c036b'}} ></i></div>
                <h6 style={{paddingLeft :'30px'}}>+90 (212) 533 65 32</h6> 
                <div className="dt fx p-3"><i className="fa-solid fa-phone" style={{color: '#0c036b'}} ></i></div>
                <h6 style={{paddingLeft :'30px'}}>+90 (212) 631 91 50</h6> 
                <div className="dt ml p-3"><i className="fa-solid fa-square-envelope"  style={{color: '#0c036b'}}></i></div>
                <h6 style={{paddingLeft :'30px'}}>danisma@khas.edu.trkhas@hs01.kep.tr</h6>
                <div className="dt ml p-3"><i className="fa-solid fa-square-envelope"  style={{color: '#0c036b'}}></i></div> 
                <h6 style={{paddingLeft :'30px'}}>info@cybermacs.eu</h6>
                
                
            </div>
        </div>
        </div>

        <div className='col-6'>
            <img src={iletisim}  style={{width : '350px', height: '450px'}}/>
        </div>
   
        </div>
      

        <Footer />
    </div>
    </div>
    </>
  )
}

export default Iletisim