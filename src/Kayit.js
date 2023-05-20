import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import resim from './img/Login.png';
import icon from './img/icon.png';

import visibleIcon from './img/visible-password.png';
import invisibleIcon from './img/visible-passwrod2.png';

const StyledLogin = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100vh; 

  .login-container{
    background-color : #02307a;    
    display : flex;
    width : 70%;
  }
  .sol{
    flex :1;
  }
  .sag{
    flex :2;
    padding : 15px;
    padding-top : 80px;

    form{
      .form-element {
        position : relative;
      }
      
      input{
        width :75%;
        border : none;
        border-bottom : 3px solid;
        font-size : 18px;
        ::placeholder {
          color : red;
        }
        
      }
    }
    .text{
      align-items : center;
    }
    .button{
      text-decoration: none;
      color: '#fff'
    }
  }
`;

function Kayit() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] =useState('');
    const [error ,setError] = useState('');
    const [success, setSuccess] = useState(''); 

    //Sifre goster
    const  [visiblePassword , setVisiblePassword] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(password != passRepeat){
          setError("Şifreler Eşleşmiyor.");
          return;
        }
        
        try{
          const response = await axios.post('http://localhost:3001/kayit', {
            email,
            password
          });
     

       if(response.status === 200){
        setEmail('');
        setPassword('');
        setPassRepeat('');
        setSuccess('Kayit olusturuldu! Giris Yapilabilir.');
        setTimeout(() =>{
          window.location.href ="/"
        },1000)
      }   
     else {
      setError('bir hata olustu..');
     } 

    } catch (err){
      setError("Kayit olusturulurken bir hata olustu");
    }

  }
  return (
    
    <StyledLogin>
    <div className='login-container'>
    <div className='sol'>
      <img  src={resim} alt ="Login"/>
    </div>
    <div className='sag'>
      <form onSubmit={handleSubmit}>
        <div className='form-elemet'>
          <input  placeholder='E-mail adresiniz ' type="email" value={email} onChange ={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className='form-elemet'>
        <input 
        placeholder='Parolanız ' value={password} onChange ={(e) => setPassword(e.target.value)} required
        type={visiblePassword ? 'text' : 'password'}  style={{marginTop : '25px' , marginBottom : '25px'}}/>

        {visiblePassword ? (<img onClick={() => setVisiblePassword(false)} src={invisibleIcon} alt ="visible-password" style={{height : '33px' , width : '30px'}}/>) 
        : (<img onClick={() => setVisiblePassword(true)} src={visibleIcon} alt ="visible-password" style={{height : '34px' , width : '30px'}} />) }

        </div>
        {/* Tekrar şifre */}
        <div className='form-elemet'>
        <input 
        placeholder='Parolayı tekrar giriniz. ' value={passRepeat} onChange ={(e) => setPassRepeat(e.target.value)} required
        type={visiblePassword ? 'text' : 'password'}  style={{marginTop : '25px' , marginBottom : '25px'}}/>

        {visiblePassword ? (<img onClick={() => setVisiblePassword(false)} src={invisibleIcon} alt ="visible-password" style={{height : '33px' , width : '30px'}}/>) 
        : (<img onClick={() => setVisiblePassword(true)} src={visibleIcon} alt ="visible-password" style={{height : '34px' , width : '30px'}} />) }

        </div>

        <div className='form-element form-element-submit'>
          <button ><img src={icon} style={{width : '40px', }} /></button>
        </div>
      </form>
      {error && <p style={{color :'red'}}> {error} </p>}
      {success && <p style={{color :'green'}}>{success}</p>}
      <div className='text'>
        <p style={{color : 'white', marginTop : '45px'}}>
            Hesabınız var mı? <button className='btn btn-light' ><Link to='/'>Giris Yap</Link></button> 
        </p>
      </div>
      
    </div>
  </div>


    </StyledLogin>
  )
}

export default Kayit;