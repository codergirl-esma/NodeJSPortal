import React from 'react'
import styled from 'styled-components';

import resim from '../img/kare.jpg'
import axios from 'axios';
import {Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

const StyledSidebar =  styled.div
`
.side_nav{
    position: fixed;
    width: 250px;
    height: 100%;
    background-color: #f5f5f5;
}

`;


function Sidebar(props){
  

  const navigate = useNavigate();

    const logout = async () =>{

   
      const id = sessionStorage.getItem("id");

      try{
  
        const response = await axios.post('http://localhost:3001/logout',
            {id}
        );

        if(response.status === 200){
          navigate('/');
        }else{
            alert("Şu an cikisinizi yapamiyoruz.");
        }
  
  
      }catch(err){
          console.error(err);
      }

    }
    


    return(

        <StyledSidebar>
        <div className='conatiner'>
            <div className='row'>
                <div className='col-3'>
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-info-subtle side_nav">
                    
                    
                  <img src ={resim} />  
                  {/* <span className="fs-4">ERASMUS + DEĞİŞİM PROGRAMI</span> */}
                  <br />
                  <div id="bilgi" style ={{color: 'red'}}></div>
             
             <hr />
             <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
               {/* <a href="#" class="nav-link active" aria-current="page">
 
            Anasayfa
           </a> */}
            </li>
           <li>
           <Link className={`nav-link ${props.form_active} ${props.form_disable}`} aria-current="page" to={`${props.form_to}`}>BAŞVURU YAP</Link>
          </li>
            <li>
            <Link style={{textDecoration : 'none'}} className={`nav-link ${props.detay_active} ${props.detay_disable}`} aria-current="page" to={`${props.detay_to}`}>BAŞVURU DETAYLARI</Link>
         </li>
         <li>
            <Link  style={{textDecoration : 'none'}} className={`nav-link ${props.sifre_active} ${props.sifre_disable}`} to={`${props.sifre_to}`}>ŞİFRE DEĞİŞTİRME</Link>
         </li>
         <li>
            <Link  style={{textDecoration : 'none'}} className={`nav-link ${props.iletisim_active} ${props.iletisim_disable}`} to={`${props.iletisim_to}`}>İLETİŞİM</Link>
         </li>
              </ul>
             
           <hr />
            <button id='logout' type='button' className='btn btn-danger' onClick={() => logout(navigate)}>Çıkış Yap</button>
            </div>

                </div>
                
               
            </div>
        </div>
   
    </StyledSidebar>
    );
}



export default Sidebar;