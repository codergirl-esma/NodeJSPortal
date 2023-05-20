import Sidebar from './Sidebar'
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function BasvuruFormu() {

    const navigate = useNavigate();

    useEffect(() =>{
        var isLogin = sessionStorage.getItem("isLogin");
        if(isLogin == "false"){
          navigate("/");
        }
      })

    const [isim,setIsim] = useState("");
    const [soyisim, setSoyisim] = useState("");
    const [passNo , setPassNo] = useState("");
    const [cinsiyet, setCinsiyet] = useState("");
    const [dogumTarihi, setDogumTarihi] = useState("");
    const [milliyet, setMilliyet] = useState("");
    const [milliyet2, setMilliyet2] =useState("");
    const [email,setEmail] = useState("");
    const [telBilgi, setTelBilgi] = useState("");
    const [ulke , setUlke] = useState(""); 
    const [sehir , setSehir] = useState(""); 
    const [semt , setSemt] = useState(""); 
    const [zipCode , setZipCode] = useState(""); 
    const [adress , setAdress] = useState(""); 
    const [universite, setUniversite] = useState("");
    const [depart, setDepart] = useState("");
    const [ort, setOrt] = useState("");
    const [egitim, setEgitim] = useState("");
    const [durum, setDurum] = useState("");
    const [tarih, setTarih] = useState("");
    const [engelDurum, setEngelDurum] = useState("");
    const [aciklama, setAciklama] = useState("");
    const [cv, setCv]= useState("");
    const [niyetMektubu, setNiyetMektubu]= useState("");
    const [pasaport, setPasaport]= useState("");
    const [ikametgah, setIkametgah]= useState("");
    const [diploma, setDiploma]= useState("");
    const [ingilizceYeterlilik, setIngilizceYeterlilik] = useState("");
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const id = sessionStorage.getItem('id');


  const hundleSubmit = async (e)=>{
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3001/formGonder', {
            id,isim, soyisim, passNo, cinsiyet, dogumTarihi, milliyet, milliyet2,  email,telBilgi, ulke, sehir, semt, zipCode, adress, universite, depart,
            ort,egitim, durum, tarih, engelDurum, aciklama, cv, niyetMektubu, pasaport, ikametgah, diploma, ingilizceYeterlilik
        });
        console.log(response);
        if (response.status === 200) {
          setSuccess('Basvuru Gönderildi');
          
        } else {
           setError(response.data.error);
        }
  
      } catch (err) {
        setError("Veritabani baglantisinda hata olustu. ", err);
      }

      



    let clickBtn = document.getElementById('clickBtn');
    clickBtn.addEventListener("click", function(){
        Swal.fire({
        icon: 'success',
        title: 'TEBRİKLER!  BAŞVURUNUZ TAMAMLANDI',
        footer: '<a href="BasvuruDetay">Başvuru detaylarını görmek için detay sayfasına gidiniz.</a>',
        timer : 4000,
        toast : true,
        timerProgressBar : true
                })
    });

 

       console.log("Bilgiler session'da gözüküyor.");

    
    
}
  
  return (
   <div className='row'>
    <div className='col-3'>
      <Sidebar  
      form_active="active"
      form_disable="disabled"
      detay_to = '/anasayfa/BasvuruDetay'
      sifre_to = '/anasayfa/SifreDegistirme'
      iletisim_to = '/anasayfa/Iletisim'
      />
    </div>
    <div className='col-9'style={{width : '50%', marginLeft:'450px'}}>

    <form className="rowg-3 needs-validation"  name="deneme" onSubmit ={hundleSubmit} >
        

                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center" style={{color:"darkblue", marginTop : '10px'}}>ERASMUS BAŞVURU FORMU</h2>
                          
                        </div>
                    </div>

                    <h3 style={{marginTop: '20px'}}>Öğrenci Bilgileri</h3>

                    <div className="row pt-xl-3" >
                        <div className="col-5">
                            <div className="row g-2 ">
                                 <div className="col-auto">
                                   <label for="inputIsım" name="username" className="col-form-label" >İsim :</label>
                                </div>
                                   <div className="col-auto">
                                    <input type="text" value={isim}  onChange= {(e) => setIsim(e.target.value)} class="form-control" required />
                                </div>
                            </div>
                        </div>

                        <div className="col-5">

                            <div className="row g-2 ">
                                <div className="col-auto ms-5">
                                    <label for="inputSoyisim" name="surname" className="col-form-label">Soyisim :</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" value={soyisim} onChange= {(e) => setSoyisim(e.target.value)} className="form-control" required />
                                </div>
                            </div>
                        </div>

                        
                            <div className="col-4 mt-3">
                                <label for="idNo" className="form-label">Tc No / Pasaport No : </label>
                                <input type="text" className="form-control" value={passNo} onChange= {(e) => setPassNo(e.target.value)}  maxlength="11" minlength="7" required id="idNo" placeholder="TcNo / PassNo" />
                          
                            </div>
                        
                        <div class="col-4 mt-3">
                          
                            <span className="col-form-label">Cinsiyet:</span>
                        <select className="form-select form-select-m mb-3" defaultValue={cinsiyet} onChange={(e) => setCinsiyet(e.target.value)}>
                            <option value="">Seçiminiz :</option>
                            <option value="Kadın">Kadın</option>
                            <option value="Erkek">Erkek</option>
                        </select>
                        </div>



                        <div className="col-4 mt-3">
                            
                            <span className="col-form-label">Doğum Tarihi:</span>
                            <input type="date" class="form-control" required value={dogumTarihi} onChange= {(e) => setDogumTarihi(e.target.value)}/>
                        </div>

                        
                        <div className="col-6 mt-3">
                            <div className="row g-2 align-items-center">
                                <div className="col-auto">
                                    <label for="MilliyetBilgi" className="form-label">1. Milliyet: </label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" className="form-control" value={milliyet} onChange= {(e) => setMilliyet(e.target.value)} required  />
                                </div>
                            </div>
                            
                      </div>

                     <div className="col-6 mt-3">

                        <div className="row g-2 align-items-center">
                            <div className="col-auto ms-5">
                                <label for="ikinciMilliyet" class="form-label">2. Milliyet : </label>
                            </div>
                            <div className="col-auto">
                                <input type="text" value={milliyet2} onChange= {(e) => setMilliyet2(e.target.value)} className="form-control" />
                            </div>
                        </div>

                  </div>

                    </div>

                    <hr />
                       
                    <h3>İletişim Bilgileri</h3>

                    <div className="row  pt-2">

                        <div className="col-8">
                                    <label for="emailadress" className="form-label">E - Mail : </label>
                                    
                                    <input type="email" className="form-control form-control-plaintext" name="emailadress" value={email}onChange= {(e) => setEmail(e.target.value)} required placeholder="E-mail adresinizi giriniz.." onkeyup="Validation()" />
                                    <i className="fa"></i>
                                
                                <p id="Text">...</p>
                        </div>

                        <div className="col-4">
                            
                            <label for="TelBilgi" className="form-label">Telefon No : </label>
                       
                            <input type="text" className="form-control" maxlength="10" value={telBilgi} onChange= {(e) => setTelBilgi(e.target.value)} placeholder="5XXXXXXXXX" />
                            
                        </div>

                            <div className="col-3 mt-3">
                           
                                <label for="inputUlke" className="form-label">Ülke : </label>
                                <input type="text" className="form-control" value={ulke} onChange= {(e) => setUlke(e.target.value)} />
                              </div>

                              <div className="col-3 mt-3">
                                
                                <label for="inputSehir" className="form-label">Şehir : </label>
                                <input type="text" className="form-control" value={sehir} onChange= {(e) => setSehir(e.target.value)} />
                              </div>
                              <div class="col-3 mt-3">
                               
                                <label for="inputSemt" className="form-label">Semt : </label>
                                <input type="text" className="form-control" value={semt} onChange= {(e) => setSemt(e.target.value)}/>
                              </div>
                              <div class="col-3 mt-3">
                               
                                <label for="inputZip" className="form-label">Zip Kodu :</label>
                                <input type="number" className="form-control" value={zipCode} onChange= {(e) => setZipCode(e.target.value)} />
                              </div>
                            
                              <div className="col-12">
                                <label for="inputAdres" className="form-label">Adres : </label>
                                <input type="text" className="form-control" value={adress} onChange= {(e) => setAdress(e.target.value)} placeholder="Atatürk cad. bentler sok. Şirinevler mah" />
                              </div>
                             
                    </div>
                    <hr />
                  
                    <h3>Eğitim Bilgileri</h3>
                    <div className="row ">
                        <div className="col-6">
                            
                            <div className="row g-2 align-items-center pt-2">
                                <div className="col-auto">
                                   <label for="universite" className="col-form-label" >Üniversite :</label>
                                </div>
                                <div className="col-auto m-2">
                                    <input type="text" value={universite} onChange= {(e) => setUniversite(e.target.value)} className="form-control" required />
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="row g-2 pt-2">
                                <div className="col-auto">
                                    <label for="depart" className="col-form-label">Departman :</label>
                                </div>
                                <div className="col-auto m-2">
                                    <input type="text" value={depart} onChange= {(e) => setDepart(e.target.value)} class="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                             <label for="inputOrtalama" className="col-form-label">GPA :</label>
                             
                             <input type="number" value={ort} onChange= {(e) => setOrt(e.target.value)} className="form-control" />
                           
                        </div>

                        <div className="col-6 mt-3">
                            <span className="col-form-label">Mezuniyet Durumu:</span>
                        <select className="form-select form-select-m mb-3" defaultValue={egitim} onChange= {(e) => setEgitim(e.target.value)}>
                            <option value="">Seçiminiz :</option>
                            <option value="Ön lisans">Ön Lisans</option>
                            <option value="Lisans">Lisans</option>
                            <option value="Yüksek Lisans">Yüksek Lisans</option>
                            <option value="Doktora">Doktora</option>
                        </select>
                        </div>

                        <div className="col-6">
                            <span className="col-form-label">Okul Durumu : </span>
                            <select className="form-select form-select-m mb-3" defaultValue={durum} onChange= {(e) => setDurum(e.target.value)}>
                            <option value="">Seçiminiz :</option>
                            <option value="Mezun Oldu">Mezun Oldu</option>
                            <option value="Okula DEvam Ediyor">Okula Devam Ediyor</option>
                        </select>
                        </div>


                        <div class="col-6">
                                    <span class="col-form-label">Mezun Tarihi :</span>
                               
                                    <input type="date" class="form-control" value={tarih} onChange= {(e) => setTarih(e.target.value)}/>
                              
                            </div>
                       
                    </div>
                    <hr />

                    <h3>Engel Durumuna İlişkin Bilgiler</h3>

                    <div class="row">
                    <div className="col-5">
                            <span className="col-form-label">Engel Durumu : </span>
                            <select className="form-select form-select-m mb-3" defaultValue={engelDurum} onChange={(e)=> setEngelDurum(e.target.value)} >
                            <option value="">Seçiminiz :</option>
                            <option value="var">var</option>
                            <option value="yok">yok</option>
                        </select>
                        </div>
                    
                            <div class="col-6">
                    
                    <label for="aciklama" class="col-form-label"  >Açıklama: </label>
                    <textarea class ='form-control' rows="3" value={aciklama} onChange={(e) => setAciklama(e.target.value)}></textarea>
                </div> 
                       
                
                
                
            </div>
           
            <hr />

            <h3>Dosya Bilgileri</h3>
            <div class="row">
                <div class="col-12">
                   
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupFile01"> <h5>Cv</h5></label>
                        <input type="file" class="form-control" value={cv} onChange= {(e) => setCv(e.target.value)} />
                      </div>
                </div>

                <div class="col-12">
                   
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupFile02"> <h5>Niyet Mektubu</h5></label>
                        <input type="file" class="form-control" value={niyetMektubu} onChange= {(e) => setNiyetMektubu(e.target.value)}/>
                      </div>
                </div>

                <div class="col-12">
                   
                      <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupFile03"> <h5>Passaport</h5></label>
                        <input type="file" class="form-control" value={pasaport}  onChange= {(e) => setPasaport(e.target.value)}/>
                      </div>
                </div>

                <div class="col-12">
                   
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupFile04"> <h5>İkametgah</h5></label>
                        <input type="file" class="form-control" value={ikametgah} onChange= {(e) => setIkametgah(e.target.value)} />
                      </div>
                </div>

                <div class="col-12">
                   
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupFile05"> <h5>Diploma</h5></label>
                        <input type="file" class="form-control" value={diploma} onChange= {(e) => setDiploma(e.target.value)} />
                      </div>
                </div>

                <div class="col-12">
                   
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupFile06"> <h5>İngilizce Yeterlilik Belgesi</h5></label>
                        <input type="file" class="form-control" value={ingilizceYeterlilik} onChange= {(e) => setIngilizceYeterlilik(e.target.value)} />
                      </div>
                </div>

            </div>

                <div class="row mt-5">
                    <div class="col-12 ">
                        <div class="d-flex justify-content-center">
                        <button class="btn btn-info" id='clickBtn' type="submit" >Başvuruyu bitir</button>
                        <input class="btn btn-light" type="reset" value="Bilgileri sil"  name="formu_sifirla" />
                       
                        </div>
                        
                    </div>
                    </div>
              
      </form>
      </div>
     </div>   
    
  );
}



export default BasvuruFormu