import React, { useEffect } from 'react'
import styled from 'styled-components';
import Sidebar from './component/Sidebar';
import { Footer } from './Footer';
import{useNavigate} from 'react-router-dom';
import resim from './img/anasayfa.jpg'
import axios from 'axios';

const StyledAnasayfa = styled.div`

`;


function Anasayfa() {

  const navigate = useNavigate();
  useEffect(() =>{
    var isLogin = sessionStorage.getItem("isLogin");
    if(isLogin == "false"){
      navigate("/");
    }
  })
  
 

  //  if(isLogin == "false"){
  //   navigate('/');
  //  }

  return (
    <>
      <StyledAnasayfa>

      <div className='row'>
            <div className='col-3'>
                <Sidebar 
                form_to = "BasvuruFormu"
                detay_to = "BasvuruDetay"
                sifre_to ="SifreDegistirme"
                iletisim_to ="Iletisim"
                />
            </div>
            <div className='col-9'>
                <h3 style={{marginTop: '50px'}}>2 Years, 2 Universities, 2 Degrees</h3>
                <p>CyberMACS is an Erasmus Mundus Joint/double Master’s Degree (EMJM) program in applied cyber security offered by a consortium of three highly ranked universities in Turkey, Germany, and North Macedonia. During the two-year MSc studies, students will study at two of the consortium universities and graduate from both. Our industry partners promote the future employability of CyberMACS students by offering internship, company visits, and contributions to the course contents. CyberMACS is one of the European top-quality Master Courses selected by the Erasmus+ Program (Erasmus Mundus)
        </p>

        <img src={resim} style={{width : '550px', height: '300px'}}/>

     

</div>

</div>
      </StyledAnasayfa>
       


               <Footer />
           
  </>
  )
}

export default Anasayfa