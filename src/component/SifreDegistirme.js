import React, {useState, useEffect,} from 'react'
import {useNavigate} from 'react-router-dom';
import Sidebar from './Sidebar'
import axios from 'axios';



function SifreDegistirme() {

  const navigate = useNavigate();

  useEffect(() =>{
    var isLogin = sessionStorage.getItem("isLogin");
    if(isLogin == "false"){
      navigate("/");
    }
  })



  const [mevcutSifre , setMevcutSifre] = useState('');
  const [yeniSifre, setYeniSifre] = useState('');
  const [tekrarSifre, setTekrarSifre] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    if (yeniSifre !== tekrarSifre) {
      setError('Yeni şifreler eşleşmiyor.');
      return;
    }

    const id = sessionStorage.getItem('id');
    try {
      const response = await axios.post('http://localhost:3001/PasswordUpdate',
          {
              id,
              password : yeniSifre,
          }
      );
      if (response.status === 200) {    
          setSuccess('Şifre başarıyla güncellendi!');
      }
      else {
          setError(response.data.error);
      }
  }
  catch (err) {
      setError('An error occurred in the database connection.');
  }
}

  return (
    <div className='row'>
        <div className='col-3'>
            <Sidebar 
             sifre_active="active"
             sifre_disable="disabled"
             detay_to = '/anasayfa/BasvuruDetay'
             form_to = "/anasayfa/BasvuruFormu"
             iletisim_to ="/anasayfa/Iletisim"
            />
            
        </div>
        <div className='col-9'>

          <div className="sifre_container">
           
            <div className="sol">
               
            </div>
            <div className='sag'>
            <form onSubmit = {handleSubmit} className = "row justify-content-center" style={{backgroundColor : ''}}>
            <div className="row justify-content-center" style={{backgroundColor : "" , color: "black"}}>
                <div className="col-5">
               
                <i class="fa-solid fa-lock" style={{fontSize : '30px' }}></i>
                <h1 className="h3 mb-3 fw-normal  " style={{color: '#021e4a', marginTop: '20px', marginLeft : '10px'}}>ŞİFRE DEĞİŞİKLİĞİ</h1>

                <div className="form-floating ">
                    <input type="password" class="field" value={mevcutSifre}  style= {{marginTop: '30px'}}  onChange ={(e) => setMevcutSifre(e.target.value)} className="form-control" />
                    <label for="floatingPassword">Mevcut Şifrenizi Giriniz..</label> 
                </div>
                <div className="form-floating">
                    <input type="password" value={yeniSifre} class="field" style= {{marginTop: '30px',}} onChange ={(e) => setYeniSifre(e.target.value)} className="form-control"  />
                    <label for="floatingPassword">Şifre Giriniz</label> 
                </div>
                <div className="form-floating ">
                    <input type="password"  value={tekrarSifre} style= {{marginTop: '30px'}} onChange ={(e) => setTekrarSifre(e.target.value)} className="form-control"  />
                    <label for="floatingPassword">Tekrar Şifrenizi Giriniz</label>
                </div>
                </div>
                </div>
                <button type="submit" style={{ width :'80px', margin: '20px'}} class="btn btn-outline-danger">Gönder</button>
                {success && <p style={{color: 'green'}}> {success} </p>}
            </form>
            </div>
          
          </div>
        </div>
      
      </div>
          
       
    
   
    
  )
}

export default SifreDegistirme